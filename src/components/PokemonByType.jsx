import React, {useEffect, useState} from 'react';
import useFetch from "../hooks/useFetch";
import {useParams} from "react-router-dom";

const PokemonByType = () => {
    const pokemonId = useParams();

    const {data:pokemonsTypes, loading, error} = useFetch(`https://pokeapi.co/api/v2/type/${pokemonId.id}`);


    return (
        <>
            {error && <span className="text-center">Type not Found</span>}
            {pokemonsTypes &&
                <>
                    <h1>{pokemonsTypes.name}</h1>
                    <ul>
                        {/*{pokemonTypes.damage_relations.double_damage_from.map(name =>*/}
                        {/*    <li key={name}>{name}</li>*/}
                        {/*)}*/}
                    </ul>
                </>

            }
        </>
    );
}

export default PokemonByType;