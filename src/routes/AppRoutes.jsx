import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Analyze from "../pages/Analyze";
import Reports from "../pages/Reports";
import About from "../pages/About";
import Login from "../pages/Login";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analyze" element={<Analyze />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;