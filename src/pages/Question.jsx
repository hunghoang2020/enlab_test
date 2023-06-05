import React from "react"

import mydata from "../api/useCustomHook"
import Congratulation from "../component/congratulation/Congratulation"
import Finish from "../component/finish/Finish"
import { useState, useEffect } from "react"
import "./css/question.css"
import Questions from "../component/question/Questions"
import CircularProgress from "@mui/material/CircularProgress"
import Box from "@mui/material/Box"
const Question = () => {
    const { res, error, loading } = mydata()

    const [showCongra, setShowCongra] = useState(false)
    const [showSorry, setShowsorry] = useState(false)
    const [rightAnswer, setRightAnswer] = useState(0)
    if (loading) {
        return (
            <Box sx={{ display: "flex" }}>
                <CircularProgress />
            </Box>
        )
    }

    res.map((item, id) => {
        {
            item.incorrect_answers.push(item.correct_answer)
            item.incorrect_answers.sort(function () {
                return 0.5 - Math.random()
            })
        }
    })
    console.log("res", res)
    const handleIsFinishTest = (is_finish, questionCorrect) => {
        if (questionCorrect >= res.length / 2) {
            setRightAnswer(questionCorrect)
            setShowCongra(is_finish)
        } else {
            setRightAnswer(questionCorrect)
            setShowsorry(is_finish)
        }
    }

    return (
        <>
            <Questions res={res} handleIsFinishTest={handleIsFinishTest} />
            <Congratulation
                show={showCongra}
                rightanswer={rightAnswer}
                res={res}
            ></Congratulation>
            <Finish
                show={showSorry}
                rightanswer={rightAnswer}
                res={res}
            ></Finish>
        </>
    )
}

export default Question
