import React from "react";
import "./ProjectCard.css";

export default class ProjectCard extends React.Component {
    render() {
        return (
            <a href={this.props.link} className="project-card-link" target="_blank" rel="noreferrer">
                <span className="project-card">
                    <h2 className="project-card-title">{this.props.title}</h2>
                    <h3 className="timeline">{this.props.timeline}</h3>
                    <hr className="line"></hr>
                    <img src={this.props.img} className="profile-image" alt="Project" />
                    <p className="description">{this.props.description}</p>
                </span>
            </a>
        );
    }
}
