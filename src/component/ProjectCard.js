import React from "react";
import "./ProjectCard.css";
import pomoImg from "./Pomo.jpg";

export default class ProjectCard extends React.Component {
    render() {
        return ( 
            <div className="project-card">
                <h2 className="project-card-title">{this.props.title}</h2>
                <h3 className="timeline">{this.props.timeline}</h3>
                <hr className="line"></hr>
                <a href={this.props.link} target="_blank">
                        <img src={pomoImg} className="profile-image" />
                    </a>
                <p className="description">{this.props.description}</p>
            </div>
        );
    }
}
