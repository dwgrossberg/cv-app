import React, { Component } from "react";
import CVInput from "./components/CVInput";
import CVOutput from "./components/CVOutput";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      generalInfo: {
        firstName: "",
        lastName: "",
        city: "",
        email: "",
        phone: "",
      },
      profSummary: { title: "", summary: "" },
      workExp: [
        {
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          location: "",
          tasks: "",
        },
      ],
      education: [
        {
          university: "",
          degree: "",
          startDate: "",
          endDate: "",
          gpa: "",
        },
      ],
    };

    this.inputGeneralInfo = this.inputGeneralInfo.bind(this);
  }

  inputGeneralInfo = (id, input) => {
    console.log(id, input);
    switch (id) {
      case "firstName":
        this.setState({
          generalInfo: {
            firstName: input,
            lastName: this.state.generalInfo.lastName,
            city: this.state.generalInfo.city,
            email: this.state.generalInfo.email,
            phone: this.state.generalInfo.phone,
          },
        });
        console.log(this.state.generalInfo);
        break;
      default:
        console.log(id);
    }
  };

  render() {
    return (
      <div className="App">
        <Header />
        <CVInput inputGeneralInfo={this.inputGeneralInfo} />
        <CVOutput />
        <Footer />
      </div>
    );
  }
}

export default App;
