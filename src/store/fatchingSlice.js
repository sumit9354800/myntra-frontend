import { createSlice } from "@reduxjs/toolkit";

const fetchingSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchingDone: false, // false PANDING true DONE
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
       state.fetchingDone;
    },
    markFetchingStarted: (state) => {
       state.currentlyFetching = true;
    },
    markFetchingFinished: (state) => {
       state.currentlyFetching = false;
    }
  }
})


export const fetchStatusActions = fetchingSlice.actions;
// console.log(fetchingActions)
export default fetchingSlice;