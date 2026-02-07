import { FiAlertTriangle } from "react-icons/fi";

export default function Risks() {
  return (
    <div className="space-y-10">
      <section className="glass-panel rounded-3xl p-8 shadow-xl shadow-amber-500/10 dark:shadow-none">
        <div className="flex items-center gap-3">
          <FiAlertTriangle className="h-10 w-10 text-amber-500" />
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Risks & Safety
            </p>
            <h1 className="font-display text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
              Understand the risks of self-diagnosis
            </h1>
          </div>
        </div>
        <p className="mt-4 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          The internet provides endless health information, but relying on
          self-diagnosis can lead to incorrect conclusions and unnecessary
          anxiety. Here are the most common risks to look out for.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Dangers of self-diagnosing
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              Incorrect diagnoses
            </p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Symptoms can overlap. Chest pain may signal heart disease, but it
              could also be anxiety or acid reflux.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              Increased anxiety
            </p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Online searches often highlight worst-case scenarios, triggering
              stress and fear.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              Delayed professional help
            </p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Self-diagnosing can delay care, allowing conditions to worsen.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              Overuse of medication
            </p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Misdiagnosis can lead to unsafe self-medicating and side effects.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm md:col-span-2 dark:border-slate-800 dark:bg-slate-900/70">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              Misinformation spread
            </p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Sharing unverified health information can mislead others and
              increase public health risks.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          How to stay informed safely
        </h2>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
          Instead of self-diagnosing, consider these safer alternatives:
        </p>
        <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300 list-disc pl-5">
          <li>Consult a healthcare professional for an accurate diagnosis.</li>
          <li>Use trusted health websites like WHO, CDC, or Mayo Clinic.</li>
          <li>Keep a symptom journal to share with your doctor.</li>
          <li>Avoid self-medicating without professional advice.</li>
        </ul>
        <p className="mt-4 text-sm font-semibold text-slate-900 dark:text-white">
          When in doubt, always seek medical guidance from professionals.
        </p>
      </section>
    </div>
  );
}
