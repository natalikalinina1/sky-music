import { createSlice } from "@reduxjs/toolkit";

export const sortTracksSlice = createSlice({
  name: "sortTracks",
  initialState: {
    value: {
      sortManner: "",
    },
  },
  reducers: {
    setSortManner: (state, action) => {
      state.value.sortManner = action.payload;
    },
  },
});

export const { setSortManner } = sortTracksSlice.actions;

export default sortTracksSlice.reducer;