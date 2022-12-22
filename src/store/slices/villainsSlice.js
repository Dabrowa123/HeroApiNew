import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const villainsSlice = createSlice({
  name: "villain",
  initialState: [],
  reducers: {
    addVillain(state, action) {
      state.push(action.payload);
    },
    removeVillain(state, action) {
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

export const { addVillain, removeVillain } = villainsSlice.actions;
export const villainsReducer = villainsSlice.reducer;
