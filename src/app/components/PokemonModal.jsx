import React, {useState, useEffect} from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {getPokemonDetail} from '../services/PokeService';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const PokemonModal = (props) => {
    const { open, handleClose, id } = props;

    const [pokemonDetail, setPokemonDetail] = useState({});

    useEffect(() => {
        if(id !== 0) loadPokemonDetail();
    }, [id]);

    const loadPokemonDetail = async () => {
        const response = await getPokemonDetail(id);
        setPokemonDetail(response);
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            {JSON.stringify(pokemonDetail)}
            </Box>
        </Modal>
    )
}

export default PokemonModal;