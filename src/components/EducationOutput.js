import React, { Component } from "react";
import "../styles/CVOutput.css";

class EducationOutput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="EducationOutput">
        <div>
          <div className="workPosition">
            <p className="position">University</p>
            <div className="workDates">
              <p>DateFrom</p>
              <p>DateTo</p>
            </div>
          </div>
          <div className="workCompany">
            <p>Degree</p>
            <p>gpa</p>
          </div>
        </div>
      </div>
    );
  }
}

export default EducationOutput;
