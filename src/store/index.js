import { configureStore } from "@reduxjs/toolkit";
import userName from './slices/userName.slice.js'
import pokemons from './slices/pokemons.slice.js'
import limitPage from "./slices/limitPage.slice.js";
import selectedType from "./slices/selectedType.slice.js"

export default configureStore({
  reducer: {
    limitPage,
    pokemons,
    selectedType,
    userName
  }
})