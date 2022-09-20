import React, { Component } from "react";
import "../styles/CVOutput.css";

class EducationOutput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { state, index } = this.props;
    return (
      <div className="EducationOutput">
        <div>
          <div className="workPosition">
            <p className="position">{state.education[index].university}</p>
            <div className="workDates">
              <p>{state.education[index].startDate}</p>
              <p>{state.education[index].endDate}</p>
            </div>
          </div>
          <div className="workCompany">
            <p>{state.education[index].degree}</p>
            <p>{state.education[index].gpa}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default EducationOutput;
