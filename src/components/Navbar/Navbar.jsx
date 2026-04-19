import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>TruthLens</h2>
        <span>Fake News Detector</span>
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/reports">Reports</Link>
        <Link to="/login" className="login-btn">
          Log In
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;