import React, {useEffect, useState} from 'react';
import useFetch from "../hooks/useFetch";
import {useParams} from "react-router-dom";

function ViewPokemon(props) {
    const pokemonName = useParams();
    const [pokemonDetails, setPokemonDetails] = useState();
    const [loading, setLoading] = useState('loading...');

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.name}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setPokemonDetails(data);
                setLoading(null)
            })
    }, [pokemonName])
    if (pokemonDetails) {

        // console.log('pokemon', pokemonDetails.sprites.versions.map(v => console.log(v));
    }
    return (
        <>
            {loading && <span>{loading}</span>}
            {pokemonDetails &&
                <div>
                    <h1>{pokemonDetails.name}</h1>
                    <img src={pokemonDetails && pokemonDetails.sprites.back_default} alt=""/>
                    <div>
                        <ul>
                            {pokemonDetails && pokemonDetails.types.map(type =>
                                <li key={type.slot}>{type.type.name}</li>
                            )}
                        </ul>
                    </div>
                    <p>
                        height: {pokemonDetails.height}
                    </p>
                    <p>
                        weight: {pokemonDetails.weight}
                    </p>
                    <div>
                        <img src={pokemonDetails.versions} alt=""/>
                    </div>
                    {/*<p>types : {pokemonDetails && pokemonDetails.types.type}</p>*/}
                </div>
            }
        </>
    );
}

export default ViewPokemon;