import React from "react";
import Intro from "./Intro.js";
import Projects from "./Projects.js";
import Profiles from "./Profiles.js";
import AboutMe from "./AboutMe.js";
import MadeFrom from "./MadeFrom.js";
import "./Home.css";

export default class Home extends React.Component {

    componentDidMount() {
        const wrapper = document.getElementById("wrapper");
        const dots = document.getElementsByClassName("dot");
        let scrollIndex = Math.floor(wrapper.scrollTop/window.innerHeight);

        dots[scrollIndex].className += " active";

        wrapper.onscroll = function (e) {
            let newScrollIndex = Math.floor(wrapper.scrollTop/window.innerHeight);
            if (scrollIndex != newScrollIndex){
                scrollIndex = newScrollIndex;
                //console.log(scrollIndex);
                for (let i = 0; i < dots.length; i++) {
                    dots[i].className = dots[i].className.replace(" active", "");
                }
                dots[scrollIndex].className += " active";
            }
        }


    }

    render() {
        function scrollUp() {
            document.getElementById("wrapper").scrollBy({
                top: -window.innerHeight,
                behavior: 'smooth'
            });
        }

        function scrollDown() {
            document.getElementById("wrapper").scrollBy({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        }

        return (
            <div id="wrapper" className="wrapper">
                <Intro />
                <Projects />
                <Profiles />
                <AboutMe />
                <MadeFrom />
                <div className="navbar">
                    <button id="up-button" className="up-button" onClick={scrollUp}>UP</button>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <button id="down-button" className="down-button" onClick={scrollDown}>DOWN</button>
                </div>
            </div>
        );
    }
}


