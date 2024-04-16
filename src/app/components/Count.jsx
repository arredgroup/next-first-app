"use client"
import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../contexts';
// const React = require('react');

const Count = () => {

    const user = useContext(ThemeContext);

    const [count, setCount] = useState(user.clicks);

    useEffect(()=>{
        console.log("useEffect sin dependencias ejecutado");
    }, []);

    useEffect(()=>{
        console.log("useEffect con dependencias ejecutado");
        document.title = `${count}`;
    }, [count]);

    return (
        <div>
            <h1>Counter</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count+1)}>
            Click me
            </button>
            <input type={"number"} value={count} onChange={(e) => setCount(parseInt(e.target.value))} />
        </div>
    );
};

export default Count;