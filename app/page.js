import {
  FiActivity,
  FiAlertCircle,
  FiBookOpen,
  FiHeart,
  FiShield,
} from "react-icons/fi";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="p-6 max-w-5xl mx-auto text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          Empowering Digital Health Literacy
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Learn how to critically assess online health information and make
          informed medical decisions.
        </p>
      </section>

      {/* Importance of Digital Health Literacy */}
      <section className="mt-10">
        <div className="flex items-center gap-3">
          <FiBookOpen size={28} className="text-blue-500 dark:text-blue-400" />
          <h2 className="text-3xl font-semibold">
            Why Digital Health Literacy Matters
          </h2>
        </div>
        <p className="mt-4 text-lg">
          The internet is a powerful tool for health research, but
          misinformation can lead to serious consequences. Studies from the{" "}
          <strong>World Health Organization (WHO)</strong> and the{" "}
          <strong>Centers for Disease Control and Prevention (CDC)</strong>{" "}
          highlight the risks of self-diagnosis, emphasizing the need for
          verified medical sources.
        </p>
      </section>

      {/* Risks of Self-Diagnosis */}
      <section className="mt-10">
        <div className="flex items-center gap-3">
          <FiAlertCircle size={28} className="text-red-500 dark:text-red-400" />
          <h2 className="text-3xl font-semibold">
            The Risks of Self-Diagnosis
          </h2>
        </div>
        <ul className="mt-4 space-y-3 list-disc pl-6">
          <li>
            <strong>Misdiagnosis:</strong> Symptoms can be misleading, leading
            to incorrect conclusions and ineffective treatments. The{" "}
            <strong>Mayo Clinic</strong> warns that many serious conditions
            share common symptoms with minor illnesses.
          </li>
          <li>
            <strong>Health Anxiety:</strong> "Cyberchondria"—excessive online
            symptom searching—can cause unnecessary stress. Research from the{" "}
            <strong>Harvard Medical School</strong> suggests that over-Googling
            symptoms increases anxiety and stress levels.
          </li>
          <li>
            <strong>Delayed Medical Care:</strong> Relying on self-diagnosis may
            prevent timely professional intervention, worsening conditions. The{" "}
            <strong>American Medical Association (AMA)</strong> advises seeking
            professional advice rather than assuming online findings are
            accurate.
          </li>
          <li>
            <strong>Overuse of Medication:</strong> Misinterpretation of
            symptoms can lead to inappropriate self-medication, increasing
            health risks. The <strong>FDA</strong> warns about the dangers of
            self-medicating without proper medical supervision.
          </li>
        </ul>
      </section>

      {/* How to Evaluate Health Information */}
      <section className="mt-10">
        <div className="flex items-center gap-3">
          <FiShield size={28} className="text-green-500 dark:text-green-400" />
          <h2 className="text-3xl font-semibold">
            How to Evaluate Online Health Information
          </h2>
        </div>
        <ul className="mt-4 space-y-3 list-disc pl-6">
          <li>
            <strong>Use Trusted Sources:</strong> Rely on government health
            agencies (e.g., <strong>WHO, CDC, NHS</strong>) and reputable
            medical institutions.
          </li>
          <li>
            <strong>Check the Author:</strong> Ensure information comes from
            certified professionals or peer-reviewed research. The{" "}
            <strong>National Library of Medicine</strong> provides access to
            verified medical literature.
          </li>
          <li>
            <strong>Beware of Bias:</strong> Avoid sites promoting products
            without scientific backing. Be skeptical of health claims made
            without proper citations.
          </li>
          <li>
            <strong>Verify with Multiple Sources:</strong> Compare information
            from several trusted sources to confirm accuracy.
          </li>
        </ul>
      </section>

      {/* Interactive Symptom Checker */}
      <section className="mt-10 text-center py-12">
        <div className="flex justify-center items-center gap-3">
          <FiActivity
            size={28}
            className="text-purple-500 dark:text-purple-400"
          />
          <h2 className="text-3xl font-semibold">Try Our Symptom Checker</h2>
        </div>
        <p className="mt-4 text-lg">
          Enter symptoms to receive possible conditions based on medical
          research. <br />
          (Note: This tool is for educational purposes only and should not
          replace professional consultation.)
        </p>
        <Link href="/checker">
          <button className="mt-6 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-md transition duration-300">
            Use Symptom Checker
          </button>
        </Link>
      </section>

      {/* Call to Action */}
      <section className="mt-12 text-center py-12">
        <p className="text-lg font-semibold">
          Enhance your digital health literacy today!
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
