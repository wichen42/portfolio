import { useEffect, useState } from "react";
import hamburger from "../assets/hamburger.svg";
import menu from "../assets/menu.svg";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  const showHamburger = windowWidth <= 975;

  return (
    <div className="header">
      <div className="header-left">
        wilsonchen.dev
      </div>
      <div className="header-right">
        {showHamburger && <img id='header-menu' src={hamburger} alt="menu"/>}
        {!showHamburger && <span>Home</span>}
        {!showHamburger && <span>About</span>}
        {!showHamburger && <span>Projects</span>}
        {!showHamburger && <span>Contact</span>}
      </div>
    </div>
  );
};

export default Header;