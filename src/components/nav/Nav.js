import React from "react";
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageDetail } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [activeElement, setActiveElement] = useState("#");

  const changebackground = () => {
    if (window.scrollY < 300) setActiveElement("#");
    else if (window.scrollY >= 300 && window.scrollY < 1050)
      setActiveElement("#about");
    else if (window.scrollY >= 900 && window.scrollY < 2000)
      setActiveElement("#experience");
    else if (window.scrollY >= 2000 && window.scrollY <= 2800)
      setActiveElement("#contact");
    else setActiveElement("none");
  };

  window.addEventListener("scroll", changebackground);
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveElement("#")}
        className={activeElement === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveElement("#about")}
        className={activeElement === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveElement("#experience")}
        className={activeElement === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveElement("#contact")}
        className={activeElement === "#contact" ? "active" : ""}
      >
        <BiMessageDetail />
      </a>
    </nav>
  );
};

export default Nav;
