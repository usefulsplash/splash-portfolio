import React from "react";
import "../styles/Contact.css";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Contact() {
  return (
    <div id="contact">
      <a className="link" href="mailto:emjavier16@gmail.com">
        <EmailRoundedIcon />
      </a>
      <a className="link" href="https://twitter.com/emjavier16">
        <TwitterIcon />
      </a>
      <a
        className="link"
        href="https://www.linkedin.com/in/enrique-javier-349655223/"
      >
        <LinkedInIcon />
      </a>
      <a className="link" href="https://github.com/usefulsplash">
        <GitHubIcon />
      </a>
    </div>
  );
}

export default Contact;
