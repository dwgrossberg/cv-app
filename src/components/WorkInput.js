import React, { Component } from "react";
import "../styles/CVInput.css";

class WorkInput extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    console.log(this.props.index);
    this.props.inputWorkExp(e.target.id, e.target.value, this.props.index);
  };

  render() {
    const { state, index } = this.props;
    return (
      <div className="WorkInput" id={index}>
        <div className="companyInfo">
          <input
            onChange={this.handleChange}
            type="text"
            id="company"
            value={state.workExp.filter((obj) => obj.index === index).company}
          ></input>
          <input
            onChange={this.handleChange}
            type="text"
            id="position"
            value={state.workExp.filter((obj) => obj.index === index).position}
          ></input>
        </div>
        <div className="expInfo">
          <input
            onChange={this.handleChange}
            type="date"
            id="workStartDate"
            value={state.workExp.filter((obj) => obj.index === index).startDate}
          ></input>
          <input
            onChange={this.handleChange}
            type="date"
            id="workEndDate"
            value={state.workExp.filter((obj) => obj.index === index).endDate}
          ></input>
          <input
            onChange={this.handleChange}
            type="text"
            id="location"
            value={state.workExp.filter((obj) => obj.index === index).location}
          ></input>
        </div>
        <div className="workTasks">
          <input
            onChange={this.handleChange}
            type="text"
            id="workTasks"
            value={state.workExp.filter((obj) => obj.index === index).tasks}
          ></input>
        </div>
      </div>
    );
  }
}

export default WorkInput;
