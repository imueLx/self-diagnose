const test = require("node:test");
const assert = require("node:assert/strict");

const loadModule = () => import("./assessment.js");
const loadData = () => import("../data/symptomsData.js");

test("chest pain with difficulty breathing => emergency", async () => {
  const { getTriage } = await loadModule();
  const result = getTriage({
    selectedSymptomIds: ["chest_pain"],
    triageAnswers: { chest_pain_breathing: true },
  });

  assert.equal(result.level, "emergency");
});

test("blurred vision only => routine triage", async () => {
  const { getTriage } = await loadModule();
  const result = getTriage({
    selectedSymptomIds: ["blurred_vision"],
    triageAnswers: {},
  });

  assert.equal(result.level, "routine");
});

test("dengue signals rank highly", async () => {
  const [{ scoreConditions }, { conditions }] = await Promise.all([
    loadModule(),
    loadData(),
  ]);

  const results = scoreConditions({
    selectedSymptomIds: ["fever", "rash", "pain_behind_eyes"],
    conditions,
  });

  assert.equal(results[0].conditionId, "dengue-fever");
});
