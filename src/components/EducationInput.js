import React, { Component } from "react";
import "../styles/CVInput.css";

class EducationInput extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    this.props.inputEducation(e.target.id, e.target.value, this.props.index);
  };

  render() {
    const { state, index } = this.props;
    return (
      <div className="EducationInput">
        <div className="schoolInfo">
          <input
            onChange={this.handleChange}
            type="text"
            id="university"
            value={state.education[index].university}
          ></input>
          <input
            onChange={this.handleChange}
            type="text"
            id="degree"
            value={state.education[index].degree}
          ></input>
        </div>
        <div className="schoolToFrom">
          <input
            onChange={this.handleChange}
            type="date"
            id="schoolStartDate"
            value={state.education[index].startDate}
          ></input>
          <input
            onChange={this.handleChange}
            type="date"
            id="schoolEndDate"
            value={state.education[index].endDate}
          ></input>
          <input
            onChange={this.handleChange}
            type="number"
            id="gpa"
            value={state.education[index].gpa}
          ></input>
        </div>
        <div className="buttons">
          <button id="moreWork0">Add more</button>
          <button id="removeWork0">Remove</button>
        </div>
      </div>
    );
  }
}

export default EducationInput;
