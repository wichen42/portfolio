import laptop from "../assets/temp-laptop.jpg";

const About = () => {
  return (
    <div className="about">
        <div className="about-image">
            <img src={laptop} alt="about-image" />
        </div>
        <div className="about-text-container">
            <h2>About Me</h2>
            <span id='about-tagline'>A dedicated Developer based in New York City.</span>
            <span id='about-text'>As a Full-Stack Developer, I bring to the table a rich tapestry of expertise, spanning from HTML, CSS, JavaScript, to advanced frameworks like React and Ruby on Rails. I pride myself on creating captivating websites that are not only functional but also seamless for the user. With a passion for collaboration and a keen eye for detail, I'm a developer who enjoys wearing many hats, constantly evolving with each challenge.</span>
        </div>
    </div>
  );
};

export default About;