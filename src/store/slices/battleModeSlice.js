import { createSlice } from "@reduxjs/toolkit";

const battleModeSlice = createSlice({
  name: "battleMode",
  initialState: [false],
  reducers: {
    turnOnBattleMode(state, action) {
      state[0] = action.payload;
    },
    turnOffBattleMode(state, action) {
      state[0] = action.payload;
    },
  },
});

export const { turnOnBattleMode, turnOffBattleMode } = battleModeSlice.actions;
export const battleModeReducer = battleModeSlice.reducer;
