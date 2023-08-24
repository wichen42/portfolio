import { useEffect, useState } from "react";
import hamburger from "../assets/hamburger.svg";
import close from "../assets/close-icon.svg";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileScroll = (sectionId) => {
    if (sectionId === "home-section") {
      window.scrollTo({top: 0, behavior: "smooth"});
    } else {
      handleScroll(sectionId);
    };

    setMobileMenuOpen(!mobileMenuOpen);
  };

  const showHamburger = windowWidth <= 975;

  return (
    <header className="header">

      <div className="header-left">
        wilsonchen.dev
      </div>
      <div className={`header-right ${mobileMenuOpen ? 'active' : ''}`}>
        {showHamburger && <img id='header-menu' src={hamburger} alt="menu" onClick={toggleMobileMenu}/>}
        {!showHamburger && <span onClick={() => handleHome()}>Home</span>}
        {!showHamburger && <span onClick={() => handleScroll("about-section")}>About</span>}
        {!showHamburger && <span onClick={() => handleScroll("project-section")}>Projects</span>}
        {!showHamburger && <span onClick={() => handleScroll("contact-section")}>Contact</span>}
      </div>
      <div id="mobile-menu" className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <span id="mobile-close" onClick={toggleMobileMenu}><img src={close} alt="close-icon" /></span>
        <div>
          <span onClick={() => handleMobileScroll("home-section")}>Home</span>
          <span onClick={() => handleMobileScroll("about-section")}>About</span>
          <span onClick={() => handleMobileScroll("project-section")}>Projects</span>
          <span onClick={() => handleMobileScroll("contact-section")}>Contact</span>
        </div>
      </div>
    </header>
  );
};

export default Header;