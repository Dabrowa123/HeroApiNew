import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions.js";

const heroesBattleSlice = createSlice({
  name: "heroesBattle",
  initialState: ["batman"],
  reducers: {
    addHeroBattle(state, action) {
      state.push(action.payload);
    },
    removeHeroBattle(state, action) {
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

export const { addHeroBattle, removeHeroBattle } = heroesBattleSlice.actions;
export const heroesBattleReducer = heroesBattleSlice.reducer;
