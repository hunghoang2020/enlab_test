import "./App.css"
import React from "react"

import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Myapp from "./component/myapp/MyApp"
import Getstart from "./pages/GetStart"
import Question from "./pages/Question"
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Getstart />} />
                <Route path='/question' element={<Question />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
