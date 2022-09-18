import React, { Component } from "react";
import GeneralInfoOutput from "./GeneralInfoOutput";
import "../styles/CVOutput.css";

class CVOutput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="CVOutput">
        <GeneralInfoOutput />
      </div>
    );
  }
}

export default CVOutput;
