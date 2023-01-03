import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions.js";

const villainsBattleSlice = createSlice({
  name: "villainBattle",
  initialState: [],
  reducers: {
    addVillainBattle(state, action) {
      state.push(action.payload);
    },
    removeVillainBattle(state, action) {
      const index = state.findIndex((hero) => hero.id === action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

export const { addVillainBattle, removeVillainBattle } =
  villainsBattleSlice.actions;
export const villainsBattleReducer = villainsBattleSlice.reducer;
