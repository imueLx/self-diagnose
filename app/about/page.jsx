import { FiBookOpen, FiMail, FiUsers } from "react-icons/fi";

export default function About() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-900 dark:text-gray-100">
      {/* Page Title */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
        <FiBookOpen className="text-blue-500 dark:text-blue-400 w-10 h-10" />
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-600 dark:text-gray-400">
            About
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold">
            Digital Health Literacy
          </h1>
        </div>
      </div>

      <p className="mt-4 text-base sm:text-lg leading-relaxed max-w-prose">
        In today’s digital age, access to health information is easier than
        ever. However, misinformation and self-diagnosis can lead to unnecessary
        anxiety or improper treatment. Understanding how to evaluate online
        health resources is crucial.
      </p>

      {/* Section: Importance */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">
          The Importance of Digital Health Literacy
        </h2>
        <p className="mt-2 text-base leading-relaxed max-w-prose">
          Digital health literacy is the ability to find, evaluate, and
          effectively use health information from online sources. Those with
          strong digital literacy skills can make more informed health decisions
          and avoid unreliable or misleading content.
        </p>
      </section>

      {/* Section: Making Informed Choices */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">
          Making Informed Health Choices
        </h2>
        <p className="mt-2 text-base leading-relaxed max-w-prose">
          Many individuals rely on online symptom checkers and forums before
          consulting a doctor. While these tools can offer guidance, they should
          not replace professional medical advice. Learning how to differentiate
          credible health sources from misinformation can help individuals make
          safer, more accurate health decisions.
        </p>
      </section>

      {/* Section: About the Creators */}
      <section className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <FiUsers className="text-blue-500 dark:text-blue-400 w-8 h-8" />
          About the Creators
        </h2>
        <p className="mt-2 text-base leading-relaxed max-w-prose">
          This website was created by a team of dedicated students passionate
          about improving digital health literacy. Our goal is to provide
          reliable and accessible health information to everyone.
        </p>
      </section>

      {/* Section: Contact Us */}
      <section className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <FiMail className="text-blue-500 dark:text-blue-400 w-8 h-8" />
          Contact Us
        </h2>
        <p className="mt-2 text-base leading-relaxed max-w-prose">
          If you have any questions or feedback, please feel free to reach out
          to us at:{" "}
          <a
            href="mailto:mariacecelausa@gmail.com"
            className="text-blue-500 dark:text-blue-400 underline"
          >
            mariacecelausa@gmail.com
          </a>
          <br />
          <a
            href="mailto:nicaerese158@gmail.com"
            className="text-blue-500 dark:text-blue-400 underline"
          >
            nicaerese158@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
}
