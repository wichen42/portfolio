import aviquest_ss from "../assets/aviques_ss.png";
import cloundtunes_ss from "../assets/cloudtunes_ss.png";
import messenger_ss from "../assets/srm.gif";
import project_mvmt_ss from "../assets/project_movement_studio.png";
import Project from "./Project";


const Portfolio = () => {
    const prjct_mvmt = {
        title: "Project Movement Studio",
        image: project_mvmt_ss,
        github: "https://github.com/wichen42/Project-Movement-Studio",
        demo: "https://project-movement-studio.onrender.com/",
        text: "Project Movement Studio is a buisness website for a fitness boutique based in New York City.",
        techs: ["React", "SaSS", "Render"],
    };

    const cloudtunes= {
        title: "Cloud Tunes",
        image: cloundtunes_ss,
        github: "https://github.com/wichen42/Cloud-Tunes",
        demo: "https://cloud-tunes.herokuapp.com",
        text: "Cloud Tunes is a full stack SoundCloud clone, a music streaming and social media web app where users are able to upload their own audio files with the functionality to like, comment, and follow other users and their music. ",
        techs: ["React", "Ruby on Rails", "AWS S3", "postgreSQL"],
    }

    const aviquest = {
        title: "Aviquest", 
        image: aviquest_ss, 
        github: "https://github.com/wichen42/aviquest",
        demo: "https://aviquest.herokuapp.com/",
        text: "Aviquest is a full stack task management and productivity web application that gamifies your life. Users are able create and set custom tasks and embark on quests to earn rewards to customize their Avitar.",
        techs: ["MongoDB", "Express.js", "React", "Node.js"],
    };

    const messenger = {
        title: "Star Rail Messenger",
        image: messenger_ss,
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
        <Project title={prjct_mvmt.title} image={prjct_mvmt.image} github={prjct_mvmt.github} demo={prjct_mvmt.demo} text={prjct_mvmt.text} techs={prjct_mvmt.techs}/>
        <Project title={cloudtunes.title} image={cloudtunes.image} github={cloudtunes.github} demo={cloudtunes.demo} text={cloudtunes.text} techs={cloudtunes.techs}/>
        <Project title={aviquest.title} image={aviquest.image} github={aviquest.github} demo={aviquest.demo} text={aviquest.text} techs={aviquest.techs}/>
        <Project title={messenger.title} image={messenger.image} github={messenger.github} demo={messenger.demo} text={messenger.text} techs={messenger.techs}/>
    </div>
    );
};

export default Portfolio;