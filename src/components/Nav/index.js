import React from "react";

function Nav() {
    return (
        <header>
            <h2 className="title">Louie Moretti - Web Developer</h2>
            <nav>
                <ul className="nav">
                    <span>
                        <a className="nav-list" href="#about">
                            About me
                        </a>
                    </span>
                    <span>
                        <a className="nav-list" href="#projects">
                            Projects
                        </a>
                    </span>
                    <span>
                        <a className="nav-list" href="#skills">
                            Skills
                        </a>
                    </span>
                    <span>
                        <a className="nav-list" href="#contact">
                            Contact Info
                        </a>
                    </span>
                    
                </ul>
            </nav>
        </header>
    )
}

export default Nav