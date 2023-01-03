import { createSlice } from "@reduxjs/toolkit";

const battleModeSlice = createSlice({
  name: "battleMode",
  initialState: [false],
  reducers: {
    turnOnBattleMode(state) {
      state[0] = true;
    },
    turnOffBattleMode(state) {
      state[0] = false;
    },
  },
});

export const { turnOnBattleMode, turnOffBattleMode } = battleModeSlice.actions;
export const battleModeReducer = battleModeSlice.reducer;
