import { FiBookOpen, FiMail, FiUsers } from "react-icons/fi";

export default function About() {
  return (
    <div className="space-y-12">
      <section className="glass-panel rounded-3xl p-8 shadow-xl shadow-teal-500/10 dark:shadow-none">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-600 text-white">
            <FiBookOpen className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              About EduHealth
            </p>
            <h1 className="font-display text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
              Building smarter digital health habits
            </h1>
          </div>
        </div>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
          In a world full of online health content, knowing what to trust is a
          vital skill. EduHealth is a learning space that helps students and
          families evaluate information, avoid misinformation, and make safer
          decisions.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Why digital health literacy matters
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Digital health literacy is the ability to find, evaluate, and use
            health information from online sources. Strong literacy skills help
            people identify credible guidance and avoid harmful misinformation.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Making informed choices
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Online tools can support learning, but they should never replace
            professional medical advice. We teach how to verify sources and know
            when to seek care.
          </p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
            <FiUsers className="h-6 w-6 text-teal-600" />
            Our creators
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            EduHealth was built by students committed to accessible, trustworthy
            education. Our mission is to empower learners with practical health
            literacy tools.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
            <FiMail className="h-6 w-6 text-teal-600" />
            Contact us
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Questions or feedback? Reach out at:
          </p>
          <div className="mt-3 space-y-2 text-sm font-semibold text-teal-700">
            <a href="mailto:mariacecelausa@gmail.com" className="block">
              mariacecelausa@gmail.com
            </a>
            <a href="mailto:nicaerese158@gmail.com" className="block">
              nicaerese158@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
