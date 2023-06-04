import React from "react"
import MyQuestion from "../component/question/Question"
import axios from "axios"
import mydata from "../api/useCustomHook"
import Congratulation from "../component/congratulation/Congratulation"
import Finish from "../component/finish/Finish"
import { useState, useEffect } from "react"
// import Timer from "../component/timer/Timer"
import Questions from "../component/question/Questions"
const Question = () => {
    // const [data, setData] = useState([])
    const { res, error, loading } = mydata()

    const [quenum, setQuenum] = useState(0)
    const [scorre, setScorre] = useState(0)

    const [showQuestion, setShowQuestion] = useState(true)
    const [showCongra, setShowCongra] = useState(false)
    const [showSorry, setShowsorry] = useState(false)
    const d = new Date()
    const [currentminit, setCurrentminit] = useState(d.getMinutes())
    const [currentsecond, setCurrentsecond] = useState(d.getSeconds())
    const [timerFinishTest, setTimerFinishTest] = useState(0)

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setTimer((timer) => timer + 1)
    //     }, 1000)

    //     return () => clearInterval(interval)
    // }, [])

    if (loading) {
        return <p>WAIT</p>
    }

    // if (isFinishTest) {
    //     return <h1>Finish Test</h1>
    // }
    res.map((item, id) => {
        {
            item.incorrect_answers.push(item.correct_answer)
            item.incorrect_answers.sort(function () {
                return 0.5 - Math.random()
            })
        }
    })

    // const backdata = (data) => {
    //     console.log("data.con", data.que)
    //     setShowCongra(data.con)
    //     setShowQuestion(data.que)
    // }

    const handleIsFinishTest = (is_finish, questionCorrect) => {
        // setShowCongra(is_finish)
        // console.log("is_finish", is_finish)
        // console.log("correct,", questionCorrect)

        if (questionCorrect >= res.length / 2) {
            setShowCongra(is_finish)
        } else {
            setShowsorry(true)
        }
    }

    console.log("res.length", res.length)

    return (
        <>
            {/* <MyQuestion
                show={showQuestion}
                data={res}
                backdata={backdata}
            ></MyQuestion> */}
            <Questions res={res} handleIsFinishTest={handleIsFinishTest} />
            <Congratulation show={showCongra}></Congratulation>
            <Finish show={showSorry}></Finish>
        </>
    )
}

export default Question
