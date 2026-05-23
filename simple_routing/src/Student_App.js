import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Home from "./components/Stu_Home.jsx";
import Home from "./components/Home_UserInput.jsx"
import Student from "./components/Student.jsx";

function App() {
    return (
        <BrowserRouter>
            <h1>Studnet Record System</h1>

            <nav>
                <Link to="/">Home</Link>{ " | " }
                <Link to="/student/101">SRN 101</Link>{ " | " }
                <Link to="/student/102">SRN 102</Link>{ " | " }
                <Link to="/student/103">SRN 103</Link>
            </nav>
            <hr/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/student/:id" element={<Student/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;