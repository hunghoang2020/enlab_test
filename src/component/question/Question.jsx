import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import Congratulation from "../congratulation/Congratulation"
import { Timer, Time, TimerOptions } from "timer-node"
const Question = (props) => {
    const navigate = useNavigate()

    const { data, end, backdata, show } = props
    const [quenum, setQuenum] = useState(0)
    const [scorre, setScorre] = useState(0)

    console.log("data", data)

    // var time = new Date().getTime() // get your number
    // // console.log(time - 1685849948141)
    // var date = new Date(time - 1685849948141) // create Date object

    // console.log(date.toString())
    const d = new Date()
    const [startTimeMinute, setstartTimeMinute] = useState(d.getMinutes())
    const [startTimeSecond, setstartTimeSecond] = useState(d.getSeconds())
    const handleLogic = (e) => {
        const asnwer = e.target.value
        console.log("asnwer", asnwer)
        if (asnwer === data[quenum].correct_answer) {
            console.log("true")
            setScorre(scorre + 1)
        } else {
            console.log("false")
        }
        if (quenum < 4) {
            setQuenum(quenum + 1)
        } else {
            backdata({
                con: true,
                que: false,
                sc: startTimeSecond,
                mn: startTimeMinute,
            })
            // navigate("/congratulation")
        }
    }
    // const d = new Date()
    // let currentseconds = d.getSeconds()
    // let currentMinutes = d.getMinutes()
    // console.log("mn: ", currentMinutes, "sc: ", currentseconds)

    // useEffect(() => {
    //     //time
    //     const d = new Date()
    //     setCurrentsecond(d.getSeconds())
    //     setCurrentminit(d.getMinutes())
    // }, [])

    // console.log("mn: ", currentminit, "sc: ", currentsecond)

    console.log("render")
    if (show == true) {
        return (
            <>
                <h1>question</h1>
                <p>{data[quenum].question}</p>
                <div>
                    {data[quenum].incorrect_answers.map((item, key) => (
                        <div key={key}>
                            <input
                                checked={false}
                                onClick={handleLogic}
                                type='radio'
                                id={item}
                                name='fav_language'
                                value={item}
                                onChange={() => {}}
                            ></input>
                             <label htmlFor={item}>{item}</label>
                        </div>
                    ))}
                </div>
            </>
        )
    } else {
        return
    }
}

export default Question
