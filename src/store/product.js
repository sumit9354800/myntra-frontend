import { createSlice } from "@reduxjs/toolkit";
import { items } from "./items";

const cartSlice = createSlice({
  name: "product",
  initialState: items,
  reducers: {
    addInitialItems:(store, action)=> {
      return [...store, ...action.payload]
      // optionelly you can use when node server in working
      // return [...store, ...action.payload]
          // return action.payload
    }
  }
})

export const itemsActions = cartSlice.actions;

export default  cartSlice