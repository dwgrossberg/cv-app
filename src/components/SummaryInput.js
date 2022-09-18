import React, { Component } from "react";
import "../styles/CVInput.css";

class SummaryInput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="SummaryInput">
        <input type="text" id="title" value="title"></input>
        <input type="text" id="profSummary" value="professionalSummary"></input>
      </div>
    );
  }
}

export default SummaryInput;
