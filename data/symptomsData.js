export const symptomCatalog = [
  {
    id: "chest_pain",
    label: { en: "Chest pain", tl: "Sakit ng dibdib" },
    synonyms: {
      en: ["angina"],
      tl: ["Pananakit ng dibdib", "Paninikip ng dibdib"],
    },
    redFlag: true,
  },
  {
    id: "shortness_of_breath",
    label: { en: "Shortness of breath", tl: "Hirap sa paghinga" },
    synonyms: { tl: ["Hirap huminga"] },
  },
  { id: "fatigue", label: { en: "Fatigue", tl: "Pagkapagod" } },
  {
    id: "heart_palpitations",
    label: { en: "Heart palpitations", tl: "Palpitasyon ng puso" },
  },
  {
    id: "nausea",
    label: { en: "Nausea", tl: "Pagduduwal" },
    synonyms: { tl: ["Pagsusuka"] },
  },
  {
    id: "asymptomatic",
    label: { en: "Often asymptomatic", tl: "Madalas walang sintomas" },
    selectable: false,
  },
  { id: "headache", label: { en: "Headaches", tl: "Sakit ng ulo" } },
  {
    id: "dizziness",
    label: { en: "Dizziness", tl: "Pagkahilo (nahihilo)" },
    synonyms: { tl: ["Nahihilo", "Pagkahilo"] },
  },
  {
    id: "blurred_vision",
    label: { en: "Blurred vision", tl: "Malabong paningin" },
  },
  { id: "nosebleeds", label: { en: "Nosebleeds", tl: "Pagdurugo ng ilong" } },
  { id: "high_fever", label: { en: "High fever", tl: "Mataas na lagnat" } },
  {
    id: "severe_headache",
    label: { en: "Severe headache", tl: "Matinding sakit ng ulo" },
  },
  {
    id: "pain_behind_eyes",
    label: { en: "Pain behind the eyes", tl: "Sakit sa likod ng mata" },
  },
  {
    id: "joint_muscle_pain",
    label: {
      en: "Joint/muscle pain",
      tl: "Pananakit ng kasu-kasuan/muscle",
    },
  },
  { id: "rash", label: { en: "Rash", tl: "Pantal" } },
  {
    id: "increased_thirst",
    label: { en: "Increased thirst", tl: "Laging nauuhaw" },
  },
  {
    id: "frequent_urination",
    label: { en: "Frequent urination", tl: "Madalas na pag-ihi" },
  },
  {
    id: "extreme_fatigue",
    label: { en: "Extreme fatigue", tl: "Matinding pagkapagod" },
  },
  {
    id: "slow_healing_wounds",
    label: { en: "Slow-healing wounds", tl: "Mabagal na paggaling ng sugat" },
  },
  {
    id: "persistent_cough",
    label: {
      en: "Persistent cough (lasting more than three weeks)",
      tl: "Paulit-ulit na ubo (higit sa tatlong linggo)",
    },
  },
  {
    id: "coughing_up_blood",
    label: { en: "Coughing up blood", tl: "Pag-ubo ng dugo" },
    redFlag: true,
  },
  { id: "weight_loss", label: { en: "Weight loss", tl: "Pagbaba ng timbang" } },
  { id: "fever", label: { en: "Fever", tl: "Lagnat" } },
  { id: "night_sweats", label: { en: "Night sweats", tl: "Pawis sa gabi" } },
  {
    id: "chronic_cough",
    label: { en: "Chronic cough", tl: "Matagalang ubo" },
  },
  { id: "wheezing", label: { en: "Wheezing", tl: "Paghinga na may tunog" } },
  {
    id: "chest_tightness",
    label: { en: "Chest tightness", tl: "Paninikip ng dibdib (tightness)" },
  },
  {
    id: "frequent_respiratory_infections",
    label: {
      en: "Frequent respiratory infections",
      tl: "Madalas na impeksyon sa baga",
    },
  },
  {
    id: "swelling_legs_ankles",
    label: {
      en: "Swelling in legs or ankles",
      tl: "Pamamaga ng mga binti o bukung-bukong",
    },
  },
  {
    id: "changes_urination",
    label: {
      en: "Changes in urination patterns (frequency or color)",
      tl: "Pagbabago sa pag-ihi (dalas o kulay)",
    },
  },
  { id: "back_pain", label: { en: "Back pain", tl: "Sakit sa likod" } },
  {
    id: "jaundice",
    label: {
      en: "Jaundice (yellowing of skin/eyes)",
      tl: "Paninilaw ng balat o mata",
    },
  },
  {
    id: "abdominal_pain_swelling",
    label: {
      en: "Abdominal pain or swelling",
      tl: "Panakit o pamamaga ng tiyan",
    },
  },
  {
    id: "chronic_fatigue",
    label: { en: "Chronic fatigue", tl: "Madalas na pagkapagod" },
  },
  { id: "dark_urine", label: { en: "Dark urine", tl: "Maitim na ihi" } },
  {
    id: "muscle_pain",
    label: { en: "Muscle pain", tl: "Pananakit ng kalamnan" },
  },
  {
    id: "redness_eyes",
    label: { en: "Redness of the eyes", tl: "Pamumula ng mga mata" },
  },
  { id: "chills", label: { en: "Chills", tl: "Panginginig" } },
  { id: "vomiting", label: { en: "Vomiting", tl: "Pagsusuka" } },
  {
    id: "heartburn",
    label: { en: "Heartburn", tl: "Pangangasim ng sikmura" },
  },
  {
    id: "regurgitation",
    label: { en: "Regurgitation", tl: "Pag-akyat ng pagkain o asido" },
  },
  {
    id: "difficulty_swallowing",
    label: { en: "Difficulty swallowing", tl: "Hirap sa paglunok" },
  },
  { id: "coughing", label: { en: "Coughing", tl: "Ubo" } },
  {
    id: "sore_throat",
    label: { en: "Sore throat", tl: "Masakit na lalamunan" },
  },
  {
    id: "runny_stuffy_nose",
    label: { en: "Runny or stuffy nose", tl: "Baradong ilong o sipon" },
  },
  {
    id: "difficulty_breathing",
    label: { en: "Difficulty breathing", tl: "Hirap huminga" },
    synonyms: { tl: ["Hirap sa paghinga"] },
  },
];

