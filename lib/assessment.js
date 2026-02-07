export const normalize = (text) => {
  if (text === null || text === undefined) {
    return "";
  }
  return String(text).trim().toLowerCase();
};

export const buildSymptomIndex = (symptomCatalog) => {
  const index = {
    en: new Map(),
    tl: new Map(),
  };

  const addTerm = (language, term, symptomId) => {
    const key = normalize(term);
    if (!key) {
      return;
    }
    const existing = index[language].get(key) || new Set();
    existing.add(symptomId);
    index[language].set(key, existing);
  };

  symptomCatalog.forEach((symptom) => {
    addTerm("en", symptom.label.en, symptom.id);
    addTerm("tl", symptom.label.tl, symptom.id);

    const enSynonyms = symptom.synonyms?.en || [];
    const tlSynonyms = symptom.synonyms?.tl || [];

    enSynonyms.forEach((term) => addTerm("en", term, symptom.id));
    tlSynonyms.forEach((term) => addTerm("tl", term, symptom.id));
  });

  return index;
};

const isSelectable = (symptom) => symptom.selectable !== false;

export const searchSymptoms = ({
  query,
  language,
  symptomCatalog,
  index,
  selectedSymptomIds,
}) => {
  const normalizedQuery = normalize(query);
  const selected = new Set(selectedSymptomIds || []);

  if (!normalizedQuery) {
    return symptomCatalog.filter(
      (symptom) => isSelectable(symptom) && !selected.has(symptom.id),
    );
  }

  const otherLanguage = language === "en" ? "tl" : "en";
  const matchedIds = new Set();
  const primaryIndex = index?.[language] || new Map();
  const secondaryIndex = index?.[otherLanguage] || new Map();

  const collectMatches = (termIndex) => {
    termIndex.forEach((symptomIds, term) => {
      if (term.includes(normalizedQuery)) {
        symptomIds.forEach((symptomId) => matchedIds.add(symptomId));
      }
    });
  };

  collectMatches(primaryIndex);
  collectMatches(secondaryIndex);

  return symptomCatalog.filter(
    (symptom) =>
      isSelectable(symptom) &&
      !selected.has(symptom.id) &&
      matchedIds.has(symptom.id),
  );
};

