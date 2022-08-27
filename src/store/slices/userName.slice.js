import { createSlice } from "@reduxjs/toolkit";

export const userNameSlice = createSlice({
  name: 'userName',
  initialState: '',
  reducers: {
    setNameGlobal: (state, action)=> action.payload 
  }
})

export default userNameSlice.reducer
export const {setNameGlobal} = userNameSlice.actions