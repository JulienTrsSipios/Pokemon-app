import { pokemon } from "../interfaces/Pokemon.interface";

export function getFirstAbility(pokemon: pokemon) {
    const isFirstAbility = pokemon.abilities[0];
    return  isFirstAbility ? isFirstAbility.ability.name : null; 
}

export function convertPoundsToKilograms(pokemon: pokemon) {
    return pokemon.weight ? Math.round(pokemon.weight * 0.45) : null;
}

export function convertKilogramsToPounds(pokemon: pokemon) {
    return pokemon.weight ? Math.round(pokemon.weight / 0.45) : null;
}