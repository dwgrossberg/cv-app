import React, { Component } from "react";
import "../styles/CVInput.css";

class GeneralInfoInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      city: "",
      email: "",
      phone: "",
    };
  }

  handleChange = (e) => {
    console.log(e.target.id);
    const id = [e.target.id];
    const stateId = Object.keys(this.state).reduce((r, e) => {
      if (id.includes(this.state[e])) r[e] = this.state[e];
      return r;
    });
    const stateItem = Object.values(this.state).reduce((r, e) => {
      if (id.includes(this.state[e])) r[e] = this.state[e];
      return r;
    });
    console.log(stateId, stateItem);
    this.props.inputGeneralInfo(e.target.id, e.target.value);
  };

  render() {
    const { inputGeneralInfo } = this.props;
    const { firstName, lastName, city, email, phone } = this.state;

    return (
      <div className="GeneralInfoInput">
        <div className="names">
          <input
            onChange={this.handleChange}
            type="text"
            id="firstName"
            // value={firstName}
          ></input>
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

export default GeneralInfoInput;
