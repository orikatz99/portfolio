import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./sections/Home/Home";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";



export default function App() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "280px 1fr",
        gap: 22,
        padding: 22,
        minHeight: "100vh",
      }}
    >
      <Sidebar />

      <main
        style={{
          borderRadius: 22,
          background: "linear-gradient(180deg, #fff1f8 0%, #ffffff 60%)",
          border: "1px solid rgba(236,72,153,0.25)",
          boxShadow: "0 20px 60px rgba(236,72,153,0.15)",
          padding: 26,
        }}
      >
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}
