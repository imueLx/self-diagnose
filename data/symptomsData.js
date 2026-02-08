// symptomsData.js

export const symptomCatalog = [
  // --- Core symptoms (from your current dataset / output doc) ---
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
    redFlag: true,
  },
  { id: "fatigue", label: { en: "Fatigue", tl: "Pagkapagod" } },
  {
    id: "heart_palpitations",
    label: { en: "Heart palpitations", tl: "Palpitasyon ng puso" },
  },
  {
    id: "tachycardia",
    label: {
      en: "Tachycardia (rapid heart rate)",
      tl: "Mabilis na tibok ng puso",
    },
  },
  {
    id: "nausea",
    label: { en: "Nausea", tl: "Pagduduwal" },
    synonyms: { tl: ["Pagsusuka"] },
  },
  { id: "vomiting", label: { en: "Vomiting", tl: "Pagsusuka" } },

  {
    id: "asymptomatic",
    label: { en: "Often asymptomatic", tl: "Madalas walang sintomas" },
    selectable: false,
  },

  { id: "headache", label: { en: "Headaches", tl: "Sakit ng ulo" } },
  {
    id: "severe_headache",
    label: { en: "Severe headache", tl: "Matinding sakit ng ulo" },
    redFlag: true,
  },
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

  {
    id: "high_fever",
    label: { en: "High fever", tl: "Mataas na lagnat" },
    redFlag: true,
  },
  { id: "fever", label: { en: "Fever", tl: "Lagnat" } },
  { id: "chills", label: { en: "Chills", tl: "Panginginig" } },
  { id: "night_sweats", label: { en: "Night sweats", tl: "Pawis sa gabi" } },

  {
    id: "pain_behind_eyes",
    label: { en: "Pain behind the eyes", tl: "Sakit sa likod ng mata" },
  },
  {
    id: "joint_muscle_pain",
    label: { en: "Joint/muscle pain", tl: "Pananakit ng kasu-kasuan/muscle" },
  },
  {
    id: "muscle_pain",
    label: { en: "Muscle pain", tl: "Pananakit ng kalamnan" },
  },
  { id: "rash", label: { en: "Rash", tl: "Pantal" } },
  {
    id: "redness_eyes",
    label: { en: "Redness of the eyes", tl: "Pamumula ng mga mata" },
  },

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
  { id: "chronic_cough", label: { en: "Chronic cough", tl: "Matagalang ubo" } },
  { id: "coughing", label: { en: "Coughing", tl: "Ubo" } },
  {
    id: "coughing_up_blood",
    label: { en: "Coughing up blood", tl: "Pag-ubo ng dugo" },
    redFlag: true,
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
    id: "difficulty_breathing",
    label: { en: "Difficulty breathing", tl: "Hirap huminga" },
    synonyms: { tl: ["Hirap sa paghinga"] },
    redFlag: true,
  },

  { id: "weight_loss", label: { en: "Weight loss", tl: "Pagbaba ng timbang" } },

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
    redFlag: true,
  },
  {
    id: "abdominal_pain_swelling",
    label: {
      en: "Abdominal pain or swelling",
      tl: "Panakit o pamamaga ng tiyan",
    },
  },
  { id: "dark_urine", label: { en: "Dark urine", tl: "Maitim na ihi" } },
  {
    id: "chronic_fatigue",
    label: { en: "Chronic fatigue", tl: "Madalas na pagkapagod" },
  },

  { id: "heartburn", label: { en: "Heartburn", tl: "Pangangasim ng sikmura" } },
  {
    id: "regurgitation",
    label: { en: "Regurgitation", tl: "Pag-akyat ng pagkain o asido" },
  },
  {
    id: "difficulty_swallowing",
    label: { en: "Difficulty swallowing", tl: "Hirap sa paglunok" },
  },
  {
    id: "sore_throat",
    label: { en: "Sore throat", tl: "Masakit na lalamunan" },
  },
  {
    id: "runny_stuffy_nose",
    label: { en: "Runny or stuffy nose", tl: "Baradong ilong o sipon" },
  },

  // --- Additional symptoms (needed for Additional-for-output.docx) ---
  // Stroke (12)
  {
    id: "sudden_weakness_numbness_one_side",
    label: {
      en: "Sudden weakness/numbness (one side)",
      tl: "Biglaang panghihina/pamamanhid (isang side)",
    },
    redFlag: true,
  },
  {
    id: "confusion",
    label: { en: "Confusion", tl: "Pagkalito" },
    redFlag: true,
  },
  {
    id: "facial_drooping",
    label: { en: "Facial drooping", tl: "Pagbagsak ng kalahati ng mukha" },
    redFlag: true,
  },
  {
    id: "slurred_speech",
    label: {
      en: "Slurred speech / difficulty speaking",
      tl: "Bulong-bulong o hirap magsalita",
    },
    redFlag: true,
  },
  {
    id: "loss_of_balance",
    label: {
      en: "Loss of balance/coordination",
      tl: "Pagkawala ng balanse/koordinasyon",
    },
    redFlag: true,
  },

  // CAP (13)
  {
    id: "productive_cough",
    label: { en: "Productive cough (with phlegm)", tl: "Ubo na may plema" },
  },
  {
    id: "pleuritic_chest_pain",
    label: {
      en: "Chest pain when breathing",
      tl: "Sakit sa dibdib kapag humihinga",
    },
    redFlag: true,
  },

  // Angina (15)
  {
    id: "burning_sensation_chest",
    label: { en: "Burning sensation (chest)", tl: "Hapdi sa dibdib" },
    redFlag: true,
  },
  {
    id: "radiating_pain_back_neck_jaw",
    label: {
      en: "Radiating pain (back/neck/jaw)",
      tl: "Kumakalat na sakit (likod/leeg/panga)",
    },
    redFlag: true,
  },

  // GERD extra (16)
  { id: "hoarseness", label: { en: "Hoarseness", tl: "Pamamalat" } },

  // Gallbladder (17/18)
  {
    id: "abdominal_pain",
    label: { en: "Abdominal pain", tl: "Sakit ng tiyan" },
  },
  {
    id: "abdominal_tenderness",
    label: {
      en: "Abdominal tenderness",
      tl: "Masakit kapag pinipisil ang tiyan",
    },
  },

  // Anxiety (19)
  { id: "dry_mouth", label: { en: "Dry mouth", tl: "Tuyong bibig" } },
  { id: "restlessness", label: { en: "Restlessness", tl: "Hindi mapakali" } },
  { id: "panic_attacks", label: { en: "Panic attacks", tl: "Panic attack" } },
  {
    id: "muscle_tension",
    label: { en: "Muscle tension", tl: "Tensyon/paninikip ng kalamnan" },
  },

  // Depression (20)
  {
    id: "lack_of_interest",
    label: { en: "Loss of interest", tl: "Kawalan ng interes" },
  },
  {
    id: "low_mood",
    label: { en: "Low mood / sadness", tl: "Malungkot na pakiramdam" },
  },
  {
    id: "weight_changes",
    label: { en: "Weight changes", tl: "Pagbabago ng timbang" },
  },
  { id: "insomnia", label: { en: "Insomnia", tl: "Hindi makatulog" } },
  {
    id: "difficulty_concentrating",
    label: { en: "Difficulty concentrating", tl: "Hirap mag-concentrate" },
  },

  // PTSD (21)
  { id: "nightmares", label: { en: "Nightmares", tl: "Bangungot" } },
  { id: "sweating", label: { en: "Sweating", tl: "Pagpapawis" } },
  { id: "avoidance", label: { en: "Avoidance", tl: "Pag-iwas" } },
  { id: "fear", label: { en: "Fear", tl: "Takot" } },
  {
    id: "anger",
    label: { en: "Anger/irritability", tl: "Galit/iritabilidad" },
  },
  { id: "detachment", label: { en: "Detachment", tl: "Paglayo ng loob" } },

  // Anorexia (22)
  {
    id: "distorted_body_image",
    label: {
      en: "Distorted body image",
      tl: "Baluktot na pagtingin sa katawan",
    },
  },
  {
    id: "significantly_low_body_weight",
    label: { en: "Significantly low body weight", tl: "Napakababang timbang" },
    redFlag: true,
  },
  {
    id: "intense_fear_gaining_weight",
    label: {
      en: "Intense fear of gaining weight",
      tl: "Matinding takot tumaba",
    },
  },
  {
    id: "denial_seriousness_low_weight",
    label: {
      en: "Denial of seriousness of low weight",
      tl: "Hindi inaamin ang panganib ng sobrang payat",
    },
  },

  // Schizophrenia (23)
  {
    id: "hallucinations",
    label: { en: "Hallucinations", tl: "Halusinasyon" },
    redFlag: true,
  },
  {
    id: "delusions",
    label: { en: "Delusions", tl: "Delusyon" },
    redFlag: true,
  },
  {
    id: "disorganized_speech",
    label: { en: "Disorganized speech", tl: "Magulong pananalita" },
    redFlag: true,
  },
  {
    id: "withdrawal",
    label: { en: "Social withdrawal", tl: "Pag-iwas sa pakikisalamuha" },
  },
  {
    id: "lack_of_motivation",
    label: { en: "Lack of motivation", tl: "Kawalan ng gana/motibasyon" },
  },

  // Rheumatoid Arthritis (24)
  {
    id: "symmetrical_joint_pain",
    label: {
      en: "Symmetrical joint pain",
      tl: "Simetrikong pananakit ng kasu-kasuan",
    },
  },
  {
    id: "joint_swelling",
    label: { en: "Joint swelling", tl: "Pamamaga ng kasu-kasuan" },
  },
  {
    id: "morning_stiffness",
    label: { en: "Morning stiffness", tl: "Paninigas sa umaga" },
  },
  {
    id: "reduced_range_of_motion",
    label: { en: "Reduced range of motion", tl: "Bawas galaw ng kasu-kasuan" },
  },

  // Goiter (25)
  {
    id: "neck_swelling",
    label: { en: "Neck swelling (base of neck)", tl: "Pamamaga sa may leeg" },
  },
  {
    id: "throat_tightness",
    label: { en: "Throat tightness", tl: "Paninikip sa lalamunan" },
  },
];

