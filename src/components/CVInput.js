import React, { Component } from "react";
import GeneralInfo from "./GeneralInfo";
import ProfessionalExp from "./ProfessionalExp";

import "../styles/CVInput.css";

class CVInput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="CVInput">
        General Info:
        <hr></hr>
        <GeneralInfo />
        Professional Experience:
        <hr></hr>
        <ProfessionalExp />
      </div>
    );
  }
}

export default CVInput;
