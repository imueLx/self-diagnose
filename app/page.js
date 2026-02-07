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
    <div className="space-y-16">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:border-slate-800 dark:bg-slate-900">
            Digital Health Literacy Hub
          </span>
          <h1 className="font-display text-4xl font-semibold leading-tight text-slate-900 dark:text-white md:text-5xl">
            Confident care starts with trustworthy information.
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            EduHealth helps you evaluate online health content, understand
            symptoms with care, and build habits that keep decisions grounded in
            evidence.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/checker"
              className="inline-flex items-center justify-center rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/30 transition hover:bg-teal-500"
            >
              Start the assessment
            </Link>
            <Link
              href="/guide"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-white/70 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900"
            >
              Explore the guide
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
              <p className="text-sm text-slate-500">Verified sources</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
                20+
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
              <p className="text-sm text-slate-500">Learning modules</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
                8
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
              <p className="text-sm text-slate-500">Languages</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
                EN + TL
              </p>
            </div>
          </div>
        </div>
        <div className="glass-panel rounded-3xl p-6 shadow-xl shadow-teal-500/10 dark:shadow-none">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-600 text-white">
              <FaHeartbeat size={22} />
            </div>
            <div>
              <p className="text-sm text-slate-500">Learning focus</p>
              <p className="text-lg font-semibold text-slate-900 dark:text-white">
                Digital health clarity
              </p>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl bg-white/80 p-4 shadow-sm dark:bg-slate-900/70">
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                Assess before you accept
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Learn to spot misleading headlines, missing citations, and
                outdated advice.
              </p>
            </div>
            <div className="rounded-2xl bg-white/80 p-4 shadow-sm dark:bg-slate-900/70">
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                Build safer next steps
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Use checklists to decide when to self-care, research more, or
                see a professional.
              </p>
            </div>
            <div className="rounded-2xl bg-white/80 p-4 shadow-sm dark:bg-slate-900/70">
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                Practice with confidence
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                The symptom checker helps you learn patterns, not replace
                medical care.
              </p>
            </div>
          </div>
          <div className="mt-6 rounded-2xl border border-teal-200 bg-teal-50 p-4 text-sm text-teal-800 dark:border-teal-900/60 dark:bg-teal-950/60 dark:text-teal-200">
            &ldquo;Health is wealth. Invest in yourself with reliable
            guidance.&rdquo;
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
          <FaBook className="text-2xl text-teal-600" />
          <h2 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
            Evaluate sources
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Compare author credentials, evidence strength, and update dates to
            avoid misinformation.
          </p>
          <Link
            href="/guide"
            className="mt-4 inline-flex text-sm font-semibold text-teal-700"
          >
            Read the guide
          </Link>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
          <FaExclamationTriangle className="text-2xl text-amber-500" />
          <h2 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
            Understand risks
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Learn the common pitfalls of self-diagnosis and how to avoid
            unnecessary anxiety.
          </p>
          <Link
            href="/risks"
            className="mt-4 inline-flex text-sm font-semibold text-amber-600"
          >
            Learn about safety
          </Link>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
          <FaShieldAlt className="text-2xl text-cyan-600" />
          <h2 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
            Verify resources
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Save trusted links and checklists to guide your next search.
          </p>
          <Link
            href="/resources"
            className="mt-4 inline-flex text-sm font-semibold text-cyan-700"
          >
            Explore resources
          </Link>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            How the assessment works
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Practice structured thinking with quick steps before making any
            health decisions.
          </p>
          <ol className="mt-6 space-y-4">
            {[
              "Choose symptoms",
              "Review possible matches",
              "Read the brief",
              "Check trusted resources",
            ].map((step, index) => (
              <li
                key={step}
                className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-200"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-teal-600 via-cyan-600 to-slate-900 p-8 text-white shadow-xl">
          <div className="flex items-center gap-3">
            <FaStethoscope size={26} />
            <p className="text-sm uppercase tracking-[0.2em] text-white/70">
              Symptom Checker
            </p>
          </div>
          <h3 className="mt-4 text-3xl font-semibold">Practice with purpose</h3>
          <p className="mt-3 text-sm text-white/80">
            Use our interactive tool to learn how symptoms relate to conditions
            and discover reliable next steps.
          </p>
          <Link
            href="/checker"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-black/10"
          >
            Use the symptom checker
          </Link>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
              Trusted by learners
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
              Learn with reliable health institutions
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {["WHO", "CDC", "DOH", "Mayo Clinic", "MedlinePlus"].map(
              (label) => (
                <span
                  key={label}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  {label}
                </span>
              ),
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
