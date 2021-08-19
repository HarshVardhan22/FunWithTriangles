import React, { useState, useEffect } from "react";
import { QuestionData } from "../../Asset/QuestionData";
import styles from "./Quiz.module.css";
import { Link } from "react-router-dom";
import Bounce from 'react-reveal/Bounce';
const Quiz = () => {
    const [timer, setTimer] = useState(1);
    const [index, setIndex] = useState(-1);
    const [score, setScore] = useState(0);
    const [forceStop, setForceStop] = useState(0);

    //we are changing the question i.e the INDEX in two cases:
    //1.when the timer has reached 10s ---> this is implemented in the "interval"
    //2.The user has clickded on any option right/wrong doesn't matter ---> ---> this is implemented in the "check function"

    const start = () => {
        //this will change the index for the first time when the timer is started
        setIndex((prevState) => prevState + 1);
        
        //this will change the timer
        // eslint-disable-next-line
        let interval = setInterval(() => {
            //incrementing the timer value by 1 every second
            setTimer((timer) => timer + 1);
            setForceStop((forceStop) => forceStop + 1);
        }, 1000);
    };

    //if timer value = 11 s, that means 10s has passed
    //so we need to :
    //reset the timer
    //change the question as no option was selected and 10 seconds are passed

    const nextQuestion = () => {
        if (timer - 11 === 0) {
            if (index !== QuestionData.length - 1)
                setIndex((prevState) => prevState + 1);
            setTimer(1);
        }
    };

    useEffect(() => {
        nextQuestion();
        // eslint-disable-next-line
    }, [timer]);

    //check funtion :
    //checks whether the user user has slected coreect answer or not
    //if the user has selected any answer -> if (correct) increase the score -- >change the question && reset the timer

    const check = (selectedOption) => {
        if (selectedOption === QuestionData[index].ans) {
            setScore((prevState) => prevState + 10);
        }

        //reseting the timer
        setTimer(1);
        //using to hide the timer after 50s
        setForceStop((index + 1) * 10);
        //changing the question
        if (index !== QuestionData.length - 1)
            setIndex((prevState) => prevState + 1);
    };

    return (
        <div className={styles.parent}>
        <Bounce left>
        {index === -1 && (
                <div className={styles.start}>
                    <h1>Welcome to <span className={styles.triangle}>Quiz</span></h1>
                    <h2>There a total 5 question</h2>
                    <h2> You will get 10 seconds for each question</h2>
                    <button onClick={start}>Start</button>
                </div>
            )}
        </Bounce>
       
        {forceStop > 50 && (
            <Bounce left>
                <div className={styles.start}>
                   <h1>Final Score : <span  style={{color:"#1ba94c"}}>{score}</span></h1>
                   <Link to="/">
                   <button>Home</button>
                   </Link>                 
                </div>
                </Bounce> )}

           
        
        <Bounce left>

        {index !== -1 && forceStop < 50 && (
            <Bounce left>
                <div className={styles.container}>
                    {" "}
                   
                    {forceStop < 50 && (
                        <div className={styles.left}>
                            <h2>{QuestionData[index].ques}</h2>
                            <h4 onClick={(e) => check(QuestionData[index].options[0])}>
                                a. {QuestionData[index].options[0]}
                            </h4>
                            <h4 onClick={(e) => check(QuestionData[index].options[1])}>
                                b. {QuestionData[index].options[1]}
                            </h4>
                            <h4 onClick={(e) => check(QuestionData[index].options[2])}>
                                c. {QuestionData[index].options[2]}
                            </h4>
                            <h4 onClick={(e) => check(QuestionData[index].options[3])}>
                                d. {QuestionData[index].options[3]}
                            </h4>
                        </div>
                    )}
                    <div className={styles.line}></div>
                    <div className={styles.right}>
                        {forceStop < 50 && <h1>{timer}</h1>}
                        <div className={styles.horizontalLine}></div>
                        {forceStop < 50 && <h1>Score : {score}</h1>}
                       
                    </div>
                   
                </div>
                </Bounce>
            )}
        </Bounce>
          
            

        </div>
    );
};

export default Quiz;
