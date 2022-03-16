import React from 'react';
import {Link} from "react-router-dom";

const DisplayPokemon = ({pokemons}) => {
    return (
        <div className="container flex-wrap">
            {pokemons.map(pokemon =>
                <Link to={`/pokemons/${pokemon.name}`} key={pokemon.name} className="poke__card">
                    <p>{pokemon.name}</p>
                </Link>
            )}
        </div>
    );
};

export default DisplayPokemon;