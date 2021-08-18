import React from "react";
import styles from "./Footer.module.css";
import { FaReact, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <a href="https://github.com/HarshVardhan22">
          <FaGithub color="white" size="28px" />
        </a>

        <a href="https://harshvardhanportfolio.netlify.app/">
          <FaReact color="magenta" size="28px" />
        </a>

        <a href="https://www.linkedin.com/in/harshvardhan-5a64a8148/">
          <FaLinkedin color="blue" size="28px" />
        </a>

        <a href="https://www.instagram.com/harsh.vardhan_/">
          <FaInstagram color="red" size="28px" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
