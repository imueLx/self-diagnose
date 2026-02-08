import Link from "next/link";
import { FiCompass, FiInfo, FiAlertTriangle } from "react-icons/fi";

const criteria = [
  {
    name: "Currency",
    focus: "Timeliness",
    question:
      "Has this medical data been updated within the last 3-5 years to reflect current clinical guidelines?",
  },
  {
    name: "Relevance",
    focus: "Importance",
    question:
      "Does this information specifically address the clinical case, or is it too generalized for professional use?",
  },
  {
    name: "Authority",
    focus: "Source",
    question:
      "Is the author a licensed clinician (MD, RN, NP) or a reputable medical institution (CDC, WHO, NIH)?",
  },
  {
    name: "Accuracy",
    focus: "Reliability",
    question:
      "Is the content supported by peer-reviewed citations and verifiable clinical evidence?",
  },
  {
    name: "Purpose",
    focus: "Intent",
    question:
      "Is the site providing objective education, or is it attempting to sell a product or persuade a viewpoint?",
  },
];

const frameworkNotes = [
  "A foundational tool used within the educational website to help nursing students verify sources.",
  "Stands for Currency, Relevance, Authority, Accuracy, and Purpose.",
  "Use it before sharing, saving, or acting on online medical information.",
];

const redFlags = [
  "Outdated timestamps (Currency).",
  "Authors with no medical background (Authority).",
  "Websites primarily designed to sell supplements (Purpose).",
  "Claims without citations or clinical evidence (Accuracy).",
];

export default function CraapPage() {
  return (
    <div className="space-y-10">
      <section className="glass-panel rounded-3xl p-8 shadow-xl shadow-teal-500/10 dark:shadow-none">
        <div className="flex items-center gap-3">
          <FiCompass className="h-10 w-10 text-teal-600" />
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              CRAAP Test
            </p>
            <h1 className="font-display text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
              Evaluate health sources with confidence
            </h1>
          </div>
        </div>
        <p className="mt-4 max-w-3xl text-sm text-slate-600 dark:text-slate-300">
          The CRAAP Test is a simple, reliable framework for assessing online
          medical information. It helps learners slow down, verify evidence, and
          avoid misinformation.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Origin and development
          </h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
            The CRAAP Test was developed in 2004 by Sarah Blakeslee and a team
            of librarians at California State University, Chico (CSU Chico). It
            was designed as an easy-to-remember toolkit for evaluating the flood
            of information on the internet.
          </p>
          <div className="mt-4 rounded-2xl border border-teal-200 bg-teal-50 p-4 text-sm text-teal-800 dark:border-teal-900/60 dark:bg-teal-950/60 dark:text-teal-200">
            Try the scenarios in the
            <Link
              href="/quiz"
              className="ml-2 font-semibold text-teal-700 underline"
            >
              risk assessment quiz
            </Link>
            .
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            CRAAP Test overview
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300 list-disc pl-5">
            {frameworkNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          The five criteria
        </h2>
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
          <div className="grid gap-4 text-sm text-slate-600 dark:text-slate-300">
            <div className="grid gap-4 border-b border-slate-200 pb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:border-slate-800 sm:grid-cols-[1fr_1fr_2fr]">
              <span>Criteria</span>
              <span>Focus area</span>
              <span>Nursing students' critical question</span>
            </div>
            {criteria.map((item) => (
              <div
                key={item.name}
                className="grid gap-3 rounded-2xl border border-slate-200/70 bg-slate-50 px-4 py-4 dark:border-slate-800 dark:bg-slate-950/60 sm:grid-cols-[1fr_1fr_2fr]"
              >
                <p className="font-semibold text-slate-900 dark:text-white">
                  {item.name}
                </p>
                <p>{item.focus}</p>
                <p>{item.question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
          <div className="flex items-center gap-2">
            <FiAlertTriangle className="h-5 w-5 text-amber-500" />
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Signs and symptoms (red flags)
            </h2>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300 list-disc pl-5">
            {redFlags.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
          <div className="flex items-center gap-2">
            <FiInfo className="h-5 w-5 text-teal-600" />
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Reminder for learners
            </h2>
          </div>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
            Just because a medical website looks professional or appears as the
            first result on a search engine does not mean its content is
            clinically accurate or peer-reviewed.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white/90 p-6 text-sm text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
        <p>
          Kampen, K. V. (2025). Library Guides: Evaluating Resources and
          Misinformation: CRAAP Test. Retrieved from{" "}
          <a
            href="https://guides.lib.uchicago.edu/c.php?g=1241077&p=9082343"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-teal-700"
          >
            guides.lib.uchicago.edu
          </a>
          .
        </p>
      </section>
    </div>
  );
}
