export interface propsPokemon {
    idPokemon: number;
}

export interface pokemonAbility {
    ability: {
        name: string;
        url: string;
    }
}

export interface pokemon {
    name: string;
    image: string;
    abilities: pokemonAbility[];
    weight: number;
}

export interface pokemonDetails {
    id: number;
    base_experience: number;
    height: number;
    name: string;
    image: string;
    abilities: pokemonAbility[];
    weight: number;
}