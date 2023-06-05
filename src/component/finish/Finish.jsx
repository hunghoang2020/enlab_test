import React from "react"
import { useState, useEffect } from "react"
import { redirect, useNavigate } from "react-router-dom"
import Button from "@mui/material/Button"
import FormLabel from "@mui/material/FormLabel"
import "./finish.css"
const Finish = (props) => {
    const navigate = useNavigate()

    const { show, rightanswer, res } = props
    const [timer, setTimer] = useState(0)
    // const [timerFinish, setTimerFinish] = useState(null)
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

    const replay = () => {
        navigate("/")
    }
    if (show) {
        return (
            <div className='mycontainer'>
                <div className='sorry'>
                    <img src='../../replay.png' alt='' />
                </div>
                <h1 className='white'>COMPLETE</h1>
                <FormLabel
                    id='demo-radio-buttons-group-label'
                    className='white'
                >
                    {rightanswer}/{res.length} Better luck next time
                </FormLabel>
                <br />

                <FormLabel
                    id='demo-radio-buttons-group-label'
                    className='white'
                >
                    finish time finish: {timer} seconds
                </FormLabel>
                <br />
                <Button variant='outlined' onClick={replay}>
                    Play again
                </Button>
            </div>
        )
    } else {
        return
    }
}

export default Finish
