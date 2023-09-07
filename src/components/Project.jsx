import Stack from "./Stack";

const Project = ({title, image, github, demo, text, techs}) => {
    const projectImage = {
        backgroundImage: `url(${image})`
    };

    const handleOpen = () => {
        window.open(`${demo}`);
    };

    return (
        <div className='project-container'>
            <div className='project-image' style={projectImage} onClick={handleOpen}>
                {/* <img src={image} alt="" /> */}
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