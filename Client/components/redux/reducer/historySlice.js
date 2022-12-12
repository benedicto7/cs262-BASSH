import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const historySlice = createSlice({
  name: 'userSellHistory',
  initialState,
  reducers: {
    addToSalesHistory(state, action) {
      state.push(action.payload);

      console.log(`Pushing item with ID: ${action.payload.id} to sell history.`);
      console.log(`Sell history = ${JSON.stringify(state, undefined, 2)}`);

      return state;
    },

    removeFromSalesHistory(state, action) {
      const itemIndex = state.findIndex((item) => item.id === action.payload.id)
      console.log(`Removing item from the whole application with ID: ${JSON.stringify(action.payload.id)} at index: ${itemIndex} in sell history.`);

      state.splice(itemIndex, 1);
      console.log(`Sell history = ${JSON.stringify(state, undefined, 2)}`);

      return state;
    },
  }
})

const cartReducer = historySlice.reducer;

export const { addToSalesHistory, removeFromSalesHistory } = historySlice.actions;
export default cartReducer;