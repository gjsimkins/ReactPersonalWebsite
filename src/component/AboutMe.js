import React from "react";

import gitLogo from "../media/GitHub-Mark-120px-plus.png";
import linkedinLogo from "../media/LI-In-Bug.png";
import headshot from "../media/headshot.png";
import resume from "../media/Resume2021.pdf";

export default class AboutMe extends React.Component {
    render() {
        return (
            <div className="about-me home-section">
                <h1 className="title">About Me</h1>
                <div className="about-me-body">
                    <div className="about-me-L">
                        <img src={headshot} className="headshot" alt="headshot"></img>
                        <div className="profile-section">
                            <a href="https://github.com/gjsimkins" target="_blank" rel="noreferrer">
                                <img src={gitLogo} className="profile-image" alt="Github" />
                            </a>
                            <a href="https://www.linkedin.com/in/gary-simkins-09ab94201/" target="_blank" rel="noreferrer">
                                <img src={linkedinLogo} className="profile-image" alt="LinkedIn" />
                            </a>
                        </div>
                    </div>
                    <div className="about-me-R">
                        <p className="about-me-p">
                            I am an aspiring Software Developer trying to figure out what exactly I want to do. Currently, I am studing Computer Science at UCSD.
                            I have worked with Java, C++, React, and the basics of web development. When I'm not coding I enjoy playing video games, playing basketball,
                            and hanging out with friends.
                        </p>
                        <a className="resume-btn" href={resume} target="_blank" rel="noreferrer">Resume</a>
                    </div>

                </div>

            </div >
        );
    }
}
