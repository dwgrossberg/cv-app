import React, { Component } from "react";
import "../styles/CVOutput.css";

class SummaryOutput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="SummaryOutput">
        <p className="summaryTitle">Title</p>
        <p className="summarySummary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    );
  }
}

export default SummaryOutput;
