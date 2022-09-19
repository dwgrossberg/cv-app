import React, { Component } from "react";
import CVInput from "./components/CVInput";
import CVOutput from "./components/CVOutput";
import Header from "./components/Header";
import Footer from "./components/Footer";
import uniqid from "uniqid";
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
          index: 0,
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
    this.inputSummary = this.inputSummary.bind(this);
    this.inputWorkExp = this.inputWorkExp.bind(this);
  }

  inputGeneralInfo = (id, input) => {
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
      case "lastName":
        this.setState({
          generalInfo: {
            firstName: this.state.generalInfo.firstName,
            lastName: input,
            city: this.state.generalInfo.city,
            email: this.state.generalInfo.email,
            phone: this.state.generalInfo.phone,
          },
        });
        console.log(this.state.generalInfo);
        break;
      case "city":
        this.setState({
          generalInfo: {
            firstName: this.state.generalInfo.firstName,
            lastName: this.state.generalInfo.lastName,
            city: input,
            email: this.state.generalInfo.email,
            phone: this.state.generalInfo.phone,
          },
        });
        console.log(this.state.generalInfo);
        break;
      case "email":
        this.setState({
          generalInfo: {
            firstName: this.state.generalInfo.firstName,
            lastName: this.state.generalInfo.lastName,
            city: this.state.generalInfo.city,
            email: input,
            phone: this.state.generalInfo.phone,
          },
        });
        console.log(this.state.generalInfo);
        break;
      case "phone":
        this.setState({
          generalInfo: {
            firstName: this.state.generalInfo.firstName,
            lastName: this.state.generalInfo.lastName,
            city: this.state.generalInfo.city,
            email: this.state.generalInfo.email,
            phone: input,
          },
        });
        console.log(this.state.generalInfo);
        break;
      default:
        console.log(id);
    }
  };

  inputSummary = (id, input) => {
    switch (id) {
      case "title":
        this.setState({
          profSummary: {
            title: input,
            summary: this.state.profSummary.summary,
          },
        });
        console.log(this.state.profSummary);
        break;
      case "summary":
        this.setState({
          profSummary: {
            title: this.state.profSummary.title,
            summary: input,
          },
        });
        console.log(this.state.profSummary);
        break;
      default:
        console.log(id);
    }
  };

  inputWorkExp = (id, input, index) => {
    console.log(id, input, index);
    switch (id) {
      case "company":
        let items = [
          ...this.state.workExp.filter((obj) => obj.index === index),
        ];
        let item = { ...items[0], company: input };
        items[0] = item;
        this.setState({
          workExp: [
            ...this.state.workExp.filter((obj) => obj.index !== index),
            items[0],
          ],
        });
        console.log(this.state.workExp);
        break;
      default:
        console.log(id);
    }
  };

  render() {
    return (
      <div className="App">
        <Header />
        <CVInput
          inputGeneralInfo={this.inputGeneralInfo}
          inputSummary={this.inputSummary}
          inputWorkExp={this.inputWorkExp}
          state={this.state}
        />
        <CVOutput />
        <Footer />
      </div>
    );
  }
}

export default App;
