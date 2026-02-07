"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { symptomCatalog, conditions } from "../../../data/symptomsData";
import { FaArrowLeft, FaExclamationTriangle, FaUserMd } from "react-icons/fa";

const severityColors = {
  Severe: "bg-rose-500 text-white",
  Moderate: "bg-amber-300 text-slate-900",
  Mild: "bg-emerald-500 text-white",
  // tagalog
  Malubha: "bg-rose-500 text-white",
  Katamtaman: "bg-amber-300 text-slate-900",
  Magaan: "bg-emerald-500 text-white",
};

// Detailed Skeleton Loader Component
const SkeletonLoader = () => (
  <div className="flex min-h-[60vh] items-center justify-center p-6">
    <div className="glass-panel w-full max-w-3xl rounded-3xl p-8 shadow-xl shadow-teal-500/10 animate-pulse dark:shadow-none">
      {/* Back Button */}
      <div className="mb-6 h-6 w-24 rounded bg-slate-200 dark:bg-slate-800"></div>

      {/* Title */}
      <div className="mx-auto mb-6 h-10 w-2/3 rounded bg-slate-200 dark:bg-slate-800"></div>

      {/* Severity Badge */}
      <div className="mx-auto mb-6 h-6 w-1/2 rounded bg-slate-200 dark:bg-slate-800"></div>

      {/* Brief Description */}
      <div className="mx-auto mb-4 h-5 w-3/4 rounded bg-slate-200 dark:bg-slate-800"></div>
      <div className="mx-auto mb-6 h-5 w-2/3 rounded bg-slate-200 dark:bg-slate-800"></div>

      {/* Symptoms Section */}
      <div className="mx-auto mb-4 h-6 w-1/3 rounded bg-slate-200 dark:bg-slate-800"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Array(4)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="h-10 rounded bg-slate-200 dark:bg-slate-800"
            ></div>
          ))}
      </div>

      {/* Recommended Doctors Section */}
      <div className="mx-auto mb-4 mt-8 h-6 w-1/3 rounded bg-slate-200 dark:bg-slate-800"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Array(2)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="h-10 rounded bg-slate-200 dark:bg-slate-800"
            ></div>
          ))}
      </div>
    </div>
  </div>
);

export default function ConditionPage() {
  const { condition: conditionId } = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [conditionData, setConditionData] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);
  const [language, setLanguage] = useState("en");

  const symptomsById = useMemo(() => {
    const map = new Map();
    symptomCatalog.forEach((symptom) => map.set(symptom.id, symptom));
    return map;
  }, []);

  const matchedCondition = useMemo(
    () => conditions.find((item) => item.id === conditionId),
    [conditionId],
  );

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "en";
    setLanguage(storedLanguage);

    setTimeout(() => {
      setConditionData(matchedCondition || null);
      setLoading(false);
      setTimeout(() => setFadeIn(true), 50);
    }, 1000);
  }, [matchedCondition]);

  if (loading) {
    return <SkeletonLoader />;
  }

  if (!conditionData) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center text-slate-900 dark:text-slate-100">
        <FaExclamationTriangle className="text-5xl text-rose-500" />
        <h1 className="text-3xl font-semibold">Condition Not Found</h1>
        <button
          onClick={() => router.back()}
          className="rounded-full bg-slate-900 px-6 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div
      className={`transition-opacity duration-300 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="glass-panel mx-auto w-full max-w-3xl rounded-3xl p-8 shadow-xl shadow-teal-500/10 dark:shadow-none">
        <button
          onClick={() => router.back()}
          className="flex items-center text-sm font-semibold text-teal-700 transition hover:text-teal-600"
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>

        <h1 className="font-display text-3xl font-semibold text-slate-900 dark:text-white text-center sm:text-4xl">
          {conditionData.name[language].toUpperCase()}
        </h1>

        <div
          className={`mt-4 rounded-full px-4 py-2 text-sm font-semibold text-center ${
            severityColors[conditionData.severity[language]] || "bg-gray-400"
          }`}
        >
          Severity: {conditionData.severity[language]}
        </div>

        <p className="mt-4 text-sm text-center text-slate-600 dark:text-slate-300">
          {conditionData.brief[language]}
        </p>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-center text-slate-900 dark:text-white">
            Signs & Symptoms
          </h2>
          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            {conditionData.evidence.map((evidence) => {
              const symptom = symptomsById.get(evidence.symptomId);
              const label = symptom?.label?.[language] || evidence.symptomId;
              return (
                <li
                  key={evidence.symptomId}
                  className="rounded-2xl border border-slate-200 bg-white/80 p-3 text-center text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
                >
                  {label}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-center text-slate-900 dark:text-white">
            Recommended Doctors
          </h2>
          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            {Object.entries(conditionData.doctors).map(
              ([doctor, explanation], index) => (
                <li
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
                >
                  <div className="flex items-center space-x-2">
                    <FaUserMd className="text-teal-600" />
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {doctor}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    {explanation[language]}
                  </p>
                </li>
              ),
            )}
          </ul>
        </div>

        <p className="mt-6 text-sm italic text-slate-500 dark:text-slate-400 text-center">
          {conditionData.reminder[language]}
        </p>

        <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-900 shadow-sm dark:border-amber-900/60 dark:bg-amber-950/70 dark:text-amber-200">
          <h3 className="flex items-center justify-center text-base font-semibold">
            <FaExclamationTriangle className="mr-2" /> Important Note
          </h3>
          <p className="mt-2 text-center text-sm">
            This tool is for informational purposes only. Consult a healthcare
            provider for an accurate diagnosis and treatment options.
          </p>
        </div>
      </div>
    </div>
  );
}
