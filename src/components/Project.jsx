import { useState } from "react";
import Stack from "./Stack";

const Project = ({title, image, gif, github, demo, text, techs}) => {
    const [isHovered, setIsHovered] = useState(false);

    const projectImage = {
        backgroundImage: `url(${isHovered && gif ? gif : image})`,
    };

    const handleOpen = (e) => {
        e.stopPropagation();
        window.open(`${demo}`);
    };

    return (
        <div className='project-container'>
            <div  className={`project-image ${isHovered ? 'gif-hover' : ''}`}
            style={projectImage} 
            onClick={handleOpen}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
            </div>
            <div className="project-text">
                <h2>{title}</h2>
                <span>{text}</span>
                <div className='project-stack'>
                    <Stack techs={techs}/>
                </div>
                <div className='project-links'>
                    <a href={github} target="_blank">
                        Github
                    </a>
                    <a href={demo} target="_blank">
                        Live Site
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Project;