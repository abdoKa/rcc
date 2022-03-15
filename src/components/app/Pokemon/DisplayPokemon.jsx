import React from 'react';

const DisplayPokemon = ({pokemon}) => {
    return (
        <div className="container flex-wrap">
            {pokemon.map(p =>
                <div key={p.name} className="poke__card">
                    <p>{p.name}</p>
                </div>
            )}
        </div>
    );
};

export default DisplayPokemon;