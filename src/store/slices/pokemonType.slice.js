import { createSlice } from "@reduxjs/toolkit";

export const pokemonType = createSlice({
  name: 'indButtons',
  initialState: "todos",
  reducers: {
    setPokemonType: (state, action)=> action.payload 
  }
})

export default pokemonType.reducer
export const {setPokemonType} = pokemonType.actions