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
        firstName: "Jelly",
        lastName: "BeanBean",
        city: "Santa Fe",
        email: "jellybean@gmail.com",
        phone: "555-809-3450",
      },
      profSummary: {
        title: "Software Engineer",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      workExp: [
        {
          company: "BigTime Startup",
          position: "Fullstack Developer",
          startDate: "2017-05-05",
          endDate: "2022-06-30",
          location: "Orlando",
          tasks:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
          index: "0",
        },
      ],
      education: [
        {
          university: "The Odin Project",
          degree: "Web Development",
          startDate: "2019-11-03",
          endDate: "2021-09-01",
          gpa: "3.7",
          index: "0",
        },
      ],
    };

    this.inputGeneralInfo = this.inputGeneralInfo.bind(this);
    this.inputSummary = this.inputSummary.bind(this);
    this.inputWorkExp = this.inputWorkExp.bind(this);
    this.inputEducation = this.inputEducation.bind(this);
    this.addWorkExp = this.addWorkExp.bind(this);
    this.removeWorkExp = this.removeWorkExp.bind(this);
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
    let workExp = [...this.state.workExp];
    let items = [...this.state.workExp.filter((obj) => obj.index === index)];
    let arrayIndex = workExp.indexOf(items[0]);
    let item;
    switch (id) {
      case "company":
        item = { ...items[0], company: input };
        break;
      case "position":
        item = { ...items[0], position: input };
        break;
      case "workStartDate":
        item = { ...items[0], startDate: input };
        break;
      case "workEndDate":
        item = { ...items[0], endDate: input };
        break;
      case "location":
        item = { ...items[0], location: input };
        break;
      case "workTasks":
        item = { ...items[0], tasks: input };
        break;
      default:
        console.log(id);
    }
    items[0] = item;
    workExp[arrayIndex] = item;
    this.setState({
      workExp: workExp,
    });
  };

  inputEducation = (id, input, index) => {
    let education = [...this.state.education];
    let items = [...this.state.education.filter((obj) => obj.index === index)];
    let arrayIndex = education.indexOf(items[0]);
    let item;
    switch (id) {
      case "university":
        item = { ...items[0], university: input };
        break;
      case "degree":
        item = { ...items[0], degree: input };
        break;
      case "schoolStartDate":
        item = { ...items[0], startDate: input };
        break;
      case "schoolEndDate":
        item = { ...items[0], endDate: input };
        break;
      case "gpa":
        item = { ...items[0], gpa: input };
        break;
      default:
        console.log(id);
    }
    items[0] = item;
    education[arrayIndex] = item;
    this.setState({
      education: education,
    });
  };

  addWorkExp = (id) => {
    this.setState({
      workExp: [
        ...this.state.workExp,
        {
          company: "Company",
          position: "Position",
          startDate: new Date(),
          endDate: new Date(),
          location: "Location",
          tasks: "Work tasks and responsibilities",
          index: uniqid(),
        },
      ],
    });
  };

  removeWorkExp = (index) => {
    this.setState({
      workExp: this.state.workExp.filter((obj) => {
        return obj.index !== index;
      }),
    });
  };

  addEducation = (id) => {
    this.setState({
      education: [
        ...this.state.education,
        {
          university: "University",
          degree: "Degree",
          startDate: new Date(),
          endDate: new Date(),
          gpa: "0",
          index: uniqid(),
        },
      ],
    });
    console.log(id);
  };

  removeEducation = (index) => {
    this.setState(
      {
        education: this.state.education.filter((obj) => {
          return obj.index !== index;
        }),
      },
      () => console.log(this.state)
    );
  };

  render() {
    return (
      <div className="App">
        <Header />
        <CVInput
          inputGeneralInfo={this.inputGeneralInfo}
          inputSummary={this.inputSummary}
          inputWorkExp={this.inputWorkExp}
          inputEducation={this.inputEducation}
          addWorkExp={this.addWorkExp}
          removeWorkExp={this.removeWorkExp}
          addEducation={this.addEducation}
          removeEducation={this.removeEducation}
          state={this.state}
        />
        <CVOutput state={this.state} />
        <Footer />
      </div>
    );
  }
}

export default App;
