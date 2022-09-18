import React, { Component } from "react";
import "../styles/CVInput.css";

class WorkInput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="WorkInput">
        <div className="companyInfo">
          <input type="text" id="company" value="company"></input>
          <input type="text" id="position" value="position"></input>
        </div>
        <div className="expInfo">
          <input type="date" id="workStartDate" value="startDate"></input>
          <input type="date" id="workEndDate" value="endDate"></input>
          <input type="text" id="location" value="location"></input>
        </div>
        <div className="workTasks">
          <input type="text" id="workSummary" value="workSummary"></input>
        </div>
      </div>
    );
  }
}

export default WorkInput;
