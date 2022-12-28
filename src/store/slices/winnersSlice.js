import { createSlice } from "@reduxjs/toolkit";

const winnersSlice = createSlice({
  name: "winners",
  initialState: [""],
  reducers: {
    setWinners(state, action) {
      state[0] = action.payload;
    },
  },
});

export const { setWinners } = winnersSlice.actions;
export const winnersReducer = winnersSlice.reducer;
