import linkedin_icon from "../assets/linkedin.png";
import github_icon from "../assets/github_white.png";

const Footer = () => {
  return (
    <div className='footer'>
        <span>Copyright © 2023. All rights reserved.</span>
        <div>
            <a href="https://www.linkedin.com/in/wchen42/"  target='_blank'>
                <img src={linkedin_icon} alt="linkedin_icon"/>
            </a>
            <a href="https://www.github.com/wichen42" target='_blank'>
                <img src={github_icon} alt="github_icon" />
            </a>
        </div>
    </div>
  );
};

export default Footer;