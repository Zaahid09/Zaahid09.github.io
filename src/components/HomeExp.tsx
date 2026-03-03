import React from "react";
import { ZaahidHeaderContainer } from "../common/ZaahidHeaderContainer";
import data from "../data/experince.json";
import { useTheme } from "../ThemeContext";

function ExperienceSection({
  title,
  index,
  experiences,
}: {
  title: string;
  index: number;
  experiences: any;
}) {
  const { theme } = useTheme();

  return (
    <div
      className={`container shadow-sm bg-${theme} text-${theme === "light" ? "dark" : "white"}`}
    >
      <span className="fw-bold">
        {title} Experience
        <span className="badge bg-secondary">{index}</span>
      </span>
      <hr />
      {experiences.slice(0, 1).map((exp: any, index: React.Key) => (
        <React.Fragment key={index}>
          <div className="row">
            <div className="col-lg-2 d-none d-lg-block">
              <img
                className="rounded-circle Zaahid-edu-logo"
                src={exp.logo}
                alt="Logo"
              />
            </div>
            <div className="col">
              <div className="d-flex justify-content-between align-items-center">
                <h1 className="fs-5 Zaahid-edu-title">{exp.role}</h1>
                <h1 className="fs-6 text-end">{exp.period}</h1>
              </div>
              <h1 className="fs-5 Zaahid-edu-subtitle">{exp.aff}</h1>
              <h1 className="fs-6 Zaahid-edu-subtitle">{exp.dept}</h1>
              {exp.description ? (
                <p className="Zaahid-edu-para">{exp.description}</p>
              ) : (
                <ul className="Zaahid-edu-list">
                  {exp.points.map((point: any, pointIndex: React.Key) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          {/*{index < experiences.length - 1 && <hr />}*/}
        </React.Fragment>
      ))}
    </div>
  );
}

export function HomeExp() {
  const experiences = data.experiences;

  // Array defining the experience sections
  const sections = [
    { title: "", data: experiences.research },
    { title: "", data: experiences.professional },
    { title: "", data: experiences.teaching },
  ];

  return (
    <ZaahidHeaderContainer
      title="Experience"
      buttonText="V I E W &nbsp;&nbsp;&nbsp;&nbsp; A L L"
      buttonPath="/experience"
    >
      {sections.map((section, index) => (
        <ExperienceSection
          key={index}
          title={section.title}
          index={index + 1}
          experiences={section.data}
        />
      ))}
    </ZaahidHeaderContainer>
  );
}
