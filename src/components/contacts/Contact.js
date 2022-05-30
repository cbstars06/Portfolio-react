import React from "react";
import "./contact.css";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hf9lttm",
        "template_dbhy5tv",
        form.current,
        "RVEHhQFV90a3b0Pd2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h4>Get In Touch</h4>
      <h1>Contact Me</h1>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <div id="contact_option_icon">
              <BsFacebook size={40} />
            </div>
            <h4>Facebook</h4>
            <h5>Chinmay Bhusari</h5>
            <a href="https://www.facebook.com/profile.php?id=100073467866300">
              Connect
            </a>
          </article>
          <article className="contact_option">
            <div id="contact_option_icon">
              <FaLinkedin size={40} />
            </div>
            <h4>LinkedIn</h4>
            <h5>Chinmay Bhusari</h5>
            <a href="https://www.linkedin.com/in/chinmay-bhusari-833a341aa">
              Connect
            </a>
          </article>
          <article className="contact_option">
            <div id="contact_option_icon">
              <BsGithub size={40} />
            </div>
            <h4>Github</h4>
            <h5>cbstars06</h5>
            <a href="https://github.com/cbstars06">Connect</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
