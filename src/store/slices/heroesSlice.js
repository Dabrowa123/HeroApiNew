import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const heroesSlice = createSlice({
  name: "heroes",
  initialState: [],
  reducers: {
    addHero(state, action) {
      state.push(action.payload);
    },
    removeHero(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

export const { addHero, removeHero } = heroesSlice.actions;
export const heroesReducer = heroesSlice.reducer;
