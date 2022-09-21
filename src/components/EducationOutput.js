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
            <p className="position">
              {
                state.education.filter((obj) => obj.index === index)[0]
                  .university
              }
            </p>
            <div className="workDates">
              <p>
                {
                  state.education.filter((obj) => obj.index === index)[0]
                    .startDate
                }
              </p>
              <p>
                {
                  state.education.filter((obj) => obj.index === index)[0]
                    .endDate
                }
              </p>
            </div>
          </div>
          <div className="workCompany">
            <p>
              {state.education.filter((obj) => obj.index === index)[0].degree}
            </p>
            <p>
              GPA: {state.education.filter((obj) => obj.index === index)[0].gpa}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default EducationOutput;
