import React from "react";
// import "./App.css"
import './Project.css'

function Project() {
    return (
        <div>
            <h1 className="heading">Projects</h1>
            <div className="Project-div">
                {/* ========================project-1================================= */}
                <div className="Projects">
                    <div className="Project1-link">
                        <h3>Nature Of Code</h3>
                        <a className="project1-link" href="https://github.com/khushboo-102/BookofNaturecode">Link</a>
                    </div>
                    <p>Learned p5.js by practicing exercises from the book Nature of Code. Developed many animation by using p5.js Technologies used - p5.js</p>
                </div>

                {/* ====================================project-2======================================================== */}
                <div className="Projects">
                    <div className="Project1-link">
                        <h3>Rock-Paper-Scissor Game</h3>
                        <a className="project2-link" href="https://khushboo-102.github.io/RockPaperScissorGames/">Link</a>
                    </div>
                    <p> Created this game in which user can play with computer.Technologies used - HTML, CSS, JAVASCRIPT.</p>
                </div>
                {/* ======================================project-3============================================== */}
                <div className="Projects">
                    <div className="Project1-link">
                        <h3>Carrom Board Game</h3>
                        <a className="project3-link" href="https://khushboo-102.github.io/Carom-boardGame/">Link</a>
                    </div>
                    <p> Created this game in which user can play with computer.Technologies used - HTML, CSS, JAVASCRIPT.</p>
                </div>


                {/* ======================================project-4============================================== */}
                <div className="Projects">
                    <div className="Project1-link">
                        <h3>Weather-Project</h3>
                        <a className="project4-link" href="https://khushboo-102.github.io/Weather-Application/">Link</a>
                    </div>
                    <p>In this project user check their current temperature. Technologies used - HTML, CSS, Javascript.</p>
                </div>
            </div>
            <button className="button">View my more work</button>
        </div>
    )
}

export default Project
