import React from "react";
import "./AboutMe.css"

export default class AboutMe extends React.Component {
    render() {
        return ( 
            <div className="about-me home-section">
                <h1 className="title">About Me</h1>
                <p className="about-me-p">Hello again! I am Computer Science major at UCSD looking for internship opportunites.</p>
            </div>
        );
    }
}
