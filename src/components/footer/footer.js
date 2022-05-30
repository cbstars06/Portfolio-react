import React from "react";
import "./footer.css";
import { BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";

const footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        CHINMAY
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/profile.php?id=100073467866300">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/0612_chinmay/">
          <RiInstagramFill />
        </a>
        <a href="https://github.com/cbstars06">
          <BsGithub />
        </a>
        <a href="https://twitter.com/bhusari_chinmay?t=4vwuIS03jg_zqI2nSd1FXg&s=09">
          <AiOutlineTwitter />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Chinmay Bhusari. All rights reserved</small>
      </div>
    </footer>
  );
};

export default footer;
