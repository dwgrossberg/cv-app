import React, { Component } from "react";
import GeneralInfoInput from "./GeneralInfoInput";
import WorkInput from "./WorkInput";
import "../styles/CVInput.css";
import EducationInput from "./EducationInput";
import SummaryInput from "./SummaryInput";

class CVInput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { inputGeneralInfo, inputSummary, inputWorkExp, state } = this.props;
    return (
      <div className="CVInput">
        General Info:
        <hr></hr>
        <GeneralInfoInput inputGeneralInfo={inputGeneralInfo} state={state} />
        Professional Summary:
        <hr></hr>
        <SummaryInput inputSummary={inputSummary} state={state} />
        Work Experience:
        <hr></hr>
        <WorkInput
          inputWorkExp={inputWorkExp}
          state={state}
          index={state.workExp[0].index}
        />
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
