import "./Projects.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import project_data from "../../assets/projects.js";
import arrow_icon from "../../assets/arrow_icon.svg";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="projects-title">
        <h1>Projects</h1>
        <img src={theme_pattern} alt="Theme" />
      </div>
      <div className="projects-container">
        {project_data.map((project, index) => {
          return (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={project.imgUrl} alt={project.title}></img>
            </a>
          );
        })}
      </div>
      <a
        href="https://github.com/burhanf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="show-more">
          <p>See More</p>
          <img src={arrow_icon} alt="" />
        </div>
      </a>
    </div>
  );
};

export default Projects;
