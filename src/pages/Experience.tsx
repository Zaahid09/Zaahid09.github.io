import React from "react";
import { ZaahidFullWidthContainer } from "../common/ZaahidFullWidthContainer";
import data from "../data/experince.json";
import { ZaahidHeaderContainer } from "../common/ZaahidHeaderContainer";

function ExperienceSection({
  title,
  experiences,
}: {
  title: string;
  experiences: any;
}) {
  return (
    <ZaahidHeaderContainer title={title}>
      {experiences.map((exp: any, index: number) => (
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
                <h1 className="fs-4 Zaahid-edu-title">{exp.role}</h1>
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
          {index < experiences.length - 1 && <hr />}
        </React.Fragment>
      ))}
    </ZaahidHeaderContainer>
  );
}

export function Experience() {
  const experiences = data.experiences;

  // Array defining the experience sections
  const sections = [
    { title: "Exp1", data: experiences.research },
    { title: "Exp2", data: experiences.professional },
    { title: "Exp3", data: experiences.teaching },
  ];

  return (
    <div className="container">
      <div className="row">
        <ZaahidFullWidthContainer>
          <ZaahidHeaderContainer title="Experience">
            {sections.map((section, index) => (
              <ExperienceSection
                key={index}
                title={section.title}
                experiences={section.data} // Displaying only the first experience of each section
              />
            ))}
          </ZaahidHeaderContainer>
        </ZaahidFullWidthContainer>
      </div>
    </div>
  );
}
