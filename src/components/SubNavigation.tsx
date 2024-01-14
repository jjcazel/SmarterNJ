import { NavLink } from "react-router-dom";

import "../styles/SubNavigation.css";
import NJLogo from "/NJLogo.png";

export function SubNavigation() {
  return (
    <nav>
      <div className="subNav-left">
        <img src={NJLogo} className="njLogo" />
        <header id="smarterNJTitle">SmarterNJ</header>
      </div>
      <div className="mobileLinksContainer">
        {" "}
        <div className="linksContainer">
          <NavLink to="/" className="navLink" end>
            Home
          </NavLink>
          <NavLink to="/news" className="navLink">
            News
          </NavLink>
          <a
            href="https://smarter.nj.gov/#contact"
            target="_blank"
            className="navLink"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
