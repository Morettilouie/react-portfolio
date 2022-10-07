import React from "react";

function Nav() {
    return (
        <header>
            <h2>
                <a href="/">
                    My Portfolio!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About me
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#projects">
                            Projects
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#skills">
                            Skills
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#contact">
                            Contact Info
                        </a>
                    </li>
                    
                </ul>
            </nav>
        </header>
    )
}

export default Nav