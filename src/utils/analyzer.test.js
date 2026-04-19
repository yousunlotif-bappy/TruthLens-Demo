import { analyzeNews } from "./analyzer";

test("detects suspicious fake-style content", () => {
  const result = analyzeNews("BREAKING!!! miracle cure discovered now");

  expect(result.verdict).toBe("Likely Fake");
  expect(result.score).toBeGreaterThanOrEqual(60);
  expect(result.reasons.length).toBeGreaterThan(0);
});

test("detects suspicious URL patterns", () => {
  const result = analyzeNews("", "http://viral-truth-now.com");

  expect(result.verdict === "Suspicious" || result.verdict === "Likely Fake").toBe(true);
  expect(result.reasons).toContain("URL does not use HTTPS");
});

test("returns likely real for neutral content", () => {
  const result = analyzeNews("The government announced a new education policy today.");

  expect(result.verdict).toBe("Likely Real");
});

test("flags short content", () => {
  const result = analyzeNews("hello");

  expect(result.reasons).toContain("Very short text gives limited credibility context");
});