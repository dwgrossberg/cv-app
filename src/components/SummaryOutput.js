import React from "react";
import "../styles/CVOutput.css";

const SummaryOutput = (props) => {
  const { profSummary } = props;

  return (
    <div className="SummaryOutput">
      <p className="summaryTitle">{profSummary.title}</p>
      <p className="summarySummary">{profSummary.summary}</p>
    </div>
  );
};

export default SummaryOutput;
