import React, { Component } from "react";
import "../styles/CVInput.css";

class ProfessionalExp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="ProfessionalExp">
        <div className="companyInfo">
          <input type="text" id="company" value="company"></input>
          <input type="text" id="position" value="position"></input>
        </div>
        <div className="expInfo">
          <input type="text" id="startDate" value="startDate"></input>
          <input type="email" id="endDate" value="endDate"></input>
          <input type="text" id="location" value="location"></input>
        </div>
        <button>Add more</button>
      </div>
    );
  }
}

export default ProfessionalExp;
