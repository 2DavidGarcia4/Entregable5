import { configureStore } from "@reduxjs/toolkit";
import pokemons from './slices/pokemons.slice.js'
import pokedexData from "./slices/data.slice.js"
import indButtons from "./slices/indButtons.slice.js"
import pokemonType from "./slices/pokemonType.slice.js"

export default configureStore({
  reducer: {
    indButtons,
    pokedexData,
    pokemons,
    pokemonType
  }
})