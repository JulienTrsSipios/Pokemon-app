
import axios from "axios";
import React, { useEffect, useState } from "react";
import { propsPokemon, pokemon } from "../interfaces/Pokemon.interface";
import { convertPoundsToKilograms, getFirstAbility } from "../services/Pokemon.service";

function Pokemon({idPokemon} : propsPokemon): JSX.Element {
    const [pokemon, setPokemonState] = useState<pokemon | null>(null);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
            .then(res => { 
                const pokemonResponse = res.data;
                const pokemon: pokemon = {
                    name: pokemonResponse.name,
                    image: pokemonResponse.sprites.front_default,
                    abilities: pokemonResponse.abilities,
                    weight: pokemonResponse.weight
                };
                setPokemonState(pokemon);
            });
    },[idPokemon]);

    const renderPage = (): JSX.Element => {
        if (!pokemon) {
            return <div>Loading...</div>;
        } else {
            return (<div>
                <h1>Pokemon number: {idPokemon}</h1>
                <h2>{pokemon.name}</h2>
                <img src={pokemon.image} alt="pokemon" />
                <p>First ability: {getFirstAbility(pokemon)}</p>
                <p>Weight: {convertPoundsToKilograms(pokemon)}</p>
            </div>);
        }
    };

    return (
        <div>
            {renderPage()} 
        </div>
    );
}

export default Pokemon;