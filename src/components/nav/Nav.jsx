import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

// internal imports
import "./nav.css";
import Logo from "../../Assets/img/logo.svg";

export default function Nav() {
  const [toggleButton, setToggleButton] = useState("hideNav");

  window.onscroll = function () {
    const navi = document.querySelector(".navSection");
    let height = window.pageYOffset;
    if (height >= 10) navi.classList.add("secondNav");
    else navi.classList.remove("secondNav");
  };

  return (
    <>
      <div className="navSection">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-3">
              <div className="menubar">
                <button
                  className="hideMenu"
                  onClick={() => setToggleButton("showNav")}
                >
                  <i className="fa-solid fa-bars"></i>
                </button>
                <NavLink to="/">
                  <img src={Logo} alt="" className="logoImg" />
                </NavLink>
              </div>
            </div>
            <div className="col-md-7">
              <ul className={`navigation ${toggleButton}`}>
                <span
                  className="hideNavigation"
                  onClick={() => setToggleButton("hideNav")}
                ></span>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <a href="/tests">Tests</a>
                </li>
                <li>
                  <a href="/prices">Prices</a>
                </li>
                <li>
                  <a href="/classrooms">Classrooms</a>
                </li>
                <li>
                  <a href="/aboutus">About Us</a>
                </li>
                <li>
                  <NavLink to="/sign-in" className="CustomBtn">
                    Login/Signup
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
