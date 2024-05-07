import React, {useState} from 'react';
import { Container } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const CountName = () => {

    const [name, setName] = useState("");

    return (
        <Container>
            <Card sx={{ minWidth: 275, width: 500 }}>
                <CardContent>
                    <h1>Count Name</h1>
                    <p>{name} contains {name.length} characters</p>
                    <input type="text" onChange={(e) => setName(e.target.value)}/>
                </CardContent>
            </Card>
        </Container>
    )
}

export default CountName;