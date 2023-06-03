import React, { useLayoutEffect } from "react"

import axios from "axios"

import { useState, useEffect } from "react"

const Question = () => {
    const [data, setData] = useState([])

    useLayoutEffect(() => {
        const ko = async () => {
            const res = await axios.get("https://opentdb.com/api.php?amount=5")
            setData(res.data.results)
        }
        ko()
    }, [])
    console.log("data", data)

    // const [numQuestion, setnunQuestion] = useState(0)

    return (
        <>
            <h1>question</h1>
            {/* {console.log(data[0])} */}
            {/* <p>
                {data.map((item, key) => (
                    <h1 key={key}>{item.question}</h1>
                ))}
            </p> */}
            {/* <p>{data[0]?.question}</p> */}
            {/* <p>{data[0]?.question}</p> */}
        </>
    )
}

export default Question
