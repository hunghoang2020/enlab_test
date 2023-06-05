import React from "react"
import { useState, useEffect } from "react"
import { redirect, useNavigate } from "react-router-dom"
import Button from "@mui/material/Button"
import FormLabel from "@mui/material/FormLabel"
import "./congratulation.css"
const Congratulation = (props) => {
    const { show, rightanswer } = props
    const [timer, setTimer] = useState(0)
    const [timerFinish, setTimerFinish] = useState(null)
    const navigate = useNavigate()
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
    const replay = () => {
        console.log("asd")
        navigate("/")
    }
    console.log("questionCorrect", rightanswer)
    if (show) {
        return (
            <div className='mycontainer'>
                <div className='pic'>
                    <img src='../../win.png' alt='' />
                </div>
                <h1 className='white'>COMPLETE</h1>
                <FormLabel
                    id='demo-radio-buttons-group-label'
                    className='white'
                >
                    {rightanswer}/10 you are amazing
                </FormLabel>
                <br />

                <div className='white'>Congratulation time finish: {timer}</div>
                {/* <button onClick={replay}> Replay</button> */}
                <br />
                <Button variant='outlined' onClick={replay} className='center'>
                    Play again
                </Button>
            </div>
        )
    } else {
        return
    }
}

export default Congratulation
