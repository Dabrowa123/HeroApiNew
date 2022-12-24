import { createSlice } from "@reduxjs/toolkit";

const searchedNameToBattle = createSlice({
  name: "searchedNameToBattle",
  initialState: [""],
  reducers: {
    searchNameToBattle(state, action) {
      state[0] = action.payload;
    },
  },
});

export const { searchNameToBattle } = searchedNameToBattle.actions;
export const searchedNameToBattleReducer = searchedNameToBattle.reducer;
