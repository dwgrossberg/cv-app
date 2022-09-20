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
  render() {
    const {
      inputGeneralInfo,
      inputSummary,
      inputWorkExp,
      inputEducation,
      addWorkExp,
      removeWorkExp,
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
        {state.workExp.map((work) => {
          return (
            <WorkInput
              key={"WorkExp" + work.index}
              inputWorkExp={inputWorkExp}
              state={state}
              index={work.index}
              addWorkExp={addWorkExp}
              removeWorkExp={removeWorkExp}
            />
          );
        })}
        Education:
        <hr></hr>
        {state.education.map((edu) => {
          return (
            <EducationInput
              key={"Edu" + edu.index}
              inputEducation={inputEducation}
              state={state}
              index={edu.index}
            />
          );
        })}
        <div className="buttons"></div>
      </div>
    );
  }
}

export default CVInput;
