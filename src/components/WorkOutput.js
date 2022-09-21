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
            <p className="position">
              {state.workExp.filter((obj) => obj.index === index)[0].position}
            </p>
            <div className="workDates">
              <p>
                {
                  state.workExp.filter((obj) => obj.index === Number(index))[0]
                    .startDate
                }
              </p>
              <p>
                {
                  state.workExp.filter((obj) => obj.index === Number(index))[0]
                    .endDate
                }
              </p>
            </div>
          </div>
          <div className="workCompany">
            <p>
              {
                state.workExp.filter((obj) => obj.index === Number(index))[0]
                  .company
              }
            </p>
            <p>
              {
                state.workExp.filter((obj) => obj.index === Number(index))[0]
                  .location
              }
            </p>
          </div>
        </div>
        <p className="workTasks">
          {state.workExp.filter((obj) => obj.index === Number(index))[0].tasks}
        </p>
      </div>
    );
  }
}

export default WorkOutput;
