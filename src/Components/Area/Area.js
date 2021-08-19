
import styles from "./Area.module.css"
import React, { useState } from "react";
import Bounce from "react-reveal/Bounce";
const Area = () => {
    const [sideA, setSideA] = useState("");
    const [sideB, setSideB] = useState("");
    const [sideC, setSideC] = useState("");
    const [perimeter, setPerimeter] = useState("");
    const [area, setArea] = useState("");
  
    const checkArea = () => {
        let s =  ((parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC))/2).toFixed(2);
        setPerimeter(s);
      setArea(Math.sqrt(s*(s-sideA)*(s-sideB)*(s-sideC)));
    };
    return (
        <div className={styles.parent}>
        <Bounce left>
          <div className={styles.container}>
            <h1>Calculate <span className={styles.triangle}>Area</span></h1>
            <div className={styles.subContainer}>
            <Bounce left>
            <div className={styles.containerLeft}>
                <input
                  type="number"
                  value={sideA}
                  placeholder="Enter length of side of triangle"
                  onChange={(e) => setSideA(e.target.value)}
                  required
                />
                <input
                  type="number"
                  value={sideB}
                  onChange={(e) => setSideB(e.target.value)}
                  placeholder="Enter length of side of triangle"
                  required
                />
                  <input
                  type="number"
                  value={sideC}
                  placeholder="Enter length of side of triangle"
                  onChange={(e) => setSideC(e.target.value)}
                  required
                />
                <button
                  onClick={checkArea}
                  disabled={sideA && sideB && sideC? false : true}
                >
                  calculate
                </button>
              </div>
            </Bounce>
  
          
            {area === "" && (  <Bounce left>
                <div className={styles.containerRight}>
                  <p>
                    <span>
                    Heron's formula is used to find the area of a triangle when the length of the 3 sides of the triangle is known.
                    </span>
                  </p>
                  <p>
                  Heron's formula
                    <br />
                    Area :  <span className={styles.text}>sqrt(s * (s-a) * (s-b) * (s-c))</span>
                   <br />
                  where <span className={styles.text}>  s = (a + b + c)/2</span>
                 
                    <br />
                    a,b,c = Length of Sides of Triangle
                    <br />
                  </p>
                </div>
                </Bounce>
              )}
              {area !== "" && ( <Bounce left>
                <div className={styles.containerRight}>
                  <h3>a = {sideA}</h3>
                  <h3>b = {sideB}</h3>
                  <h3>c = {sideC}</h3>
                  <h3>s = {perimeter}</h3>
                  <h3>The Area of Triangle is:</h3>
                  <h2>{area.toFixed(2)}</h2>
                </div>
                </Bounce>
              )}
          
              
              
            </div>
          </div>
        </Bounce>
      </div>
    )
}

export default Area
