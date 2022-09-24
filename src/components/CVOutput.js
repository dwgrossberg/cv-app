import React from "react";
import GeneralInfoOutput from "./GeneralInfoOutput";
import SummaryOutput from "./SummaryOutput";
import WorkOutput from "./WorkOutput";
import EducationOutput from "./EducationOutput";
import "../styles/CVOutput.css";

const CVOutput = (props) => {
  const { generalInfo, profSummary, workExp, education } = props;

  return (
    <div className="CVOutput">
      <GeneralInfoOutput generalInfo={generalInfo} />
      <SummaryOutput profSummary={profSummary} />
      <hr></hr>
      <p className="exp">Work Experience</p>
      {workExp.map((work) => {
        return (
          <WorkOutput key={work.index} workExp={workExp} index={work.index} />
        );
      })}
      <div className="exp">Education</div>
      {education.map((edu) => {
        return (
          <EducationOutput
            key={edu.index}
            education={education}
            index={edu.index}
          />
        );
      })}
    </div>
  );
};

export default CVOutput;
