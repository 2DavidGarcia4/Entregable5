import { createSlice } from "@reduxjs/toolkit";

const pokedex = JSON.parse(localStorage.getItem("pokedex")) || {darckMode: false, trainerName: "", pokemonsPerPage: 8}

export const data = createSlice({
  name: 'data',
  initialState: pokedex,
  reducers: {
    setData: (state, action)=> {
      localStorage.setItem("pokedex", JSON.stringify(action.payload))
      return action.payload
    } 
  }
})

export default data.reducer
export const {setData} = data.actions