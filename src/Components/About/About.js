import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-container">
        <div className="left-about">
          <div className="about-head">
            <span>Nice to</span>
            <span>Meet You!</span>
          </div>
          <div className="about-content">
            <nav>
              <ul>
                <li>
                  Hii.. there, i'm Rohit! i am Graduated in Information
                  Technology at R.K.Talreja College of Computer and Management
                  System who is passionate about technology.
                </li>
                <li>A Frontend Developer living in Ambernath , Maharshtra.</li>
                <li>
                  I love developing different types of Websites , WebApps and
                  experience with users in mind.
                </li>
                <li>Passionate about working on complex program. </li>
                <li>
                  I have been working with computers and technology for most of
                  my life being the local tech support for friends and family.
                </li>
                <li>
                  I value trying new things , attenting to details and living
                  life with love and empathy.
                </li>
                <li></li>
                <li></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="right-about"></div>
      </div>
    </div>
  );
};

export default About;
