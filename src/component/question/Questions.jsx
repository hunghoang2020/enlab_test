import React from "react"
import { useState, useEffect } from "react"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Button from "@mui/material/Button"
import { decode } from "html-entities"

const Questions = ({ res, handleIsFinishTest }) => {
    const [questions, setQuestions] = useState([])
    const [questionCorrect, setQuestionCorrect] = useState(0)

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

    return (
        <>
            {questions?.map((item, idx_question) => {
                return (
                    item.isShow && (
                        <div key={idx_question} className='container'>
                            <p> {decode(item.question)}</p>
                            <div>
                                <RadioGroup
                                    aria-labelledby='demo-radio-buttons-group-label'
                                    name='radio-buttons-group'
                                >
                                    {item.incorrect_answers.map((item, idx) => {
                                        return (
                                            <FormControlLabel
                                                className='border'
                                                key={idx}
                                                value={item}
                                                control={<Radio />}
                                                label={decode(item)}
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
