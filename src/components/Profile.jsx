import temp_headshot from "../assets/riley.jpg";
import linkedin_icon from "../assets/linkedin.png";
import github_icon from "../assets/github.png";
import html_icon from "../assets/html5-icon.svg";
import css_icon from "../assets/css-icon.svg";
import javascript_icon from "../assets/javascript-icon.svg";
import react_icon from "../assets/react-js-icon.svg";
import ruby_icon from "../assets/ruby-icon.svg";
import sass_icon from "../assets/sass-icon.svg";
import tailwind_icon from "../assets/tailwind-css-icon.svg";

const Profile = () => {

  return (
    <div className="splash">
        <div className="profile">
            <div className="profile-text">
                <span id="profile-title">Full-Stack React Developer</span>
                <span id="profile-blurb">Hi, I'm Wilson. A passoniate web developer based in New York.</span>
                <div className="links">
                    <a href="https://www.linkedin.com/in/wchen42/"  target='_blank'>
                        <img src={linkedin_icon} alt="linkedin_icon"/>
                    </a>
                    <a href="https://www.github.com/wichen42" target='_blank'>
                        <img src={github_icon} alt="github_icon" />
                    </a>
                </div>

                <div className="profile-text-stack">
                    <div className="stack">
                        <span>Tech Stack &nbsp; &nbsp; | </span>
                        <div className="icon-container">
                            <img src={html_icon} alt="html5" />
                        </div>

                        <div className="icon-container">
                            <img src={css_icon} alt="css3" />
                        </div>

                        <div className="icon-container">
                            <img src={javascript_icon} alt="javascript" />
                        </div>

                        <div className="icon-container">
                            <img src={react_icon} alt="react" />
                        </div>

                        <div className="icon-container">
                            <img src={ruby_icon} alt="ruby" />
                        </div>

                        <div className="icon-container">
                            <img src={sass_icon} alt="sass" />
                        </div>

                        <div className="icon-container">
                            <img src={tailwind_icon} alt="tailwindcss" />
                        </div>
                    </div>
                </div>
            </div>
            <img src={temp_headshot} alt="temp" />
        </div>

    </div>
  );
};

export default Profile;