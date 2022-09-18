import React, { Component } from "react";
import "../styles/CVOutput.css";
import cityIcon from "../assets/city.png";
import emailIcon from "../assets/email.png";
import phoneIcon from "../assets/phone.png";

class GeneralInfoOutput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="GeneralInfoOutput">
        <div className="CVNames">
          <p className="CVFirstName">firstName</p>
          <p className="CVLastName">lastName</p>
        </div>
        <div className="CVContact">
          <div className="iconWrapper">
            <img alt="CVCityIcon" src={cityIcon}></img>
            <img alt="CVEmailIcon" src={emailIcon}></img>
            <img alt="CVPhoneIcon" src={phoneIcon}></img>
          </div>
          <div className="contactWrapper">
            <p className="CVCity">city</p>
            <p className="CVEmail">email</p>
            <p className="CVPhone">phone</p>
          </div>
        </div>
      </div>
    );
  }
}

export default GeneralInfoOutput;
