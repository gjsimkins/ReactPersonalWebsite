import React from "react";
import "./Profiles.css"
import gitLogo from "./GitHub-Mark-120px-plus.png";
import linkedinLogo from "./LI-In-Bug.png";

export default class Profiles extends React.Component {
    render() {
        return (
            <div className="profiles home-section">
                <h1 className="title">My Contact Info</h1>
                <p>
                    Some of my profiles you might want to check out:
                    Linkedin, GitHub, etc.
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
