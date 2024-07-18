import experience from "../../assets/experience.js";
import ExperienceItem from "./ExperienceItem";
import theme_pattern from "../../assets/theme_pattern.svg";
import "./Experience.css";

const Experience = () => {
  return (
    <>
      <div className="experience">
        <div className="experience-title">
          <h1>Experience</h1>
          <img src={theme_pattern} alt="" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="w-full md:w-8/12">
          {experience.map((item, index) => (
            <ExperienceItem
              key={index}
              date={item.date}
              title={item.title}
              company={item.company}
              details={item.details}
              logo={item.logo}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
