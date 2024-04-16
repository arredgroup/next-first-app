"use client"
import React, {useContext} from 'react';
import {ThemeContext} from "@/app/contexts";

const Card = () => { //properties

    const user = useContext(ThemeContext);

    return (
        <div className="card">
            <h2>{user.user}</h2>
            <h3>{user.clicks}</h3>
        </div>
    );
}

export default Card;