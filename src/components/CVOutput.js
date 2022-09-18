import React, { Component } from "react";
import GeneralInfoOutput from "./GeneralInfoOutput";
import SummaryOutput from "./SummaryOutput";
import WorkOutput from "./WorkOutput";
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
        <p className="workExp">Work Experience</p>

        <WorkOutput />
      </div>
    );
  }
}

export default CVOutput;
