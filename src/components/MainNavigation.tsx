import { useState } from "react";
import "../styles/MainNavigation.css";
import NJCrestLogo from "../assets/NJCrestLogo.png";

export function MainNavigation() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav
      className="main-navigation"
      id="mainNav"
      role="navigation"
      aria-label="Main navigation"
    >
      <div id="navLeftContainer">
        <a href="https://nj.gov/" target="_blank" className="njHeaderLink">
          <img id="njCrestLogo" src={NJCrestLogo}></img>
          <div id="leftNavText">OFFICIAL SITE OF THE STATE OF NEW JERSEY</div>
        </a>
      </div>
      <div id="navRightContainer">
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>
        <div className={`nav-links ${showMenu ? "show" : ""}`}>
          <a
            id="bold"
            href="https://nj.gov/"
            target="_blank"
            className="njHeaderLink"
          >
            Governor Phil Murphy • Lt. Governor Sheila Oliver
          </a>
          <div>
            <a href="https://nj.gov/" target="_blank" className="subLink">
              NJ.gov
            </a>
            <a
              href="https://nj.gov/nj/gov/deptserv/alphaserv.html"
              target="_blank"
              className="subLink"
            >
              Services
            </a>
            <a
              href="https://nj.gov/subscribe/"
              target="_blank"
              className="subLink"
            >
              Get Updates
            </a>
            <a
              href="https://nj.gov/nj/gov/deptserv/"
              target="_blank"
              className="subLink"
            >
              Agencies
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
