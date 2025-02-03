"use client";

import { useState } from "react";

const symptomsList = [
  "Chest pain",
  "Shortness of breath",
  "Fatigue",
  "Headache",
  "Fever",
  "Cough",
  "Nausea",
  "Dizziness",
];

export default function SymptomChecker() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  const handleSymptomChange = (symptom) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom]
    );
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4 text-purple-600">
          Select Your Symptoms:
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {symptomsList.map((symptom) => (
            <label
              key={symptom}
              className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <input
                type="checkbox"
                value={symptom}
                checked={selectedSymptoms.includes(symptom)}
                onChange={() => handleSymptomChange(symptom)}
                className="mr-2"
              />
              {symptom}
            </label>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4 text-blue-600">
          Possible Conditions:
        </h2>
        {selectedSymptoms.length > 0 ? (
          <ul className="list-disc list-inside">
            {selectedSymptoms.map((symptom) => (
              <li key={symptom} className="mb-2">
                {symptom} - Possible condition: [Example]
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700">No symptoms selected.</p>
        )}
      </div>
    </div>
  );
}
