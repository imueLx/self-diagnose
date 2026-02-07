export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/70">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-10 md:grid-cols-3">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
            EduHealth
          </p>
          <p className="mt-3 text-lg font-semibold text-slate-900 dark:text-slate-100">
            Digital health literacy for confident decisions.
          </p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Learn to evaluate online information, build healthy habits, and know
            when to seek professional care.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            Explore
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li>
              <a className="hover:text-teal-600" href="/guide">
                Health Guide
              </a>
            </li>
            <li>
              <a className="hover:text-teal-600" href="/risks">
                Risks & Safety
              </a>
            </li>
            <li>
              <a className="hover:text-teal-600" href="/resources">
                Trusted Resources
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            Quick Start
          </p>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
            Start a learning session with the symptom assessment tool.
          </p>
          <a
            href="/checker"
            className="mt-4 inline-flex items-center rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-500"
          >
            Begin Assessment
          </a>
        </div>
      </div>
      <div className="border-t border-slate-200/70 py-4 text-center text-xs text-slate-500 dark:border-slate-800/70">
        © 2026 EduHealth. All rights reserved.
      </div>
    </footer>
  );
}
