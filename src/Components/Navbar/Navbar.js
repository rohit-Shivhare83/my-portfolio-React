// import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import resume from "../Img/resume.pdf";
import wavinghand from "../Img/wavinghand.png";
import man from "../Img/man5.svg";

const Navbar = () => {
  // const [isActive, setActive] = useState("false");
  // const ToggleClass = () => {
  //   setActive(!isActive);
  // };
  return (
    <div className="navbar">
      <div className="navbar-header">
        <div className="navbar_left">
          <div className="logo_l">
            <span>R</span>
          </div>
          <div className="logo_r">Rohit</div>
        </div>

        <div className="navbar_right">
          <nav>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li>
            <li>
              <a href="">Project</a>
            </li>
            <li>
              <a href="">Resume</a>
            </li>
            <li>
              <a href={resume} target="_blank" download="rohit-resume">
                <i className="fa-sharp fa-solid fa-download"></i>
              </a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </nav>
        </div>
      </div>
      {/* ----------------Navbar Content------------------ */}
      <div className="navbar_content">
        <div className="nav_l_content">
          <div className="intro">
            <span className="tracking-in-expand">Hii...</span>
            <div className="intro_name slide-in-blurred-right">
              <span className="orange ">I'm Rohit.</span>
              <span>
                <img
                  className="wavinghand orange"
                  src={wavinghand}
                  alt="wavinghand"
                />
              </span>
            </div>
          </div>
          <div className="intro_content">
            <p className="slide-in-blurred-bottom">
              A <span className="orange"> FrontEnd Developer </span> and a
              Visual Story teller who's passionate about creating meaningful and
              memorable experience. Don't be shy -
              <span>
                <a href="" className="orange blink-1">
                  Lets Talk!
                </a>
              </span>
            </p>
            <div className="social slide-in-blurred-right">
              <a href="https://github.com/rohit-Shivhare83 " target="_blank">
                <i className="fa-brands fa-github social-icon"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram social-icon"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin social-icon"></i>
              </a>
              <a href="#">
                <i className="fa-solid fa-envelope social-icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="nav_r_content">
          <img className="man slide-in-blurred-top" src={man} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// const navMenu = document.querySelector(".menu");
// navToggle = document.querySelector(".menu-btn");
// if (navToggle) {
//   navToggle.addEventListener("click", () => {
//     navMenu.classList.toggle("active");
//   });
// }
// // closing menu when link is clicked
// const navLink = document.querySelectorAll(".nav-link");
// function linkAction() {
//   const navMenu = document.querySelector(".menu");
//   navMenu.classList.remove("active");
// }
// navLink.forEach((n) => n.addEventListener("click", linkAction));
