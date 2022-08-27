import { createSlice } from "@reduxjs/toolkit";

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState: [],
  reducers: {
    setPokemons: (state, action)=> action.payload 
  }
})

export const {setPokemons} = pokemonsSlice.actions

export const getPokemons = (url) => async (dispatch) => {
  await fetch(url).then(prom=> prom.json()).then(res=> dispatch(setPokemons(res.results))).catch(err=> console.error(err))
}
export default pokemonsSlice.reducer