export const conditions = [
  // 1) Ischemic Heart Disease
  {
    id: "ischemic-heart-disease",
    name: { en: "Ischemic heart disease", tl: "Ischemic heart disease" },
    brief: {
      en: "Reduced blood flow to the heart, often due to plaque buildup in arteries.",
      tl: "Nabawasan ang daloy ng dugo sa puso, kadalasan dahil sa plake sa mga ugat.",
    },
    severity: { en: "Severe", tl: "Malubha" },
    reminder: {
      en: "Symptoms can vary; consult a healthcare provider for an accurate diagnosis.",
      tl: "Maaaring magbago ang mga sintomas; kumunsulta sa doktor para sa tamang pagsusuri.",
    },
    doctors: {
      Cardiologist: {
        en: "Specializes in heart conditions and blood flow issues.",
        tl: "Dalubhasa sa sakit sa puso at daloy ng dugo.",
      },
      "General Practitioner": {
        en: "Evaluates symptoms and provides referrals if needed.",
        tl: "Sinusuri ang sintomas at nagbibigay ng referral kung kailangan.",
      },
    },
    evidence: [
      { symptomId: "chest_pain", weight: 5, required: true },
      { symptomId: "shortness_of_breath", weight: 3 },
      { symptomId: "fatigue", weight: 2 },
      { symptomId: "heart_palpitations", weight: 2 },
      { symptomId: "nausea", weight: 1 },
    ],
    urgentAnyOf: ["chest_pain", "shortness_of_breath"],
  },

  // 2) Hypertension
  {
    id: "hypertension",
    name: { en: "Hypertension", tl: "Hypertension" },
    brief: {
      en: "High blood pressure that can lead to serious complications if untreated.",
      tl: "Mataas na presyon ng dugo na maaaring magdulot ng komplikasyon kung hindi maagapan.",
    },
    severity: { en: "Moderate", tl: "Katamtaman" },
    reminder: {
      en: "Regular monitoring is essential; seek medical advice if you experience symptoms.",
      tl: "Mahalaga ang regular na monitoring; kumunsulta sa doktor kung may sintomas.",
    },
    doctors: {
      Cardiologist: {
        en: "Manages blood pressure and reduces heart-risk complications.",
        tl: "Namamahala ng BP at binabawasan ang risk sa puso.",
      },
      "General Practitioner": {
        en: "Provides routine BP checks and treatment options.",
        tl: "Nagbibigay ng BP check at treatment options.",
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

  // 3) Dengue Fever
  {
    id: "dengue-fever",
    name: { en: "Dengue fever", tl: "Dengue fever" },
    brief: {
      en: "Mosquito-borne viral infection that can cause severe flu-like symptoms.",
      tl: "Impeksyon mula sa lamok na maaaring magdulot ng malubhang sintomas na parang trangkaso.",
    },
    severity: { en: "Severe", tl: "Malubha" },
    reminder: {
      en: "If you suspect dengue due to mosquito exposure, seek medical attention immediately.",
      tl: "Kung pinaghihinalaan ang dengue, magpatingin agad sa doktor.",
    },
    doctors: {
      "Infectious Disease Specialist": {
        en: "Diagnoses and manages viral infections like dengue.",
        tl: "Dalubhasa sa pagsusuri at paggamot ng viral infections tulad ng dengue.",
      },
      "General Practitioner": {
        en: "Assesses symptoms and guides initial supportive care.",
        tl: "Sinusuri ang sintomas at nagbibigay ng unang gabay sa pangangalaga.",
      },
    },
    evidence: [
      { symptomId: "high_fever", weight: 5, required: true },
      { symptomId: "severe_headache", weight: 4 },
      { symptomId: "pain_behind_eyes", weight: 4, required: true },
      { symptomId: "joint_muscle_pain", weight: 3 },
      { symptomId: "rash", weight: 3 },
    ],
    urgentAnyOf: ["high_fever", "severe_headache"],
  },

  // 4) Diabetes Mellitus
  {
    id: "diabetes-mellitus",
    name: { en: "Diabetes mellitus", tl: "Diabetes mellitus" },
    brief: {
      en: "Chronic condition with high blood sugar due to insulin problems.",
      tl: "Talamak na kondisyon na may mataas na asukal sa dugo dahil sa problema sa insulin.",
    },
    severity: { en: "Moderate", tl: "Katamtaman" },
    reminder: {
      en: "Consult a healthcare provider for blood sugar testing and management strategies.",
      tl: "Kumunsulta sa doktor para sa testing at pangangasiwa ng blood sugar.",
    },
    doctors: {
      Endocrinologist: {
        en: "Specializes in diabetes and hormone-related disorders.",
        tl: "Dalubhasa sa diabetes at mga sakit sa hormones.",
      },
      "General Practitioner": {
        en: "Provides initial diagnosis and lifestyle guidance.",
        tl: "Nagbibigay ng paunang pagsusuri at gabay sa pamumuhay.",
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

  // 5) Tuberculosis (TB)
  {
    id: "tuberculosis-tb",
    name: { en: "Tuberculosis (TB)", tl: "Tuberculosis (TB)" },
    brief: {
      en: "Contagious bacterial infection that mainly affects the lungs.",
      tl: "Nakakahawang bacterial infection na pangunahing umaapekto sa baga.",
    },
    severity: { en: "Severe", tl: "Malubha" },
    reminder: {
      en: "If you suspect TB, seek medical attention for testing and treatment.",
      tl: "Kung pinaghihinalaan ang TB, magpatingin agad para sa pagsusuri at gamutan.",
    },
    doctors: {
      Pulmonologist: {
        en: "Specializes in lung diseases, including TB.",
        tl: "Dalubhasa sa sakit sa baga, kasama ang TB.",
      },
      "Infectious Disease Specialist": {
        en: "Manages bacterial infections and treatment plans.",
        tl: "Namamahala ng bacterial infections at treatment plan.",
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
    urgentAnyOf: ["coughing_up_blood", "shortness_of_breath"],
  },

  // 6) Chronic Lower Respiratory Diseases (CLRD)
  {
    id: "chronic-lower-respiratory-diseases-clrd",
    name: {
      en: "Chronic lower respiratory diseases (CLRD)",
      tl: "Chronic lower respiratory diseases (CLRD)",
    },
    brief: {
      en: "Includes COPD and asthma-like conditions that affect breathing.",
      tl: "Kasama ang COPD at hika-like conditions na nakakaapekto sa paghinga.",
    },
    severity: { en: "Moderate", tl: "Katamtaman" },
    reminder: {
      en: "Consult a healthcare provider for proper diagnosis and management.",
      tl: "Kumunsulta sa doktor para sa tamang diagnosis at pangangasiwa.",
    },
    doctors: {
      Pulmonologist: {
        en: "Diagnoses and manages chronic lung disease.",
        tl: "Nagsusuri at namamahala ng chronic lung disease.",
      },
      "General Practitioner": {
        en: "Helps with early assessment and symptom control.",
        tl: "Tumutulong sa maagang assessment at symptom control.",
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

  // 7) Kidney Diseases
  {
    id: "kidney-diseases",
    name: { en: "Kidney diseases", tl: "Kidney diseases" },
    brief: {
      en: "Reduced kidney function over time, often linked to diabetes or hypertension.",
      tl: "Pagbaba ng paggana ng bato sa paglipas ng panahon, madalas konektado sa diabetes o hypertension.",
    },
    severity: { en: "Moderate", tl: "Katamtaman" },
    reminder: {
      en: "Regular check-ups are vital; seek medical advice if symptoms appear.",
      tl: "Mahalaga ang check-up; kumunsulta kung may sintomas.",
    },
    doctors: {
      Nephrologist: {
        en: "Specializes in kidney function and chronic kidney disease.",
        tl: "Dalubhasa sa paggana ng bato at CKD.",
      },
      "General Practitioner": {
        en: "Provides initial assessment and referrals.",
        tl: "Nagbibigay ng paunang pagsusuri at referral.",
      },
    },
    evidence: [
      { symptomId: "swelling_legs_ankles", weight: 4 },
      { symptomId: "fatigue", weight: 2 },
      { symptomId: "changes_urination", weight: 4, required: true },
      { symptomId: "back_pain", weight: 2 },
    ],
  },

  // 8) Liver Diseases
  {
    id: "liver-diseases",
    name: { en: "Liver diseases", tl: "Liver diseases" },
    brief: {
      en: "Liver function problems from infections (e.g., hepatitis) or lifestyle factors.",
      tl: "Problema sa atay mula sa impeksyon (hal. hepatitis) o lifestyle factors.",
    },
    severity: { en: "Moderate", tl: "Katamtaman" },
    reminder: {
      en: "Consult a healthcare provider for liver tests if symptoms occur.",
      tl: "Kumunsulta sa doktor para sa liver tests kung may sintomas.",
    },
    doctors: {
      Hepatologist: {
        en: "Focuses on liver diseases and treatment.",
        tl: "Dalubhasa sa sakit sa atay at gamutan.",
      },
      Gastroenterologist: {
        en: "Manages digestive and liver-related conditions.",
        tl: "Namamahala ng digestive at liver-related conditions.",
      },
    },
    evidence: [
      { symptomId: "jaundice", weight: 5, required: true },
      { symptomId: "abdominal_pain_swelling", weight: 3 },
      { symptomId: "chronic_fatigue", weight: 2 },
      { symptomId: "dark_urine", weight: 3 },
    ],
    urgentAnyOf: ["jaundice"],
  },

  // 9) Leptospirosis
  {
    id: "leptospirosis",
    name: { en: "Leptospirosis", tl: "Leptospirosis" },
    brief: {
      en: "Bacterial infection from contaminated water, often after flooding exposure.",
      tl: "Impeksyong bacterial mula sa maruming tubig, madalas tuwing baha.",
    },
    severity: { en: "Severe", tl: "Malubha" },
    reminder: {
      en: "Seek medical care after contaminated-water exposure with symptoms.",
      tl: "Magpatingin kung na-expose sa maruming tubig at may sintomas.",
    },
    doctors: {
      "Infectious Disease Specialist": {
        en: "Diagnoses and treats bacterial infections like leptospirosis.",
        tl: "Dalubhasa sa bacterial infections tulad ng leptospirosis.",
      },
      "General Practitioner": {
        en: "Assesses symptoms and provides early guidance.",
        tl: "Sinusuri ang sintomas at nagbibigay ng unang gabay.",
      },
    },
    evidence: [
      { symptomId: "muscle_pain", weight: 3 },
      { symptomId: "fever", weight: 4, required: true },
      { symptomId: "headache", weight: 2 },
      { symptomId: "redness_eyes", weight: 3 },
      { symptomId: "chills", weight: 2 },
      { symptomId: "vomiting", weight: 2 },
      { symptomId: "jaundice", weight: 3 },
    ],
    urgentAnyOf: ["jaundice", "high_fever"],
  },

  // 10) GERD
  {
    id: "gastroesophageal-reflux-disease-gerd",
    name: {
      en: "Gastroesophageal reflux disease (GERD)",
      tl: "Gastroesophageal reflux disease (GERD)",
    },
    brief: {
      en: "Stomach acid flows back into the esophagus, causing irritation.",
      tl: "Umaakyat ang asido sa esophagus at nagdudulot ng iritasyon.",
    },
    severity: { en: "Mild", tl: "Magaan" },
    reminder: {
      en: "GERD chest pain can mimic heart problems; seek help for new chest pain.",
      tl: "Ang sakit sa dibdib dahil sa GERD ay puwedeng magmukhang sakit sa puso; magpatingin kung bago ang chest pain.",
    },
    doctors: {
      Gastroenterologist: {
        en: "Treats acid reflux and digestive disorders.",
        tl: "Dalubhasa sa acid reflux at digestive disorders.",
      },
      "General Practitioner": {
        en: "Provides initial management and lifestyle advice.",
        tl: "Nagbibigay ng paunang pangangasiwa at payo sa lifestyle.",
      },
    },
    evidence: [
      { symptomId: "heartburn", weight: 5, required: true },
      { symptomId: "regurgitation", weight: 4 },
      { symptomId: "chest_pain", weight: 2 },
      { symptomId: "difficulty_swallowing", weight: 3 },
      { symptomId: "chronic_cough", weight: 2 },
      { symptomId: "sore_throat", weight: 2 },
      { symptomId: "hoarseness", weight: 2 },
    ],
    urgentAnyOf: ["chest_pain"],
  },

  // 11) Acute Respiratory Infections
  {
    id: "acute-respiratory-infections",
    name: {
      en: "Acute respiratory infections",
      tl: "Acute respiratory infections",
    },
    brief: {
      en: "Common infections affecting the upper or lower respiratory tract.",
      tl: "Karaniwang impeksyon sa itaas o ibabang bahagi ng respiratory tract.",
    },
    severity: { en: "Moderate", tl: "Katamtaman" },
    reminder: {
      en: "If symptoms persist or worsen, consult a healthcare professional.",
      tl: "Kung tumagal o lumala ang sintomas, kumunsulta sa doktor.",
    },
    doctors: {
      Pulmonologist: {
        en: "Specializes in respiratory tract and lung conditions.",
        tl: "Dalubhasa sa respiratory at lung conditions.",
      },
      "General Practitioner": {
        en: "Provides initial diagnosis and treatment.",
        tl: "Nagbibigay ng paunang diagnosis at paggamot.",
      },
    },
    evidence: [
      { symptomId: "coughing", weight: 3, required: true },
      { symptomId: "sore_throat", weight: 2 },
      { symptomId: "runny_stuffy_nose", weight: 2 },
      { symptomId: "fever", weight: 3 },
      { symptomId: "difficulty_breathing", weight: 3 },
    ],
    urgentAnyOf: ["difficulty_breathing"],
  },

  // --- Additional conditions (12–25) ---

  // 12) Stroke
  {
    id: "stroke",
    name: { en: "Stroke", tl: "Stroke" },
    brief: {
      en: "Interrupted or reduced blood supply to part of the brain; damage can begin within minutes.",
      tl: "Naputol o nabawasan ang daloy ng dugo sa bahagi ng utak; maaaring masira ang brain cells sa loob ng ilang minuto.",
    },
    severity: { en: "Severe", tl: "Malubha" },
    reminder: {
      en: "Use B.E.F.A.S.T. (Balance, Eyes, Face, Arms, Speech, Time) as a warning sign guide.",
      tl: "Gamitin ang B.E.F.A.S.T. (Balance, Eyes, Face, Arms, Speech, Time) bilang gabay sa babala.",
    },
    doctors: {
      Neurologist: {
        en: "Specializes in brain and nervous system emergencies.",
        tl: "Dalubhasa sa utak at nervous system emergencies.",
      },
      "General Practitioner": {
        en: "Can triage and refer urgently.",
        tl: "Maaaring mag-triage at mag-refer agad.",
      },
    },
    evidence: [
      {
        symptomId: "sudden_weakness_numbness_one_side",
        weight: 5,
        required: true,
      },
      { symptomId: "facial_drooping", weight: 5 },
      { symptomId: "slurred_speech", weight: 5 },
      { symptomId: "confusion", weight: 4 },
      { symptomId: "loss_of_balance", weight: 3 },
      { symptomId: "dizziness", weight: 2 },
    ],
    urgentAnyOf: [
      "sudden_weakness_numbness_one_side",
      "facial_drooping",
      "slurred_speech",
      "confusion",
      "loss_of_balance",
    ],
  },

  // 13) Community-Acquired Pneumonia (CAP)
  {
    id: "community-acquired-pneumonia-cap",
    name: {
      en: "Community-acquired pneumonia (CAP)",
      tl: "Community-acquired pneumonia (CAP)",
    },
    brief: {
      en: "Acute lung infection where air sacs can fill with fluid, making breathing harder.",
      tl: "Matinding impeksyon sa baga kung saan napupuno ng fluid ang air sacs at mas nahihirapan huminga.",
    },
    severity: { en: "Severe", tl: "Malubha" },
    reminder: {
      en: "Nausea can be an atypical symptom, especially in older adults.",
      tl: "Maaaring kasama ang pagduduwal bilang atypical symptom, lalo na sa matatanda.",
    },
    doctors: {
      Pulmonologist: {
        en: "Diagnoses and manages pneumonia and lung infections.",
        tl: "Dalubhasa sa pneumonia at lung infections.",
      },
      "General Practitioner": {
        en: "Evaluates symptoms and starts initial care.",
        tl: "Sinusuri ang sintomas at nagbibigay ng unang pangangalaga.",
      },
    },
    evidence: [
      { symptomId: "productive_cough", weight: 4, required: true },
      { symptomId: "high_fever", weight: 4, required: true },
      { symptomId: "chills", weight: 3 },
      { symptomId: "fatigue", weight: 2 },
      { symptomId: "shortness_of_breath", weight: 4 },
      { symptomId: "pleuritic_chest_pain", weight: 3 },
      { symptomId: "nausea", weight: 1 },
    ],
    urgentAnyOf: ["shortness_of_breath", "pleuritic_chest_pain", "high_fever"],
  },

  // 14) Asthma
  {
    id: "asthma",
    name: { en: "Asthma", tl: "Hika (Asthma)" },
    brief: {
      en: "Chronic airway inflammation with episodes of reversible narrowing (tight chest, wheeze, cough).",
      tl: "Talamak na pamamaga ng daanan ng hangin na nagdudulot ng paninikip, wheezing, at ubo.",
    },
    severity: { en: "Moderate", tl: "Katamtaman" },
    reminder: {
      en: "Difficulty breathing and shortness of breath are essentially the same; wheezing is a key sign.",
      tl: "Halos pareho ang hirap huminga at shortness of breath; mahalagang palatandaan ang wheezing.",
    },
    doctors: {
      Pulmonologist: {
        en: "Manages asthma and breathing disorders.",
        tl: "Namamahala ng asthma at breathing disorders.",
      },
      "General Practitioner": {
        en: "Helps with assessment and referrals.",
        tl: "Tumutulong sa assessment at referral.",
      },
    },
    evidence: [
      { symptomId: "shortness_of_breath", weight: 4, required: true },
      { symptomId: "chest_tightness", weight: 3 },
      { symptomId: "wheezing", weight: 5, required: true },
      { symptomId: "coughing", weight: 2 },
      { symptomId: "difficulty_breathing", weight: 4 },
    ],
    urgentAnyOf: ["difficulty_breathing"],
  },

  // 15) Angina Pectoris
  {
    id: "angina-pectoris",
    name: { en: "Angina pectoris", tl: "Angina pectoris" },
    brief: {
      en: "Chest pain/pressure from temporary reduced oxygen supply to heart muscle.",
      tl: "Sakit/bigat sa dibdib dahil pansamantalang kulang ang oxygen supply sa puso.",
    },
    severity: { en: "Severe", tl: "Malubha" },
    reminder: {
      en: "Stable angina improves with rest; unstable angina can occur at rest and may signal a heart attack risk.",
      tl: "Stable: gumagaan sa pahinga; unstable: puwedeng mangyari kahit nagpapahinga at mas delikado.",
    },
    doctors: {
      Cardiologist: {
        en: "Evaluates chest pain and coronary issues.",
        tl: "Dalubhasa sa chest pain at coronary issues.",
      },
      "General Practitioner": {
        en: "Initial assessment and urgent referrals.",
        tl: "Paunang assessment at urgent referral.",
      },
    },
    evidence: [
      { symptomId: "chest_pain", weight: 5, required: true },
      { symptomId: "burning_sensation_chest", weight: 3 },
      { symptomId: "radiating_pain_back_neck_jaw", weight: 4 },
      { symptomId: "fatigue", weight: 2 },
      { symptomId: "dizziness", weight: 2 },
      { symptomId: "shortness_of_breath", weight: 3 },
    ],
    urgentAnyOf: ["chest_pain", "shortness_of_breath"],
  },

  // 16) Cholelithiasis (Gallstones)
  {
    id: "cholelithiasis",
    name: {
      en: "Cholelithiasis (gallstones)",
      tl: "Cholelithiasis (gallstones)",
    },
    brief: {
      en: "Gallstones present in the gallbladder.",
      tl: "Pagkakaroon ng gallstones sa gallbladder.",
    },
    severity: { en: "Moderate", tl: "Katamtaman" },
    reminder: {
      en: "Symptoms vary; consult a healthcare provider for diagnosis.",
      tl: "Maaaring mag-iba ang sintomas; kumunsulta sa doktor.",
    },
    doctors: {
      Gastroenterologist: {
        en: "Evaluates gallbladder and digestive conditions.",
        tl: "Sinusuri ang gallbladder at digestive conditions.",
      },
      "General Practitioner": {
        en: "Initial assessment and referrals.",
        tl: "Paunang assessment at referral.",
      },
    },
    evidence: [
      { symptomId: "abdominal_pain", weight: 4, required: true },
      { symptomId: "fever", weight: 2 },
      { symptomId: "chills", weight: 2 },
      { symptomId: "jaundice", weight: 4 },
      { symptomId: "dark_urine", weight: 3 },
    ],
    urgentAnyOf: ["jaundice"],
  },

  // 17) Cholecystitis
  {
    id: "cholecystitis",
    name: { en: "Cholecystitis", tl: "Cholecystitis" },
    brief: {
      en: "Inflammation of the gallbladder, often due to a blocked duct.",
      tl: "Pamamaga ng gallbladder, kadalasan dahil sa pagbabara.",
    },
    severity: { en: "Moderate", tl: "Katamtaman" },
    reminder: {
      en: "Symptoms vary; consult a healthcare provider for diagnosis.",
      tl: "Maaaring mag-iba ang sintomas; kumunsulta sa doktor.",
    },
    doctors: {
      Gastroenterologist: {
        en: "Manages gallbladder inflammation and complications.",
        tl: "Namamahala ng gallbladder inflammation.",
      },
      "General Practitioner": {
        en: "Initial assessment and referrals.",
        tl: "Paunang assessment at referral.",
      },
    },
    evidence: [
      { symptomId: "fever", weight: 3, required: true },
      { symptomId: "nausea", weight: 2 },
      { symptomId: "abdominal_pain", weight: 4, required: true },
      { symptomId: "abdominal_tenderness", weight: 3 },
    ],
    urgentAnyOf: ["fever", "jaundice"],
  },

  // 18) Anxiety Disorders
  {
    id: "anxiety-disorders",
    name: { en: "Anxiety disorders", tl: "Anxiety disorders" },
    brief: {
      en: "Persistent excessive worry that can produce strong physical (fight-or-flight) symptoms.",
      tl: "Matinding pag-aalala na maaaring magdulot ng pisikal na sintomas (fight-or-flight).",
    },
    severity: { en: "Moderate", tl: "Katamtaman" },
    reminder: {
      en: "Somatic (physical) symptoms are common with anxiety.",
      tl: "Karaniwan ang pisikal na sintomas sa anxiety.",
    },
    doctors: {
      "Mental Health Professional": {
        en: "Assesses and treats anxiety symptoms.",
        tl: "Sumusuri at tumutulong sa anxiety.",
      },
      "General Practitioner": {
        en: "Rules out medical causes and provides referrals.",
        tl: "Nag-aalis ng ibang sanhi at nagbibigay ng referral.",
      },
    },
    evidence: [
      { symptomId: "tachycardia", weight: 4, required: true },
      { symptomId: "dizziness", weight: 2 },
      { symptomId: "dry_mouth", weight: 2 },
      { symptomId: "restlessness", weight: 3 },
      { symptomId: "panic_attacks", weight: 4 },
      { symptomId: "muscle_tension", weight: 2 },
      { symptomId: "heart_palpitations", weight: 2 },
    ],
  },

  // 19) Depression (Major Depressive Disorder)
  {
    id: "depression-major-depressive-disorder",
    name: {
      en: "Depression (major depressive disorder)",
      tl: "Depression (MDD)",
    },
    brief: {
      en: "Low mood and loss of interest that affects sleep, energy, appetite, and thinking.",
      tl: "Lungkot at kawalan ng interes na nakakaapekto sa tulog, energy, gana, at pag-iisip.",
    },
    severity: { en: "Moderate", tl: "Katamtaman" },
    reminder: {
      en: "Depression may appear as visible slowing of movement or speech.",
      tl: "Maaaring magmukhang pagbagal ng kilos o pagsasalita ang depression.",
    },
    doctors: {
      "Mental Health Professional": {
        en: "Provides assessment and therapy options.",
        tl: "Nagbibigay ng assessment at therapy.",
      },
      "General Practitioner": {
        en: "Initial screening and referrals.",
        tl: "Paunang screening at referral.",
      },
    },
    evidence: [
      { symptomId: "fatigue", weight: 2 },
      { symptomId: "lack_of_interest", weight: 4, required: true },
      { symptomId: "low_mood", weight: 5, required: true },
      { symptomId: "weight_changes", weight: 2 },
      { symptomId: "insomnia", weight: 2 },
      { symptomId: "difficulty_concentrating", weight: 2 },
    ],
  },

  // 20) PTSD
  {
    id: "ptsd",
    name: { en: "PTSD (post-traumatic stress disorder)", tl: "PTSD" },
    brief: {
      en: "Triggered after a terrifying event, with persistent stress reactions.",
      tl: "Na-trigger matapos ang nakakatakot na event, na may tuloy-tuloy na stress reactions.",
    },
    severity: { en: "Moderate", tl: "Katamtaman" },
    reminder: {
      en: "Hypervigilance is a hallmark—feeling constantly on high alert.",
      tl: "Hallmark ang hypervigilance—laging naka-alert.",
    },
    doctors: {
      "Mental Health Professional": {
        en: "Evaluates trauma-related symptoms and treatment plans.",
        tl: "Sinusuri ang trauma-related symptoms at gamutan.",
      },
      "General Practitioner": {
        en: "Initial screening and referrals.",
        tl: "Paunang screening at referral.",
      },
    },
    evidence: [
      { symptomId: "nightmares", weight: 3, required: true },
      { symptomId: "heart_palpitations", weight: 2 },
      { symptomId: "sweating", weight: 2 },
      { symptomId: "avoidance", weight: 3 },
      { symptomId: "fear", weight: 2 },
      { symptomId: "anger", weight: 2 },
      { symptomId: "detachment", weight: 2 },
    ],
  },

  // 21) Anorexia Nervosa
  {
    id: "anorexia-nervosa",
    name: { en: "Anorexia nervosa", tl: "Anorexia nervosa" },
    brief: {
      en: "Eating disorder with intense fear of weight gain and very low body weight.",
      tl: "Eating disorder na may matinding takot tumaba at sobrang baba ng timbang.",
    },
    severity: { en: "Severe", tl: "Malubha" },
    reminder: {
      en: "Denial of hunger/seriousness can be part of the condition.",
      tl: "Maaaring kasama sa kondisyon ang pag-deny ng gutom o panganib.",
    },
    doctors: {
      "Mental Health Professional": {
        en: "Assesses eating disorder behaviors and mental health factors.",
        tl: "Sumusuri ng eating disorder behaviors at mental health.",
      },
      "General Practitioner": {
        en: "Checks physical status and refers urgently when needed.",
        tl: "Tinitingnan ang physical status at nagre-refer kung kailangan.",
      },
    },
    evidence: [
      { symptomId: "distorted_body_image", weight: 3 },
      { symptomId: "significantly_low_body_weight", weight: 5, required: true },
      { symptomId: "intense_fear_gaining_weight", weight: 4, required: true },
      { symptomId: "denial_seriousness_low_weight", weight: 2 },
    ],
    urgentAnyOf: ["significantly_low_body_weight"],
  },

  // 22) Schizophrenia
  {
    id: "schizophrenia",
    name: { en: "Schizophrenia", tl: "Schizophrenia" },
    brief: {
      en: "Chronic disorder affecting thinking and perception of reality.",
      tl: "Talamak na kondisyon na nakakaapekto sa pag-iisip at persepsyon sa realidad.",
    },
    severity: { en: "Severe", tl: "Malubha" },
    reminder: {
      en: "Withdrawal and low motivation can persist even when other symptoms improve.",
      tl: "Maaaring magtagal ang withdrawal at low motivation kahit gumagaan ang iba.",
    },
    doctors: {
      Psychiatrist: {
        en: "Diagnoses and treats severe mental health disorders.",
        tl: "Dalubhasa sa pagsusuri at paggamot ng malubhang mental health disorders.",
      },
      "General Practitioner": {
        en: "Initial assessment and urgent referrals.",
        tl: "Paunang assessment at urgent referral.",
      },
    },
    evidence: [
      { symptomId: "hallucinations", weight: 5, required: true },
      { symptomId: "delusions", weight: 5, required: true },
      { symptomId: "disorganized_speech", weight: 4 },
      { symptomId: "withdrawal", weight: 2 },
      { symptomId: "lack_of_motivation", weight: 2 },
    ],
    urgentAnyOf: ["hallucinations", "delusions"],
  },

  // 23) Rheumatoid Arthritis (RA)
  {
    id: "rheumatoid-arthritis-ra",
    name: { en: "Rheumatoid arthritis (RA)", tl: "Rheumatoid arthritis (RA)" },
    brief: {
      en: "Autoimmune joint disease causing chronic inflammation and possible deformity.",
      tl: "Autoimmune disease sa joints na nagdudulot ng chronic inflammation at posibleng deformity.",
    },
    severity: { en: "Moderate", tl: "Katamtaman" },
    reminder: {
      en: "RA is often symmetrical (both sides of the body can be affected).",
      tl: "Madalas simetriko ang RA (parehong side ang apektado).",
    },
    doctors: {
      Rheumatologist: {
        en: "Specializes in autoimmune and inflammatory joint disease.",
        tl: "Dalubhasa sa autoimmune/inflammatory joint disease.",
      },
      "General Practitioner": {
        en: "Initial assessment and referrals.",
        tl: "Paunang assessment at referral.",
      },
    },
    evidence: [
      { symptomId: "symmetrical_joint_pain", weight: 4, required: true },
      { symptomId: "joint_swelling", weight: 3 },
      { symptomId: "morning_stiffness", weight: 3 },
      { symptomId: "reduced_range_of_motion", weight: 2 },
    ],
  },

  // 24) Goiter
  {
    id: "goiter",
    name: { en: "Goiter", tl: "Goiter" },
    brief: {
      en: "Enlarged thyroid gland that may occur with high, low, or normal thyroid function.",
      tl: "Paglaki ng thyroid gland na maaaring mangyari kahit normal/mataas/mababa ang thyroid function.",
    },
    severity: { en: "Moderate", tl: "Katamtaman" },
    reminder: {
      en: "Dizziness/neck-vein swelling usually happens only in very large goiters.",
      tl: "Ang pagkahilo/pamamaga ng neck veins ay kadalasang sa sobrang laking goiter lang.",
    },
    doctors: {
      Endocrinologist: {
        en: "Evaluates thyroid enlargement and hormone function.",
        tl: "Sumusuri ng thyroid enlargement at hormone function.",
      },
      "General Practitioner": {
        en: "Initial assessment and referrals.",
        tl: "Paunang assessment at referral.",
      },
    },
    evidence: [
      { symptomId: "neck_swelling", weight: 4, required: true },
      { symptomId: "throat_tightness", weight: 3 },
      { symptomId: "coughing", weight: 2 },
      { symptomId: "hoarseness", weight: 2 },
      { symptomId: "difficulty_swallowing", weight: 2 },
      { symptomId: "dizziness", weight: 1 },
    ],
  },
];
