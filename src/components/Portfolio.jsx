import aviquest_ss from "../assets/aviques_ss.png";
import cloundtunes_ss from "../assets/cloudtunes_ss.png";
import messenger_gif from "../assets/srm.gif";
import messenger_img from "../assets/srm_ss.png";
import project_mvmt_ss from "../assets/prjct_mvmt.png";
import Project from "./Project";


const Portfolio = () => {
    const prjct_mvmt = {
        title: "Project Movement Studio",
        tag: "Custom Website",
        image: project_mvmt_ss,
        github: "https://github.com/wichen42/Project-Movement-Studio",
        demo: "https://projectmovement.studio/",
        text: "Project Movement Studio is a buisness website for a fitness boutique based in New York City.",
        techs: ["React", "SaSS", "Render"],
    };

    const cloudtunes= {
        title: "Cloud Tunes",
        tag: "Full Stack Sound Cloud Clone",
        image: cloundtunes_ss,
        github: "https://github.com/wichen42/Cloud-Tunes",
        demo: "https://cloud-tunes.herokuapp.com",
        text: "Cloud Tunes is a full stack SoundCloud clone, a music streaming and social media web app where users are able to upload their own audio files with the functionality to like, comment, and follow other users and their music. ",
        techs: ["React", "Ruby on Rails", "AWS S3", "postgreSQL"],
    }

    const aviquest = {
        title: "Aviquest",
        tag: "MERN Gamified Taskmanager",
        image: aviquest_ss, 
        github: "https://github.com/wichen42/aviquest",
        demo: "https://aviquest.herokuapp.com/",
        text: "Aviquest is a full stack task management and productivity web application that gamifies your life. Users are able create and set custom tasks and embark on quests to earn rewards to customize their Avitar.",
        techs: ["MongoDB", "Express.js", "React", "Node.js"],
    };

    const messenger = {
        title: "Star Rail Messenger",
        tag: "Open AI Chatbot Messenger",
        gif: messenger_gif,
        image: messenger_img,
        github: "https://github.com/wichen42/star_rail_messenger",
        demo: "https://star-rail-messenger.onrender.com/splash",
        text: "Star Rail Messenger is a dynamic and immersive web application inspired by Honkai Star Rail's in-game messenger, offering real-time messaging, a game-themed design, and integrated chatbot functionality for an engaging communication experience.",
        techs: ["Firebase", "OpenAI", "SASS"],
    };

    return (
    <div className="portfolio" id="project-section">
        <div className="portfolio-header">
            <h2>PORTFOLIO</h2>
            <span>My Web Development Journey, one project at a time.</span>
        </div>
        <Project title={prjct_mvmt.title} tag={prjct_mvmt.tag} image={prjct_mvmt.image} github={prjct_mvmt.github} demo={prjct_mvmt.demo} text={prjct_mvmt.text} techs={prjct_mvmt.techs}/>
        <Project title={cloudtunes.title} tag={cloudtunes.tag} image={cloudtunes.image} github={cloudtunes.github} demo={cloudtunes.demo} text={cloudtunes.text} techs={cloudtunes.techs}/>
        <Project title={aviquest.title} tag={aviquest.tag} image={aviquest.image} github={aviquest.github} demo={aviquest.demo} text={aviquest.text} techs={aviquest.techs}/>
        <Project title={messenger.title} gif={messenger.gif} tag={messenger.tag} image={messenger.image} github={messenger.github} demo={messenger.demo} text={messenger.text} techs={messenger.techs}/>
    </div>
    );
};

export default Portfolio;