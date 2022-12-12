import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userIDSlice = createSlice({
  name: 'userID',
  initialState,
  reducers: {
    saveUserID(state, action) {
      state[0] = action.payload;

      console.log(`Saving user with ID: ${action.payload} inside an array at index 0.`);

      return state;
    },
  }
})

const cartReducer = userIDSlice.reducer;

export const { saveUserID } = userIDSlice.actions;
export default cartReducer;