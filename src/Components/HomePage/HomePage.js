import React from "react";
import styles from "./HomePage.module.css";

import Fade from "react-reveal/Fade";

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
                <h2>Quiz</h2>
                <div className={styles.line}></div>
                  <br/>
                <p>Check your knowledge about Triangles</p>
                <p>
                  You will get your score after the end of quiz.
                </p>
              </div>
            </Link>
          </Fade>
          <Fade left>
            <Link to="/hypo">
              <div className={styles.card}>
                <h2>Hypotenues</h2>
                <div className={styles.line}></div>
                <br></br>
                <p>Know more about hypotenues</p>
                <p>Calculate hypotenues of a triangle</p>
              </div>
            </Link>
          </Fade>
          <Fade left>
            <Link to="/area">
              <div className={styles.card}>
                <h2>Area</h2>
                <div className={styles.line}></div>
                <br></br>
                <p>Know more about area</p>
                <p>Calculate area of a triangle</p>
              </div>
            </Link>
          </Fade>
          <Fade left>
            <Link to="/angles">
              <div className={styles.card}>
                <h2>Angles</h2>
                <div className={styles.line}></div>
                <br></br>
                <p>Know more about Angles</p>
                <p>Check whether your angles can form a triangle </p>
              </div>
            </Link>
          </Fade>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
