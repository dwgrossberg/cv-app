import React, { Component } from "react";
import "../styles/CVInput.css";

class EducationInput extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    this.props.inputEducation(e.target.id, e.target.value, this.props.index);
  };

  onAddEdu = (e) => {
    this.props.addEducation(e.target.id.split("addEducation")[1]);
  };

  onRemoveEdu = (e) => {
    this.props.removeEducation(e.target.id.split("removeEducation")[1]);
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
            value={
              state.education.filter((obj) => obj.index === index)[0].university
            }
          ></input>
          <input
            onChange={this.handleChange}
            type="text"
            id="degree"
            value={
              state.education.filter((obj) => obj.index === index)[0].degree
            }
          ></input>
        </div>
        <div className="schoolToFrom">
          <input
            onChange={this.handleChange}
            type="date"
            id="schoolStartDate"
            value={
              state.education.filter((obj) => obj.index === index)[0].startDate
            }
          ></input>
          <input
            onChange={this.handleChange}
            type="date"
            id="schoolEndDate"
            value={
              state.education.filter((obj) => obj.index === index)[0].endDate
            }
          ></input>
          <input
            onChange={this.handleChange}
            type="number"
            id="gpa"
            step={0.1}
            value={state.education.filter((obj) => obj.index === index)[0].gpa}
          ></input>
        </div>
        <div className="buttons">
          <button
            onClick={this.onAddEdu}
            id={
              "addEducation" +
              state.education.filter((obj) => obj.index === index)[0].index
            }
          >
            Add more
          </button>
          <button
            onClick={this.onRemoveEdu}
            id={
              "removeEducation" +
              state.education.filter((obj) => obj.index === index)[0].index
            }
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
}

export default EducationInput;
