import React, { useState} from "react";

function Child({ onSendData }) {
    // State to store input value 
    const [message, setMessage] = useState('');

    // Function to send data to Parent
    const handleSend = () => {
        // Send data to Parent Component
        onSendData(message);

        // Clear input field after sending
        setMessage('');
    };

    return (
        <div style={{
            border: '1px solid gray',
            padding: '10px',
            margin: '10px'
        }}>
            <h3>Child Component</h3>
            <input type="text" value={message} placeholder="Type a message" onChange={(e) => setMessage(e.target.value)}/>
            <button onClick={handleSend}>Send to React</button>
        </div>
    )
}


export default Child;