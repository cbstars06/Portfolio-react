import React from "react";
import "./About.css";
import { FaAward } from "react-icons/fa";
import { MdFolderOpen } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h4>Get to know</h4>
      <h1 className="page-heading">About Me</h1>

      <div className="container about_container">
        <div className="about-me">
          <div className="about-me-design">
            <p className="coder" id="i_coder">
              &lt; coder &gt;
            </p>
            <h1>WHO AM I?</h1>
            <p className="reader" id="i_reader">
              &lt; reader &gt;
            </p>
            <p className="editor" id="i_editor">
              &lt; editor &gt;
            </p>
            <p className="sporty" id="i_sporty">
              &lt; sporty &gt;
            </p>
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Skills</h5>
              <small>Front End Web Dev, C/C++, Python, Pygame</small>
            </article>
            <article className="about-card">
              <MdFolderOpen className="about-icon" />
              <h5>Projects</h5>
              <small>Space Invaders Pygame</small>
            </article>
          </div>

          <p>
            Hello I'm Chinmay Bhusari, first year undergraduate at IIT Kharagpur
            enrolled Dual Course of Computer science and engineering. I am front
            end developer and an AI/Ml enthusiast. I also like to participate in
            coding contests as I am still in my jee phase and like to compete
            with people around me. I also like to play sports and you will
            surely find me in the playgrounds every evening
          </p>

          <a href="#contact" className="btn btn-primary letstalk">
            {" "}
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
