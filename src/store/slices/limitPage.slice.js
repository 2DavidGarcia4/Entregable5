import { createSlice } from "@reduxjs/toolkit";
const sss = 10

export const limitPage = createSlice({
  name: 'limitPage',
  initialState: sss,
  reducers: {
    setLimit: (state, action)=> action.payload 
  }
})

export default limitPage.reducer
export const {setLimit} = limitPage.actions