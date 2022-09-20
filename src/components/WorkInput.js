import React, { Component } from "react";
import "../styles/CVInput.css";

class WorkInput extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    this.props.inputWorkExp(e.target.id, e.target.value, this.props.index);
  };

  onAddWork = (e) => {
    this.props.addWorkExp(e.target.id.replace(/\D/g, ""));
  };

  onRemoveWork = (e) => {
    this.props.removeWorkExp(e.target.id.replace(/\D/g, ""));
  };

  render() {
    const { state, index } = this.props;
    return (
      <div className="WorkInput" id={"WorkExp" + index}>
        <div className="companyInfo">
          <input
            onChange={this.handleChange}
            type="text"
            id="company"
            value={state.workExp[index].company}
          ></input>
          <input
            onChange={this.handleChange}
            type="text"
            id="position"
            value={state.workExp[index].position}
          ></input>
        </div>
        <div className="expInfo">
          <input
            onChange={this.handleChange}
            type="date"
            id="workStartDate"
            value={state.workExp[index].startDate}
          ></input>
          <input
            onChange={this.handleChange}
            type="date"
            id="workEndDate"
            value={state.workExp[index].endDate}
          ></input>
          <input
            onChange={this.handleChange}
            type="text"
            id="location"
            value={state.workExp[index].location}
          ></input>
        </div>
        <div className="workTasks">
          <textarea
            onChange={this.handleChange}
            type="text"
            id="workTasks"
            value={state.workExp[index].tasks}
          ></textarea>
        </div>
        <div className="buttons">
          <button
            onClick={this.onAddWork}
            id={"moreWork" + state.workExp[index].index}
          >
            Add more
          </button>
          <button onClick={this.onRemoveWork} id="removeWork0">
            Remove
          </button>
        </div>
      </div>
    );
  }
}

export default WorkInput;
