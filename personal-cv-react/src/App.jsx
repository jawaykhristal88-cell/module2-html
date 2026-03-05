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
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
  ];

  const education = [
  {
  year: "2018",
  program: "Elementary School",
  school: "PNROA Elementary School"
  },
  {
  year: "2022",
  program: "High School",
  school: "PNROA High School"
  }, 
  {
  year: "2024",
  program: "Senior High School",
  school: "Liceo De Cagayan University"
  },
  {
  year: "Present",
  program: "College",
  school: "USTP – CDO Campus"
  }

];

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
        <Skills showSkills={showSkills} skills={skills}/>

        <Education education={education}  />
        <Contact />

        <p align="center">
          &copy; 2026 Khristal Jaway. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default App;