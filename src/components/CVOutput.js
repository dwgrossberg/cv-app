import React, { Component } from "react";
import GeneralInfoOutput from "./GeneralInfoOutput";
import SummaryOutput from "./SummaryOutput";
import WorkOutput from "./WorkOutput";
import EducationOutput from "./EducationOutput";
import uniqid from "uniqid";
import "../styles/CVOutput.css";

class CVOutput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { state } = this.props;
    return (
      <div className="CVOutput">
        <GeneralInfoOutput state={state} />
        <SummaryOutput state={state} />
        <hr></hr>
        <p className="exp">Work Experience</p>
        {state.workExp.map((work) => {
          return <WorkOutput key={uniqid()} state={state} index={work.index} />;
        })}
        <div className="exp">Education</div>
        <EducationOutput state={state} index={state.education[0].index} />
      </div>
    );
  }
}

export default CVOutput;
