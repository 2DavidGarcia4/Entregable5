import { configureStore } from "@reduxjs/toolkit";
import pokemons from './slices/pokemons.slice.js'
import pokedexData from "./slices/data.slice.js"
import selectedType from "./slices/selectedType.slice.js"
import indButtons from "./slices/indButtons.slice.js"

export default configureStore({
  reducer: {
    indButtons,
    pokedexData,
    pokemons,
    selectedType
  }
})