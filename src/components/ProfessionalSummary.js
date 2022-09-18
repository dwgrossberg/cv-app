import React, { Component } from "react";
import "../styles/CVInput.css";

class ProfessionalSummary extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="ProfessionalSummary">
        <textarea id="summary"></textarea>
      </div>
    );
  }
}

export default ProfessionalSummary;
