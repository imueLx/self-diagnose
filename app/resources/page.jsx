import { FiExternalLink, FiFolder } from "react-icons/fi";

const resources = [
  {
    name: "Centers for Disease Control and Prevention (CDC)",
    url: "https://www.cdc.gov",
    description:
      "Provides up-to-date public health information, including disease prevention, vaccinations, and travel health advisories.",
  },
  {
    name: "Department of Health (DOH)",
    url: "https://www.doh.gov.ph",
    description:
      "The official health agency of the Philippines, offering updates on national health programs, policies, and disease outbreaks.",
  },
  {
    name: "MedlinePlus",
    url: "https://medlineplus.gov",
    description:
      "A trusted source for medical information, covering conditions, medications, and wellness topics in easy-to-understand language.",
  },
  {
    name: "World Health Organization (WHO)",
    url: "https://www.who.int",
    description:
      "Global health authority providing reports, guidelines, and statistics on international health issues, pandemics, and wellness.",
  },
  {
    name: "Mayo Clinic",
    url: "https://www.mayoclinic.org",
    description:
      "A nonprofit medical organization known for expert-reviewed health articles, symptoms guides, and disease management resources.",
  },
];

export default function Resources() {
  return (
    <div className="space-y-10">
      <section className="glass-panel rounded-3xl p-8 shadow-xl shadow-teal-500/10 dark:shadow-none">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-600 text-white">
            <FiFolder className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Resources
            </p>
            <h1 className="font-display text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
              Trusted health websites
            </h1>
          </div>
        </div>
        <p className="mt-4 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          Access to accurate and reliable health information is essential. Below
          are trusted organizations that provide expert-reviewed guidance to
          support safer decisions.
        </p>
      </section>

      <ul className="grid gap-6 lg:grid-cols-2">
        {resources.map((res, index) => (
          <li
            key={index}
            className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/70"
          >
            <a
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg font-semibold text-slate-900 transition hover:text-teal-600 dark:text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 dark:bg-teal-950/60 dark:text-teal-300">
                <FiExternalLink className="h-5 w-5" />
              </span>
              {res.name}
            </a>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              {res.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
