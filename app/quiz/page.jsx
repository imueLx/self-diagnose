"use client";

import { useMemo, useState } from "react";
import { FiCheckCircle, FiClipboard, FiAlertCircle } from "react-icons/fi";

const scoringBands = [
  {
    min: 9,
    max: 10,
    title: "Advanced Practitioner",
    summary: "High literacy; strong clinical ethics.",
  },
  {
    min: 7,
    max: 8,
    title: "Proficient Student",
    summary: "Solid grasp; minor vulnerability to subtle bias.",
  },
  {
    min: 5,
    max: 6,
    title: "At-Risk Learner",
    summary: "Susceptible to cyberchondria; requires further training.",
  },
  {
    min: 0,
    max: 4,
    title: "High-Risk User",
    summary:
      "Vulnerable to misinformation; relies on search patterns over clinical judgment.",
  },
];

const questions = [
  {
    id: 1,
    question:
      "A nursing student follows a Health Influencer on social media who recommends a specific supplement to treat Brain Fog based on personal success. What is the most significant clinical risk of relying on this information?",
    options: [
      {
        label: "A",
        text: "The supplement might be more expensive than standard medications.",
      },
      {
        label: "B",
        text: "The information lacks clinical trial validation and fails to account for drug-supplement interactions.",
      },
      {
        label: "C",
        text: "The influencer may not have a high enough follower count.",
      },
      {
        label: "D",
        text: "The social media platform may have poor data privacy.",
      },
    ],
    correct: "B",
    rationale:
      "Influencer recommendations are anecdotal. Relying on them can mask serious underlying pathologies or cause dangerous biochemical interactions.",
  },
  {
    id: 2,
    question:
      "An online medical article cites a p-value of 0.04 to support a treatment. If a student only looks for this number to validate the claim, they are falling into:",
    options: [
      { label: "A", text: "Authority Bias" },
      { label: "B", text: "Currency Error" },
      { label: "C", text: "Reductionist Validation" },
      { label: "D", text: "Algorithmic Prioritization" },
    ],
    correct: "C",
    rationale:
      "Focusing on a single statistical value without considering methodology or clinical significance is a form of oversimplification.",
  },
  {
    id: 3,
    question:
      "A student starts a restrictive diet based on a forum post claiming leaky gut caused their fatigue. This is a failure to distinguish between:",
    options: [
      { label: "A", text: "Acute and chronic conditions." },
      { label: "B", text: "Primary and secondary sources." },
      { label: "C", text: "Subjective and objective data." },
      { label: "D", text: "Anecdotal evidence and evidence-based practice." },
    ],
    correct: "D",
    rationale:
      "Forum posts are anecdotes; they lack the peer-reviewed rigor required for evidence-based practice.",
  },
  {
    id: 4,
    question:
      "What describes a Type II Error in a digital health assessment tool for heart disease?",
    options: [
      {
        label: "A",
        text: "The tool says the user is high risk when they are healthy.",
      },
      {
        label: "B",
        text: "The tool fails to identify a high-risk condition that is actually present.",
      },
      {
        label: "C",
        text: "The tool provides a diagnosis for a different disease.",
      },
      { label: "D", text: "The student disagrees with the tool's assessment." },
    ],
    correct: "B",
    rationale:
      "A Type II Error (False Negative) is dangerous because it provides a false sense of security, delaying treatment.",
  },
  {
    id: 5,
    question:
      "A student researches tingling and only clicks on Multiple Sclerosis articles while ignoring Vitamin Deficiency. This is:",
    options: [
      { label: "A", text: "Availability Heuristic" },
      { label: "B", text: "The Halo Effect" },
      { label: "C", text: "Sunk Cost Fallacy" },
      { label: "D", text: "Confirmation Bias" },
    ],
    correct: "D",
    rationale:
      "Selectively seeking information that supports a specific fear is confirming a bias rather than performing a differential search.",
  },
  {
    id: 6,
    question:
      "Why should a student exercise caution even when using a high-quality .edu site?",
    options: [
      { label: "A", text: "They are used for marketing pharmaceuticals." },
      {
        label: "B",
        text: "High-quality info can be misapplied without clinical context.",
      },
      { label: "C", text: "The suffix indicates it is only for children." },
      { label: "D", text: "They are not required to provide accurate data." },
    ],
    correct: "B",
    rationale:
      "Correct info does not guarantee a correct self-diagnosis; professional interpretation is required to correlate data with a specific history.",
  },
  {
    id: 7,
    question:
      "If a student attempts to perform Pemberton's Sign on themselves based on a video, the primary risk is:",
    options: [
      {
        label: "A",
        text: "They may induce syncope (fainting) due to vascular compression.",
      },
      { label: "B", text: "The video resolution may be too low." },
      { label: "C", text: "They might trust the video based on view counts." },
      { label: "D", text: "They might forget the name of the sign." },
    ],
    correct: "A",
    rationale:
      "Maneuvers involving vascular compression can lead to injury if performed without professional supervision.",
  },
  {
    id: 8,
    question: "In the CRAAP test, why is the Purpose section vital?",
    options: [
      { label: "A", text: "To ensure the information is entertaining." },
      { label: "B", text: "To decide where to post findings on social media." },
      {
        label: "C",
        text: "To identify potential conflicts of interest or commercial bias.",
      },
      { label: "D", text: "To determine the reading level." },
    ],
    correct: "C",
    rationale:
      "Understanding the why behind a site helps identify if advice is based on science or the intent to generate profit.",
  },
  {
    id: 9,
    question:
      "How does Medical Student's Disease (Cyberchondria) impact clinical judgment?",
    options: [
      { label: "A", text: "It improves empathy." },
      {
        label: "B",
        text: "It leads to diagnostic overshadowing where the nurse's fears interfere with objective assessment.",
      },
      { label: "C", text: "It increases documentation speed." },
      { label: "D", text: "It has no impact." },
    ],
    correct: "B",
    rationale:
      "Preoccupation with one's own self-diagnosed fears can cause a nurse to project anxiety onto patients with similar presentations.",
  },
  {
    id: 10,
    question:
      "Which Accuracy check is most difficult for an anonymous patient report on a wiki?",
    options: [
      { label: "A", text: "Checking spelling or grammar." },
      { label: "B", text: "Verifying findings against literature." },
      {
        label: "C",
        text: "Confirming the authenticity of the patient's existence or history.",
      },
      { label: "D", text: "Finding the privacy policy." },
    ],
    correct: "C",
    rationale:
      "Anonymous reports cannot be verified for truthfulness, making them the lowest tier of evidence.",
  },
];

