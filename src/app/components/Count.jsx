"use client"
import React, { useState } from 'react';
// const React = require('react');

const Count = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Counter</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count+1)}>
            Click me
            </button>
        </div>
    );
};

export default Count;