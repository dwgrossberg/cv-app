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
    switch (id) {
      case "company":
        // Change the state obj and return it in place to the workExp array
        let workExpCompany = [...this.state.workExp];
        let itemsCompany = [
          ...this.state.workExp.filter((obj) => obj.index === index),
        ];
        let companyIndex = workExpCompany.indexOf(itemsCompany[0]);
        let itemCompany = { ...itemsCompany[0], company: input };
        itemsCompany[0] = itemCompany;
        workExpCompany[companyIndex] = itemCompany;
        this.setState({
          workExp: workExpCompany,
        });
        break;
      case "position":
        let workExpPosition = [...this.state.workExp];
        let itemsPosition = [
          ...this.state.workExp.filter((obj) => obj.index === index),
        ];
        let positionIndex = workExpPosition.indexOf(itemsPosition[0]);
        let itemPosition = { ...itemsPosition[0], position: input };
        itemsPosition[0] = itemPosition;
        workExpPosition[positionIndex] = itemPosition;
        this.setState({
          workExp: workExpPosition,
        });
        break;
      case "workStartDate":
        let workExpStartDate = [...this.state.workExp];
        let itemsStartDate = [
          ...this.state.workExp.filter((obj) => obj.index === index),
        ];
        let startDateIndex = workExpStartDate.indexOf(itemsStartDate[0]);
        let itemStartDate = { ...itemsStartDate[0], startDate: input };
        itemsStartDate[0] = itemStartDate;
        workExpStartDate[startDateIndex] = itemStartDate;
        this.setState({
          workExp: workExpStartDate,
        });
        break;
      case "workEndDate":
        let workExpEndDate = [...this.state.workExp];
        let itemsEndDate = [
          ...this.state.workExp.filter((obj) => obj.index === index),
        ];
        let endDateIndex = workExpEndDate.indexOf(itemsEndDate[0]);
        let itemEndDate = { ...itemsEndDate[0], endDate: input };
        itemsEndDate[0] = itemEndDate;
        workExpEndDate[endDateIndex] = itemEndDate;
        this.setState({
          workExp: workExpEndDate,
        });
        break;
      case "location":
        let workExpLocation = [...this.state.workExp];
        let itemsLocation = [
          ...this.state.workExp.filter((obj) => obj.index === index),
        ];
        let locationIndex = workExpLocation.indexOf(itemsLocation[0]);
        let itemLocation = { ...itemsLocation[0], location: input };
        itemsLocation[0] = itemLocation;
        workExpLocation[locationIndex] = itemLocation;
        this.setState({
          workExp: workExpLocation,
        });
        break;
      case "workTasks":
        let workExpTasks = [...this.state.workExp];
        let itemsTasks = [
          ...this.state.workExp.filter((obj) => obj.index === index),
        ];
        let tasksIndex = workExpTasks.indexOf(itemsTasks[0]);
        let itemTask = { ...itemsTasks[0], tasks: input };
        itemsTasks[0] = itemTask;
        workExpTasks[tasksIndex] = itemTask;
        this.setState({
          workExp: workExpTasks,
        });
        break;
      default:
        console.log(id);
    }
  };

  inputEducation = (id, input, index) => {
    switch (id) {
      case "university":
        let educationUniversity = [...this.state.education];
        let itemsUniversity = [
          ...this.state.education.filter((obj) => obj.index === index),
        ];
        let universityIndex = educationUniversity.indexOf(itemsUniversity[0]);
        let itemUniversity = { ...itemsUniversity[0], university: input };
        itemsUniversity[0] = itemUniversity;
        educationUniversity[universityIndex] = itemUniversity;
        this.setState({
          education: educationUniversity,
        });
        break;
      case "degree":
        let educationDegree = [...this.state.education];
        let itemsDegree = [
          ...this.state.education.filter((obj) => obj.index === index),
        ];
        let degreeIndex = educationDegree.indexOf(itemsDegree[0]);
        let itemDegree = { ...itemsDegree[0], degree: input };
        itemsDegree[0] = itemDegree;
        educationDegree[degreeIndex] = itemDegree;
        this.setState({
          education: educationDegree,
        });
        break;
      case "schoolStartDate":
        let educationStartDate = [...this.state.education];
        let itemsStartDate = [
          ...this.state.education.filter((obj) => obj.index === index),
        ];
        let startDateIndex = educationStartDate.indexOf(itemsStartDate[0]);
        let itemStartDate = { ...itemsStartDate[0], startDate: input };
        itemsStartDate[0] = itemStartDate;
        educationStartDate[startDateIndex] = itemStartDate;
        this.setState({
          education: educationStartDate,
        });
        break;
      case "schoolEndDate":
        let educationEndDate = [...this.state.education];
        let itemsEndDate = [
          ...this.state.education.filter((obj) => obj.index === index),
        ];
        let endDateIndex = educationEndDate.indexOf(itemsEndDate[0]);
        let itemEndDate = { ...itemsEndDate[0], endDate: input };
        itemsEndDate[0] = itemEndDate;
        educationEndDate[endDateIndex] = itemEndDate;
        this.setState({
          education: educationEndDate,
        });
        break;
      case "gpa":
        let educationGPA = [...this.state.education];
        let itemsGPA = [
          ...this.state.education.filter((obj) => obj.index === index),
        ];
        let gpaIndex = educationGPA.indexOf(itemsGPA[0]);
        let itemGPA = { ...itemsGPA[0], gpa: input };
        itemsGPA[0] = itemGPA;
        educationGPA[gpaIndex] = itemGPA;
        this.setState({
          education: educationGPA,
        });
        break;
      default:
        console.log(id, input, index);
    }
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
    console.log(index);
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
