export function analyzeNews(text, url = "") {
  let score = 0;
  const reasons = [];

  const rawText = text || "";
  const content = rawText.toLowerCase().trim();
  const sourceUrl = (url || "").toLowerCase().trim();

  const suspiciousWords = [
    "shocking",
    "breaking",
    "unbelievable",
    "miracle",
    "cure",
    "secret",
    "urgent",
    "alert",
    "exposed",
    "fake",
    "exclusive",
    "banned",
    "scandal"
  ];

  suspiciousWords.forEach((word) => {
    if (content.includes(word)) {
      score += 15;
      reasons.push(`Suspicious word detected: "${word}"`);
    }
  });

  if (rawText.includes("!!!")) {
    score += 15;
    reasons.push("Excessive punctuation detected");
  }

  if (rawText.length > 0 && rawText === rawText.toUpperCase()) {
    score += 10;
    reasons.push("All caps text detected");
  }

  if (
    content.includes("100% true") ||
    content.includes("guaranteed") ||
    content.includes("instant cure") ||
    content.includes("share now")
  ) {
    score += 20;
    reasons.push("Exaggerated or absolute claim detected");
  }

  if (sourceUrl && !sourceUrl.startsWith("https://")) {
    score += 20;
    reasons.push("URL does not use HTTPS");
  }

  if (
    sourceUrl.includes("viral") ||
    sourceUrl.includes("truth-now") ||
    sourceUrl.includes("free-news") ||
    sourceUrl.includes("click") ||
    sourceUrl.includes("buzz")
  ) {
    score += 25;
    reasons.push("Suspicious URL pattern detected");
  }

  if (rawText.trim().length > 0 && rawText.trim().length < 25) {
    score += 5;
    reasons.push("Very short text gives limited credibility context");
  }

  let verdict = "Likely Real";

  if (score >= 60) {
    verdict = "Likely Fake";
  } else if (score >= 30) {
    verdict = "Suspicious";
  }

  if (reasons.length === 0) {
    reasons.push("No suspicious patterns detected");
  }

  return {
    verdict,
    score,
    reasons
  };
}