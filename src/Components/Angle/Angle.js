import React, { useState } from 'react'
import styles from "./Angle.module.css"
const Angle = () => {
    const [text,setText] = useState("yo")
    return (
        <div>
            {text}
        </div>
    )
}

export default Angle
