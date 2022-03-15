import React, {useState} from 'react';
import logo from "../../assets/images/pokemon.png";
import navItemsData from "../../data/NavbarItems.json";
import Navbar from "../../components/common/Navbar";
import DisplayPokemon from "../../components/app/Pokemon/DisplayPokemon";
import useFetch from "../../hooks/useFetch";
import Pagination from "../../components/common/Paginations";

const Home = () => {
    const {data, error, loading} = useFetch('https://pokeapi.co/api/v2/pokemon?offset=300&limit=100');
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonPerPage] = useState(20);

    const indexOfLastPost = currentPage * pokemonPerPage;
    const indexOfFirstPost = indexOfLastPost - pokemonPerPage;
    const currentPokemon = data ? data.slice(indexOfFirstPost, indexOfLastPost) : null;

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <Navbar logoSrc={logo}
                    alt='pokemon logo'
                    navItems={navItemsData}
            />
            {loading && <span>loading...</span>}
            {data &&
               <>
                   <DisplayPokemon pokemon={currentPokemon} />
                   <Pagination itemsPerPage={pokemonPerPage} totalItems={data.length} paginate={paginate} />
               </>
            }
            {error && <span>{error}</span>}

        </>
    );
};

export default Home;