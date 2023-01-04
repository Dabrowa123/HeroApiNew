import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions.js";

const villainsTeamSlice = createSlice({
  name: "villainsTeam",
  initialState: [],
  reducers: {
    addToVillainsTeam(state, action) {
      state.push(action.payload);
    },
    removeFromVillainsTeam(state, action) {
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

export const { addToVillainsTeam, removeFromVillainsTeam } =
  villainsTeamSlice.actions;
export const villainsTeamReducer = villainsTeamSlice.reducer;
