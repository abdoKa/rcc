import React, {useState} from 'react';
import logo from "../assets/images/pokemon.png";
import Navbar from "../components/Navbar";
import DisplayPokemon from "../components/DisplayPokemon";
import useFetch from "../hooks/useFetch";
import Pagination from "../components/Paginations";

const Home = () => {
    const pokemonPerPage = 20;
    const [currentPage, setCurrentPage] = useState(1);

    const offset = () => {
        return (currentPage - 1) * pokemonPerPage + 1
    };

    const {
        data,
        error,
        loading
    } = useFetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset()}&limit=${pokemonPerPage}`);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <>
            <Navbar logoSrc={logo}
                    alt='pokemon logo'
            />

            {loading && <span>loading...</span>}

            {data &&
                <>
                    <DisplayPokemon pokemons={data.results}/>
                    <Pagination itemsPerPage={pokemonPerPage} totalItems={data.length} paginate={paginate}/>
                    <div className="block-center">
                        <button className="btn" onClick={() => {
                            setCurrentPage(currentPage - 1)
                        }}>prev
                        </button>

                        <button className='btn' onClick={() => {
                            setCurrentPage(currentPage + 1)
                        }}>next
                        </button>
                    </div>
                </>
            }

            {error && <span>{error}</span>}
        </>
    );
};

export default Home;
