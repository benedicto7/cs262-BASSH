import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState,
  reducers: {
    addToBookmark(state, action) {
      state.push(action.payload);

      console.log(`Pushing item with ID: ${action.payload.id} to bookmark.`);
      console.log(`Bookmark = ${JSON.stringify(state, undefined, 2)}`);

      return state;
    },

    removeFromBookmark(state, action) {
      const itemIndex = state.findIndex((item) => item.id === action.payload.id);
      console.log(`Removing item with ID: ${JSON.stringify(action.payload.id)} at index: ${itemIndex} in bookmark.`);

      state.splice(itemIndex, 1);
      console.log(`Bookmark = ${JSON.stringify(state, undefined, 2)}`);

      return state;
    },

    checkItemInBookmark(state, action) {
      state.find((data) => {
        if (data.id == action.payload.id) {
          return true;
        }
      })
      return false;
    }
  }
})

const cartReducer = bookmarkSlice.reducer;

export const { addToBookmark, removeFromBookmark, checkItemInBookmark } = bookmarkSlice.actions;
export default cartReducer;