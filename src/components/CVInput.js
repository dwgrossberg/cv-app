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
  setTextAreaHeight = (elem) => {
    elem.style.height = elem.scrollHeight + "px";
  };
  componentDidMount() {
    this.setTextAreaHeight(document.getElementById("summary"));
    this.setTextAreaHeight(document.getElementById("workTasks"));
  }
  const;
  render() {
    const {
      inputGeneralInfo,
      inputSummary,
      inputWorkExp,
      inputEducation,
      state,
    } = this.props;
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
        Education:
        <hr></hr>
        <EducationInput
          inputEducation={inputEducation}
          state={state}
          index={state.education[0].index}
        />
        <div className="buttons"></div>
      </div>
    );
  }
}

export default CVInput;
