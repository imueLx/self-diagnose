"use client";
import { useState, useEffect, useMemo } from "react";
import { symptomCatalog, conditions } from "../../data/symptomsData";
import {
  buildSymptomIndex,
  searchSymptoms,
  getTriage,
  scoreConditions,
} from "../../lib/assessment";
import { useRouter } from "next/navigation";
import { FaSearch, FaPlus, FaSpinner, FaGlobe, FaTimes } from "react-icons/fa";

const translations = {
  en: {
    title: "Symptom Checker",
    description:
      "Select symptoms to explore possible related conditions. This tool provides guidance only and is not a diagnostic tool.",
    enterSymptom: "Enter a symptom",
    possibleConditions: "Possible related conditions",
    selectedSymptoms: "Selected Symptoms",
    matches: "Signals matched",
    triageTitle: "Triage guidance",
    triageQuestions: "Quick red-flag questions",
    followUpTitle: "Quick follow-up questions",
    followUpHint: "Answering these can refine the guidance.",
    disclaimer: "Not a diagnostic tool. Not for emergencies.",
    emergencyHelp:
      "Seek emergency help for potentially life-threatening symptoms.",
  },
  tl: {
    title: "Tagasuri ng Sintomas",
    description:
      "Pumili ng mga sintomas upang makita ang posibleng kaugnay na kondisyon. Gabay lamang ito at hindi diagnostic tool.",
    enterSymptom: "Ilagay ang isang sintomas",
    possibleConditions: "Posibleng kaugnay na kondisyon",
    selectedSymptoms: "Napiling Sintomas",
    matches: "Mga tugmang senyales",
    triageTitle: "Gabay sa triage",
    triageQuestions: "Mabilis na red-flag na tanong",
    followUpTitle: "Mabilis na follow-up na tanong",
    followUpHint: "Makakatulong ito para mas malinaw ang gabay.",
    disclaimer: "Hindi ito diagnostic tool. Hindi ito para sa emergency.",
    emergencyHelp:
      "Humingi ng emergency na tulong para sa mga sintomas na maaaring magbanta sa buhay.",
  },
};

