import React, { Component } from "react";
import "../styles/CVOutput.css";

class WorkOutput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="WorkOutput">
        <div>
          <div className="workPosition">
            <p>Position</p>
            <div className="workDates">
              <p>DateFrom</p>
              <p>DateTo</p>
            </div>
          </div>
          <div className="workCompany">
            <p>Company</p>
            <p>Location</p>
          </div>
        </div>
        <p className="workTasks">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident,
        </p>
      </div>
    );
  }
}

export default WorkOutput;
