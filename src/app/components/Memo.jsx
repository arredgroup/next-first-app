import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {Container} from "@mui/material";
import React, {useMemo, useState} from "react";


const Memo = () => {

    const [boolean, setBoolean] = useState(true);

    const [data, setData] = useState([1, 2, 3, 4, 5]);

    const resultado = useMemo(() => {
        console.log("calculando usando useMemo");
        return data.reduce((acc, value) => {
            acc += value;
            return acc;
        }, 0);
    }, [data]);

    return (
        <Container>
            <Card sx={{ minWidth: 275, width: 500 }}>
                <CardContent>
                    <h1>Memorized Function</h1>
                    <h5>{resultado}</h5>
                    <button onClick={() => setBoolean(!boolean)}>Switch {boolean? "TRUE" : "FALSE"}</button>
                    <button onClick={() => setData([...data, data.length + 1])}>Add</button>
                </CardContent>
            </Card>
        </Container>
    )
}

export default Memo;