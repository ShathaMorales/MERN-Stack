import React from 'react'

const DisplayPokemon = (props) => {
    const pokemons = props.pokemons;
    return (
        <div>
            <ol>
                {pokemons.map((pokemon, indx) => <li key={indx}>{pokemon.name}</li>)}
            </ol>
        </div>
    )
}

export default DisplayPokemon