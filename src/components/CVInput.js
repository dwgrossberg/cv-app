import React, { useEffect } from "react";
import GeneralInfoInput from "./GeneralInfoInput";
import WorkInput from "./WorkInput";
import EducationInput from "./EducationInput";
import SummaryInput from "./SummaryInput";
import "../styles/CVInput.css";

const CVInput = (props) => {
  const setTextAreaHeight = (elem) => {
    elem.style.height = elem.scrollHeight + "px";
  };

  useEffect(() => {
    setTextAreaHeight(document.getElementById("summary"));
    setTextAreaHeight(document.getElementById("workTasks"));
  }, []);

  const {
    generalInfo,
    inputGeneralInfo,
    profSummary,
    inputSummary,
    workExp,
    inputWorkExp,
    education,
    inputEducation,
    addWorkExp,
    removeWorkExp,
    addEducation,
    removeEducation,
  } = props;

  return (
    <div className="CVInput">
      General Info:
      <hr></hr>
      <GeneralInfoInput
        inputGeneralInfo={inputGeneralInfo}
        generalInfo={generalInfo}
      />
      Professional Summary:
      <hr></hr>
      <SummaryInput inputSummary={inputSummary} profSummary={profSummary} />
      Work Experience:
      <hr></hr>
      {workExp.map((work) => {
        return (
          <WorkInput
            key={work.index}
            inputWorkExp={inputWorkExp}
            workExp={workExp}
            index={work.index}
            addWorkExp={addWorkExp}
            removeWorkExp={removeWorkExp}
          />
        );
      })}
      Education:
      <hr></hr>
      {education.map((edu) => {
        return (
          <EducationInput
            key={edu.index}
            inputEducation={inputEducation}
            addEducation={addEducation}
            removeEducation={removeEducation}
            education={education}
            index={edu.index}
          />
        );
      })}
      <div className="buttons"></div>
    </div>
  );
};

export default CVInput;
