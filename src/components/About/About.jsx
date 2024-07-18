import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import about_profile from "../../assets/about_profile.svg";
import csharp from "../../assets/csharp.svg";
import git from "../../assets/git.svg";
import java from "../../assets/java.svg";
import javascript from "../../assets/javascript.svg";
import kotlin from "../../assets/kotlin.svg";
import python from "../../assets/python.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="theme" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={about_profile} alt="profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hello, I am a motivated and enthusiastic Computer Science
              graduate. I have experience in languages such as Python, C#, Java,
              JavaScript, and Kotlin through previous work experience in full
              time internships and research projects.
            </p>
            <p>
              Feel free to connect where we can have a conversation about
              technology, hackathons or to see some projects!
            </p>
          </div>
          <div className="about-languages">
            <div className="language-icon">
              <img src={python} alt="Python" />
            </div>
            <div className="language-icon">
              <img src={csharp} alt="C#" />
            </div>
            <div className="language-icon">
              <img src={java} alt="Java" />
            </div>
            <div className="language-icon">
              <img src={javascript} alt="JavaScript" />
            </div>
            <div className="language-icon">
              <img src={kotlin} alt="Kotlin" />
            </div>
            <div className="language-icon">
              <img src={git} alt="Git" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
