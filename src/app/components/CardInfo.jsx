"use client"
import React, {useContext} from 'react';
import {ThemeContext} from "@/app/contexts";
import { Container } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const CardInfo = () => { //properties

    const user = useContext(ThemeContext);

    return (
        <Container>
            <Card sx={{ minWidth: 275, width: 500 }}>
                <CardContent>
                    <h2>{user.user}</h2>
                    <h3>{user.clicks}</h3>
                </CardContent>
            </Card>
        </Container>
    );
}

export default CardInfo;