import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Lamp: [],
  Chair: [],
  Desk: [],
  Electronics: [],
  PersonalComputer: [],
  Sofa: [],
  Others: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    addToCategory(state, action) {
      if (action.payload.category === "Lamp") {
        state.Lamp.push(action.payload);
        console.log(`Pushing item to lamp category.`);
      }
      else if (action.payload.category === "Chair") {
        state.Chair.push(action.payload);
        console.log(`Pushing item to chair category.`);
      }
      else if (action.payload.category === "Desk") {
        state.Desk.push(action.payload);
        console.log(`Pushing item to desk category.`);
      }
      else if (action.payload.category === "Electronics") {
        state.Electronics.push(action.payload);
        console.log(`Pushing item to Electronics category.`);
      }
      else if (action.payload.category === "PersonalComputer") {
        state.PersonalComputer.push(action.payload);
        console.log(`Pushing item to personal computer category.`);
      }
      else if (action.payload.category === "Sofa") {
        state.Sofa.push(action.payload);
        console.log(`Pushing item to Sofa category.`);
      }
      else if (action.payload.category === "Others") {
        state.Others.push(action.payload);
        console.log(`Pushing item to others category.`);
      }

      return state;
    },

    removeFromCategory(state, action) {
      if (action.payload.category === "Lamp") {
        const itemIndex = state.Lamp.findIndex((item) => item.id === action.payload.id);
        state.Lamp.splice(itemIndex, 1);
        console.log(`Removing item with ID: ${JSON.stringify(action.payload.id)} at index: ${itemIndex} in lamp category.`);
      }
      else if (action.payload.category === "Chair") {
        const itemIndex = state.Lamp.findIndex((item) => item.id === action.payload.id);
        state.Chair.splice(itemIndex, 1);
        console.log(`Removing item with ID: ${JSON.stringify(action.payload.id)} at index: ${itemIndex} in lamp category.`);
      }
      else if (action.payload.category === "Desk") {
        const itemIndex = state.Lamp.findIndex((item) => item.id === action.payload.id);
        state.Desk.splice(itemIndex, 1);
        console.log(`Removing item with ID: ${JSON.stringify(action.payload.id)} at index: ${itemIndex} in lamp category.`);
      }
      else if (action.payload.category === "Electronics") {
        const itemIndex = state.Lamp.findIndex((item) => item.id === action.payload.id);
        state.Electronics.splice(itemIndex, 1);
        console.log(`Removing item with ID: ${JSON.stringify(action.payload.id)} at index: ${itemIndex} in lamp category.`);
      }
      else if (action.payload.category === "PersonalComputer") {
        const itemIndex = state.Lamp.findIndex((item) => item.id === action.payload.id);
        state.PersonalComputer.splice(itemIndex, 1);
        console.log(`Removing item with ID: ${JSON.stringify(action.payload.id)} at index: ${itemIndex} in lamp category.`);
      }
      else if (action.payload.category === "Sofa") {
        const itemIndex = state.Lamp.findIndex((item) => item.id === action.payload.id);
        state.Sofa.splice(itemIndex, 1);
        console.log(`Removing item with ID: ${JSON.stringify(action.payload.id)} at index: ${itemIndex} in lamp category.`);
      }
      else if (action.payload.category === "Others") {
        const itemIndex = state.Lamp.findIndex((item) => item.id === action.payload.id);
        state.Others.splice(itemIndex, 1);
        console.log(`Removing item with ID: ${JSON.stringify(action.payload.id)} at index: ${itemIndex} in lamp category.`);
      }

      console.log(`Category = ${JSON.stringify(state, undefined, 2)}`);

      return state;
    }
  }
})

const cartReducer = categorySlice.reducer;

export const { addToCategory, removeFromCategory } = categorySlice.actions;
export default cartReducer;