import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import Student from "./components/Student";
// import New_Home from "./components/Stu_Home";
import Student from "./components/Query_Student";
import Home from "./components/Query_Home";
// import Home from "./components/Home_UserInput"

function App()
{
    return(
        <BrowserRouter>
            <h1>Student Record System</h1>

            <nav>
                <Link to="/">Home</Link> {" | "}
                <Link to="/student?id=101&name=Rahul">SRN 101</Link> {" | "}
                <Link to="/student?id=102&name=Vaibee">SRN 102</Link> {" | "}
                <Link to="/student?id=103&name=Disha">SRN 103</Link>
            </nav>

            <hr/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/student" element={<Student/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;