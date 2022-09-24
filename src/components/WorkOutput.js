import React from "react";
import { format } from "date-fns";
import "../styles/CVOutput.css";

const WorkOutput = (props) => {
  const { workExp, index } = props;

  return (
    <div className="WorkOutput">
      <div>
        <div className="workPosition">
          <p className="position">
            {workExp.filter((obj) => obj.index === index)[0].position}
          </p>
          <div className="workDates">
            <p>
              {format(
                new Date(
                  workExp.filter((obj) => obj.index === index)[0].startDate
                ),
                "MMM yyy"
              )}
            </p>
            <p>
              {format(
                new Date(
                  workExp.filter((obj) => obj.index === index)[0].endDate
                ),
                "MMM yyy"
              )}
            </p>
          </div>
        </div>
        <div className="workCompany">
          <p>{workExp.filter((obj) => obj.index === index)[0].company}</p>
          <p>{workExp.filter((obj) => obj.index === index)[0].location}</p>
        </div>
      </div>
      <p className="workTasks">
        {workExp.filter((obj) => obj.index === index)[0].tasks}
      </p>
    </div>
  );
};

export default WorkOutput;
