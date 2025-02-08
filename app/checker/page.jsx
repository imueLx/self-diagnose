"use client";
import { useState, useEffect } from "react";
import { symptomsData } from "../../data/symptomsData";
import { useRouter } from "next/navigation";
import {
  FaSearch,
  FaPlus,
  FaSpinner,
  FaGlobe,
  FaTimesCircle,
  FaTimes,
} from "react-icons/fa";

const translations = {
  en: {
    title: "Symptom Checker",
    description:
      "Select symptoms to check possible conditions. This tool provides guidance but does not replace professional medical advice.",
    enterSymptom: "Enter a symptom",
    possibleConditions: "Possible Conditions",
    learnMore: "Learn More",
    suggestedSymptoms: "Suggested Symptoms",
    selectedSymptoms: "Selected Symptoms",
    matches: "Matches",
  },
  tl: {
    title: "Tagasuri ng Sintomas",
    description:
      "Pumili ng mga sintomas upang suriin ang posibleng mga kondisyon. Ang tool na ito ay nagbibigay ng gabay ngunit hindi pumapalit sa propesyonal na medikal na payo.",
    enterSymptom: "Ilagay ang isang sintomas",
    possibleConditions: "Posibleng mga Kondisyon",
    learnMore: "Alamin Pa",
    suggestedSymptoms: "Inirerekomendang Sintomas",
    selectedSymptoms: "Napiling Sintomas",
    matches: "Mga Tugma",
  },
};

