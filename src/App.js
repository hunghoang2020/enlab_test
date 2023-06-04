import "./App.css"
import React from "react"

import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Myapp from "./component/myapp/MyApp"
import Getstart from "./pages/GetStart"
import Question from "./pages/Question"
// import Congratulation from "./pages/Congratulation"
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Getstart />} />
                <Route path='/question' element={<Question />} />
                {/* <Route path='/congratulation' element={<Congratulation />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default App
