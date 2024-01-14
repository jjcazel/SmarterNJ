import { useEffect } from "react";

import "../styles/SubNavigation.css";
import NJLogo from "/NJLogo.png";

export function SubNavigation() {
  useEffect(() => {
    // Get the current pathname
    const currentPath = window.location.pathname;
    // Get all anchor tags with the class 'navLink'
    const links = document.querySelectorAll(".navLink");
    // Loop through the links and add a class if the href matches the current path
    links.forEach((link) => {
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("activeLink");
      }
    });
    // Cleanup: Remove the 'activeLink' class when the component unmounts
    return () => {
      links.forEach((link) => {
        link.classList.remove("activeLink");
      });
    };
  }, []);

  return (
    <nav>
      <div className="subNav-left">
        <img src={NJLogo} className="njLogo" />
        <header id="smarterNJTitle">SmarterNJ</header>
      </div>
      <div className="mobileLinksContainer">
        {" "}
        <div className="linksContainer">
          <a href="#/" className="navLink">
            Home
          </a>
          <a href="#/news" className="navLink">
            News
          </a>
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
