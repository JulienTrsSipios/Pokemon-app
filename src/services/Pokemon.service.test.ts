import {convertPoundsToKilograms, getFirstAbility} from "./Pokemon.service";
import {pokemon} from "../interfaces/Pokemon.interface";
import React from "react";

const emptyPokemon: pokemon = {
    name: "",
    weight: 0,
    image: "",
    abilities: [],
};

const myPokemon = {
    name: "",
    weight: 69,
    image: "",
    abilities: [
        {
            ability:{
                name: "chlorophyll",
                url: ""
            }
        }
    ]
};

describe("Tests for getFirstAbility", () => {
    it("Should return null if there is no abilities", () => {
        expect(getFirstAbility(emptyPokemon)).toEqual(null);
    });
    it("Should return the first ability", () => {
        expect(getFirstAbility(myPokemon)).toEqual("chlorophyll");
    });
});

describe("Tests for converting pounds to kilograms", () => {
    it("Should return null if there is no pounds", () => {
        expect(convertPoundsToKilograms(emptyPokemon)).toEqual(null);
    });
    it("Should return the correct conversion", () => {
        expect(convertPoundsToKilograms(myPokemon)).toEqual(31);
    });
});