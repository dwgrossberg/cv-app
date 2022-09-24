import React, { useState } from "react";
import CVInput from "./components/CVInput";
import CVOutput from "./components/CVOutput";
import Header from "./components/Header";
import Footer from "./components/Footer";
import uniqid from "uniqid";
import "./styles/App.css";

const App = () => {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: "Jelly",
    lastName: "BeanBean",
    city: "Santa Fe",
    email: "jellybean@gmail.com",
    phone: "555-809-3450",
  });

  const [profSummary, setProfSummary] = useState({
    title: "Software Engineer",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  });

  const [workExp, setWorkExp] = useState([
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
  ]);

  const [education, setEducation] = useState([
    {
      university: "The Odin Project",
      degree: "Web Development",
      startDate: "2019-11-03",
      endDate: "2021-09-01",
      gpa: "3.7",
      index: "0",
    },
  ]);

  const inputGeneralInfo = (id, input) => {
    switch (id) {
      case "firstName":
        setGeneralInfo({
          firstName: input,
          lastName: generalInfo.lastName,
          city: generalInfo.city,
          email: generalInfo.email,
          phone: generalInfo.phone,
        });
        break;
      case "lastName":
        setGeneralInfo({
          firstName: generalInfo.firstName,
          lastName: input,
          city: generalInfo.city,
          email: generalInfo.email,
          phone: generalInfo.phone,
        });
        break;
      case "city":
        setGeneralInfo({
          firstName: generalInfo.firstName,
          lastName: generalInfo.lastName,
          city: input,
          email: generalInfo.email,
          phone: generalInfo.phone,
        });
        break;
      case "email":
        setGeneralInfo({
          firstName: generalInfo.firstName,
          lastName: generalInfo.lastName,
          city: generalInfo.city,
          email: input,
          phone: generalInfo.phone,
        });
        break;
      case "phone":
        setGeneralInfo({
          firstName: generalInfo.firstName,
          lastName: generalInfo.lastName,
          city: generalInfo.city,
          email: generalInfo.email,
          phone: input,
        });
        break;
      default:
        console.log(id);
    }
  };

  const inputSummary = (id, input) => {
    switch (id) {
      case "title":
        setProfSummary({
          title: input,
          summary: profSummary.summary,
        });
        break;
      case "summary":
        setProfSummary({
          title: profSummary.title,
          summary: input,
        });
        break;
      default:
        console.log(id);
    }
  };

  const inputWorkExp = (id, input, index) => {
    let workExpCopy = [...workExp];
    let items = [...workExp.filter((obj) => obj.index === index)];
    let arrayIndex = workExpCopy.indexOf(items[0]);
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
    workExpCopy[arrayIndex] = item;
    setWorkExp(workExpCopy);
  };

  const inputEducation = (id, input, index) => {
    let educationCopy = [...education];
    let items = [...education.filter((obj) => obj.index === index)];
    let arrayIndex = educationCopy.indexOf(items[0]);
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
    educationCopy[arrayIndex] = item;
    setEducation(educationCopy);
  };

  const addWorkExp = () => {
    setWorkExp([
      ...workExp,
      {
        company: "Company",
        position: "Position",
        startDate: new Date(),
        endDate: new Date(),
        location: "Location",
        tasks: "Work tasks and responsibilities",
        index: uniqid(),
      },
    ]);
  };

  const removeWorkExp = (index) => {
    setWorkExp(
      workExp.filter((obj) => {
        return obj.index !== index;
      })
    );
  };

  const addEducation = (id) => {
    setEducation([
      ...education,
      {
        university: "University",
        degree: "Degree",
        startDate: new Date(),
        endDate: new Date(),
        gpa: "0",
        index: uniqid(),
      },
    ]);
  };

  const removeEducation = (index) => {
    setEducation(
      education.filter((obj) => {
        return obj.index !== index;
      })
    );
  };

  return (
    <div className="App">
      <Header />
      <CVInput
        generalInfo={generalInfo}
        inputGeneralInfo={inputGeneralInfo}
        profSummary={profSummary}
        inputSummary={inputSummary}
        workExp={workExp}
        inputWorkExp={inputWorkExp}
        education={education}
        inputEducation={inputEducation}
        addWorkExp={addWorkExp}
        removeWorkExp={removeWorkExp}
        addEducation={addEducation}
        removeEducation={removeEducation}
      />
      <CVOutput
        generalInfo={generalInfo}
        profSummary={profSummary}
        workExp={workExp}
        education={education}
      />
      <Footer />
    </div>
  );
};

export default App;
