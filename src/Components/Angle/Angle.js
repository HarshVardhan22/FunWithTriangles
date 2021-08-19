import React, { useState } from 'react'
import styles from "./Angle.module.css"
import Bounce from "react-reveal/Bounce";
const Angle = () => {
    const [angleA, setAngleA] = useState("");
    const [angleB, setAngleB] = useState("");
    const [angleC, setAngleC] = useState("");
    const [flag, setFlag] = useState(false);
    const [angle, setAngle] = useState("");
  
    const checkAngle = () => {
        if(parseInt(angleA)+parseInt(angleB)+parseInt(angleC)===180)
        setFlag(true)
        else
        setFlag(false)
        setAngle(parseInt(angleA)+parseInt(angleB)+parseInt(angleC))
        
    };
    return (
        <div className={styles.parent}>
        <Bounce left>
          <div className={styles.container}>
            <h1> Angles Form <span className={styles.triangle}>Triangles</span></h1>
            <div className={styles.subContainer}>
            <Bounce left>
            <div className={styles.containerLeft}>
                <input
                  type="number"
                  value={angleA}
                  placeholder="Enter length of angle of triangle"
                  onChange={(e) => setAngleA(e.target.value)}
                  required
                />
                <input
                  type="number"
                  value={angleB}
                  onChange={(e) => setAngleB(e.target.value)}
                  placeholder="Enter length of angle of triangle"
                  required
                />
                  <input
                  type="number"
                  value={angleC}
                  placeholder="Enter length of angle of triangle"
                  onChange={(e) => setAngleC(e.target.value)}
                  required
                />
                <button
                  onClick={checkAngle}
                  disabled={angleA && angleB && angleC? false : true}
                >
                  calculate
                </button>
              </div>
            </Bounce>
  
          
            {angle === "" && (  <Bounce left>
                <div className={styles.containerRight}>
                  <p>
                    <span>
                    In a Euclidean space, the sum of angles of a triangle equals the straight angle. A triangle has three angles, one at each vertex, bounded by a pair of adjacent sides. It was unknown for a long time whether other geometries exist, for which this sum is different.                    </span>
                  </p>
                  <p>
                  
                  
                    Sum of Angles:  <span className={styles.text}> a + b + c = 180 deg</span>
                 
                 
                    <br />
                    a,b,c = Angles of Triangle
                    <br />
                  </p>
                </div>
                </Bounce>
              )}
              {angle !== "" && ( <Bounce left>
                <div className={styles.containerRight}>
                  <h3>a = {angleA}</h3>
                  <h3>b = {angleB}</h3>
                  <h3>c = {angleC}</h3>
                
                  <h3>Sum of Angles is: {angle}</h3>
                  <h2>{flag?<span className={styles.isTrue}>Yay! these angles can form a Triangle</span>:<span className={styles.isFalse}>Oops! these angles can not form a Triangle</span>}</h2>
                </div>
                </Bounce>
              )}
          
              
              
            </div>
          </div>
        </Bounce>
      </div>
    )
}

export default Angle
