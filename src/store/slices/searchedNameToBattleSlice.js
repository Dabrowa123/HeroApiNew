import { createSlice } from "@reduxjs/toolkit";

const searchedNameToBattleSlice = createSlice({
  name: "searchedNameToBattle",
  initialState: [""],
  reducers: {
    searchNameToBattle(state, action) {
      state[0] = action.payload;
    },
  },
});

export const { searchNameToBattle } = searchedNameToBattleSlice.actions;
export const searchedNameToBattleReducer = searchedNameToBattleSlice.reducer;
