import React from "react";
import "../styles/CVInput.css";

const EducationInput = (props) => {
  const handleChange = (e) => {
    props.inputEducation(e.target.id, e.target.value, props.index);
  };

  const onAddEdu = (e) => {
    props.addEducation(e.target.id.split("addEducation")[1]);
  };

  const onRemoveEdu = (e) => {
    props.removeEducation(e.target.id.split("removeEducation")[1]);
  };

  const { education, index } = props;

  return (
    <div className="EducationInput">
      <div className="schoolInfo">
        <input
          onChange={handleChange}
          type="text"
          id="university"
          value={education.filter((obj) => obj.index === index)[0].university}
        ></input>
        <input
          onChange={handleChange}
          type="text"
          id="degree"
          value={education.filter((obj) => obj.index === index)[0].degree}
        ></input>
      </div>
      <div className="schoolToFrom">
        <input
          onChange={handleChange}
          type="date"
          id="schoolStartDate"
          value={education.filter((obj) => obj.index === index)[0].startDate}
        ></input>
        <input
          onChange={handleChange}
          type="date"
          id="schoolEndDate"
          value={education.filter((obj) => obj.index === index)[0].endDate}
        ></input>
        <input
          onChange={handleChange}
          type="number"
          id="gpa"
          step={0.1}
          value={education.filter((obj) => obj.index === index)[0].gpa}
        ></input>
      </div>
      <div className="buttons">
        <button
          onClick={onAddEdu}
          id={
            "addEducation" +
            education.filter((obj) => obj.index === index)[0].index
          }
        >
          Add more
        </button>
        <button
          onClick={onRemoveEdu}
          id={
            "removeEducation" +
            education.filter((obj) => obj.index === index)[0].index
          }
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default EducationInput;
