"use client"
import React, {useContext, useState} from 'react';
import { ThemeContext } from '../contexts';

const Chatbot = () => {
    const user = useContext(ThemeContext);
    const [name, setName] = useState(user.user);

    return (
        <div>
            <h1>Chatbot</h1>
            <p>Hola! {name}</p>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    );

}

export default Chatbot;