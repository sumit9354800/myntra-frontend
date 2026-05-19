import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./product";
import fetchingSlice from "./fatchingSlice.js";
import bagSlice from "./bagSlice.js";

const store = configureStore({
  reducer: {
    cartSlice: cartSlice.reducer,
    fetchingStatus: fetchingSlice.reducer,
    bag:bagSlice.reducer,
  }
})

export default store;