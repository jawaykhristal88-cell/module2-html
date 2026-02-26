import { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import "./index.css";

function App() {
  const [showSkills, setShowSkills] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className="background">
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <div className="container">
        <Header />
        <About profile="/img/profile.jpg" />

        <button onClick={() => setShowSkills(!showSkills)}>
          {showSkills ? "Hide Skills" : "Show Skills"}
          </button>
        <Skills showSkills={showSkills}/>
        <Education />
        <Contact />

        <p align="center">
          &copy; 2026 Khristal Jaway. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default App;