import { FiCheckCircle } from "react-icons/fi";
import Link from "next/link";

export default function Guide() {
  return (
    <div className="space-y-10">
      <section className="glass-panel rounded-3xl p-8 shadow-xl shadow-teal-500/10 dark:shadow-none">
        <div className="flex items-center gap-3">
          <FiCheckCircle className="h-10 w-10 text-teal-600" />
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Health Information Guide
            </p>
            <h1 className="font-display text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
              Build safe research habits
            </h1>
          </div>
        </div>
        <p className="mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-300">
          Not all online health information is accurate or reliable. This guide
          helps you evaluate sources, research symptoms responsibly, and make
          informed health decisions.
        </p>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            1. Evaluating online health information
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Before trusting any health-related website, check the following:
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
            <h3 className="text-base font-semibold">Check the source</h3>
            <ul className="mt-2 space-y-2 list-disc pl-5 text-sm text-slate-600 dark:text-slate-300">
              <li>
                Trust government agencies (CDC, WHO, DOH) and reputable medical
                institutions.
              </li>
              <li>
                Avoid personal blogs, sponsored content, or missing credentials.
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
            <h3 className="text-base font-semibold">Look for evidence</h3>
            <ul className="mt-2 space-y-2 list-disc pl-5 text-sm text-slate-600 dark:text-slate-300">
              <li>
                Reliable sites cite scientific studies and research links.
              </li>
              <li>Avoid bold health claims without evidence.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
            <h3 className="text-base font-semibold">Check for updates</h3>
            <ul className="mt-2 space-y-2 list-disc pl-5 text-sm text-slate-600 dark:text-slate-300">
              <li>Medical advice evolves, so check when it was updated.</li>
              <li>
                Outdated information can lead to incorrect self-diagnosis.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
          <h3 className="text-base font-semibold text-slate-900 dark:text-white">
            Use the CRAAP Test
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Apply Currency, Relevance, Authority, Accuracy, and Purpose before
            trusting any medical advice.
          </p>
          <Link
            href="/craap"
            className="mt-3 inline-flex text-sm font-semibold text-teal-700"
          >
            View CRAAP guide
          </Link>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
          <h3 className="text-base font-semibold text-slate-900 dark:text-white">
            Practice with scenarios
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Check your decision-making with the advanced risk assessment quiz.
          </p>
          <Link
            href="/quiz"
            className="mt-3 inline-flex text-sm font-semibold text-teal-700"
          >
            Take the quiz
          </Link>
        </div>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            2. Researching symptoms responsibly
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Self-research is helpful, but improper self-diagnosis can cause
            anxiety or delay professional care. Follow these best practices:
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
            <h3 className="text-base font-semibold">Use trusted websites</h3>
            <ul className="mt-2 space-y-2 list-disc pl-5 text-sm text-slate-600 dark:text-slate-300">
              <li>Rely on reputable sources like Mayo Clinic, CDC, or WHO.</li>
              <li>Be skeptical of forums or unverified blogs.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
            <h3 className="text-base font-semibold">
              Consider the full picture
            </h3>
            <ul className="mt-2 space-y-2 list-disc pl-5 text-sm text-slate-600 dark:text-slate-300">
              <li>One symptom alone does not confirm a condition.</li>
              <li>Similar symptoms can have different causes.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
            <h3 className="text-base font-semibold">Know when to seek help</h3>
            <ul className="mt-2 space-y-2 list-disc pl-5 text-sm text-slate-600 dark:text-slate-300">
              <li>Visit a doctor if symptoms persist or worsen.</li>
              <li>Seek immediate help for chest pain or breathing issues.</li>
            </ul>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
          Need trusted links? Visit the curated list in the resources page.
          <Link href="/resources" className="ml-2 font-semibold text-teal-700">
            View resources
          </Link>
        </div>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            3. Common pitfalls to avoid
          </h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
            <h3 className="text-base font-semibold">Avoid cyberchondria</h3>
            <ul className="mt-2 space-y-2 list-disc pl-5 text-sm text-slate-600 dark:text-slate-300">
              <li>Over-searching can lead to unnecessary stress.</li>
              <li>Not every headache indicates a serious illness.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
            <h3 className="text-base font-semibold">
              Be cautious of misinformation
            </h3>
            <ul className="mt-2 space-y-2 list-disc pl-5 text-sm text-slate-600 dark:text-slate-300">
              <li>Do not spread unverified health claims.</li>
              <li>Check multiple sources before trusting advice.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="glass-panel rounded-3xl p-6 text-sm text-slate-600 dark:text-slate-300">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          Final thoughts
        </h2>
        <p className="mt-2">
          The internet is powerful, but it is not a substitute for professional
          medical advice. Verify sources, research responsibly, and consult a
          doctor when in doubt.
        </p>
      </section>
    </div>
  );
}
