import React from "react";
import "../styles/CVInput.css";

const WorkInput = (props) => {
  const handleChange = (e) => {
    props.inputWorkExp(e.target.id, e.target.value, props.index);
  };

  const onAddWork = (e) => {
    props.addWorkExp(e.target.id.split("addWork")[1]);
  };

  const onRemoveWork = (e) => {
    props.removeWorkExp(e.target.id.split("removeWork")[1]);
  };

  const { workExp, index } = props;

  return (
    <div className="WorkInput" id={"WorkExp" + index}>
      <div className="companyInfo">
        <input
          onChange={handleChange}
          type="text"
          id="company"
          value={workExp.filter((obj) => obj.index === index)[0].company}
        ></input>
        <input
          onChange={handleChange}
          type="text"
          id="position"
          value={workExp.filter((obj) => obj.index === index)[0].position}
        ></input>
      </div>
      <div className="expInfo">
        <input
          onChange={handleChange}
          type="date"
          id="workStartDate"
          value={workExp.filter((obj) => obj.index === index)[0].startDate}
        ></input>
        <input
          onChange={handleChange}
          type="date"
          id="workEndDate"
          value={workExp.filter((obj) => obj.index === index)[0].endDate}
        ></input>
        <input
          onChange={handleChange}
          type="text"
          id="location"
          value={workExp.filter((obj) => obj.index === index)[0].location}
        ></input>
      </div>
      <div className="workTasks">
        <textarea
          onChange={handleChange}
          type="text"
          id="workTasks"
          value={workExp.filter((obj) => obj.index === index)[0].tasks}
        ></textarea>
      </div>
      <div className="buttons">
        <button
          onClick={onAddWork}
          id={"addWork" + workExp.filter((obj) => obj.index === index)[0].index}
        >
          Add more
        </button>
        <button
          onClick={onRemoveWork}
          id={
            "removeWork" + workExp.filter((obj) => obj.index === index)[0].index
          }
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default WorkInput;
