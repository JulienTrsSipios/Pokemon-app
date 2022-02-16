import React, { useState } from "react";
import "./App.css";
import Pokemon from "./components/Pokemon";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";



function App() {
    const [idPokemon, setIdPokemon] = useState(1);

    const incrementIdPokemon = () => {
        setIdPokemon(idPokemon + 1);
    };

    const decrementIdPokemon = () => {
        idPokemon > 1 ? setIdPokemon(idPokemon - 1) : setIdPokemon(1);
    };

    return (
        <div className="App">
            <header className="App-header">
                <Pokemon idPokemon={idPokemon}></Pokemon>
                <Button variant="Primary" onClick={() => incrementIdPokemon()}>
          + 
                </Button>
                <Button disabled={idPokemon === 1 ? true : false} variant="Primary" onClick={() => decrementIdPokemon()}>
          - 
                </Button>
                <Link to={`/detail-page/${idPokemon}`}>More infos about this Pokemon
                </Link>
            </header>
        </div>
    );
}

export default App;
