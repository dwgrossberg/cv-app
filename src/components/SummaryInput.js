import React, { Component } from "react";
import "../styles/CVInput.css";

class SummaryInput extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    this.props.inputSummary(e.target.id, e.target.value);
  };

  render() {
    const { state } = this.props;
    return (
      <div className="SummaryInput">
        <input
          onChange={this.handleChange}
          type="text"
          id="title"
          value={state.profSummary.title}
        ></input>
        <textarea
          onChange={this.handleChange}
          type="text"
          id="summary"
          value={state.profSummary.summary}
        ></textarea>
      </div>
    );
  }
}

export default SummaryInput;
