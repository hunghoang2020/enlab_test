import React from "react"
import MyQuestion from "../component/question/Question"
import axios from "axios"
import mydata from "../api/useCustomHook"
import Congratulation from "../component/congratulation/Congratulation"
import Finish from "../component/finish/Finish"
import { useState, useEffect } from "react"
import "./css/question.css"
// import Timer from "../component/timer/Timer"
import Questions from "../component/question/Questions"
import CircularProgress from "@mui/material/CircularProgress"
import Box from "@mui/material/Box"
const Question = () => {
    // const [data, setData] = useState([])
    const { res, error, loading } = mydata()

    // const [quenum, setQuenum] = useState(0)
    // const [scorre, setScorre] = useState(0)

    // const [showQuestion, setShowQuestion] = useState(true)
    const [showCongra, setShowCongra] = useState(false)
    const [showSorry, setShowsorry] = useState(false)
    const [rightAnswer, setRightAnswer] = useState(0)
    // const d = new Date()
    // const [currentminit, setCurrentminit] = useState(d.getMinutes())
    // const [currentsecond, setCurrentsecond] = useState(d.getSeconds())
    // const [timerFinishTest, setTimerFinishTest] = useState(0)

    if (loading) {
        return (
            <Box sx={{ display: "flex" }}>
                <CircularProgress />
            </Box>
        )
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
        console.log("questionCorrect", questionCorrect)
        if (questionCorrect >= res.length / 2) {
            setRightAnswer(questionCorrect)
            setShowCongra(is_finish)
        } else {
            setRightAnswer(questionCorrect)

            setShowsorry(is_finish)
        }
    }

    // console.log("res.length", res.length)

    return (
        <>
            {/* <MyQuestion
                show={showQuestion}
                data={res}
                backdata={backdata}
            ></MyQuestion> */}
            <Questions res={res} handleIsFinishTest={handleIsFinishTest} />
            <Congratulation
                show={showCongra}
                rightanswer={rightAnswer}
            ></Congratulation>
            <Finish show={showSorry} rightanswer={rightAnswer}></Finish>
        </>
    )
}

export default Question
