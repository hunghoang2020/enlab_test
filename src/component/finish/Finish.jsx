import React from "react"
import { useState, useEffect } from "react"

const Finish = (props) => {
    const { show } = props
    const [timer, setTimer] = useState(0)
    const [timerFinish, setTimerFinish] = useState(null)
    useEffect(() => {
        if (!show) {
            const intervalId = setInterval(() => {
                setTimer((timer) => timer + 1)
            }, 1000)

            return function () {
                clearInterval(intervalId)
            }
        }
    }, [show])

    // useEffect(() => {
    //     if(show){
    //         setTimerFinish(timer)
    //     }
    // }, [show])

    if (show) {
        return <div>finish time finish: {timer}</div>
    } else {
        return
    }
}

export default Finish
