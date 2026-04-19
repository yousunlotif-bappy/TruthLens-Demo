import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(true);
  const [message, setMessage] = useState("");

  const handleAuth = async () => {
    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(auth, email, password);
        setMessage("Account created successfully!");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        setMessage("Logged in successfully!");
      }
    } catch (error) {
      setMessage(error.message);
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
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          maxWidth: "500px",
          margin: "0 auto"
        }}
      >
        <h1 style={{ fontSize: "38px", marginBottom: "20px", color: "#1f2a44" }}>
          {isSignup ? "Create Account" : "Login"}
        </h1>

        <label htmlFor="emailInput" style={{ display: "block", marginBottom: "8px" }}>
          Email
        </label>
        <input
          id="emailInput"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            height: "52px",
            marginBottom: "16px",
            padding: "0 16px",
            borderRadius: "12px",
            border: "1px solid #d0d5dd",
            fontSize: "16px"
          }}
        />

        <label htmlFor="passwordInput" style={{ display: "block", marginBottom: "8px" }}>
          Password
        </label>
        <input
          id="passwordInput"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            height: "52px",
            marginBottom: "20px",
            padding: "0 16px",
            borderRadius: "12px",
            border: "1px solid #d0d5dd",
            fontSize: "16px"
          }}
        />

        <button
          type="button"
          onClick={handleAuth}
          style={{
            width: "100%",
            height: "52px",
            borderRadius: "12px",
            background: "linear-gradient(90deg, #4a7dff, #ffb45f)",
            color: "white",
            fontSize: "18px",
            fontWeight: "700",
            marginBottom: "16px"
          }}
        >
          {isSignup ? "Sign Up" : "Login"}
        </button>

        <p
          onClick={() => setIsSignup(!isSignup)}
          style={{
            color: "#355cdb",
            cursor: "pointer",
            fontWeight: "500",
            marginBottom: "12px"
          }}
        >
          {isSignup
            ? "Already have an account? Login"
            : "Don't have an account? Sign Up"}
        </p>

        {message && <p style={{ color: "#344054", marginTop: "10px" }}>{message}</p>}
      </div>
    </div>
  );
}

export default Login;