import React from "react";
import "../styles/CVInput.css";

const GeneralInfoInput = (props) => {
  const handleChange = (e) => {
    props.inputGeneralInfo(e.target.id, e.target.value);
  };

  const { generalInfo } = props;

  return (
    <div className="GeneralInfoInput">
      <div className="names">
        <input
          onChange={handleChange}
          type="text"
          id="firstName"
          value={generalInfo.firstName}
        ></input>
        <input
          onChange={handleChange}
          type="text"
          id="lastName"
          value={generalInfo.lastName}
        ></input>
      </div>
      <div className="contact">
        <input
          onChange={handleChange}
          type="text"
          id="city"
          value={generalInfo.city}
        ></input>
        <input
          onChange={handleChange}
          type="email"
          id="email"
          value={generalInfo.email}
        ></input>
        <input
          onChange={handleChange}
          type="tel"
          id="phone"
          value={generalInfo.phone}
        ></input>
      </div>
    </div>
  );
};

export default GeneralInfoInput;