export const getTriage = ({ selectedSymptomIds, triageAnswers }) => {
  const selected = selectedSymptomIds || [];
  const chestPainSelected = selected.includes("chest_pain");
  const coughingBloodSelected = selected.includes("coughing_up_blood");
  const answers = triageAnswers || {};

  const isYes = (value) => value === true || value === "yes";

  const questions = [];

  if (chestPainSelected) {
    questions.push(
      {
        id: "chest_pain_duration",
        text: {
          en: "Severe chest pain lasting over 5 minutes?",
          tl: "Matinding pananakit ng dibdib na lampas sa 5 minuto?",
        },
      },
      {
        id: "chest_pain_breathing",
        text: {
          en: "Chest pain with difficulty breathing?",
          tl: "Paninikip ng dibdib na may hirap sa paghinga?",
        },
      },
      {
        id: "chest_pain_fainting",
        text: {
          en: "Fainted or passed out?",
          tl: "Nahimatay o nawalan ng malay?",
        },
      },
    );
  }

  if (coughingBloodSelected) {
    questions.push(
      {
        id: "coughing_blood_amount",
        text: {
          en: "Coughing up a lot of blood or bleeding will not stop?",
          tl: "Maraming dugo ang inuubo o hindi humihinto ang pagdurugo?",
        },
      },
      {
        id: "coughing_blood_breathing",
        text: {
          en: "Also having chest pain or breathing problems?",
          tl: "May kasamang sakit sa dibdib o hirap sa paghinga?",
        },
      },
    );
  }

  const anyEmergencyAnswer = questions.some((question) =>
    isYes(answers[question.id]),
  );

  let level = "routine";
  if ((chestPainSelected || coughingBloodSelected) && anyEmergencyAnswer) {
    level = "emergency";
  } else if (chestPainSelected || coughingBloodSelected) {
    level = "urgent";
  }

  const messages = {
    emergency: {
      en: coughingBloodSelected
        ? "Emergency warning: coughing up a lot of blood or bleeding that will not stop can be life-threatening. Call local emergency services or go to the nearest emergency department now."
        : "Emergency warning: chest pain with red-flag signs can be life-threatening. Call local emergency services or go to the nearest emergency department now.",
      tl: coughingBloodSelected
        ? "Babala sa emerhensiya: ang pag-ubo ng maraming dugo o pagdurugo na hindi humihinto ay maaaring maging delikado. Tumawag sa emergency services o magtungo sa pinakamalapit na emergency department ngayon."
        : "Babala sa emerhensiya: ang paninikip ng dibdib na may red-flag na sintomas ay maaaring maging delikado. Tumawag sa emergency services o magtungo sa pinakamalapit na emergency department ngayon.",
    },
    urgent: {
      en: coughingBloodSelected
        ? "Urgent guidance: coughing up blood should be evaluated promptly by a healthcare professional."
        : "Urgent guidance: chest pain should be evaluated promptly by a healthcare professional.",
      tl: coughingBloodSelected
        ? "Agarang gabay: ang pag-ubo ng dugo ay kailangang masuri agad ng propesyonal sa kalusugan."
        : "Agarang gabay: ang paninikip ng dibdib ay kailangang masuri agad ng propesyonal sa kalusugan.",
    },
    routine: {
      en: "Guidance only: review the possible related conditions below and seek professional advice if symptoms persist.",
      tl: "Gabay lamang: suriin ang mga posibleng kaugnay na kondisyon sa ibaba at kumunsulta kung nagpapatuloy ang mga sintomas.",
    },
  };

  const disclaimer = {
    en: "Not a diagnostic tool. Not for emergencies.",
    tl: "Hindi ito diagnostic tool. Hindi ito para sa emergency.",
  };

  const emergencyHelp = {
    en: "Seek emergency help for potentially life-threatening symptoms.",
    tl: "Humingi ng emergency na tulong para sa mga sintomas na maaaring magbanta sa buhay.",
  };

  return {
    level,
    message: messages[level],
    showQuestions: chestPainSelected || coughingBloodSelected,
    questions,
    disclaimer,
    emergencyHelp,
  };
};

export const scoreConditions = ({
  selectedSymptomIds,
  conditions,
  symptomCatalog,
}) => {
  const selectableIds = new Set(
    (symptomCatalog || [])
      .filter((symptom) => isSelectable(symptom))
      .map((symptom) => symptom.id),
  );
  const selected = new Set(
    (selectedSymptomIds || []).filter((id) =>
      selectableIds.size ? selectableIds.has(id) : true,
    ),
  );

  const results = conditions.map((condition) => {
    let score = 0;
    let matchedCount = 0;
    let matchedRequiredCount = 0;
    let missingRequiredCount = 0;
    const matchedSymptomIds = [];

    condition.evidence.forEach((evidence) => {
      const matched = selected.has(evidence.symptomId);
      if (matched) {
        score += evidence.weight;
        matchedCount += 1;
        matchedSymptomIds.push(evidence.symptomId);
        if (evidence.required) {
          score += 2;
          matchedRequiredCount += 1;
        }
      } else if (evidence.required) {
        missingRequiredCount += 1;
      }
    });

    if (missingRequiredCount > 0) {
      score -= missingRequiredCount * 2;
    }

    return {
      conditionId: condition.id,
      score,
      matchedCount,
      matchedRequiredCount,
      matchedSymptomIds,
    };
  });

  return results.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    if (b.matchedRequiredCount !== a.matchedRequiredCount) {
      return b.matchedRequiredCount - a.matchedRequiredCount;
    }
    return b.matchedCount - a.matchedCount;
  });
};
