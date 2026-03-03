import React from "react";
import UWL_LOGO from "../assets/img/UWL_LOGO.png";
import ANC_LOGO from "../assets/img/ANC_LOGO.jpg";
import Leeds_LOGO from "../assets/img/Leeds_LOGO.jpg";
import { ZaahidHeaderContainer } from "../common/ZaahidHeaderContainer";

export function HomeEdu() {
  return (
    <ZaahidHeaderContainer
      title="Education"
      buttonText="V I E W &nbsp;&nbsp;&nbsp;&nbsp; A L L"
    >
      <div className="row">
        <div className="col-lg-2 d-none d-lg-block">
          <img className="rounded-circle Zaahid-edu-logo" src={UWL_LOGO} />
        </div>
        <div className="col">
          <h1 className="fs-5 Zaahid-edu-title">
            BSc (Hons) Information Technology - University of West London (UWL)
          </h1>
          <h1 className="fs-6 Zaahid-edu-subtitle"></h1>
          <p className="Zaahid-edu-para">
            Expected Start: September 2026 - Expected Graduation: 2027
            <br />
            Current GPA: Not Graded
            <br />
          </p>
        </div>
        <div className="col-lg-9"></div>
      </div>
      <hr />
      <div className="row">
        <div className="col-lg-2 d-none d-lg-block">
          <img className="rounded-circle Zaahid-edu-logo" src={ANC_LOGO} />
        </div>
        <div className="col">
          <h1 className="fs-5 Zaahid-edu-title">
            Pearson BTECH Higher National Diploma in Computing - American
            Education Center (ANC)
          </h1>
          <h1 className="fs-6 Zaahid-edu-subtitle"></h1>
          <p className="Zaahid-edu-para">
            April 2024 - October 2025 <br /> Completed en route to Top Up Degree{" "}
            <br />
            Grade: Merit
          </p>
        </div>
        <div className="col-lg-9"></div>
      </div>
      <hr />
      <div className="row">
        <div className="col-lg-2 d-none d-lg-block">
          <img className="rounded-circle Zaahid-edu-logo" src={ANC_LOGO} />
        </div>
        <div className="col">
          <h1 className="fs-5 Zaahid-edu-title">
            Pearson Foundation in Computing - American Education Center
            (ANC){" "}
          </h1>
          <h1 className="fs-6 Zaahid-edu-subtitle"></h1>
          <p className="Zaahid-edu-para">
            July 2023 - Feb 2024 <br /> Completed en route to Higher National
            Diploma
            <br />
            Grade: Higher Distinction
          </p>
        </div>
        <div className="col-lg-9"></div>
      </div>

      <hr />
      <div className="row">
        <div className="col-lg-2 d-none d-lg-block">
          <img className="rounded-circle Zaahid-edu-logo" src={Leeds_LOGO} />
        </div>
        <div className="col">
          <h1 className="fs-5 Zaahid-edu-title">
            Pearson Edexcel IGCSE (9-1) - Leeds International School (LIS)
          </h1>
          <h1 className="fs-6 Zaahid-edu-subtitle"></h1>
          <p className="Zaahid-edu-para">
            June 2021
            <br /> Science Stream <br />
            {/* Grade: Merit */}
          </p>
        </div>
        <div className="col-lg-9"></div>
      </div>
    </ZaahidHeaderContainer>
  );
}
