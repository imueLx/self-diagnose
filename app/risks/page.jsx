import { FiAlertTriangle } from "react-icons/fi";

export default function Risks() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <main className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="flex items-center gap-3 mb-6">
          <FiAlertTriangle className="w-10 h-10 text-red-500 dark:text-red-400" />
          <h1 className="text-4xl font-bold text-red-600 dark:text-red-400">
            Risks of Self-Diagnosing
          </h1>
        </div>

        {/* Introduction */}
        <p className="text-lg leading-relaxed">
          The internet provides a vast amount of health information, but relying
          on self-diagnosis can lead to <strong>incorrect conclusions</strong>{" "}
          and <strong>unnecessary anxiety</strong>. Below are some key risks
          associated with self-diagnosing.
        </p>

        {/* Risks List */}
        <section className="mt-6 space-y-6">
          <h2 className="text-2xl font-semibold">Dangers of Self-Diagnosing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
              <strong>❌ Incorrect Diagnoses:</strong> Symptoms can overlap,
              leading to misinterpretation. For example, chest pain could
              indicate heart disease but may also be due to anxiety or acid
              reflux.
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
              <strong>😨 Increased Anxiety:</strong> Online searches often lead
              to worst-case scenarios, causing unnecessary stress and fear,
              known as "cyberchondria."
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
              <strong>⏳ Delayed Professional Help:</strong> Relying on online
              information may prevent people from seeking timely medical
              attention, worsening health conditions.
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
              <strong>💊 Overuse of Medications:</strong> Misdiagnosing can lead
              to self-medicating, potentially causing harmful side effects and
              masking underlying issues.
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg md:col-span-2">
              <strong>⚠️ Misinformation Spread:</strong> Sharing unverified
              health information can mislead others and increase public health
              risks.
            </div>
          </div>
        </section>

        {/* How to Stay Informed Safely */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold">
            How to Stay Informed Safely
          </h2>
          <p className="mt-4 text-lg leading-relaxed">
            Instead of self-diagnosing, consider these safer alternatives:
          </p>
          <ul className="mt-4 space-y-3 text-lg list-disc pl-6">
            <li>
              Consult <strong>a healthcare professional</strong> for an accurate
              diagnosis.
            </li>
            <li>
              Use <strong>trusted health websites</strong> like WHO, CDC, or
              Mayo Clinic.
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