const reflectionNotes = [
  {
    title: "Clinical Reasoning vs. Pattern Matching",
    text: "Digital tools use algorithms; nurses use clinical reasoning. A website cannot see the whole patient.",
  },
  {
    title: "The Red Flag Hierarchy",
    text: "Prioritize .gov and .edu sites. Be wary of .com sites with heavy advertising or influencers using anecdotal miracle claims.",
  },
  {
    title: "Ethical Self-Care",
    text: "If studying a condition causes significant health anxiety, step away from digital research and consult a professional in person.",
  },
];

function getScoreBand(score) {
  return scoringBands.find((band) => score >= band.min && score <= band.max);
}

export default function QuizPage() {
  const [answers, setAnswers] = useState(() =>
    Array.from({ length: questions.length }, () => ""),
  );
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const answeredCount = useMemo(
    () => answers.filter((answer) => answer).length,
    [answers],
  );

  const score = useMemo(() => {
    return answers.reduce((total, answer, index) => {
      return total + (answer === questions[index].correct ? 1 : 0);
    }, 0);
  }, [answers]);

  const scoreBand = useMemo(() => getScoreBand(score), [score]);
  const isIncomplete = answeredCount !== questions.length;

  const handleSubmit = () => {
    if (isIncomplete) {
      setError("Please answer all questions before submitting.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers(Array.from({ length: questions.length }, () => ""));
    setSubmitted(false);
    setError("");
  };

  return (
    <div className="space-y-10">
      <section className="glass-panel rounded-3xl p-8 shadow-xl shadow-teal-500/10 dark:shadow-none">
        <div className="flex items-center gap-3">
          <FiClipboard className="h-10 w-10 text-teal-600" />
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Risk Assessment Quiz
            </p>
            <h1 className="font-display text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
              Advanced Risk Assessment Quiz
            </h1>
          </div>
        </div>
        <p className="mt-4 max-w-3xl text-sm text-slate-600 dark:text-slate-300">
          Test your digital health literacy with scenario-based questions. The
          quiz focuses on clinical risk awareness, source evaluation, and safe
          research habits.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:border-slate-800 dark:bg-slate-900/70">
            {answeredCount}/{questions.length} answered
          </span>
          <span className="text-xs text-slate-400">
            Submit to see your score and feedback.
          </span>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Scoring guide
        </h2>
        <div className="grid gap-4 lg:grid-cols-4">
          {scoringBands.map((band) => (
            <div
              key={band.title}
              className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                {band.min}-{band.max}
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                {band.title}
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {band.summary}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Quiz questions
        </h2>
        <div className="space-y-6">
          {questions.map((question, index) => {
            const selected = answers[index];
            const isCorrect = submitted && selected === question.correct;
            const isWrong =
              submitted && selected && selected !== question.correct;

            return (
              <div
                key={question.id}
                className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <p className="text-sm font-semibold text-teal-700">
                    Question {question.id}
                  </p>
                  {submitted && (
                    <span
                      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
                        isCorrect
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-rose-100 text-rose-700"
                      }`}
                    >
                      {isCorrect ? "Correct" : "Needs review"}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-base text-slate-900 dark:text-white">
                  {question.question}
                </p>
                <div className="mt-4 grid gap-3">
                  {question.options.map((option) => {
                    const active = selected === option.label;
                    return (
                      <label
                        key={option.label}
                        className={`flex cursor-pointer items-start gap-3 rounded-2xl border px-4 py-3 text-sm transition ${
                          active
                            ? "border-teal-500 bg-teal-50 text-teal-800"
                            : "border-slate-200 bg-white/80 text-slate-700 hover:border-slate-300"
                        } dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200`}
                      >
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value={option.label}
                          checked={selected === option.label}
                          onChange={() => {
                            if (!submitted) {
                              setAnswers((prev) => {
                                const next = [...prev];
                                next[index] = option.label;
                                return next;
                              });
                            }
                          }}
                          disabled={submitted}
                          className="mt-1 h-4 w-4"
                        />
                        <span className="font-semibold">{option.label}.</span>
                        <span className="text-sm text-slate-600 dark:text-slate-300">
                          {option.text}
                        </span>
                      </label>
                    );
                  })}
                </div>
                {submitted && (
                  <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-300">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      Correct answer: {question.correct}
                    </p>
                    <p className="mt-1">{question.rationale}</p>
                  </div>
                )}
                {isWrong && (
                  <div className="mt-3 flex items-center gap-2 text-xs text-rose-600">
                    <FiAlertCircle className="h-4 w-4" />
                    Review the rationale before moving on.
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleSubmit}
            className="inline-flex items-center justify-center rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/30 transition hover:bg-teal-500"
          >
            Submit answers
          </button>
          <button
            onClick={handleReset}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-white/70 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900"
          >
            Reset quiz
          </button>
          {error && <span className="text-sm text-rose-600">{error}</span>}
        </div>

        {submitted && scoreBand && (
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
            <div className="flex items-center gap-3">
              <FiCheckCircle className="h-6 w-6 text-emerald-500" />
              <div>
                <p className="text-sm text-slate-500">Your score</p>
                <p className="text-2xl font-semibold text-slate-900 dark:text-white">
                  {score}/{questions.length}
                </p>
              </div>
            </div>
            <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800 dark:border-emerald-900/60 dark:bg-emerald-950/60 dark:text-emerald-200">
              <p className="text-sm font-semibold">{scoreBand.title}</p>
              <p className="mt-1">{scoreBand.summary}</p>
            </div>
          </div>
        )}
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Educational reflection notes
        </h2>
        <div className="grid gap-4 lg:grid-cols-3">
          {reflectionNotes.map((note) => (
            <div
              key={note.title}
              className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
            >
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                {note.title}
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {note.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
