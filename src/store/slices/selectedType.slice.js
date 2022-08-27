import { createSlice } from "@reduxjs/toolkit";

export const selectedType = createSlice({
  name: 'userName',
  initialState: 'all pokemons',
  reducers: {
    setSelectedType: (state, action)=> action.payload 
  }
})

export default selectedType.reducer
export const {setSelectedType} = selectedType.actions