import React from "react";

const Footer = () => {
  const footerStyle = {
    display: "flex",
    alignItems: "center",
    paddingTop: "20px",
  };
  return (
    <div style={footerStyle}>
      <p>
        Created By<strong> Laura Broder</strong>
      </p>
      <a href="https://github.com/Laura-Broder">
        <img
          src="https://cdn4.iconfinder.com/data/icons/miu-social/60/github-social-media-48.png"
          alt="github-mark"
        />
      </a>
      <a href="https://www.linkedin.com/in/laura-broder-01257662/">
        <img
          src="https://cdn0.iconfinder.com/data/icons/global-top-brands/430/linkedin-logo-1-32.png"
          alt="linkedIn-mark"
        />
      </a>
    </div>
  );
};
export default Footer;
