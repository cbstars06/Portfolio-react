import React from "react";
import "./header.css";
import ME from "../../assests/me.jpg";
import CTA from "./cta";

const header = () => {
  return (
    <header>
      <div className="container header_container">
        {/* <h2>Hi I'm</h2> */}
        <div className="personal_info">
          <h1 className="name">Chinmay Bhusari</h1>
          <p className="desc">
            Full Stack Developer | Loves Competitive Programming
          </p>
          <CTA className="cta" />
        </div>
        <div className="image">
          <img src={ME} alt="me" className="me" />
        </div>
      </div>
    </header>
  );
};

export default header;
