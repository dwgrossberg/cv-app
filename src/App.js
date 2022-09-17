import React, { Component } from "react";
import CVInput from "./components/CVInput";
import CVOutput from "./components/CVOutput";
import Header from "./components/Header";
import "./styles/App.css";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <CVInput />
        <CVOutput />
      </div>
    );
  }
}

export default App;
