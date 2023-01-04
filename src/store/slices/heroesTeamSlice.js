import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions.js";

const heroesTeamSlice = createSlice({
  name: "heroesTeam",
  initialState: [],
  reducers: {
    addToHeroesTeam(state, action) {
      state.push(action.payload);
    },
    removeFromHeroesTeam(state, action) {
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

export const { addToHeroesTeam, removeFromHeroesTeam } =
  heroesTeamSlice.actions;
export const heroesTeamReducer = heroesTeamSlice.reducer;
