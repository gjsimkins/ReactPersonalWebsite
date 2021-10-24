import React from "react";
import Intro from "./Intro.js";
import Projects from "./Projects.js";
import AboutMe from "./AboutMe.js";
import MadeFrom from "./MadeFrom.js";

export default class Home extends React.Component {

    constructor() {
        super();
        this.numOfPages = 4;
    }

    componentDidMount() {

        function scrollTo(page) {
            document.getElementById("wrapper").scrollTo({
                top: page * window.innerHeight,
                behavior: 'smooth'
            });
        }

        ///// Create dots
        const navbar = document.getElementById("navbar");
        const downButton = document.getElementById("down-button");
        for (let i = 0; i < this.numOfPages; i++) {
            let newDot = document.createElement("span");
            newDot.className = "dot";
            newDot.onclick = function () { scrollTo(i) };
            navbar.insertBefore(newDot, downButton);
        }
        /////

        // UPDATE DOTS
        const wrapper = document.getElementById("wrapper");
        const dots = document.getElementsByClassName("dot");
        const upButton = document.getElementById("up-button");
        let scrollIndex = Math.floor(wrapper.scrollTop / window.innerHeight);
        // const CTRL_COLORS = ["rgb(52,52,52)", "rgb(247,247,243)"];

        dots[scrollIndex].className += " active";

        wrapper.onscroll = function (e) {
            let newScrollIndex = Math.floor((wrapper.scrollTop + window.innerHeight / 2) / window.innerHeight);
            if (scrollIndex !== newScrollIndex) {
                scrollIndex = newScrollIndex;
                //console.log(scrollIndex);
                for (let i = 0; i < dots.length; i++) {
                    dots[i].className = dots[i].className.replace(" active", "");
                }
                // if (CTRL_COLORS[scrollIndex] != null) {
                //     upButton.style.color = CTRL_COLORS[scrollIndex];
                //     downButton.style.color = CTRL_COLORS[scrollIndex];
                // }
                dots[scrollIndex].className += " active";
            }
        }
        //////

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
                <AboutMe />
                <Projects />
                <MadeFrom />
                <div id="navbar" className="navbar">
                    <button id="up-button" className="up-button" onClick={scrollUp}>UP</button>
                    <button id="down-button" className="down-button" onClick={scrollDown}>DOWN</button>
                </div>
            </div>
        );
    }
}


