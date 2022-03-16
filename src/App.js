import './App.css';
import Home from "./pages/Home";
import {Route, Routes, Navigate} from "react-router-dom";
import ViewPokemon from "./pages/ViewPokemon";


const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate replace to='/pokemons'/>}/>
            <Route path='/pokemons' element={<Home/>}/>
            <Route path='/pokemons/:name' element={<ViewPokemon/>}/>
        </Routes>
    );
}

export default App;
