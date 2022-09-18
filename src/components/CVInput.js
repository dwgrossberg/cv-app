import React, { Component } from "react";
import GeneralInfoInput from "./GeneralInfoInput";
import WorkInput from "./WorkInput";
import "../styles/CVInput.css";
import EducationInput from "./EducationInput";
import ProfessionalSummary from "./ProfessionalSummary";

class CVInput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="CVInput">
        General Info:
        <hr></hr>
        <GeneralInfoInput />
        Professional Summary:
        <hr></hr>
        <ProfessionalSummary />
        Work Experience:
        <hr></hr>
        <WorkInput />
        <div className="buttons">
          <button id="moreWork">Add more</button>
          <button id="removeWork">Remove</button>
        </div>
        Education:
        <hr></hr>
        <EducationInput />
        <div className="buttons">
          <button id="moreEdu">Add more</button>
          <button id="removeEdu">Remove</button>
        </div>
      </div>
    );
  }
}

export default CVInput;
