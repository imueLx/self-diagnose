import { FiAlertTriangle } from "react-icons/fi";

export default function Risks() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Main Content */}
      <main className="p-6 max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="flex items-center gap-3">
          <FiAlertTriangle className="w-10 h-10 text-red-500 dark:text-red-400" />
          <h1 className="text-4xl font-bold text-red-600 dark:text-red-400">
            <span className="block sm:inline">Risks</span>
            <span className="block sm:inline"> of Self-Diagnosing</span>
          </h1>
        </div>
        {/* Introduction */}
        <p className="mt-5 text-lg">
          The internet provides a vast amount of health information, but{" "}
          <strong>self-diagnosing</strong> based on online sources can be{" "}
          <strong>dangerous</strong>. While it can be helpful to research
          symptoms, relying solely on the internet can lead to{" "}
          <strong>incorrect conclusions</strong> and{" "}
          <strong>unnecessary anxiety</strong>. Below are some of the key risks
          associated with self-diagnosis.
        </p>

        {/* Risks List */}
        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Dangers of Self-Diagnosing
          </h2>
          <ul className="mt-4 space-y-4 text-lg">
            <li className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
              <strong>❌ Incorrect Diagnoses:</strong> Symptoms of different
              conditions can overlap. For example, <strong>chest pain</strong>{" "}
              could indicate heart disease, but it might also be caused by{" "}
              <strong>anxiety or acid reflux</strong>. A wrong diagnosis can
              delay <strong>proper treatment</strong>.
            </li>
            <li className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
              <strong>😨 Increased Anxiety:</strong> Searching symptoms online
              often leads to <strong>worst-case scenarios</strong>. Many people
              experience <strong>"cyberchondria"</strong>, where they believe
              they have a serious illness based on online searches.
            </li>
            <li className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
              <strong>⏳ Delayed Professional Help:</strong> Some people avoid
              seeing a doctor because they believe their online research is
              enough. This can result in{" "}
              <strong>
                serious conditions going undiagnosed or worsening over time
              </strong>
              .
            </li>
            <li className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
              <strong>💊 Overuse of Medications:</strong> Misinterpreting
              symptoms may lead to <strong>self-prescribing medications</strong>
              , which can cause <strong>harmful side effects</strong> or{" "}
              <strong>mask underlying issues</strong> that need medical
              attention.
            </li>
            <li className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
              <strong>⚠️ Misinformation Spread:</strong> Sharing unverified
              health information can <strong>mislead others</strong>, increasing
              public health risks. Relying on <strong>trusted sources</strong>{" "}
              is crucial.
            </li>
          </ul>
        </section>

        {/* Conclusion */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            How to Stay Informed Safely
          </h2>
          <p className="mt-4 text-lg">
            Instead of self-diagnosing, consider these{" "}
            <strong>safer alternatives</strong>:
          </p>
          <ul className="mt-4 space-y-3 text-lg list-disc pl-6">
            <li>
              Consult <strong>a healthcare professional</strong> for an accurate
              diagnosis.
            </li>
            <li>
              Use <strong>trusted health websites</strong> like the{" "}
              <strong>WHO, CDC, or Mayo Clinic</strong>.
            </li>
            <li>
              Keep a <strong>symptom journal</strong> to provide detailed
              information to your doctor.
            </li>
            <li>
              Avoid <strong>self-medicating</strong> without professional
              advice.
            </li>
          </ul>
          <p className="mt-4 text-lg">
            Your health is important. When in doubt, always{" "}
            <strong>seek medical guidance</strong> from professionals instead of
            relying on internet searches.
          </p>
        </section>
      </main>
    </div>
  );
}
