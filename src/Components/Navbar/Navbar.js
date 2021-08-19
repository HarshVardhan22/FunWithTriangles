import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
    <div  className={styles.container}>
    <Link to="/quiz">
        <div className={styles.link}>Quiz</div>
      </Link>

      <Link to="/hypo">
        <div className={styles.link}>Hypotenues</div>
      </Link>
      <Link to="/">
        <div className={styles.link}>Home</div>
      </Link>

      <Link to="/area">
        <div className={styles.link}>Area</div>
      </Link>

      <Link to="/angles">
        <div className={styles.link}>Angles</div>
      </Link>
    </div>
      
    </div>
  );
};

export default Navbar;
