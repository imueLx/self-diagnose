import {
  FaBook,
  FaExclamationTriangle,
  FaShieldAlt,
  FaHeartbeat,
  FaStethoscope,
} from "react-icons/fa";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="p-6 max-w-5xl mx-auto text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-md">
          Empowering Digital Health Literacy
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Learn how to critically assess online health information and make
          informed medical decisions with confidence.
        </p>
        <p className="mt-6 text-xl font-semibold italic">
          "Health is wealth, invest in yourself with a doctor’s visit."
        </p>
      </section>

      {/* Importance of Digital Health Literacy */}
      <section className="mt-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="flex items-center gap-3">
          <FaBook size={40} className="text-blue-500 dark:text-blue-400" />
          <h2 className="text-3xl font-semibold">
            Why Digital Health Literacy Matters
          </h2>
        </div>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          The internet is a powerful tool for health research, but
          misinformation can be dangerous. Learn how to differentiate between
          credible sources and unreliable claims.
        </p>
        <Link
          href="/guide"
          className="text-blue-500 underline font-semibold hover:text-blue-700"
        >
          Read More
        </Link>
      </section>

      {/* Risks of Self-Diagnosis */}
      <section className="mt-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="flex items-center gap-3">
          <FaExclamationTriangle
            size={40}
            className="text-red-500 dark:text-red-400"
          />
          <h2 className="text-3xl font-semibold">
            The Risks of Self-Diagnosis
          </h2>
        </div>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Self-diagnosing based on online sources can lead to anxiety,
          misdiagnosis, and delayed treatment. Always consult verified medical
          sources.
        </p>
        <Link
          href="/risks"
          className="text-red-500 underline font-semibold hover:text-red-700"
        >
          Learn More
        </Link>
      </section>

      {/* How to Evaluate Health Information */}
      <section className="mt-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="flex items-center gap-3">
          <FaShieldAlt
            size={40}
            className="text-green-500 dark:text-green-400"
          />
          <h2 className="text-3xl font-semibold">
            How to Evaluate Online Health Information
          </h2>
        </div>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Discover key factors to assess online health sources, including author
          credibility, scientific backing, and source verification.
        </p>
        <Link
          href="/resources"
          className="text-green-500 underline font-semibold hover:text-green-700"
        >
          Explore Resources
        </Link>
      </section>

      {/* Interactive Symptom Checker */}
      <section className="mt-10 text-center py-12 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg shadow-lg">
        <div className="flex justify-center items-center gap-3 px-4">
          <FaStethoscope
            size={40}
            className="text-white sm:text-2xl md:text-3xl lg:text-4xl"
          />
          <h2 className="text-3xl font-semibold">Try Our Symptom Checker</h2>
        </div>
        <p className="mt-4 text-lg">
          Enter symptoms to receive potential conditions based on medical
          research. This tool is for educational purposes only and should not
          replace professional consultation.
        </p>
        <Link href="/checker">
          <button className="mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded-md transition duration-300 hover:bg-gray-200">
            Use Symptom Checker
          </button>
        </Link>
      </section>

      {/* Additional Information */}
      <section className="mt-12 text-center py-12">
        <h2 className="text-3xl font-semibold">Stay Informed</h2>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Our platform offers updated health literacy content, expert insights,
          and guides to help you navigate online medical information
          effectively.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
          <Link href="/guide">
            <button className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold rounded-md transition duration-300">
              Learn More
            </button>
          </Link>
          <Link href="/resources">
            <button className="px-8 py-3 bg-gray-500 hover:bg-gray-600 text-white text-lg font-semibold rounded-md transition duration-300">
              View Resources
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
