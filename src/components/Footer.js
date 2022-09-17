import React, { Component } from "react";
import "../styles/Footer.css";
import gitHubIcon from "../assets/github.png";

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Footer">
        <div className="made-by">
          <a
            href="https://www.theodinproject.com/"
            target="_blank"
            rel="noreferrer"
          >
            <p>The Odin Project</p>
          </a>
          <a href="https://github.com/dwgrossberg">
            <img id="github-icon" alt="github-icon" src={gitHubIcon} />
          </a>
          <p>Made by Dan Grossberg</p>
        </div>
      </div>
    );
  }
}

export default Footer;
