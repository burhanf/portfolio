import "./Header.css";
import profile_img from "../../assets/profile_img.svg";

const Header = () => {
  return (
    <div id="home" className="header">
      <img src={profile_img} alt="Profile picture" />
      <h1>
        I&apos;m <span>Burhan Faquiri</span>, a full-stack developer based in
        Toronto.
      </h1>
      <p>
        I have over 2 years of work experience from internships where I have
        gained skills in DevOps, Android and full-stack development.
      </p>
      <div className="header-action">
        <a
          href="https://www.linkedin.com/in/burhanfaquiri/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="header-connect">Connect with me</div>
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <div className="header-resume">My resume</div>
        </a>
      </div>
    </div>
  );
};

export default Header;
