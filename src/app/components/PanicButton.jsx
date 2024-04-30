import React from 'react';
import { Container } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";


const PanicButton = (props) => {
    const { alertCallback } = props;

    const handleButton = (e) => {
        e.preventDefault();
        alertCallback("Panic button clicked!");
    }

    return (
        <Container>
            <Card sx={{ minWidth: 275, width: 500 }}>
                <CardContent>
                    <h1>Panic Button</h1>
                    <button onClick={handleButton}>
                        Click me
                    </button>
                </CardContent>
            </Card>
        </Container>
    )

}

export default PanicButton;