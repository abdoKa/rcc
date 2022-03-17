import useFetch from "../hooks/useFetch";

const PokemonEvolutions = ({pokemonId}) => {
    const {data: evolution, error, loading} = useFetch(`https://pokeapi.co/api/v2/evolution-chains/${pokemonId}`);

    if (evolution) {
        console.log('data evolution', evolution)
    }
    return (
        <>
            {error && <span>{error}</span>}

            <div>
                {evolution &&
                    <>
                        <h1>Evolution Chain : </h1>
                        <p className="uppercase">species : {evolution.chain.species.name}</p>
                    </>
                }
            </div>
        </>
    );
};

export default PokemonEvolutions;