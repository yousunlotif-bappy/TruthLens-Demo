import Navbar from "../components/Navbar/Navbar";

function About() {
  return (
    <div style={{ maxWidth: "1400px", margin: "30px auto", padding: "0 20px" }}>
      <Navbar />
      <div
        style={{
          background: "white",
          borderRadius: "0 0 18px 18px",
          padding: "40px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>About TruthLens</h1>
        <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#475467" }}>
          TruthLens is a fake news detection web application that helps users
          analyze suspicious text and URLs, classify them as Likely Real,
          Suspicious, or Likely Fake, and save reports in Firebase Firestore.
        </p>
      </div>
    </div>
  );
}

export default About;