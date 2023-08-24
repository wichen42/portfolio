import { useEffect, useState } from "react";
import hamburger from "../assets/hamburger.svg";

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

  const handleHome = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  }

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      let marginTop = parseInt(getComputedStyle(section).marginTop, 10);
      let scrollPos = section.offsetTop - marginTop;
      window.scrollTo({top: scrollPos, behavior: "smooth"});
      console.log(marginTop)
      console.log(scrollPos)
    }
  };

  const showHamburger = windowWidth <= 975;

  return (
    <header className="header">
      <div className="header-left">
        wilsonchen.dev
      </div>
      <div className="header-right">
        {showHamburger && <img id='header-menu' src={hamburger} alt="menu"/>}
        {!showHamburger && <span>Home</span>}
        {!showHamburger && <span onClick={() => handleScroll("about-section")}>About</span>}
        {!showHamburger && <span onClick={() => handleScroll("project-section")}>Projects</span>}
        {!showHamburger && <span onClick={() => handleScroll("contact-section")}>Contact</span>}
      </div>
    </header>
  );
};

export default Header;