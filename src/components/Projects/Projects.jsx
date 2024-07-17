import "./Projects.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import project_data from "../../assets/projects.js";
import arrow_icon from "../../assets/arrow_icon.svg";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-title">
        <h1>Projects</h1>
        <img src={theme_pattern} alt="Theme" />
      </div>
      <div className="projects-container">
        {project_data.map((project, index) => {
          return (
            <img key={index} src={project.imgUrl} alt={project.title}></img>
          );
        })}
      </div>
      <div className="show-more">
        <p>See More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default Projects;
