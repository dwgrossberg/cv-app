import React, { Component } from "react";
import "../styles/CVInput.css";

class EducationInput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="EducationInput">
        <div className="schoolInfo">
          <input type="text" id="university" value="university"></input>
          <input type="text" id="degree" value="degree"></input>
        </div>
        <div className="schoolToFrom">
          <input
            type="date"
            id="schoolStartDate"
            value="schoolStartDate"
          ></input>
          <input type="date" id="schoolEndDate" value="schoolEndDate"></input>
          <input type="number" id="gpa" value="3.4"></input>
        </div>
      </div>
    );
  }
}

export default EducationInput;
