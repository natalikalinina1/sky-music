import { createSlice } from "@reduxjs/toolkit";

export const filterCategorySlice = createSlice({
  name: "filterCategory",
  initialState: {
    value: {
      genres: [],
    },
  },
  reducers: {
    addToCategoryArray: (state, action) => {
      state.value.genres.push(action.payload);
    },
    deleteFromCategoryArray: (state, action) => {
      state.value.genres = state.value.genres.filter(
        (genre) => genre !== action.payload
      );
    },
  },
});

export const { addToCategoryArray, deleteFromCategoryArray } =
  filterCategorySlice.actions;

export default filterCategorySlice.reducer;