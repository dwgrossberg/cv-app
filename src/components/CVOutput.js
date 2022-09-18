import React, { Component } from "react";
import GeneralInfoOutput from "./GeneralInfoOutput";
import SummaryOutput from "./SummaryOutput";
import WorkOutput from "./WorkOutput";
import EducationOutput from "./EducationOutput";
import "../styles/CVOutput.css";

class CVOutput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="CVOutput">
        <GeneralInfoOutput />
        <SummaryOutput />
        <hr></hr>
        <p className="exp">Work Experience</p>
        <WorkOutput />
        <div className="exp">Education</div>
        <EducationOutput />
      </div>
    );
  }
}

export default CVOutput;
