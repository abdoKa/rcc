import React, {useState} from 'react';
import logo from "../assets/images/pokemon.png";
import Navbar from "../components/Navbar";
import DisplayPokemon from "../components/DisplayPokemon";
import useFetch from "../hooks/useFetch";
import Pagination from "../components/Paginations";

const Home = () => {
    const pokemonPerPage = 20;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPokemon = () => data ? data.count : 0;

    const offset = () => {
        return (currentPage - 1) * pokemonPerPage + 1
    };

    const {
        data,
        error,
        loading
    } = useFetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset()}&limit=${pokemonPerPage}`);


    // const getPages = () => {
    //     const totalPages = totalPokemon / pokemonPerPage;
    //     console.log('oo', totalPages);
    //     const pages = []
    //     for (let i = 0; i < totalPages; i++) {
    //         pages.push(i)
    //     }
    //
    //     console.log('pages', pages);
    //     return pages;
    // }

    return (
        <>
            <Navbar logoSrc={logo}
                    alt='pokemon logo'
            />

            {loading && <span>loading...</span>}

            {data &&
                <>
                    <DisplayPokemon pokemons={data.results}/>
                    <div className="block-center py-2">
                        <button className="btn" onClick={() => {
                            setCurrentPage(currentPage - 1)
                        }}>prev page
                        </button>
                        <button className='btn' onClick={() => {
                            setCurrentPage(currentPage + 1)
                        }}>next page
                        </button>
                    </div>
                </>
            }

            {error && <span>{error}</span>}
        </>
    );
};

export default Home;
