import { useState } from "react";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import Navbar from "../components/Navbar/Navbar";
import ResultCard from "../components/ResultCard/ResultCard";
import { analyzeNews } from "../utils/analyzer";

function Analyze() {
  const [newsText, setNewsText] = useState("");
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleAnalyze = () => {
    if (!newsText.trim() && !url.trim()) {
      setError("Please enter news text or a URL.");
      setResult(null);
      return;
    }

    setError("");
    const analysisResult = analyzeNews(newsText, url);
    setResult(analysisResult);
  };

  const handleSaveReport = async () => {
    if (!result) return;

    try {
      await addDoc(collection(db, "reports"), {
        newsText,
        url,
        verdict: result.verdict,
        score: result.score,
        reasons: result.reasons,
        createdAt: new Date().toISOString()
      });

      alert("Report saved to database!");
    } catch (saveError) {
      console.error("Error saving report:", saveError);
      alert("Failed to save report.");
    }
  };

  return (
    <div style={{ maxWidth: "1400px", margin: "30px auto", padding: "0 20px" }}>
      <Navbar />

      <div
        style={{
          background: "white",
          borderRadius: "0 0 18px 18px",
          padding: "50px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
        }}
      >
        <h1 style={{ fontSize: "46px", marginBottom: "12px", color: "#1f2a44" }}>
          Analyze <span style={{ color: "#3570e6" }}>News</span> for Truth
        </h1>

        <p style={{ fontSize: "20px", color: "#667085", marginBottom: "30px" }}>
          Enter the news text or URL to analyze.
        </p>

        <label
          htmlFor="newsText"
          style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#1f2a44" }}
        >
          News Text
        </label>

        <textarea
          id="newsText"
          value={newsText}
          onChange={(e) => setNewsText(e.target.value)}
          placeholder="Enter news text here..."
          style={{
            width: "100%",
            minHeight: "220px",
            borderRadius: "14px",
            border: "1px solid #dcdfe6",
            padding: "20px",
            fontSize: "18px",
            marginBottom: "20px",
            resize: "vertical"
          }}
        />

        <label
          htmlFor="urlInput"
          style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#1f2a44" }}
        >
          News URL
        </label>

        <input
          id="urlInput"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL (optional)"
          style={{
            width: "100%",
            height: "56px",
            borderRadius: "14px",
            border: "1px solid #dcdfe6",
            padding: "0 18px",
            fontSize: "17px",
            marginBottom: "20px"
          }}
        />

        {error && (
          <p style={{ color: "red", marginBottom: "20px", fontWeight: "500" }}>
            {error}
          </p>
        )}

        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <button
            type="button"
            onClick={handleAnalyze}
            style={{
              padding: "16px 48px",
              borderRadius: "14px",
              background: "linear-gradient(90deg, #4a7dff, #ffb45f)",
              color: "white",
              fontSize: "24px",
              fontWeight: "700",
              boxShadow: "0 8px 20px rgba(0,0,0,0.12)"
            }}
          >
            Analyze
          </button>
        </div>

        {result && (
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <button
              type="button"
              onClick={handleSaveReport}
              style={{
                padding: "12px 28px",
                borderRadius: "12px",
                background: "#1d4ed8",
                color: "white",
                fontSize: "16px",
                fontWeight: "600"
              }}
            >
              Save Report
            </button>
          </div>
        )}

        {result && <ResultCard result={result} />}
      </div>
    </div>
  );
}

export default Analyze;