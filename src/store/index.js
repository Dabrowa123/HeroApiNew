import { configureStore } from "@reduxjs/toolkit";
import {
  battleModeReducer,
  turnOnBattleMode,
  turnOffBattleMode,
} from "./slices/battleModeSlice.js";
import {
  heroesBattleReducer,
  addHeroBattle,
  removeHeroBattle,
} from "./slices/heroesBattleSlice.js";
import {
  villainsBattleReducer,
  addVillainBattle,
  removeVillainBattle,
} from "./slices/villainsBattleSlice.js";
import {
  searchNameToBattle,
  searchedNameToBattleReducer,
} from "./slices/searchedNameToBattleSlice.js";
import { setWinners, winnersReducer } from "./slices/winnersSlice.js";
import { reset } from "./actions.js";

const store = configureStore({
  reducer: {
    battleMode: battleModeReducer,
    heroesBattle: heroesBattleReducer,
    villainsBattle: villainsBattleReducer,
    searchedNameToBattle: searchedNameToBattleReducer,
    winners: winnersReducer,
  },
});

export {
  store,
  reset,
  turnOnBattleMode,
  turnOffBattleMode,
  addHeroBattle,
  removeHeroBattle,
  addVillainBattle,
  removeVillainBattle,
  searchNameToBattle,
  setWinners,
};
