import React from "react";
import styles from "./HomePage.module.css";
import Angle from "../Angle/Angle";
import Area from "../Area/Area";
import HypoCalculator from "../HypoCalculator/HypoCalculator";
import Quiz from "../Quiz/Quiz";
import Fade from "react-reveal/Fade";
import { IoTriangle } from "react-icons/io5";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className={styles.container}>
      <section>
        <Fade bottom cascade>
          <div className={styles.header} >
            <h1 >Fun with {" "}
            <span className={styles.triangle}>Triangles</span></h1>
          </div>
        </Fade>
      </section>
      <section>
        <div className={styles.subContainer}>
          <Fade left>
            <Link to="/quiz">
              <div className={styles.card}>
                <h2>Topic</h2>
                <div className={styles.line}></div>

                <p>Details</p>
              </div>
            </Link>
          </Fade>
          <Fade left>
            <Link to="/hypo">
              <div className={styles.card}>
                <h2>Topic</h2>
                <div className={styles.line}></div>
                <p>Details</p>
              </div>
            </Link>
          </Fade>
          <Fade left>
            <Link to="/area">
              <div className={styles.card}>
                <h2>Topic</h2>
                <div className={styles.line}></div>
                <p>Details</p>
              </div>
            </Link>
          </Fade>
          <Fade left>
            <Link to="/angles">
              <div className={styles.card}>
                <h2>Topic</h2>
                <div className={styles.line}></div>
                <p>Details</p>
              </div>
            </Link>
          </Fade>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
