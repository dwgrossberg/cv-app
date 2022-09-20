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
        let itemsCompany = [
          ...this.state.workExp.filter((obj) => obj.index === index),
        ];
        let itemCompany = { ...itemsCompany[0], company: input };
        itemsCompany[0] = itemCompany;
        this.setState({
          workExp: [
            ...this.state.workExp.filter((obj) => obj.index !== index),
            itemsCompany[0],
          ],
        });
        console.log(this.state.workExp);
        break;
      case "position":
        let itemsPosition = [
          ...this.state.workExp.filter((obj) => obj.index === index),
        ];
        let itemPosition = { ...itemsPosition[0], position: input };
        itemsPosition[0] = itemPosition;
        this.setState({
          workExp: [
            ...this.state.workExp.filter((obj) => obj.index !== index),
            itemsPosition[0],
          ],
        });
        console.log(this.state.workExp);
        break;
      case "workStartDate":
        let itemsStartDate = [
          ...this.state.workExp.filter((obj) => obj.index === index),
        ];
        let itemStartDate = { ...itemsStartDate[0], startDate: input };
        itemsStartDate[0] = itemStartDate;
        this.setState({
          workExp: [
            ...this.state.workExp.filter((obj) => obj.index !== index),
            itemsStartDate[0],
          ],
        });
        console.log(this.state.workExp);
        break;
      case "workEndDate":
        let itemsEndDate = [
          ...this.state.workExp.filter((obj) => obj.index === index),
        ];
        let itemEndDate = { ...itemsEndDate[0], endDate: input };
        itemsEndDate[0] = itemEndDate;
        this.setState({
          workExp: [
            ...this.state.workExp.filter((obj) => obj.index !== index),
            itemsEndDate[0],
          ],
        });
        console.log(this.state.workExp);
        break;
      case "location":
        let itemsLocation = [
          ...this.state.workExp.filter((obj) => obj.index === index),
        ];
        let itemLocation = { ...itemsLocation[0], location: input };
        itemsLocation[0] = itemLocation;
        this.setState({
          workExp: [
            ...this.state.workExp.filter((obj) => obj.index !== index),
            itemsLocation[0],
          ],
        });
        console.log(this.state.workExp);
        break;
      case "workTasks":
        let itemsTasks = [
          ...this.state.workExp.filter((obj) => obj.index === index),
        ];
        let itemTask = { ...itemsTasks[0], tasks: input };
        itemsTasks[0] = itemTask;
        this.setState({
          workExp: [
            ...this.state.workExp.filter((obj) => obj.index !== index),
            itemsTasks[0],
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
