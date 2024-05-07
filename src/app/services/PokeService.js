import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const getPokemonList = async (offset = 0, limit = 20) => {
    const response = await axios.get(`${BASE_URL}/pokemon/?offset=${offset}&limit=${limit}`);
    return response.data;
}