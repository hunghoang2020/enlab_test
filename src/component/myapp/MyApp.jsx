import "./myapp.css"
import Button from "react-bootstrap/Button"
import React from "react"
import axios from "axios"

import { useState, useEffect } from "react"

const MyApp = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const ko = async () => {
            const res = await axios.get("https://opentdb.com/api.php?amount=5")
            setData(res.data.results)
        }
        ko()
    }, [])
    console.log("data", data)
    const getquestion = () => {
        console.log("asda")
    }
    return (
        <>
            <div className='main_content'>
                <img src='./robo.jpg' alt='' />
            </div>
            <div className='button_c'>
                <Button variant='outline-primary' onClick={getquestion}>
                    Start Quiz
                </Button>
            </div>
        </>
    )
}

export default MyApp
