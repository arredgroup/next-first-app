"use client"
import React, { useState } from 'react';

const Chatbot = () => {

    const [name, setName] = useState('');

    return (
        <div>
            <h1>Chatbot</h1>
            <p>Hola! {name}</p>
            <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
    );

}

export default Chatbot;