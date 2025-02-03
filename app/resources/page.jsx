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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Main Content */}
      <main className="p-6 max-w-4xl mx-auto">
        {/* Page Title */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
          <FiFolder className="text-blue-500 dark:text-blue-400 w-10 h-10" />
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-600 dark:text-gray-400">
              Resources
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold">
              Trusted Health Websites
            </h1>
          </div>
        </div>

        <p className="mt-4 text-lg max-w-prose">
          In today's digital world, having access to{" "}
          <strong>accurate and reliable health information</strong> is
          essential. Below are some{" "}
          <strong>trusted health organizations</strong> that provide
          expert-reviewed content to help you make informed decisions about your
          well-being.
        </p>

        {/* Resources List */}
        <ul className="mt-6 space-y-6">
          {resources.map((res, index) => (
            <li
              key={index}
              className="p-4 bg-white dark:bg-gray-800 shadow rounded-lg"
            >
              <a
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-xl font-semibold text-blue-600 dark:text-blue-300 hover:underline"
              >
                <FiExternalLink className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                {res.name}
              </a>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {res.description}
              </p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
