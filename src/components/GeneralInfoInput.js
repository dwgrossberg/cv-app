import React, { Component } from "react";
import "../styles/CVInput.css";

class GeneralInfoInput extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    this.props.inputGeneralInfo(e.target.id, e.target.value);
  };

  render() {
    const { state } = this.props;
    return (
      <div className="GeneralInfoInput">
        <div className="names">
          <input
            onChange={this.handleChange}
            type="text"
            id="firstName"
            value={state.generalInfo.firstName}
          ></input>
          <input
            onChange={this.handleChange}
            type="text"
            id="lastName"
            value={state.generalInfo.lastName}
          ></input>
        </div>
        <div className="contact">
          <input
            onChange={this.handleChange}
            type="text"
            id="city"
            value={state.generalInfo.city}
          ></input>
          <input
            onChange={this.handleChange}
            type="email"
            id="email"
            value={state.generalInfo.email}
          ></input>
          <input
            onChange={this.handleChange}
            type="tel"
            id="phone"
            value={state.generalInfo.phone}
          ></input>
        </div>
      </div>
    );
  }
}

export default GeneralInfoInput;
