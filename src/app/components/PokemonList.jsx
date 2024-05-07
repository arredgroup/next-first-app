import React, {useState, useEffect} from 'react';
import {Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import {getPokemonList} from '../services/PokeService';

const PokemonList = () => {

    const [pokemons, setPokemons] = useState([]);
    const [totals, setTotals] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const pages = Math.ceil(totals / limit);

    useEffect(() => {
        loadPokemons();
    }, []);

    useEffect(() => {
        loadPokemons();
    }, [page]);

    const loadPokemons = async () => {
        const data = await getPokemonList((page-1)*limit, limit);
        setTotals(data.count);
        setPokemons(data.results);
    }

    const handlePagination = (event, value) => {
        setPage(value);
    }

    return (
        <Container>
            <h1>Pokemon List</h1>
            <TableContainer component={Paper}>
                {(pokemons.length > 0) ?
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {pokemons.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.url}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table> : <h5>Pokemons not loaded yet</h5>}
            </TableContainer>
            <Pagination count={pages} page={page} onChange={handlePagination} />
            <br />
        </Container>
    )
}

export default PokemonList;