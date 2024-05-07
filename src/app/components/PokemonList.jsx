import React, {useState, useEffect} from 'react';
import {Button, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import {getPokemonList} from '../services/PokeService';
import PokemonModal from "./PokemonModal";

const PokemonList = () => {

    const [pokemons, setPokemons] = useState([]);
    const [totals, setTotals] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const [openModal, setOpenModal] = useState(false);
    const [selectedId, setSelectedId] = useState(0);

    const pages = Math.ceil(totals / limit);

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

    const getIdFromUrl = (url) => {
        let id = url.replace('https://pokeapi.co/api/v2/pokemon/', '');
        id = id.replace('/', '');
        return +id;
    }

    const loadModal = (url) => {
        const id = getIdFromUrl(url);
        setSelectedId(id);
        setOpenModal(true);
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
                                <TableCell align="right">
                                    <Button variant="contained" onClick={() => loadModal(row.url)}>See Details</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table> : <h5>Pokemons not loaded yet</h5>}
            </TableContainer>
            <Pagination count={pages} page={page} onChange={handlePagination} />
            <br />
            <PokemonModal
                open={openModal}
                handleClose={() => setOpenModal(false)}
                id={selectedId} />
        </Container>
    )
}

export default PokemonList;