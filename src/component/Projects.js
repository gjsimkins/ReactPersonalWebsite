import React from "react";
import ProjectCard from "./ProjectCard.js";

export default class Projects extends React.Component {
    render () {
        return (
            <div className="projects home-section">
                <h1 className="title">Current and Past Projects</h1>
                <div className="card-wrapper">
                <ProjectCard title="PomoTimer" 
                    description="Practiced agile in a team of 8 to produce a pomodoro timer web app." 
                    timeline="Winter 2021" 
                    link="https://asherbav.github.io/cse110-w21-group9/source/"/>
                </div>
                
            </div>
        );
    }
}