"use client"
import React, {useContext, useState} from 'react';
import { ThemeContext } from '../contexts';
import { Container } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Chatbot = () => {
    const user = useContext(ThemeContext);
    const [name, setName] = useState(user.user);

    return (
        <Container>
            <Card sx={{ minWidth: 275, width: 500 }}>
                <CardContent>
                    <h1>Chatbot</h1>
                    <p>Hola! {name}</p>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </CardContent>
            </Card>
        </Container>
    );

}

export default Chatbot;