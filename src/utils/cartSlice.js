import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    item: [],
  },
  reducers: {
    addItem: (state, action) => {
      // state.item.push(action.payload);
      const newItem = action.payload;

      // Check if the item with the same ID already exists in the array
      const isItemExist = state.item.some(
        (item) => item.info.id === newItem.info.id
      );

      // If the item doesn't exist, add it to the array
      if (!isItemExist) {
        state.item.push(newItem);
      }
    },
    removeItem: (state, action) => {
      const itemIdToRemove = action.payload;
      state.item = state.item.filter((item) => item.info.id !== itemIdToRemove);
    },
    clearCart: (state, action) => {
      state.item = [];
    },
  },
});
export const { addItem, removeItem, clearCart } = cart.actions;

export default cart.reducer;
