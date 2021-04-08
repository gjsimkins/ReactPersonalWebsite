import React from "react";
import Intro from "./Intro.js";
import Projects from "./Projects.js";
import Profiles from "./Profiles.js";
import AboutMe from "./AboutMe.js";
import MadeFrom from "./MadeFrom.js";
import "./Home.css";

export default class Home extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Intro />
                <Projects />
                <Profiles />
                <AboutMe />
                <MadeFrom />
            </div>
        );
    }
}
