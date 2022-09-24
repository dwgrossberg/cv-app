import React from "react";
import "../styles/CVOutput.css";
import cityIcon from "../assets/city.png";
import emailIcon from "../assets/email.png";
import phoneIcon from "../assets/phone.png";

const GeneralInfoOutput = (props) => {
  const { generalInfo } = props;

  return (
    <div className="GeneralInfoOutput">
      <div className="CVNames">
        <p className="CVFirstName">{generalInfo.firstName}</p>
        <p className="CVLastName">{generalInfo.lastName}</p>
      </div>
      <div className="CVContact">
        <div className="iconWrapper">
          <img alt="CVCityIcon" src={cityIcon}></img>
          <img alt="CVEmailIcon" src={emailIcon}></img>
          <img alt="CVPhoneIcon" src={phoneIcon}></img>
        </div>
        <div className="contactWrapper">
          <p className="CVCity">{generalInfo.city}</p>
          <p className="CVEmail">{generalInfo.email}</p>
          <p className="CVPhone">{generalInfo.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default GeneralInfoOutput;
