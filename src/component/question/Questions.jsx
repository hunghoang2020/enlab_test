import React from "react"
import { useState, useEffect } from "react"
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css"
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min"

import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import Button from "@mui/material/Button"
const Questions = ({ res, handleIsFinishTest }) => {
    const [questions, setQuestions] = useState([])
    const [questionCorrect, setQuestionCorrect] = useState(0)
    const [correctQuestion, setCorrectQuestion] = useState([])
    const [isFinish, setIsFinish] = useState(false)

    useEffect(() => {
        setQuestions(
            res.map((item, idx) => {
                return {
                    ...item,
                    isSelected: false,
                    isShow: idx === 0 ? true : false,
                }
            })
        )
    }, [res])

    // useEffect(() => {

    // },[questions])

    const handleQuestion = (e, id) => {
        const questionsCorrect = questions.map((item, idx) => {
            if (id === idx) {
                return {
                    ...item,
                    isCorrect:
                        e.target.value === item.correct_answer ? true : false,
                }
            }
            return item
        })
        setQuestions(questionsCorrect)
    }

    const handleNext = (item_index) => {
        const next_question = item_index + 1
        const questions_next = questions.map((item, idx) => {
            return { ...item, isShow: idx === next_question ? true : false }
        })
        const correctQuestions = questions.filter(
            (item) => item.isCorrect === true
        )
        setQuestionCorrect(correctQuestions.length)
        setQuestions(questions_next)
        if (next_question === questions.length) {
            handleIsFinishTest(true, questionCorrect)
        }
    }

    console.log("questions", questions)

    return (
        <>
            {/* <h3>{`Correct: ${questionCorrect} / ${questions.length}`}</h3> */}
            {/* <p>{
                ((questionCorrect / questions.length * 100) > 50) ? "Pass"
            }</p> */}
            {questions?.map((item, idx_question) => {
                return (
                    item.isShow && (
                        <div key={idx_question} className='container'>
                            <p>{item.question}</p>
                            <div>
                                <RadioGroup
                                    aria-labelledby='demo-radio-buttons-group-label'
                                    // defaultValue="female"
                                    name='radio-buttons-group'
                                >
                                    {item.incorrect_answers.map((item, idx) => {
                                        // return (
                                        //     <>
                                        //         <label
                                        //             key={idx}
                                        //             className='answer  '
                                        //         >
                                        //             <input
                                        //                 onClick={(e) =>
                                        //                     handleQuestion(
                                        //                         e,
                                        //                         idx_question
                                        //                     )
                                        //                 }
                                        //                 type='radio'
                                        //                 value={item}
                                        //                 name='question'
                                        //             />
                                        //             {` ${item}`}
                                        //         </label>
                                        //         <br />
                                        //     </>
                                        // )
                                        return (
                                            <FormControlLabel
                                                className='border'
                                                value={item}
                                                control={<Radio />}
                                                label={item}
                                                onClick={(e) =>
                                                    handleQuestion(
                                                        e,
                                                        idx_question
                                                    )
                                                }
                                            />
                                        )
                                    })}
                                </RadioGroup>
                            </div>
                            {/* <button onClick={() => handleNext(idx_question)}>
                                Next
                            </button> */}
                            <Button
                                variant='outlined'
                                onClick={() => handleNext(idx_question)}
                            >
                                Next
                            </Button>
                        </div>
                    )
                )
            })}
        </>
    )
}

export default Questions
