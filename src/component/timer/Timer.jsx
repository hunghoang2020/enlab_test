import React from "react"
import { useState, useEffect } from "react"

const Timer = ({ handleIsFinishTest }) => {
    const [timer, setTimer] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <>
            <div>{timer}</div>
        </>
    )
}

export default Timer
