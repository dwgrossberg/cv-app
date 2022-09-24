import React from "react";
import "../styles/CVInput.css";

const SummaryInput = (props) => {
  const handleChange = (e) => {
    props.inputSummary(e.target.id, e.target.value);
  };

  const { profSummary } = props;
  return (
    <div className="SummaryInput">
      <input
        onChange={handleChange}
        type="text"
        id="title"
        value={profSummary.title}
      ></input>
      <textarea
        onChange={handleChange}
        type="text"
        id="summary"
        value={profSummary.summary}
      ></textarea>
    </div>
  );
};

export default SummaryInput;
