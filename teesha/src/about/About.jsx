import React from "react";
import NavBar from "../navbar/Navbar";
import Puzzle from "./Puzzle";
import Skills from "./Skills";
import Experience from "./Experience";



function About() {
    return (
        <div>
            <NavBar />
            <div class="container py-5 text-center" >
                <h1 className="mt-5">ABOUT ME</h1>
                <div class="row flex-lg-row-reverse flex-column align-items-center justify-content-between">
                    <Puzzle />
                    <Skills />
                    <Experience />
                </div>
            </div>
        </div>
    );
}

export default About;