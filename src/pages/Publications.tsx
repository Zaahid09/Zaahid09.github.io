import React, { useState } from "react";
import { ZaahidFullWidthContainer } from "../common/ZaahidFullWidthContainer";
import { useTheme } from "../ThemeContext";

const projects = [
  {
    title: "SaaS Landing Page Website",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "Designed and developed a landing page as a personal front-end development project. Focused on clean UI design and usability across devices.",
    bullets: [
      "Designed and developed a landing page as a personal front-end development project.",
      "Focused on clean UI design and usability across devices.",
    ],
    github: "https://github.com/Zaahid09/saas-landing-page?tab=readme-ov-file",
    live: "https://eloquent-unicorn-0b52bb.netlify.app/",
    video: null,
    color: "#0d6efd",
  },
  {
    title: "Courier Service Web Application (PERN Stack)",
    tech: ["PostgreSQL", "Express.js", "React", "Node.js", "TailwindCSS"],
    description:
      "A full-stack courier management web application with JWT authentication, real-time parcel tracking, and role-based access for clients and admins.",
    bullets: [
      "Implemented JWT authentication & role-based authorization (Client vs Admin users).",
      "Developed shipment creation and real time parcel tracking features.",
      "Built a responsive frontend UI with React and TailwindCSS.",
      "Integrated PostgreSQL database with structured schema for users and shipments.",
    ],
    github: "https://github.com/Zaahid09/PERN-STACK-courier-app",
    live: null,
    video: "https://www.loom.com/share/d37e304e6b3a4da2b1211be0db9ce3e0",
    color: "#198754",
  },
  {
    title: "Titanic Survival Prediction Model",
    tech: ["Python", "Scikit-learn", "Pandas"],
    description:
      "A machine learning model to predict Titanic passenger survival using classification algorithms on historical data.",
    bullets: [
      "Developed a predictive ML model to determine Titanic passenger survival based on historical data.",
      "Cleaned and preprocessed data using Pandas and NumPy handling missing values and categorical features.",
      "Implemented and tested classification algorithms like KNN and Decision Tree.",
    ],
    github: null,
    live: null,
    video: null,
    color: "#dc3545",
  },
  {
    title: "CV Builder (AI Voice-Assisted Resume Generator)",
    tech: ["Python", "python-docx", "pyttsx3"],
    description:
      "An interactive CLI-based CV generator with AI voice guidance that collects user details and creates a formatted .docx resume.",
    bullets: [
      "Built an interactive CV generator that collects user details via CLI prompts and creates a formatted .docx resume.",
      "Implemented AI voice guidance using text to speech (pyttsx3) to read prompts and improve user experience.",
    ],
    github: "https://github.com/Zaahid09/Python-CV-Builder",
    live: null,
    video: null,
    color: "#6f42c1",
  },
];

const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path
      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
        0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52
        -.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2
        -3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82
        .64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08
        2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01
        1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
    />
  </svg>
);

const LiveIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path
      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887
        1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7
        0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958
        6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495
        12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187
        -.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65
        1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09
        12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291
        1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64
        1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33
        -.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0
        1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27
        2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855
        4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"
    />
  </svg>
);

const VideoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path
      d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5
        0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"
    />
  </svg>
);

export function Publications() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const cardStyle = (color: string): React.CSSProperties => ({
    background: isDark ? "#1e1e1e" : "#ffffff",
    border: isDark ? "1px solid #333" : "1px solid #e5e5e5",
    borderRadius: "12px",
    padding: "24px",
    marginBottom: "20px",
    borderLeft: `4px solid ${color}`,
    transition: "box-shadow 0.2s",
  });

  const techBadge = (color: string): React.CSSProperties => ({
    display: "inline-block",
    background: isDark ? "#2a2a2a" : "#f0f0f0",
    color: isDark ? "#ccc" : "#444",
    borderRadius: "4px",
    padding: "2px 8px",
    fontSize: "12px",
    marginRight: "6px",
    marginBottom: "6px",
    fontFamily: "monospace",
  });

  const linkBtn = (color: string): React.CSSProperties => ({
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    padding: "6px 14px",
    borderRadius: "6px",
    border: `1px solid ${color}`,
    color: color,
    background: "transparent",
    textDecoration: "none",
    fontSize: "13px",
    fontWeight: 500,
    marginRight: "8px",
    marginTop: "12px",
    transition: "background 0.15s, color 0.15s",
  });

  return (
    <div className="container">
      <div className="row">
        <ZaahidFullWidthContainer>
          <div className="col">
            <h1>Projects</h1>
            <hr />
            <div className="row">
              <div className="col-12">
                {projects.map((project, index) => (
                  <div key={index} style={cardStyle(project.color)}>
                    {/* Title */}
                    <h5
                      style={{
                        fontWeight: 700,
                        color: isDark ? "#ffffff" : "#111",
                        marginBottom: "6px",
                      }}
                    >
                      {project.title}
                    </h5>

                    {/* Tech stack */}
                    <div style={{ marginBottom: "10px" }}>
                      {project.tech.map((t, i) => (
                        <span key={i} style={techBadge(project.color)}>
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Bullet points */}
                    <ul
                      style={{
                        paddingLeft: "20px",
                        color: isDark ? "#bbb" : "#444",
                        fontSize: "14px",
                        lineHeight: "1.7",
                        marginBottom: "4px",
                      }}
                    >
                      {project.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>

                    {/* Links */}
                    <div>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={linkBtn(project.color)}
                        >
                          <GitHubIcon /> GitHub
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={linkBtn(project.color)}
                        >
                          <LiveIcon /> Live Site
                        </a>
                      )}
                      {project.video && (
                        <a
                          href={project.video}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={linkBtn(project.color)}
                        >
                          <VideoIcon /> Watch Demo
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ZaahidFullWidthContainer>
      </div>
    </div>
  );
}
