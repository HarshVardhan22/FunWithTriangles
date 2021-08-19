import styles from "./HypoCalculator.module.css";
import React, { useState } from "react";
import Bounce from "react-reveal/Bounce";
const HypoCalculator = () => {
  const [sideA, setSideA] = useState("");
  const [sideB, setSideB] = useState("");
  const [hypo, setHypo] = useState("");

  const checkHypo = () => {
    setHypo(Math.sqrt(sideA * sideA + sideB * sideB));
  };

  return (
    <div className={styles.parent}>
      <Bounce left>
        <div className={styles.container}>
          <h1>Calculate <span className={styles.triangle}>Hypotenues</span></h1> 
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
              <button
                onClick={checkHypo}
                disabled={sideA && sideB ? false : true}
              >
                calculate
              </button>
            </div>
          </Bounce>

        
          {hypo === "" && (  <Bounce left>
              <div className={styles.containerRight}>
                <p>
                  <span>
                    In geometry, a hypotenuse is the longest side of a
                    right-angled triangle, the side opposite the right angle.
                    The length of the hypotenuse can be found using the
                    Pythagorean theorem, which states that the square of the
                    length of the hypotenuse equals the sum of the squares of
                    the lengths of the other two sides.
                  </span>
                </p>
                <p>
                  Pythagorean theorem
                  <br />
                  <span className={styles.text}>a^2 + b^2 = c^2</span>
                <br />
                  a = side of right triangle
                  <br />
                  b = side of right triangle
                  <br />c = hypotenuse
                </p>
              </div>
              </Bounce>
            )}
            {hypo !== "" && ( <Bounce left>
              <div className={styles.containerRight}>
                <h3>a = {sideA}</h3>
                <h3>b = {sideB}</h3>
                <h3>The Length of Hypotenues is:</h3>
                <h2>{hypo.toFixed(2)}</h2>
              </div>
              </Bounce>
            )}
        
            
            
          </div>
        </div>
      </Bounce>
    </div>
  );
};

export default HypoCalculator;
