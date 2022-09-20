import React, { Component } from "react";
import "../styles/CVOutput.css";

class WorkOutput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { state, index } = this.props;
    return (
      <div className="WorkOutput">
        <div>
          <div className="workPosition">
            <p className="position">{state.workExp[index].position}</p>
            <div className="workDates">
              <p>{state.workExp[index].startDate}</p>
              <p>{state.workExp[index].endDate}</p>
            </div>
          </div>
          <div className="workCompany">
            <p>{state.workExp[index].company}</p>
            <p>{state.workExp[index].location}</p>
          </div>
        </div>
        <p className="workTasks">{state.workExp[index].tasks}</p>
      </div>
    );
  }
}

export default WorkOutput;
