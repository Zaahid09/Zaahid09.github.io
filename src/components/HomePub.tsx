import React from "react";
import { ZaahidHeaderContainer } from "../common/ZaahidHeaderContainer";
import { useTheme } from "../ThemeContext";

const projects = [
  {
    title: "SaaS Landing Page Website",
    tech: "HTML | CSS | JavaScript",
    github: "https://github.com/Zaahid09/saas-landing-page?tab=readme-ov-file",
    live: "https://eloquent-unicorn-0b52bb.netlify.app/",
  },

  {
    title: "Courier Service Web App (PERN Stack)",
    tech: "PostgreSQL | Express.js | React | Node.js | TailwindCSS",
    github: "https://github.com/Zaahid09/PERN-STACK-courier-app",
    live: null,
  },
  {
    title: "Titanic Survival Prediction Model",
    tech: "Python | Scikit-learn | Pandas",
    github: null,
    live: null,
  },
  {
    title: "CV Builder (AI Voice-Assisted Resume Generator)",
    tech: "Python | python-docx | pyttsx3",
    github: "https://github.com/Zaahid09/Python-CV-Builder",
    live: null,
  },
];

export function HomePub() {
  const { theme } = useTheme();

  const listGroupClass = `list-group bg-${theme} text-${theme === "light" ? "dark" : "white"}`;
  const listItemClass = `list-group-item bg-${theme} text-${theme === "light" ? "dark" : "white"} Zaahid-group-item`;

  return (
    <ZaahidHeaderContainer
      title="Projects"
      buttonText="V I E W &nbsp;&nbsp;&nbsp;&nbsp; A L L"
      buttonPath={"publications"}
    >
      <ul className={listGroupClass}>
        {projects.map((project, index) => (
          <li key={index} className={listItemClass}>
            <span className="fw-bold">{project.title}</span>
            <br />
            <small className="text-muted" style={{ fontFamily: "monospace" }}>
              {project.tech}
            </small>
            <div style={{ marginTop: "4px" }}>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "12px", marginRight: "10px" }}
                >
                  GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "12px" }}
                >
                  Live Site
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </ZaahidHeaderContainer>
  );
}
