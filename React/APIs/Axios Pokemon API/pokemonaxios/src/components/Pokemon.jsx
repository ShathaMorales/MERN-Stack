import React, { useState } from 'react';
import DisplayPokemon from './DisplayPokemon';
import axios from 'axios';

const Pokemon = () => {
    const [pokemons, setPokemons] = useState([]);

    const handleClick = () => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then((response) => {
                setPokemons(response.data.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
            <button className="btn btn-warning" onClick={handleClick}>
                Fetch Pokemon
            </button>
            <DisplayPokemon pokemons={pokemons} />
        </div>
    );
}

export default Pokemon;
