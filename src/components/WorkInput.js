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
    this.props.addWorkExp(e.target.id.split("addWork")[1]);
  };

  onRemoveWork = (e) => {
    this.props.removeWorkExp(e.target.id.split("removeWork")[1]);
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
            value={
              state.workExp.filter((obj) => obj.index === index)[0].company
            }
          ></input>
          <input
            onChange={this.handleChange}
            type="text"
            id="position"
            value={
              state.workExp.filter((obj) => obj.index === index)[0].position
            }
          ></input>
        </div>
        <div className="expInfo">
          <input
            onChange={this.handleChange}
            type="date"
            id="workStartDate"
            value={
              state.workExp.filter((obj) => obj.index === index)[0].startDate
            }
          ></input>
          <input
            onChange={this.handleChange}
            type="date"
            id="workEndDate"
            value={
              state.workExp.filter((obj) => obj.index === index)[0].endDate
            }
          ></input>
          <input
            onChange={this.handleChange}
            type="text"
            id="location"
            value={
              state.workExp.filter((obj) => obj.index === index)[0].location
            }
          ></input>
        </div>
        <div className="workTasks">
          <textarea
            onChange={this.handleChange}
            type="text"
            id="workTasks"
            value={state.workExp.filter((obj) => obj.index === index)[0].tasks}
          ></textarea>
        </div>
        <div className="buttons">
          <button
            onClick={this.onAddWork}
            id={
              "addWork" +
              state.workExp.filter((obj) => obj.index === index)[0].index
            }
          >
            Add more
          </button>
          <button
            onClick={this.onRemoveWork}
            id={
              "removeWork" +
              state.workExp.filter((obj) => obj.index === index)[0].index
            }
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
}

export default WorkInput;
