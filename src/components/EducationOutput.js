import React from "react";
import { format } from "date-fns";
import "../styles/CVOutput.css";

const EducationOutput = (props) => {
  const { education, index } = props;

  return (
    <div className="EducationOutput">
      <div>
        <div className="workPosition">
          <p className="position">
            {education.filter((obj) => obj.index === index)[0].university}
          </p>
          <div className="workDates">
            <p>
              {format(
                new Date(
                  education.filter((obj) => obj.index === index)[0].startDate
                ),
                "MMM yyy"
              )}
            </p>
            <p>
              {format(
                new Date(
                  education.filter((obj) => obj.index === index)[0].endDate
                ),
                "MMM yyy"
              )}
            </p>
          </div>
        </div>
        <div className="workCompany">
          <p>{education.filter((obj) => obj.index === index)[0].degree}</p>
          <p>GPA: {education.filter((obj) => obj.index === index)[0].gpa}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationOutput;
