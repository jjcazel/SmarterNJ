import '../styles/MainNavigation.css';
import NJCrestLogo from '../assets/NJCrestLogo.png';

function MainNavigation() {

  return (
    <nav
      className="main-navigation"
      id="mainNav"
      role="navigation"
      aria-label="Main navigation"
    >
      <div id="navLeftContainer">
        <a href="https://nj.gov/" target="_blank" className="njHeaderLink">
          <img src={NJCrestLogo}></img>
          <div id="leftNavText">OFFICIAL SITE OF THE STATE OF NEW JERSEY</div>
        </a>
      </div>
      <div id="navRightContainer">
        <div>Governor Phil Murphy • Lt. Governor Sheila Oliver</div>
      </div>
    </nav>
  );
}

export default MainNavigation;