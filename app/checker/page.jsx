// Your existing SymptomChecker component

"use client";
import { useState } from "react";
import { symptomsData } from "../../data/symptomsData";

export default function SymptomChecker() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const checkSymptoms = () => {
    setLoading(true);
    const lowerInput = input.toLowerCase();
    setTimeout(() => {
      if (symptomsData[lowerInput]) {
        const { condition, brief, signs, reminder } = symptomsData[lowerInput];
        setResult(
          `Condition: ${condition}\n\nBrief Information: ${brief}\nSigns and Symptoms: ${signs}\nReminder: ${reminder}`
        );
      } else {
        setResult("No match found. Try another symptom or consult a doctor.");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400">
          Symptom Checker
        </h1>
        <p className="mt-4 text-lg">
          Enter a symptom below to check possible conditions. This tool provides
          basic guidance but does not replace professional medical advice.
        </p>
      </div>
      <div className="mt-8 max-w-lg mx-auto">
        <input
          type="text"
          className="border p-3 w-full mt-2 dark:bg-gray-700 dark:text-white rounded-lg shadow-sm"
          placeholder="Enter a symptom (e.g., chest pain)"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-6 py-2 mt-4 rounded-lg w-full hover:bg-blue-600 transition"
          onClick={checkSymptoms}
        >
          Check
        </button>
        {loading && <div className="mt-4 text-center">Loading...</div>}
        {result && !loading && (
          <pre className="mt-6 text-lg font-semibold text-center whitespace-pre-wrap">
            {result}
          </pre>
        )}
      </div>
    </div>
  );
}
