import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function Home() {
  const navigate = useNavigate();

  const cardStyle = {
    flex: 1,
    minWidth: "240px",
    background: "white",
    borderRadius: "18px",
    padding: "24px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    textAlign: "center"
  };

  return (
    <div style={{ maxWidth: "1400px", margin: "30px auto", padding: "0 20px" }}>
      <Navbar />

      <div
        style={{
          background: "white",
          borderRadius: "0 0 18px 18px",
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
        }}
      >
        <section
          style={{
            minHeight: "420px",
            background: "linear-gradient(135deg, #355cdb, #7d66e6, #f4a261)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "60px",
            gap: "40px"
          }}
        >
          <div style={{ flex: 1, maxWidth: "520px" }}>
            <h1
              style={{
                fontSize: "56px",
                lineHeight: "1.15",
                marginBottom: "20px",
                fontWeight: "700"
              }}
            >
              Uncover the Truth with TruthLens
            </h1>

            <p
              style={{
                fontSize: "24px",
                marginBottom: "30px",
                opacity: "0.95"
              }}
            >
              Detect Fake News Instantly
            </p>

            <button
              type="button"
              onClick={() => navigate("/analyze")}
              style={{
                padding: "14px 28px",
                borderRadius: "12px",
                background: "linear-gradient(90deg, #9f7aea, #ffb75e)",
                color: "white",
                fontSize: "18px",
                fontWeight: "600",
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
              }}
            >
              Get Started
            </button>
          </div>

          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2965/2965879.png"
              alt="Fake news analysis illustration"
              style={{
                width: "340px",
                maxWidth: "100%",
                filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.2))"
              }}
            />
          </div>
        </section>

        <section
          style={{
            padding: "40px",
            background: "#f9fbff"
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "24px",
              flexWrap: "wrap",
              justifyContent: "center"
            }}
          >
            <div style={cardStyle}>
              <h3 style={{ fontSize: "24px", marginBottom: "14px", color: "#1f2a44" }}>
                Analyze News
              </h3>
              <p style={{ fontSize: "16px", color: "#667085", lineHeight: "1.6" }}>
                Paste any news headline or article text to analyze its credibility.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={{ fontSize: "24px", marginBottom: "14px", color: "#1f2a44" }}>
                Check URLs
              </h3>
              <p style={{ fontSize: "16px", color: "#667085", lineHeight: "1.6" }}>
                Submit a source URL to inspect whether it looks trustworthy or suspicious.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={{ fontSize: "24px", marginBottom: "14px", color: "#1f2a44" }}>
                Get Results
              </h3>
              <p style={{ fontSize: "16px", color: "#667085", lineHeight: "1.6" }}>
                Receive a verdict, confidence score, and reasons behind the analysis.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;