export default function SymptomChecker() {
  const [hydrated, setHydrated] = useState(false);
  const [input, setInput] = useState("");
  const [selectedSymptomIds, setSelectedSymptomIds] = useState([]);
  const [triageAnswers, setTriageAnswers] = useState({});
  const [followUpAnswers, setFollowUpAnswers] = useState({});
  const [language, setLanguage] = useState("en");
  const router = useRouter();

  useEffect(() => {
    setHydrated(true);
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("language") || "en";
      setLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem("language", language);
    }
  }, [language, hydrated]);

  const t = translations[language];
  const changeLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "tl" : "en"));
    setSelectedSymptomIds([]);
    setTriageAnswers({});
    setFollowUpAnswers({});
    setInput("");
  };

  const symptomIndex = useMemo(
    () => buildSymptomIndex(symptomCatalog),
    [symptomCatalog],
  );

  const symptomsById = useMemo(() => {
    const map = new Map();
    symptomCatalog.forEach((symptom) => map.set(symptom.id, symptom));
    return map;
  }, [symptomCatalog]);

  const conditionsById = useMemo(() => {
    const map = new Map();
    conditions.forEach((condition) => map.set(condition.id, condition));
    return map;
  }, [conditions]);

  const filteredSymptoms = useMemo(() => {
    const results = searchSymptoms({
      query: input,
      language,
      symptomCatalog,
      index: symptomIndex,
      selectedSymptomIds,
    });

    return results.sort((a, b) =>
      a.label[language].localeCompare(b.label[language], language),
    );
  }, [input, language, selectedSymptomIds, symptomIndex, symptomCatalog]);

  const triage = useMemo(
    () => getTriage({ selectedSymptomIds, triageAnswers }),
    [selectedSymptomIds, triageAnswers],
  );

  const matchedConditions = useMemo(() => {
    if (selectedSymptomIds.length === 0) {
      return [];
    }

    const scored = scoreConditions({
      selectedSymptomIds,
      conditions,
      symptomCatalog,
    });
    return scored
      .filter((result) => result.matchedCount > 0)
      .map((result) => {
        const condition = conditionsById.get(result.conditionId);
        return {
          ...result,
          condition,
        };
      })
      .filter((result) => result.condition);
  }, [selectedSymptomIds, conditions, conditionsById, symptomCatalog]);

  const followUpCandidates = useMemo(() => {
    if (matchedConditions.length === 0) {
      return [];
    }

    const topConditions = matchedConditions.slice(0, 2);
    const candidates = [];

    topConditions.forEach(({ condition }) => {
      condition.evidence.forEach((item) => {
        if (item.required || item.weight >= 4) {
          candidates.push(item.symptomId);
        }
      });
    });

    return Array.from(new Set(candidates)).slice(0, 3);
  }, [matchedConditions, selectedSymptomIds]);

  const followUpSymptomIds = useMemo(
    () =>
      followUpCandidates.filter(
        (symptomId) =>
          !selectedSymptomIds.includes(symptomId) &&
          !followUpAnswers.hasOwnProperty(symptomId),
      ),
    [followUpCandidates, selectedSymptomIds, followUpAnswers],
  );

  useEffect(() => {
    setFollowUpAnswers((prev) => {
      const next = {};
      followUpCandidates.forEach((symptomId) => {
        if (prev.hasOwnProperty(symptomId)) {
          next[symptomId] = prev[symptomId];
        }
      });
      return next;
    });
  }, [followUpCandidates]);

  useEffect(() => {
    if (!selectedSymptomIds.includes("chest_pain")) {
      setTriageAnswers({});
    }
  }, [selectedSymptomIds]);

  const addSymptom = (symptomId) => {
    const symptom = symptomsById.get(symptomId);
    if (!symptom || symptom.selectable === false) {
      return;
    }
    setSelectedSymptomIds((prev) =>
      prev.includes(symptomId) ? prev : [...prev, symptomId],
    );
    setInput("");
  };

  const removeSymptom = (symptomId) => {
    setSelectedSymptomIds((prev) => prev.filter((id) => id !== symptomId));
  };

  const answerTriage = (questionId, value) => {
    setTriageAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const answerFollowUp = (symptomId, value) => {
    setFollowUpAnswers((prev) => ({
      ...prev,
      [symptomId]: value,
    }));
    if (value) {
      addSymptom(symptomId);
    }
  };

  if (!hydrated) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <FaSpinner className="animate-spin text-4xl text-teal-500" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <section className="glass-panel rounded-3xl p-6 shadow-xl shadow-teal-500/10 dark:shadow-none">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Assessment Tool
            </p>
            <h1 className="font-display text-3xl font-semibold text-slate-900 dark:text-white">
              {t.title}
            </h1>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {t.description}
            </p>
          </div>
          <button
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            onClick={changeLanguage}
          >
            <FaGlobe className="text-base" />
            {language === "en" ? "Switch to Tagalog" : "Switch to English"}
          </button>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
        <div className="relative">
          <input
            type="text"
            className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 pr-10 text-sm text-slate-700 shadow-sm focus:border-teal-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
            placeholder={t.enterSymptom}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <FaSearch className="absolute right-4 top-3.5 text-slate-400" />
        </div>

        {filteredSymptoms.length > 0 && (
          <div className="mt-3 max-h-40 overflow-y-auto rounded-2xl border border-slate-200 bg-white/80 text-sm dark:border-slate-700 dark:bg-slate-900/70">
            {filteredSymptoms.map((symptom) => (
              <button
                key={symptom.id}
                className="flex w-full items-center justify-between px-4 py-2 text-left text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                onClick={() => addSymptom(symptom.id)}
              >
                {symptom.label[language]} <FaPlus className="text-teal-600" />
              </button>
            ))}
          </div>
        )}

        <div className="mt-5">
          <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-200">
            {t.selectedSymptoms}
          </h2>
          <div className="mt-2 flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-slate-50/80 p-2 dark:border-slate-800 dark:bg-slate-900/60">
            {selectedSymptomIds.length === 0 && (
              <span className="px-2 py-1 text-xs text-slate-500 dark:text-slate-400">
                {language === "en" ? "None selected" : "Walang napili"}
              </span>
            )}
            {selectedSymptomIds.map((symptomId) => {
              const symptom = symptomsById.get(symptomId);
              if (!symptom) {
                return null;
              }
              return (
                <span
                  key={symptomId}
                  className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm dark:border-teal-800/60 dark:bg-slate-900 dark:text-slate-100"
                >
                  {symptom.label[language]}
                  <button
                    type="button"
                    className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-teal-600 text-white transition hover:bg-teal-700"
                    aria-label={`Remove ${symptom.label[language]}`}
                    onClick={() => removeSymptom(symptomId)}
                  >
                    <FaTimes className="text-[10px]" />
                  </button>
                </span>
              );
            })}
          </div>
        </div>

        <div className="mt-6 space-y-4">
          {triage.level !== "routine" && (
            <div
              className={`rounded-2xl border p-4 text-sm shadow-sm ${
                triage.level === "emergency"
                  ? "border-rose-300 bg-rose-50 text-rose-900 shadow-rose-200/60 ring-2 ring-rose-300/70 dark:border-rose-700 dark:bg-rose-950/70 dark:text-rose-100 dark:ring-rose-600/60"
                  : "border-amber-200 bg-amber-50 text-amber-900 shadow-amber-200/60 ring-1 ring-amber-200/70 dark:border-amber-900/60 dark:bg-amber-950/60 dark:text-amber-200 dark:ring-amber-800/60"
              }`}
            >
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-xs uppercase tracking-[0.2em]">
                  {t.triageTitle}
                </p>
                {triage.level === "emergency" && (
                  <span className="rounded-full bg-rose-600 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                    Emergency
                  </span>
                )}
              </div>
              <p className="mt-2 font-semibold">{triage.message[language]}</p>
              {triage.showQuestions && (
                <div className="mt-4 space-y-3">
                  <p className="text-xs uppercase tracking-[0.2em]">
                    {t.triageQuestions}
                  </p>
                  {triage.questions.map((question) => (
                    <div
                      key={question.id}
                      className={`flex flex-col gap-2 rounded-2xl border p-3 text-sm ${
                        triage.level === "emergency"
                          ? "border-rose-200/70 bg-white/80 dark:border-rose-900/50 dark:bg-slate-900/70"
                          : "border-amber-200/60 bg-white/70 dark:border-amber-900/40 dark:bg-slate-900/70"
                      }`}
                    >
                      <span>{question.text[language]}</span>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          className={`rounded-full px-4 py-1 text-xs font-semibold transition ${
                            triageAnswers[question.id] === true
                              ? "bg-rose-600 text-white shadow-md shadow-rose-500/40 ring-2 ring-rose-300/80"
                              : "bg-white text-slate-700 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-200"
                          }`}
                          onClick={() => answerTriage(question.id, true)}
                        >
                          Yes
                        </button>
                        <button
                          type="button"
                          className={`rounded-full px-4 py-1 text-xs font-semibold transition ${
                            triageAnswers[question.id] === false
                              ? "bg-slate-900 text-white shadow-md shadow-slate-900/20 ring-2 ring-slate-300/80 dark:ring-slate-600/70"
                              : "bg-white text-slate-700 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-200"
                          }`}
                          onClick={() => answerTriage(question.id, false)}
                        >
                          No
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <p className="mt-3 text-xs font-semibold">
                {triage.disclaimer[language]}
              </p>
            </div>
          )}

          <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-xs text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
            <p className="font-semibold">{t.disclaimer}</p>
            <p className="mt-2 font-semibold">{t.emergencyHelp}</p>
          </div>

          {followUpSymptomIds.length > 0 && (
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-200">
              <p className="text-xs uppercase tracking-[0.2em]">
                {t.followUpTitle}
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {t.followUpHint}
              </p>
              <div className="mt-3 space-y-3">
                {followUpSymptomIds.map((symptomId) => {
                  const symptom = symptomsById.get(symptomId);
                  if (!symptom) {
                    return null;
                  }
                  return (
                    <div
                      key={symptomId}
                      className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white/80 p-3 dark:border-slate-800 dark:bg-slate-900"
                    >
                      <span>
                        {language === "en"
                          ? `Do you also have ${symptom.label[language]}?`
                          : `Mayroon ka rin bang ${symptom.label[language]}?`}
                      </span>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          className={`rounded-full px-4 py-1 text-xs font-semibold transition ${
                            followUpAnswers[symptomId] === true
                              ? "bg-teal-600 text-white border shadow-md shadow-teal-500/30 ring-2 ring-teal-300/80"
                              : "bg-white text-slate-700 border hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-200"
                          }`}
                          onClick={() => answerFollowUp(symptomId, true)}
                        >
                          Yes
                        </button>
                        <button
                          type="button"
                          className={`rounded-full px-4 py-1 text-xs font-semibold transition ${
                            followUpAnswers[symptomId] === false
                              ? "border border-slate-900 bg-slate-900 text-white shadow-md shadow-slate-900/20 ring-2 ring-slate-300/80 dark:border-slate-200"
                              : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                          }`}
                          onClick={() => answerFollowUp(symptomId, false)}
                        >
                          No
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {matchedConditions.length > 0 && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              {t.possibleConditions}
            </h2>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              {t.disclaimer}
            </p>
            <div className="mt-4 grid gap-4">
              {matchedConditions.map(({ condition, matchedCount }) => (
                <div
                  key={condition.id}
                  className="cursor-pointer rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/70"
                  onClick={() => router.push(`/conditions/${condition.id}`)}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold uppercase text-slate-900 dark:text-white">
                      {condition.name[language]}
                    </h3>
                    <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700 dark:bg-teal-950/70 dark:text-teal-200">
                      {matchedCount} {t.matches}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    {condition.brief[language]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
