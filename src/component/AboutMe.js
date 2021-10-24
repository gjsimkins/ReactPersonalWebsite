import React from "react";

import gitLogo from "../media/GitHub-Mark-120px-plus.png";
import linkedinLogo from "../media/LI-In-Bug.png";
import headshot from "../media/headshot.png";

export default class AboutMe extends React.Component {
    render() {
        return (
            <div className="about-me home-section">
                <h1 className="title">About Me</h1>
                <div className="about-me-body">
                    <div className="about-me-L">
                        <img src={headshot} className="headshot"></img>
                        <div className="profile-section">
                            <a href="https://github.com/gjsimkins" target="_blank">
                                <img src={gitLogo} className="profile-image" />
                            </a>
                            <a href="https://www.linkedin.com/in/gary-simkins-09ab94201/" target="_blank">
                                <img src={linkedinLogo} className="profile-image" />
                            </a>
                        </div>
                    </div>
                    <div className="about-me-R">
                        <p className="about-me-p">
                            I am an aspiring Software Developer trying to figure out what exactly I want to do. Currently I am studing Computer Science at UCSD.
                            I have worked with Java, C++, React.js, and the basics of web development. When I'm not coding I enjoy playing video games, playing basketball,
                            and hanging out with friends.
                        </p>

                    </div>

                </div>

            </div >
        );
    }
}