export const conditions = [
  {
    id: "ischemic-heart-disease",
    name: { en: "Ischemic heart disease", tl: "Ischemic heart disease" },
    brief: {
      en: "This condition arises from reduced blood flow to the heart, often due to plaque buildup in the arteries.",
      tl: "Ang kundisyong ito ay sanhi ng nabawasang daloy ng dugo sa puso, kadalasang dahil sa pagbuo ng plake sa mga ugat.",
    },
    severity: { en: "Severe", tl: "Malubha" },
    reminder: {
      en: "These symptoms can vary; consult a healthcare provider for an accurate diagnosis.",
      tl: "Maaaring magbago ang mga sintomas na ito; kumunsulta sa isang doktor para sa tamang pagsusuri.",
    },
    doctors: {
      Cardiologist: {
        en: "Specializes in heart conditions and manages blood flow issues.",
        tl: "Dalubhasa sa mga sakit sa puso at namamahala sa mga isyu ng daloy ng dugo.",
      },
      "General Practitioner": {
        en: "Can evaluate symptoms and provide referrals if necessary.",
        tl: "Maaaring suriin ang mga sintomas at magbigay ng referral kung kinakailangan.",
      },
    },
    evidence: [
      { symptomId: "chest_pain", weight: 5, required: true },
      { symptomId: "shortness_of_breath", weight: 3 },
      { symptomId: "fatigue", weight: 2 },
      { symptomId: "heart_palpitations", weight: 2 },
      { symptomId: "nausea", weight: 1 },
    ],
    urgentAnyOf: ["chest_pain"],
  },
  {
    id: "hypertension",
    name: { en: "Hypertension", tl: "Hypertension" },
    brief: {
      en: "Known as high blood pressure, hypertension is a chronic condition that can lead to severe health complications if untreated.",
      tl: "Kilala bilang mataas na presyon ng dugo, ang hypertension ay isang talamak na kondisyon na maaaring humantong sa malubhang komplikasyon sa kalusugan kung hindi maagapan.",
    },
    severity: { en: "Moderate", tl: "Katamtaman" },
    reminder: {
      en: "Regular monitoring is essential; seek medical advice if you experience symptoms.",
      tl: "Mahalaga ang regular na pagsubaybay; kumunsulta sa doktor kung may nararamdamang sintomas.",
    },
    doctors: {
      Cardiologist: {
        en: "Manages blood pressure and reduces risk of heart-related complications.",
        tl: "Namamahala sa presyon ng dugo at binabawasan ang panganib ng komplikasyon sa puso.",
      },
      "General Practitioner": {
        en: "Provides routine blood pressure checks and treatment options.",
        tl: "Nagbibigay ng regular na pagsusuri ng presyon ng dugo at mga opsyon sa paggamot.",
      },
    },
    evidence: [
      { symptomId: "asymptomatic", weight: 2 },
      { symptomId: "headache", weight: 2 },
      { symptomId: "dizziness", weight: 2 },
      { symptomId: "blurred_vision", weight: 3 },
      { symptomId: "nosebleeds", weight: 2 },
    ],
  },
  {
    id: "dengue-fever",
    name: { en: "Dengue fever", tl: "Dengue fever" },
    brief: {
      en: "A mosquito-borne viral infection that can lead to severe flu-like symptoms.",
      tl: "Isang impeksyon mula sa lamok na maaaring magdulot ng malubhang sintomas na parang trangkaso.",
    },
    severity: { en: "Severe", tl: "Malubha" },
    reminder: {
      en: "If you suspect dengue fever due to mosquito exposure, seek medical attention immediately.",
      tl: "Kung pinaghihinalaan mong may dengue dahil sa pagkakagat ng lamok, agad na kumunsulta sa doktor.",
    },
    doctors: {
      "Infectious Disease Specialist": {
        en: "Specializes in diagnosing and treating viral infections like dengue.",
        tl: "Dalubhasa sa pagsusuri at paggamot ng mga impeksyon sa virus tulad ng dengue.",
      },
      "General Practitioner": {
        en: "Can assess symptoms and recommend initial supportive treatment.",
        tl: "Maaaring suriin ang mga sintomas at magbigay ng unang hakbang sa paggamot.",
      },
    },
    evidence: [
      { symptomId: "high_fever", weight: 5, required: true },
      { symptomId: "severe_headache", weight: 4 },
      { symptomId: "pain_behind_eyes", weight: 4, required: true },
      { symptomId: "joint_muscle_pain", weight: 3 },
      { symptomId: "rash", weight: 3 },
    ],
  },
  {
    id: "diabetes-mellitus",
    name: { en: "Diabetes mellitus", tl: "Diabetes mellitus" },
    brief: {
      en: "A chronic condition characterized by high blood sugar levels due to insulin issues.",
      tl: "Isang talamak na kondisyon na may mataas na antas ng asukal sa dugo dahil sa problema sa insulin.",
    },
    severity: { en: "Moderate", tl: "Katamtaman" },
    reminder: {
      en: "Consult a healthcare provider for blood sugar testing and management strategies.",
      tl: "Kumunsulta sa doktor para sa pagsusuri ng asukal sa dugo at mga estratehiya sa pangangasiwa nito.",
    },
    doctors: {
      Endocrinologist: {
        en: "Specializes in hormonal disorders, including diabetes management.",
        tl: "Dalubhasa sa mga sakit sa hormones, kabilang ang pangangasiwa ng diabetes.",
      },
      "General Practitioner": {
        en: "Provides initial diagnosis and can offer lifestyle guidance.",
        tl: "Nagbibigay ng paunang pagsusuri at maaaring magbigay ng gabay sa pamumuhay.",
      },
    },
    evidence: [
      { symptomId: "increased_thirst", weight: 4, required: true },
      { symptomId: "frequent_urination", weight: 4, required: true },
      { symptomId: "extreme_fatigue", weight: 3 },
      { symptomId: "blurred_vision", weight: 3 },
      { symptomId: "slow_healing_wounds", weight: 3 },
    ],
  },
  {
    id: "tuberculosis-tb",
    name: { en: "Tuberculosis (TB)", tl: "Tuberculosis (TB)" },
    brief: {
      en: "TB is a contagious bacterial infection primarily affecting the lungs but can impact other parts of the body.",
      tl: "Ang TB ay isang nakakahawang impeksyong bacterial na pangunahing umaapekto sa mga baga ngunit maaaring makaapekto sa ibang bahagi ng katawan.",
    },
    severity: { en: "Severe", tl: "Malubha" },
    reminder: {
      en: "If you suspect TB, seek immediate medical attention for testing and treatment.",
      tl: "Kung pinaghihinalaan mong may TB, agad na kumunsulta sa doktor para sa pagsusuri at paggamot.",
    },
    doctors: {
      Pulmonologist: {
        en: "Specializes in lung diseases, including tuberculosis.",
        tl: "Dalubhasa sa mga sakit sa baga, kabilang ang tuberculosis.",
      },
      "Infectious Disease Specialist": {
        en: "Manages bacterial infections and recommends appropriate treatments.",
        tl: "Namamahala sa mga impeksyong bacterial at nagrerekomenda ng tamang paggamot.",
      },
    },
    evidence: [
      { symptomId: "persistent_cough", weight: 4, required: true },
      { symptomId: "chest_pain", weight: 3 },
      { symptomId: "coughing_up_blood", weight: 5, required: true },
      { symptomId: "weight_loss", weight: 3 },
      { symptomId: "fever", weight: 3 },
      { symptomId: "night_sweats", weight: 3 },
    ],
  },
  {
    id: "chronic-lower-respiratory-diseases-clrd",
    name: {
      en: "Chronic lower respiratory diseases (CLRD)",
      tl: "Chronic lower respiratory diseases (CLRD)",
    },
    brief: {
      en: "This group includes conditions like COPD and asthma that affect breathing.",
      tl: "Kasama sa grupong ito ang mga sakit tulad ng COPD at hika na nakakaapekto sa paghinga.",
    },
    severity: { en: "Moderate", tl: "Katamtaman" },
    reminder: {
      en: "Consult a healthcare provider for proper diagnosis and management options.",
      tl: "Kumunsulta sa isang doktor para sa tamang pagsusuri at mga opsyon sa pangangasiwa.",
    },
    doctors: {
      Pulmonologist: {
        en: "Diagnoses and manages chronic lung conditions like COPD.",
        tl: "Nagsusuri at namamahala ng mga talamak na sakit sa baga tulad ng COPD.",
      },
      "General Practitioner": {
        en: "Provides early diagnosis and helps with symptom management.",
        tl: "Nagbibigay ng maagang pagsusuri at tumutulong sa pangangasiwa ng mga sintomas.",
      },
    },
    evidence: [
      { symptomId: "chronic_cough", weight: 3 },
      { symptomId: "wheezing", weight: 4, required: true },
      { symptomId: "shortness_of_breath", weight: 3 },
      { symptomId: "chest_tightness", weight: 2 },
      { symptomId: "frequent_respiratory_infections", weight: 2 },
    ],
  },
  {
    id: "kidney-diseases",
    name: { en: "Kidney diseases", tl: "Kidney diseases" },
    brief: {
      en: "Chronic kidney disease can result from diabetes or hypertension and leads to decreased kidney function over time.",
      tl: "Ang talamak na sakit sa bato ay maaaring sanhi ng diabetes o hypertension at humahantong sa pagbawas ng paggana ng bato sa paglipas ng panahon.",
    },
    severity: { en: "Moderate", tl: "Katamtaman" },
    reminder: {
      en: "Regular check-ups are vital; seek medical advice if you notice symptoms.",
      tl: "Mahalaga ang regular na check-up; kumunsulta sa doktor kung mapansin ang mga sintomas.",
    },
    doctors: {
      Nephrologist: {
        en: "Specializes in kidney function and helps manage chronic kidney disease.",
        tl: "Dalubhasa sa paggana ng bato at tumutulong sa pangangasiwa ng talamak na sakit sa bato.",
      },
      "General Practitioner": {
        en: "Provides initial assessment and referrals if needed.",
        tl: "Nagbibigay ng paunang pagsusuri at referral kung kinakailangan.",
      },
    },
    evidence: [
      { symptomId: "swelling_legs_ankles", weight: 4 },
      { symptomId: "fatigue", weight: 2 },
      { symptomId: "changes_urination", weight: 4, required: true },
      { symptomId: "back_pain", weight: 2 },
    ],
  },
  {
    id: "liver-diseases",
    name: { en: "Liver diseases", tl: "Liver diseases" },
    brief: {
      en: "Conditions affecting liver function can result from infections like hepatitis or lifestyle factors such as alcohol use.",
      tl: "Ang mga kundisyong nakakaapekto sa atay ay maaaring sanhi ng mga impeksyon tulad ng hepatitis o mga salik sa pamumuhay tulad ng pag-inom ng alak.",
    },
    severity: { en: "Moderate", tl: "Katamtaman" },
    reminder: {
      en: "Consult a healthcare provider for liver function tests if you experience these symptoms.",
      tl: "Kumunsulta sa doktor para sa pagsusuri ng paggana ng atay kung maranasan ang mga sintomas na ito.",
    },
    doctors: {
      Hepatologist: {
        en: "Focuses on liver diseases and their treatment options.",
        tl: "Dalubhasa sa mga sakit sa atay at mga opsyon sa paggamot.",
      },
      Gastroenterologist: {
        en: "Manages digestive and liver-related conditions, including hepatitis.",
        tl: "Namamahala sa mga sakit sa pagtunaw at atay, kabilang ang hepatitis.",
      },
    },
    evidence: [
      { symptomId: "jaundice", weight: 5, required: true },
      { symptomId: "abdominal_pain_swelling", weight: 3 },
      { symptomId: "chronic_fatigue", weight: 2 },
      { symptomId: "dark_urine", weight: 3 },
    ],
  },
  {
    id: "leptospirosis",
    name: { en: "Leptospirosis", tl: "Leptospirosis" },
    brief: {
      en: "An infectious disease caused by bacteria found in contaminated water; it often occurs during flooding.",
      tl: "Isang nakakahawang sakit na dulot ng bakterya na matatagpuan sa maruming tubig; madalas itong lumalabas tuwing baha.",
    },
    severity: { en: "Severe", tl: "Malubha" },
    reminder: {
      en: "Seek medical attention if you suspect leptospirosis, especially after exposure to contaminated water.",
      tl: "Kumunsulta agad sa doktor kung pinaghihinalaang may leptospirosis, lalo na matapos ma-expose sa maruming tubig.",
    },
    doctors: {
      "Infectious Disease Specialist": {
        en: "Diagnoses and treats bacterial infections like leptospirosis.",
        tl: "Dalubhasa sa pagsusuri at paggamot ng mga impeksyon sa bakterya tulad ng leptospirosis.",
      },
      "General Practitioner": {
        en: "Assesses initial symptoms and provides early treatment guidance.",
        tl: "Sinusuri ang mga paunang sintomas at nagbibigay ng gabay sa maagang paggamot.",
      },
    },
    evidence: [
      { symptomId: "muscle_pain", weight: 3 },
      { symptomId: "fever", weight: 4, required: true },
      { symptomId: "headache", weight: 2 },
      { symptomId: "redness_eyes", weight: 3 },
      { symptomId: "chills", weight: 2 },
      { symptomId: "vomiting", weight: 2 },
    ],
  },
  {
    id: "gastroesophageal-reflux-disease-gerd",
    name: {
      en: "Gastroesophageal reflux disease (GERD)",
      tl: "Gastroesophageal reflux disease (GERD)",
    },
    brief: {
      en: "GERD is a digestive disorder where stomach acid flows back into the esophagus, causing irritation.",
      tl: "Ang GERD ay isang sakit sa pagtunaw kung saan ang asido sa tiyan ay umaakyat sa esophagus, na nagdudulot ng iritasyon.",
    },
    severity: { en: "Mild", tl: "Magaan" },
    reminder: {
      en: "Lifestyle changes and medications can help manage GERD symptoms; consult a healthcare provider for guidance.",
      tl: "Maaaring makatulong ang pagbabago sa pamumuhay at gamot sa GERD; kumunsulta sa doktor para sa gabay.",
    },
    doctors: {
      Gastroenterologist: {
        en: "Specializes in digestive disorders, including acid reflux diseases.",
        tl: "Dalubhasa sa mga sakit sa pagtunaw, kabilang ang sakit sa asido ng tiyan.",
      },
      "General Practitioner": {
        en: "Provides initial management and lifestyle recommendations.",
        tl: "Nagbibigay ng paunang pangangasiwa at mga rekomendasyon sa pamumuhay.",
      },
    },
    evidence: [
      { symptomId: "heartburn", weight: 5, required: true },
      { symptomId: "regurgitation", weight: 4 },
      { symptomId: "chest_pain", weight: 2 },
      { symptomId: "difficulty_swallowing", weight: 3 },
      { symptomId: "chronic_cough", weight: 2 },
    ],
  },
  {
    id: "acute-respiratory-infections",
    name: {
      en: "Acute respiratory infections",
      tl: "Acute respiratory infections",
    },
    brief: {
      en: "These infections affect the upper or lower respiratory tract and are common in both adults and children.",
      tl: "Ang mga impeksyong ito ay nakakaapekto sa itaas o ibabang bahagi ng respiratory tract at karaniwan sa parehong matatanda at bata.",
    },
    severity: { en: "Moderate", tl: "Katamtaman" },
    reminder: {
      en: "If symptoms persist or worsen, consult a healthcare professional.",
      tl: "Kung ang mga sintomas ay patuloy o lumala, kumunsulta sa isang doktor.",
    },
    doctors: {
      Pulmonologist: {
        en: "Specializes in respiratory tract infections and lung conditions.",
        tl: "Dalubhasa sa mga impeksyon sa respiratory tract at mga sakit sa baga.",
      },
      "General Practitioner": {
        en: "Provides initial diagnosis and treatment for respiratory infections.",
        tl: "Nagbibigay ng paunang pagsusuri at paggamot para sa mga impeksyon sa respiratory tract.",
      },
    },
    evidence: [
      { symptomId: "coughing", weight: 3, required: true },
      { symptomId: "sore_throat", weight: 2 },
      { symptomId: "runny_stuffy_nose", weight: 2 },
      { symptomId: "fever", weight: 3 },
      { symptomId: "difficulty_breathing", weight: 3 },
    ],
  },
];
