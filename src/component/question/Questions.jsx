import React from "react"
import { useState, useEffect } from "react"

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
            return {
                ...item,
                isCorrect:
                    id === idx &&
                    e.target.value === item.correct_answer &&
                    true,
            }
        })
        setQuestions(questionsCorrect)
    }

    const handleNext = (item_index) => {
        const next_question = item_index + 1
        const questions_next = questions.map((item, idx) => {
            return { ...item, isShow: idx === next_question ? true : false }
        })
        setQuestions(questions_next)
    }

    console.log("questions", questions)

    return (
        <>
            <h3>{`Correct: ${questionCorrect} / ${questions.length}`}</h3>
            {/* <p>{
                ((questionCorrect / questions.length * 100) > 50) ? "Pass"
            }</p> */}
            {questions?.map((item, idx_question) => {
                return (
                    item.isShow && (
                        <div key={idx_question}>
                            <p>{item.question}</p>
                            <div>
                                {item.incorrect_answers.map((item, idx) => {
                                    return (
                                        <div key={idx}>
                                            <input
                                                onClick={(e) =>
                                                    handleQuestion(
                                                        e,
                                                        idx_question
                                                    )
                                                }
                                                type='radio'
                                                value={item}
                                                name='question'
                                            />
                                            {` ${item}`}
                                            <br />
                                        </div>
                                    )
                                })}
                            </div>
                            <button onClick={() => handleNext(idx_question)}>
                                Next
                            </button>
                        </div>
                    )
                )
            })}
        </>
    )
}

export default Questions
