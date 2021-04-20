import React from "react";
import "./ProjectCard.css"

export default class ProjectCard extends React.Component {
    render() {
        return ( 
            <div className="project-card">
                <h2 className="project-card-title">{this.props.title}</h2>
                <h3 className="timeline">{this.props.timeline}</h3>
                <hr className="line"></hr>
                <p className="description">{this.props.description}</p>
                {/* <a className="project-card-link" href={this.props.link}>
                    <span className="project-card-link"></span>
                </a> */}
            </div>
        );
    }
}
