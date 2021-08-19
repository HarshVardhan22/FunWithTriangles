import React, { useState } from "react";
import { QuestionData } from "../../Asset/QuestionData";
import styles from "./Quiz.module.css";
const Quiz = () => {
  const [timer, setTimer] = useState(0);
  const [index, setIndex] = useState(-1);

  const start = () => {
    //this will change the timer
    let interval = setInterval(() => {
      setTimer((prevState) => prevState + 1);
    }, 1000);

    //this will change the question
    let countDown = setInterval(() => {
      setIndex((prevState) => prevState + 1);
    }, 5000);
  };

  return (
    <div className={styles.parent}>
      {index === -1 && (
        <div className={styles.start}>
        <h2>Welcome to Quiz</h2>
        <h2>There a total 5 question</h2>
        <h2> You will get 10 seconds for each question</h2>
          <button>Start</button>
        </div>
      )}

      {index !== -1 && (
        <div className={styles.container}>
          {" "}
          <div className={styles.left}>
            {QuestionData.map((items) => (
              <p>{items.ans}.ans</p>
            ))}
          </div>
          <div className={styles.right}>
            <h1>{timer}</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
