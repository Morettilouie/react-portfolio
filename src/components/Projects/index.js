import React from "react";

function Projects() {
    return (
        <section id="projects" className="project">
            <h2 className="section-title">
                Projects
            </h2>
            <div className="projects">
                <div className="peeping-pigeons">
                    <a href="https://morettilouie.github.io/Peeping-Pigeons/"><img src="../../../img/peeping-pigeons-bird.jpg" alt="peeping pigeons" className="project-img" /></a>
                    <h3>Peeping Pigeons</h3>
                    <h4>HTML, JavaScript, CSS, APIs</h4>
                </div>
                <div className="photo-port">
                    <a href="https://morettilouie.github.io/photo-port/"><img src="../../../img/photo-port.jpg" alt="photography port" className="project-img" /></a>
                    <h3>Photo Port</h3>
                    <h4>JavaScript, React</h4>
                </div>
                <div className="code-quiz">
                    <a href="https://morettilouie.github.io/Code-Quiz/"><img src="../../../img/code-quiz.jpg" alt="code quiz" className="project-img" /></a>
                    <h3>Code Quiz</h3>
                    <h4>HTML, JavaScript</h4>
                </div>
                <div className="weather-dashboard">
                    <a href="https://morettilouie.github.io/weather-dashboard/"><img src="../../../img/weather-app.jpg" alt="weather app" className="project-img" /></a>
                    <h3>Weather Dashboard</h3>
                    <h4>HTML, JavaScript, APIs</h4>
                </div>
                <div className="password-generator">
                    <a href="https://morettilouie.github.io/Password-Generator/"><img src="../../../img/password.jpg" alt="password generator" className="project-img" /></a>
                    <h3>Password Generator</h3>
                    <h4>HTML, JavaScript</h4>
                </div>
                
            </div>
            
        </section>
    )
}

export default Projects;