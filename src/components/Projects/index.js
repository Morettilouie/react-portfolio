import React from "react";
import pigeon from "../../img/peeping-pigeons-bird.png";
import photo from "../../img/photo-port.png";
import code from "../../img/code-quiz.png";
import weather from "../../img/weather-app.png";
import password from "../../img/password.png";

function Projects() {
    return (
        <section id="projects" className="project">
            <h2 className="section-title">
                Projects
            </h2>
            <div className="projects">
                <div className="peeping-pigeons">
                    <a href="https://morettilouie.github.io/Peeping-Pigeons/"><img src={pigeon} alt="peeping pigeons" className="project-img" /></a>
                    <h3>Peeping Pigeons</h3>
                    <h4>HTML, JavaScript, CSS, APIs</h4>
                </div>
                <div className="photo-port">
                    <a href="https://morettilouie.github.io/photo-port/"><img src={photo} alt="photography port" className="project-img" /></a>
                    <h3>Photo Port</h3>
                    <h4>JavaScript, React</h4>
                </div>
                <div className="code-quiz">
                    <a href="https://morettilouie.github.io/Code-Quiz/"><img src={code} alt="code quiz" className="project-img" /></a>
                    <h3>Code Quiz</h3>
                    <h4>HTML, JavaScript</h4>
                </div>
                <div className="weather-dashboard">
                    <a href="https://morettilouie.github.io/weather-dashboard/"><img src={weather} alt="weather app" className="project-img" /></a>
                    <h3>Weather Dashboard</h3>
                    <h4>HTML, JavaScript, APIs</h4>
                </div>
                <div className="password-generator">
                    <a href="https://morettilouie.github.io/Password-Generator/"><img src={password} alt="password generator" className="project-img" /></a>
                    <h3>Password Generator</h3>
                    <h4>HTML, JavaScript</h4>
                </div>
                
            </div>
            
        </section>
    )
}

export default Projects;