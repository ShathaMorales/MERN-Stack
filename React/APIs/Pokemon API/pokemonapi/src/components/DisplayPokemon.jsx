import React from 'react'

const DisplayPokemon = (props) => {
    const pokemons = props.pokemons;
    return (
        <div>
            <ul>
                {pokemons.map((pokemon, indx) => <li key={indx}>{pokemon.name}</li>)}
            </ul>
        </div>
    )
}

export default DisplayPokemon