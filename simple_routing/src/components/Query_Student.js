import React from "react";
import { useSearchParams } from "react-router-dom";

function Student() {
    const [searchParams, setSearchParams] = useSearchParams();

    const id = searchParams.get("id");
    const name = searchParams.get("name");

    const changeStudent = () => {
        setSearchParams({
            id: 104,
            name: "Elizabeth"
        });
    };

    return (
        <div className="container" style={pageStyle}>
            <h2>Student Details</h2>
            <p><b>Student ID: </b>{id}</p>
            <p><b>Student Name: </b>{name}</p>
            <button onClick={changeStudent}>Load SRN</button>
        </div>
    );
}

const pageStyle = {
    background: 'skyblue',
    color: 'darkblue',
    padding: '0.10em'
}

export default Student;