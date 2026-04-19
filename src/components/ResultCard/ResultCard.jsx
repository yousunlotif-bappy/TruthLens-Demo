function ResultCard({ result }) {
  const verdictColor =
    result.verdict === "Likely Fake"
      ? "#d92d20"
      : result.verdict === "Suspicious"
      ? "#f79009"
      : "#12b76a";

  const cardBackground =
    result.verdict === "Likely Fake"
      ? "#fff4f4"
      : result.verdict === "Suspicious"
      ? "#fff9f2"
      : "#f6fff8";

  const cardBorder =
    result.verdict === "Likely Fake"
      ? "1px solid #fda29b"
      : result.verdict === "Suspicious"
      ? "1px solid #fecd89"
      : "1px solid #abefc6";

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "28px",
        borderRadius: "16px",
        background: cardBackground,
        border: cardBorder
      }}
    >
      <h2 style={{ fontSize: "30px", marginBottom: "12px", color: "#1f2a44" }}>
        Result: <span style={{ color: verdictColor }}>{result.verdict}</span>
      </h2>

      <p style={{ fontSize: "20px", marginBottom: "18px", color: "#344054" }}>
        Confidence Score: <strong>{result.score}%</strong>
      </p>

      <div
        style={{
          width: "100%",
          height: "12px",
          background: "#e4e7ec",
          borderRadius: "999px",
          overflow: "hidden",
          marginBottom: "20px"
        }}
      >
        <div
          style={{
            width: `${result.score}%`,
            height: "100%",
            background: verdictColor,
            borderRadius: "999px"
          }}
        />
      </div>

      <h3 style={{ marginBottom: "10px", color: "#1f2a44" }}>Reasons:</h3>
      <ul style={{ paddingLeft: "20px", color: "#475467", lineHeight: "1.8" }}>
        {result.reasons.map((reason, index) => (
          <li key={index}>{reason}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResultCard;