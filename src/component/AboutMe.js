import React from "react";

import gitLogo from "./GitHub-Mark-120px-plus.png";
import linkedinLogo from "./LI-In-Bug.png";

export default class AboutMe extends React.Component {
    render() {
        return ( 
            <div className="about-me home-section">
                <h1 className="title">About Me</h1>
                <p className="about-me-p">
                    I am Computer Science major at UCSD, class of 2023. I am an aspiring Software Developer trying to figure out what exactly I want to do. 
                    I have worked with Java, C++, React.js, and the basics of web development. 
                    </p>
                <div className="profile-section">
                    <a href="https://github.com/gjsimkins" target="_blank">
                        <img src={gitLogo} className="profile-image" />
                    </a>
                    <a href="https://www.linkedin.com/in/gary-simkins-09ab94201/" target="_blank">
                        <img src={linkedinLogo} className="profile-image" />
                    </a>
                </div>
            </div>
        );
    }
}
