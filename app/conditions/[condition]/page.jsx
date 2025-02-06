"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { symptomsData } from "../../../data/symptomsData";
import { FaArrowLeft, FaExclamationTriangle, FaUserMd } from "react-icons/fa";

const severityColors = {
  Severe: "bg-red-500 text-white",
  Moderate: "bg-yellow-500 text-black",
  Mild: "bg-green-500 text-white",
};

// Detailed Skeleton Loader Component
const SkeletonLoader = () => (
  <div className="min-h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900 p-6">
    <div className="max-w-3xl w-full bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 md:p-12 animate-pulse">
      {/* Back Button */}
      <div className="h-6 w-24 bg-gray-300 dark:bg-gray-700 rounded mb-6"></div>

      {/* Title */}
      <div className="h-10 w-2/3 bg-gray-300 dark:bg-gray-700 rounded mx-auto mb-6"></div>

      {/* Severity Badge */}
      <div className="h-6 w-1/2 bg-gray-300 dark:bg-gray-700 rounded mx-auto mb-6"></div>

      {/* Brief Description */}
      <div className="h-5 w-3/4 bg-gray-300 dark:bg-gray-700 rounded mx-auto mb-4"></div>
      <div className="h-5 w-2/3 bg-gray-300 dark:bg-gray-700 rounded mx-auto mb-6"></div>

      {/* Symptoms Section */}
      <div className="h-6 w-1/3 bg-gray-300 dark:bg-gray-700 rounded mx-auto mb-4"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Array(4)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="h-10 bg-gray-300 dark:bg-gray-700 rounded"
            ></div>
          ))}
      </div>

      {/* Recommended Doctors Section */}
      <div className="h-6 w-1/3 bg-gray-300 dark:bg-gray-700 rounded mx-auto mt-8 mb-4"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Array(2)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="h-10 bg-gray-300 dark:bg-gray-700 rounded"
            ></div>
          ))}
      </div>
    </div>
  </div>
);

export default function ConditionPage() {
  const { condition } = useParams();
  const router = useRouter();
  const decodedCondition = decodeURIComponent(condition).replace(/-/g, " ");
  const [loading, setLoading] = useState(true);
  const [conditionData, setConditionData] = useState(null);
  const [fadeIn, setFadeIn] = useState(false); // For fade-in effect

  useEffect(() => {
    setTimeout(() => {
      setConditionData(symptomsData[decodedCondition] || null);
      setLoading(false);
      setTimeout(() => setFadeIn(true), 50); // Small delay for smooth transition
    }, 1000);
  }, [decodedCondition]);

  if (loading) {
    return <SkeletonLoader />;
  }

  if (!conditionData) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
        <FaExclamationTriangle className="text-6xl text-red-500 dark:text-red-400 mb-4" />
        <h1 className="text-3xl font-bold text-red-600 dark:text-red-400">
          Condition Not Found
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center mt-2">
          The condition you're looking for does not exist. Please check the URL
          or return to the list of conditions.
        </p>
        <button
          onClick={() => router.back()}
          className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 flex justify-center items-center transition-opacity duration-300 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-3xl w-full bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 md:p-12 relative">
        <button
          onClick={() => router.back()}
          className="absolute top-6 left-6 flex items-center text-blue-500 hover:text-blue-700 transition"
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>

        <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 text-center mt-6">
          {decodedCondition.toUpperCase()}
        </h1>

        <div
          className={`mt-4 px-4 py-2 text-lg font-semibold text-center rounded-lg ${
            severityColors[conditionData.severity] || "bg-gray-400"
          }`}
        >
          Severity: {conditionData.severity}
        </div>

        <p className="mt-4 text-lg text-center text-gray-700 dark:text-gray-300 leading-relaxed">
          {conditionData.brief}
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-center border-b pb-2 border-gray-300 dark:border-gray-700">
            Signs & Symptoms
          </h2>
          <ul className="mt-4 text-gray-700 dark:text-gray-300 grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
            {conditionData.signs.map((sign, index) => (
              <li
                key={index}
                className="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg shadow-md text-center"
              >
                {sign}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-center border-b pb-2 border-gray-300 dark:border-gray-700">
            Recommended Doctors
          </h2>
          <ul className="mt-4 text-gray-700 dark:text-gray-300 grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
            {conditionData.doctor.map((doctor, index) => (
              <li
                key={index}
                className="bg-blue-200 dark:bg-blue-700 p-3 rounded-lg shadow-md text-center flex items-center justify-center space-x-2"
              >
                <FaUserMd className="text-blue-600 dark:text-blue-300" />
                <span>{doctor}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-6 text-base italic text-gray-600 dark:text-gray-400 text-center">
          {conditionData.reminder}
        </p>

        <div className="mt-8 p-5 bg-yellow-100 dark:bg-yellow-700 text-yellow-900 dark:text-yellow-200 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold flex items-center justify-center">
            <FaExclamationTriangle className="mr-2" /> Important Note
          </h3>
          <p className="mt-2 text-center text-lg">
            This tool is for informational purposes only. Consult a healthcare
            provider for an accurate diagnosis and treatment options.
          </p>
        </div>
      </div>
    </div>
  );
}
