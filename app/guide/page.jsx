import { FiCheckCircle } from "react-icons/fi";
import Link from "next/link";

export default function Guide() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Main Content */}
      <main className="p-6 max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3">
          <FiCheckCircle className="w-10 h-10 text-green-500 dark:text-green-400" />
          <h1 className="text-4xl font-bold text-green-600 dark:text-green-400">
            Health Information Guide
          </h1>
        </div>

        {/* Introduction */}
        <p className="mt-4 text-lg">
          Not all online health information is accurate or reliable. This guide
          will help you{" "}
          <strong>
            evaluate sources, research symptoms responsibly, and make informed
            health decisions
          </strong>
          .
        </p>

        {/* Section 1: Evaluating Health Information */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            1. Evaluating Online Health Information
          </h2>
          <p className="mt-3 text-lg">
            Before trusting any health-related website, check the following:
          </p>

          {/* Group: Source Reliability */}
          <div className="mt-4 p-4 bg-gray-200 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold">✅ Check the Source</h3>
            <ul className="mt-2 space-y-2 list-disc pl-6">
              <li>
                Trust websites from <strong>government agencies</strong> (CDC,
                WHO, DOH) and
                <strong>medical institutions</strong> (Mayo Clinic).
              </li>
              <li>
                Be wary of{" "}
                <strong>
                  personal blogs, sponsored content, or sites without medical
                  credentials
                </strong>
                .
              </li>
            </ul>
          </div>

          {/* Group: Content Accuracy */}
          <div className="mt-4 p-4 bg-gray-200 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold">
              📖 Look for Scientific Backing
            </h3>
            <ul className="mt-2 space-y-2 list-disc pl-6">
              <li>
                Reliable sites <strong>cite scientific studies</strong> and
                provide links to research.
              </li>
              <li>
                Avoid sites that make{" "}
                <strong>bold health claims without evidence</strong>.
              </li>
            </ul>
          </div>

          {/* Group: Content Freshness */}
          <div className="mt-4 p-4 bg-gray-200 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold">
              🕒 Check for Recent Updates
            </h3>
            <ul className="mt-2 space-y-2 list-disc pl-6">
              <li>
                Medical advice evolves, so ensure the content is{" "}
                <strong>recently updated</strong>.
              </li>
              <li>
                Outdated information can lead to{" "}
                <strong>incorrect self-diagnosis</strong>.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 2: Researching Symptoms Responsibly */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            2. Researching Symptoms Responsibly
          </h2>
          <p className="mt-3 text-lg">
            Self-research is helpful, but improper self-diagnosis can cause
            anxiety or delay professional care. Follow these best practices:
          </p>

          {/* Group: Trusted Websites */}
          <div className="mt-4 p-4 bg-gray-200 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold">🌐 Use Trusted Websites</h3>
            <ul className="mt-2 space-y-2 list-disc pl-6">
              <li>
                Rely on well-known medical sources:
                <ul className="mt-2 pl-4 list-disc">
                  <li>
                    <Link
                      href="https://www.mayoclinic.org"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Mayo Clinic
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.cdc.gov"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      CDC
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.who.int"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      WHO
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                Be skeptical of{" "}
                <strong>forums, social media posts, or unverified blogs</strong>
                .
              </li>
            </ul>
          </div>

          {/* Group: Avoiding Misinterpretation */}
          <div className="mt-4 p-4 bg-gray-200 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold">
              🔍 Consider the Full Picture
            </h3>
            <ul className="mt-2 space-y-2 list-disc pl-6">
              <li>
                <strong>One symptom alone doesn’t confirm a condition</strong>
                —look at overall patterns.
              </li>
              <li>
                Similar symptoms can have <strong>different causes</strong>{" "}
                (e.g., headache from stress vs. serious illness).
              </li>
            </ul>
          </div>

          {/* Group: When to See a Doctor */}
          <div className="mt-4 p-4 bg-gray-200 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold">
              🏥 Know When to Seek Medical Help
            </h3>
            <ul className="mt-2 space-y-2 list-disc pl-6">
              <li>
                Visit a doctor if symptoms{" "}
                <strong>persist, worsen, or cause severe discomfort</strong>.
              </li>
              <li>
                Seek immediate medical attention for:
                <ul className="mt-2 pl-4 list-disc">
                  <li>Chest pain</li>
                  <li>Severe headaches</li>
                  <li>Difficulty breathing</li>
                  <li>High fever</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3: Common Pitfalls to Avoid */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            3. Common Pitfalls to Avoid
          </h2>

          {/* Group: Health Anxiety */}
          <div className="mt-4 p-4 bg-gray-200 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold">⚠️ Avoid "Cyberchondria"</h3>
            <ul className="mt-2 space-y-2 list-disc pl-6">
              <li>
                Over-Googling symptoms can lead to{" "}
                <strong>unnecessary stress and panic</strong>.
              </li>
              <li>
                Remember: <strong>Not every headache is a brain tumor!</strong>
              </li>
            </ul>
          </div>

          {/* Group: Avoiding Misinformation */}
          <div className="mt-4 p-4 bg-gray-200 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold">
              ❌ Be Cautious of Misinformation
            </h3>
            <ul className="mt-2 space-y-2 list-disc pl-6">
              <li>
                Don't spread <strong>unverified health claims</strong> to
                others.
              </li>
              <li>
                Check <strong>multiple sources</strong> before trusting health
                advice.
              </li>
            </ul>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Final Thoughts
          </h2>
          <p className="mt-4 text-lg">
            The internet is a <strong>powerful tool</strong>, but{" "}
            <strong>not a substitute for professional medical advice</strong>.
            Always verify sources, research responsibly, and consult a doctor
            when in doubt.
          </p>
        </section>
      </main>
    </div>
  );
}
