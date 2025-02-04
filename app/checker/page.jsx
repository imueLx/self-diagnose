"use client";
import { useState } from "react";
import { symptomsData } from "../../data/symptomsData";
import { useRouter } from "next/navigation";

export default function SymptomChecker() {
  const [input, setInput] = useState("");
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [matchedConditions, setMatchedConditions] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Extract all symptoms and their conditions
  const allSymptoms = Object.entries(symptomsData).flatMap(
    ([condition, data]) => data.signs.map((sign) => ({ sign, condition }))
  );

  // Find all unique symptoms
  const uniqueSymptoms = [...new Set(allSymptoms.map(({ sign }) => sign))];

  // Filter symptoms: Remove selected, match input
  const filteredSymptoms = uniqueSymptoms.filter(
    (symptom) =>
      !selectedSymptoms.includes(symptom) &&
      symptom.toLowerCase().includes(input.toLowerCase())
  );

  // Find related symptoms based on the selected symptoms
  const getRelatedSymptoms = () => {
    if (selectedSymptoms.length === 0) return filteredSymptoms;

    let relatedSymptoms = new Set();

    selectedSymptoms.forEach((symptom) => {
      allSymptoms.forEach(({ sign, condition }) => {
        if (symptom === sign) {
          symptomsData[condition].signs.forEach((relatedSign) => {
            if (!selectedSymptoms.includes(relatedSign)) {
              relatedSymptoms.add(relatedSign);
            }
          });
        }
      });
    });

    return [...relatedSymptoms];
  };

  // Add a symptom to the selected list
  const addSymptom = (symptom) => {
    if (!selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms((prev) => [...prev, symptom]);
      checkSymptoms([...selectedSymptoms, symptom]);
    }
    setInput("");
  };

  // Remove a symptom
  const removeSymptom = (symptom) => {
    const updatedSymptoms = selectedSymptoms.filter((s) => s !== symptom);
    setSelectedSymptoms(updatedSymptoms);
    checkSymptoms(updatedSymptoms);
  };

  // Check for matching conditions
  const checkSymptoms = (currentSymptoms) => {
    setLoading(true);
    setTimeout(() => {
      let conditionMatches = {};

      currentSymptoms.forEach((symptom) => {
        allSymptoms.forEach(({ sign, condition }) => {
          if (symptom === sign) {
            const { brief, signs, reminder } = symptomsData[condition];
            if (conditionMatches[condition]) {
              conditionMatches[condition].count += 1;
              conditionMatches[condition].matchedSigns.push(sign);
            } else {
              conditionMatches[condition] = {
                count: 1,
                details: { condition, brief, signs, reminder },
                matchedSigns: [sign],
              };
            }
          }
        });
      });

      const sortedConditions = Object.entries(conditionMatches)
        .sort((a, b) => b[1].count - a[1].count)
        .map(([condition, data]) => ({
          condition,
          ...data.details,
          matchCount: data.count,
          matchedSigns: data.matchedSigns,
        }));

      setTimeout(() => {
        setMatchedConditions(sortedConditions);
        setLoading(false);
      }, 500);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8 flex flex-col items-center">
      <div className="max-w-6xl w-full bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 md:p-12">
        <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 text-center">
          Symptom Checker
        </h1>
        <p className="mt-4 text-lg text-center">
          Select symptoms to check possible conditions. This tool provides
          guidance but does not replace professional medical advice.
        </p>

        {/* Search Box */}
        <div className="mt-8 flex flex-col items-center">
          <input
            type="text"
            className="border p-3 w-full md:w-2/3 dark:bg-gray-700 dark:text-white rounded-lg shadow-sm"
            placeholder="Enter a symptom"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          {filteredSymptoms.length > 0 && (
            <ul className="bg-white dark:bg-gray-800 border rounded-lg mt-2 shadow-md max-h-40 overflow-y-auto w-full md:w-2/3">
              {filteredSymptoms.map((symptom) => (
                <li
                  key={symptom}
                  className="p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                  onClick={() => addSymptom(symptom)}
                >
                  {symptom}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Selected Symptoms */}
        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          {selectedSymptoms.map((symptom) => (
            <span
              key={symptom}
              className="bg-blue-500 text-white px-3 py-1 rounded-full flex items-center"
            >
              {symptom}
              <button
                className="ml-2 text-lg"
                onClick={() => removeSymptom(symptom)}
              >
                ×
              </button>
            </span>
          ))}
        </div>

        {/* Bubble Map for Symptoms */}
        <div className="mt-8 hidden md:flex flex-wrap gap-4 justify-center">
          {getRelatedSymptoms().map((symptom) => (
            <button
              key={symptom}
              onClick={() => addSymptom(symptom)}
              className="bg-blue-300 dark:bg-blue-700 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-400 dark:hover:bg-blue-600 transition text-sm"
            >
              {symptom}
            </button>
          ))}
        </div>

        {/* Loading Indicator */}
        {loading && <div className="mt-4 text-center">Loading...</div>}

        {/* Matched Conditions */}
        {!loading && matchedConditions.length > 0 && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-center">
              Possible Conditions
            </h2>
            {matchedConditions.map(
              ({ condition, brief, signs, reminder, matchCount }) => (
                <div
                  key={condition}
                  className="mt-4 p-6 border rounded-lg shadow-md bg-white dark:bg-gray-800 cursor-pointer hover:shadow-lg transition hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() =>
                    router.push(
                      `/conditions/${condition
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`
                    )
                  }
                >
                  <h3 className="text-xl sm:text-2xl md:text-3xl uppercase font-bold text-blue-600 dark:text-blue-400 transition-colors duration-300">
                    {condition}
                    <span className="text-red-500 dark:text-red-400 lowercase italic text-lg sm:text-xl font-bold">
                      {""} - {matchCount} symptom(s) matched
                    </span>
                  </h3>
                  <p className="mt-2">{brief}</p>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}
