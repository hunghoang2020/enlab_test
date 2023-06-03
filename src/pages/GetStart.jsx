import React from "react"
import "./css/getstart.css"
import { Link } from "react-router-dom"
const GetStart = () => {
    return (
        <>
            <div className='pic'>
                <img src='../../robo.jpg' alt='' />
            </div>
            <div className='start_ct'>
                <Link to='/question'>
                    <button className='start'>Get start </button>
                </Link>
            </div>
        </>
    )
}

export default GetStart
