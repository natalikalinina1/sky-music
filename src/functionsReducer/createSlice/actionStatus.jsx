import { createSlice } from "@reduxjs/toolkit";

export const actionStatusSlice = createSlice({
  name: "actionStatus",
  initialState: { value: false },
  reducers: {
    setActionStatus: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setActionStatus } = actionStatusSlice.actions;

export default actionStatusSlice.reducer;