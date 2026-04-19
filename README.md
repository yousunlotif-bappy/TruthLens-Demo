# 🔍 TruthLens — Fake News Detector

TruthLens is a simple yet powerful web application designed to help users quickly analyze news content and detect whether it might be fake, suspicious, or likely real.

In today's world, misinformation spreads faster than ever. TruthLens aims to give users a basic but effective tool to understand the credibility of news using smart pattern analysis.

---

## 🚀 Live Demo
👉 https://your-vercel-link.vercel.app

---

## 💡 What This Project Does

TruthLens analyzes:
- News text
- URLs (optional)

And provides:
- ✅ Verdict (Likely Real / Suspicious / Likely Fake)
- 📊 Confidence score
- 🧠 Clear reasoning behind the result

---

## 🧠 How It Works

The system uses rule-based analysis to evaluate:
- Suspicious keywords (e.g., "breaking", "miracle", "cure")
- Excessive punctuation (!!, ???)
- URL patterns (e.g., "viral", "free-news")
- HTTPS usage
- Content length

Each factor contributes to a score, which determines the final result.

---

## ✨ Features

- 🔎 Analyze news text instantly
- 🔗 Analyze suspicious URLs
- 📊 Score-based classification
- 🧾 Explanation of results
- 💾 Save reports to database
- 📁 View saved reports
- 🧪 Basic automated tests
- ☁️ Firebase Firestore integration

---

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Routing:** React Router
- **Backend (Database):** Firebase Firestore
- **Testing:** Jest (React Testing Library)
- **Deployment:** Vercel

---

📂 Project Structure
