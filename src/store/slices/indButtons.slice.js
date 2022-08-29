import { createSlice } from "@reduxjs/toolkit";

export const indButtons = createSlice({
  name: 'indButtons',
  initialState: {start: 0, end: 7},
  reducers: {
    setIndButtons: (state, action)=> action.payload 
  }
})

export default indButtons.reducer
export const {setIndButtons} = indButtons.actions