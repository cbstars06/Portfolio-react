import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import PLAYER from "../../assests/player.png";

const Experience = () => {
  return (
    <section id="experience">
      <h4>What Skills I have</h4>
      <h1>My Experience & Projects</h1>
      <div className="container expandp_container">
        <div className="experienceC">
          <h3>Experience</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill />
              <div classname="DC12">
                <h4>HTML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <div classname="DC12">
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <div classname="DC12">
                <h4>Javascript</h4>
                <small className="text-light">Basics</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <div classname="DC12">
                <h4>React</h4>
                <small className="text-light">Basics</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <div classname="DC12">
                <h4>C/C++</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <div classname="DC12">
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="projectsC">
          <h3>Projects</h3>
          <div className="project_heading">
            <h4>Space Invaders</h4>
          </div>
          <div className="project-content">
            <img src={PLAYER} alt="Logo" className="player" />
            <p>
              This was my first and only project till now which is Space
              Invaders made with pygame a python library.
              <br />
              You can check this out{" "}
              <a
                href="https://github.com/cbstars06/Pygame-Space-Invaders"
                target="_blank"
              >
                here
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
