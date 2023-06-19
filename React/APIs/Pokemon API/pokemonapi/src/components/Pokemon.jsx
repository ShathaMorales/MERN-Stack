import React, { useState } from 'react';
import DisplayPokemon from './DisplayPokemon';

const Pokemon = (props) => {
    const [pokemons, setPokemon] = useState([]);

    const handleClick = () => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(response => {
                return response.json();
            })
            .then(response => {
                setPokemon(response.results);
            })
            .catch(err => {
                console.log(err);
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
