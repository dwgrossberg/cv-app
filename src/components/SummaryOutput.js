import React, { Component } from "react";
import "../styles/CVOutput.css";

class SummaryOutput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { state } = this.props;
    return (
      <div className="SummaryOutput">
        <p className="summaryTitle">{state.profSummary.title}</p>
        <p className="summarySummary">{state.profSummary.summary}</p>
      </div>
    );
  }
}

export default SummaryOutput;
