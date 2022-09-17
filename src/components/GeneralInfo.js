import React, { Component } from "react";
import "../styles/CVInput.css";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="GeneralInfo">
        <div className="names">
          <input type="text" id="firstName" value="firstName"></input>
          <input type="text" id="lastName" value="lastName"></input>
        </div>
        <div className="contact">
          <input type="text" id="city" value="city"></input>
          <input type="email" id="email" value="email"></input>
          <input type="tel" id="phone" value="phone"></input>
        </div>
      </div>
    );
  }
}

export default GeneralInfo;
