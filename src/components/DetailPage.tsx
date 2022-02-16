import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { pokemonDetails } from "../interfaces/Pokemon.interface";

function DetailPage() {
    const { idpokemon } = useParams();
    const [pokemon, setPokemonState] = useState<pokemonDetails | null>(null);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${idpokemon}`)
            .then(res => { 
                const pokemonResponse = res.data;
                const pokemon: pokemonDetails = {
                    id: pokemonResponse.id,
                    base_experience: pokemonResponse.base_experience,
                    height: pokemonResponse.height,
                    name: pokemonResponse.name,
                    image: pokemonResponse.sprites.front_default,
                    abilities: pokemonResponse.abilities,
                    weight: pokemonResponse.weight
                };
                setPokemonState(pokemon);
            });
    },[idpokemon]);
    
    return (
        <div className="App">
            <header className="App-header">
                {pokemon && <div>
                    <h1>Pokemon ID: {idpokemon}</h1>
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.image} alt="pokemon" />
                    <p>First ability: {pokemon.abilities[0].ability.name}</p>
                    <p>Weight (lb): {pokemon.weight}</p>
                    <p>Weight (kg): {Math.round(pokemon.weight / 0.45)}</p>
                    <p>Base experience: {pokemon.base_experience}</p>
                    <p>Height: {pokemon.height}</p>
                </div>}
            </header>
            
        </div>
    );
}

export default DetailPage;