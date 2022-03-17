import './App.css';
import Home from "./pages/Home";
import {Route, Routes, Navigate} from "react-router-dom";
import ViewPokemon from "./pages/ViewPokemon";
import Types from "./pages/Types";


const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate replace to='/pokemons'/>}/>
            <Route path='/pokemons' element={<Home/>}/>
            <Route path='/pokemons/:name' element={<ViewPokemon/>}/>
            <Route path='/type/:id' element={<Types/>}/>
        </Routes>
    );
}

export default App;
