import "./Header.css";
import profile_img from "../../assets/profile_img.svg";

const Header = () => {
  return (
    <div className="header">
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
        <div className="header-connect">Connect with me</div>
        <div className="header-resume">My resume</div>
      </div>
    </div>
  );
};

export default Header;
