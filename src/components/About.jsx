import laptop from "../assets/temp-laptop.jpg";

const About = () => {
  return (
    <div className="about" id="about-section">
        <div className="about-image">
            <img src={laptop} alt="about-image" />
        </div>
        <div className="about-text-container">
            <h2>About Me</h2>
            <span id='about-tagline'>A dedicated Developer based in New York City.</span>
            <span id='about-text'>As a Full-Stack Developer, I bring to the table a rich tapestry of expertise, spanning from HTML, CSS, JavaScript, to advanced frameworks like React and Ruby on Rails. I pride myself on creating captivating websites that are not only functional but also seamless for the user. Projects include a Full-Stack Sound Cloud Clone, Open AI Chatbot Messenger, and custom personal websites.</span>
        </div>
    </div>
  );
};

export default About;