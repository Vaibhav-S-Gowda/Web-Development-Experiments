import React, { useState } from "react";
import Child from "./childfn";

function Parent() {

    // State to store data recieved from child
    const [recievedData, setRecievedData] = useState('');

    // Function to recieve data from child
    const handleDataFromChild = (data) => { setRecievedData(data) };

    return (
        <div>
            <h2>Parent Component</h2>
            <p>
                Data recieved from child: 
                <strong> {recievedData} </strong>
            </p>

            <Child onSendData = {handleDataFromChild}/>
        </div>
    );
}

export default Parent;