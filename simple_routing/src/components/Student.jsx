import React from "react";
import { useParams } from "react-router-dom";

function Student(){
    const {id} =useParams();
    const students=[
        {
            id:"101",
            name:"ALEX",
            course: "BCA",
            marks: 85
        },
        {
            id:"102",
            name:"TOM",
            course: "BCA",
            marks: 93
        },
        {
            id:"103",
            name:"GEORGE",
            course: "BCA",
            marks: 78
        }
    ];
    const student=students.find((s)=> s.id === id);
    return(
        <div>
            <h2>Student Details</h2>
            {
                student? ( <div> 
                    <p><b>Student ID:</b>{student.id}</p>
                    <p><b>Name:</b> {student.name}</p>
                    <p><b>Course:</b> {student.course}</p>
                    <p><b>Marks:</b> {student.marks}</p> </div> ) : ( <h3>Student Record Not Found</h3>)
            }
        </div>
    );
}

export default Student;