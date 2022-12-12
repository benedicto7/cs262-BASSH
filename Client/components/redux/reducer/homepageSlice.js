import { createSlice } from "@reduxjs/toolkit";
import Items from '../../../data/item';

const initialState = Items;

const homepageSlice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {
    addToHomepage(state, action) {
      state.push(action.payload);

      console.log(`Pushing item with ID: ${action.payload.id} to bookmark.`);
      console.log(`Bookmark = ${JSON.stringify(state, undefined, 2)}`);

      return state;
    },

    removeFromHomepage(state, action) {
      //TODO: remove item from database = homepage and user history

    },
  }
})

const cartReducer = homepageSlice.reducer;

export const { addToHomepage, removeFromHomepage } = homepageSlice.actions;
export default cartReducer;