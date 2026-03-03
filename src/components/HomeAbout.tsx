import React from "react";
import { ZaahidHeaderContainer } from "../common/ZaahidHeaderContainer";

export function HomeAbout() {
  return (
    <ZaahidHeaderContainer
      title="About Me"
      buttonText="Read More"
      buttonPath="/about"
    >
      <div id="Zaahid-home-about-p">
        <p className="fw-normal">
          {" "}
          I'm an undergraduate student in Information Technology at ANC,
          currently looking for internship opportunities where I can apply what
          I've learned and gain real-world experience in the tech industry.
          Throughout my studies I’ve built a solid foundation in areas like
          programming, databases, networking, and Security. I’m passionate about
          using tech to solve problems and eager to learn from professionals in
          the field.
        </p>
        <p className="fw-normal">
          Currently, I am pursuing a BSc (Hons) in Information Technology at the
          University of West London. Through my academic work and independent
          projects, I am gaining hands on experience in Full-Stack Development
          specifically using the PERN stack (PostgreSQL, Express, React,
          Node.js) and Machine Learning for predictive analysis. I have
          successfully implemented complex features like JWT authentication and
          real-time tracking in web applications, as well as survival prediction
          models using Python and Scikit learn.
        </p>
        <p className="fw-normal">
          Prior to focusing on core IT infrastructure, I spent significant time
          in the digital industry as a Digital Marketing Intern at Ceylon
          Biscuits Limited and a Social Media Video Editor at a restaurant in
          colombo.
        </p>
      </div>
    </ZaahidHeaderContainer>
  );
}
