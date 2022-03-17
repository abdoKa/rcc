import React, {useEffect, useState} from 'react';
import useFetch from "../hooks/useFetch";
import {Link, useParams} from "react-router-dom";
import PokemonEvolutions from "../pages/PokemonEvolutions";

const PokemDetails = (props) => {
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
    }, [])

    return (
        <>
            {loading && <span>{loading}</span>}
            {pokemonDetails &&
                <div className="flex-col-center">
                    <h1 className="uppercase my-2">{pokemonDetails.name}</h1>
                    <div className="pokemon-card">
                        <img src={pokemonDetails && pokemonDetails.sprites.front_default} alt=""/>
                        <div>
                            <p className='uppercase'>
                                height: <span className="font-bold">{pokemonDetails.height}</span>
                            </p>
                            <p className='uppercase'>
                                weight: <span className="font-bold">{pokemonDetails.weight}</span>
                            </p>
                            <ul className='uppercase'>
                                <li>Abilities:</li>
                                {pokemonDetails.abilities.map(({ability}) =>
                                    <li key={ability.name} className="font-bold">{ability.name}</li>
                                )}
                            </ul>
                        </div>

                        <ul>
                            <span className="uppercase">types</span> :
                            {pokemonDetails.types && pokemonDetails.types.map(({slot, type}) =>
                                <li key={slot}>
                                    <Link className="font-bold" to={`/type/${pokemonDetails.id}`}>
                                        {type.name}
                                    </Link>
                                </li>
                            )}
                        </ul>
                        <div>
                            <img src={pokemonDetails.versions} alt=""/>
                        </div>

                        <PokemonEvolutions pokemonId={pokemonDetails.id}/>
                    </div>
                </div>
            }
        </>
    );
}

export default PokemDetails;