import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

function Reports() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const reportsRef = collection(db, "reports");
        const querySnapshot = await getDocs(reportsRef);

        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

        setReports(data);
      } catch (error) {
        console.error("Error fetching reports:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

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
        <h1 style={{ fontSize: "42px", marginBottom: "20px", color: "#1f2a44" }}>
          Saved Reports
        </h1>

        {loading ? (
          <p style={{ color: "#667085", fontSize: "18px" }}>Loading reports...</p>
        ) : reports.length === 0 ? (
          <p style={{ color: "#667085", fontSize: "18px" }}>
            No saved reports found yet.
          </p>
        ) : (
          <div style={{ display: "grid", gap: "20px" }}>
            {reports.map((report) => {
              const verdictColor =
                report.verdict === "Likely Fake"
                  ? "#d92d20"
                  : report.verdict === "Suspicious"
                  ? "#f79009"
                  : "#12b76a";

              return (
                <div
                  key={report.id}
                  style={{
                    border: "1px solid #e4e7ec",
                    borderRadius: "16px",
                    padding: "24px",
                    background: "#f9fafb"
                  }}
                >
                  <h2 style={{ marginBottom: "10px", color: verdictColor }}>
                    {report.verdict}
                  </h2>

                  <p style={{ marginBottom: "8px", color: "#344054" }}>
                    <strong>Score:</strong> {report.score}%
                  </p>

                  <p style={{ marginBottom: "8px", color: "#344054" }}>
                    <strong>Date:</strong>{" "}
                    {report.createdAt
                      ? new Date(report.createdAt).toLocaleString()
                      : "No date"}
                  </p>

                  {report.newsText && (
                    <p style={{ marginBottom: "8px", color: "#475467" }}>
                      <strong>News:</strong> {report.newsText.slice(0, 150)}
                      {report.newsText.length > 150 ? "..." : ""}
                    </p>
                  )}

                  {report.url && (
                    <p style={{ marginBottom: "8px", color: "#475467" }}>
                      <strong>URL:</strong> {report.url}
                    </p>
                  )}

                  <div>
                    <strong>Reasons:</strong>
                    <ul style={{ paddingLeft: "20px", marginTop: "8px", color: "#475467" }}>
                      {report.reasons?.map((reason, index) => (
                        <li key={index}>{reason}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Reports;