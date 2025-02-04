"use client";
import { useParams, useRouter } from "next/navigation";
import { symptomsData } from "../../../data/symptomsData";
import { FaArrowLeft, FaExclamationTriangle } from "react-icons/fa";

export default function ConditionPage() {
  const { condition } = useParams();
  const router = useRouter();
  const decodedCondition = decodeURIComponent(condition).replace(/-/g, " ");
  const conditionData = symptomsData[decodedCondition];

  if (!conditionData) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 flex justify-center items-center overflow-x-hidden">
        {/* Icon */}
        <div className="text-6xl text-red-500 dark:text-red-400 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 inline-block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl font-bold text-red-600 dark:text-red-400 mb-4">
          Condition Not Found
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          The condition you're looking for does not exist. Please check the URL
          or go back to the list of conditions.
        </p>

        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 flex justify-center items-center">
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