export default function SymptomChecker() {
  const [hydrated, setHydrated] = useState(false);
  const [input, setInput] = useState("");
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [matchedConditions, setMatchedConditions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState("en");
  const [suggestedSymptoms, setSuggestedSymptoms] = useState([]);
  const router = useRouter();

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    setHydrated(true);
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("language") || "en";
      setLanguage(storedLanguage);
      console.log("Language set to", storedLanguage);
    }
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem("language", language);
      console.log("Language set hydrated", language);
    }
  }, [language, hydrated]);

  useEffect(() => {
    if (selectedSymptoms.length > 0) {
      // Get related symptoms from conditions that match selected ones
      const relatedSymptoms = new Set();

      selectedSymptoms.forEach((selected) => {
        Object.entries(symptomsData).forEach(([condition, data]) => {
          if (data.signs[language].includes(selected)) {
            data.signs[language].forEach((sign) => {
              if (!selectedSymptoms.includes(sign)) {
                relatedSymptoms.add(sign);
              }
            });
          }
        });
      });

      setSuggestedSymptoms(Array.from(relatedSymptoms));
    } else {
      // Show all available symptoms when none are selected
      const allSymptoms = Object.entries(symptomsData).flatMap(
        ([condition, data]) => data.signs[language]
      );
      setSuggestedSymptoms([...new Set(allSymptoms)]);
    }
  }, [selectedSymptoms, language]);

  useEffect(() => {
    if (selectedSymptoms.length > 0) {
      let conditionMatches = {};
      selectedSymptoms.forEach((symptom) => {
        Object.entries(symptomsData).forEach(([condition, data]) => {
          if (data.signs[language].includes(symptom)) {
            if (!conditionMatches[condition]) {
              conditionMatches[condition] = {
                count: 1,
                brief: data.brief[language],
              };
            } else {
              conditionMatches[condition].count += 1;
            }
          }
        });
      });

      const sortedConditions = Object.entries(conditionMatches)
        .sort((a, b) => b[1].count - a[1].count)
        .map(([condition, data]) => ({ condition, ...data }));

      setMatchedConditions(sortedConditions);
    } else {
      setMatchedConditions([]);
    }
  }, [selectedSymptoms, language]);

  const t = translations[language];
  const changeLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "tl" : "en"));
    setSelectedSymptoms([]);
  };

  if (!hydrated) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <FaSpinner className="animate-spin text-4xl text-blue-500" />
      </div>
    );
  }

  const allSymptoms = Object.entries(symptomsData).flatMap(
    ([condition, data]) =>
      data.signs[language].map((sign) => ({ sign, condition }))
  );

  const uniqueSymptoms = [...new Set(allSymptoms.map(({ sign }) => sign))];

  const filteredSymptoms = shuffleArray(
    uniqueSymptoms.filter((symptom) => {
      const lowerCaseInput = input.toLowerCase();
      const symptomInCurrentLanguage = symptom
        .toLowerCase()
        .includes(lowerCaseInput);
      const symptomInOtherLanguage = Object.values(symptomsData).some((data) =>
        data.signs[language === "en" ? "tl" : "en"]
          .map((sign) => sign.toLowerCase())
          .includes(lowerCaseInput)
      );
      return (
        !selectedSymptoms.includes(symptom) &&
        (symptomInCurrentLanguage || symptomInOtherLanguage)
      );
    })
  );

  const addSymptom = (symptom) => {
    if (!selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
      checkSymptoms([...selectedSymptoms, symptom]);
    }
    setInput("");
  };

  const removeSymptom = (symptom) => {
    const updatedSymptoms = selectedSymptoms.filter((s) => s !== symptom);
    setSelectedSymptoms(updatedSymptoms);
    checkSymptoms(updatedSymptoms);
  };

  const checkSymptoms = (currentSymptoms) => {
    setLoading(true);
    setTimeout(() => {
      let conditionMatches = {};
      currentSymptoms.forEach((symptom) => {
        allSymptoms.forEach(({ sign, condition }) => {
          if (symptom === sign) {
            const { brief } = symptomsData[condition];
            if (!conditionMatches[condition]) {
              conditionMatches[condition] = {
                count: 1,
                brief: brief[language],
              };
            } else {
              conditionMatches[condition].count += 1;
            }
          }
        });
      });

      const sortedConditions = Object.entries(conditionMatches)
        .sort((a, b) => b[1].count - a[1].count)
        .map(([condition, data]) => ({ condition, ...data }));

      setMatchedConditions(sortedConditions);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 flex flex-col items-center">
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <div className="flex justify-end mb-4">
          <button
            className="bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-md flex items-center space-x-2 sm:space-x-3 transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            onClick={changeLanguage}
          >
            <FaGlobe className="text-lg sm:text-xl" />
            <span className="text-sm sm:text-base">
              {language === "en" ? "Tagalog" : "English"}
            </span>
          </button>
        </div>

        <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 text-center">
          {t.title}
        </h1>
        <p className="mt-4 text-lg text-center">{t.description}</p>

        <div className="mt-4 relative">
          <input
            type="text"
            className="w-full p-3 border rounded-md dark:bg-gray-700 dark:text-white"
            placeholder={t.enterSymptom}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <FaSearch className="absolute right-3 top-3 text-gray-400" />
        </div>

        {filteredSymptoms.length > 0 && (
          <div className="mt-2 max-h-40 overflow-y-auto border rounded-md">
            {filteredSymptoms.map((symptom) => (
              <div
                key={symptom}
                className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer flex justify-between"
                onClick={() => addSymptom(symptom)}
              >
                {symptom} <FaPlus className="text-blue-500" />
              </div>
            ))}
          </div>
        )}

        <div className="mt-4">
          <h2 className="font-semibold">{t.selectedSymptoms}</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {selectedSymptoms.map((symptom) => (
              <span
                key={symptom}
                className="p-2 bg-blue-500 text-white rounded-full flex items-center"
              >
                {symptom}{" "}
                <FaTimes
                  className="ml-2 cursor-pointer"
                  onClick={() => removeSymptom(symptom)}
                />
              </span>
            ))}
          </div>
        </div>

        {loading && <FaSpinner className="animate-spin text-blue-500 mt-4" />}

        {!loading && matchedConditions.length > 0 && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-center">
              {t.possibleConditions}
            </h2>
            {matchedConditions.map(({ condition, brief, count }) => (
              <div
                key={condition}
                className="mt-4 p-6 border rounded-lg shadow-md bg-white dark:bg-gray-800 cursor-pointer hover:shadow-lg transition"
                onClick={() =>
                  router.push(
                    `/conditions/${condition
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`
                  )
                }
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl sm:text-2xl uppercase font-bold text-blue-600 dark:text-blue-400">
                    {condition}
                  </h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    {count} {t.matches}
                  </span>
                </div>
                <p className="mt-2">{brief}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
