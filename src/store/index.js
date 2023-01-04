import { configureStore } from "@reduxjs/toolkit";
import {
  battleModeReducer,
  turnOnBattleMode,
  turnOffBattleMode,
} from "./slices/battleModeSlice.js";
import {
  heroesTeamReducer,
  addToHeroesTeam,
  removeFromHeroesTeam,
} from "./slices/heroesTeamSlice.js";
import {
  villainsTeamReducer,
  addToVillainsTeam,
  removeFromVillainsTeam,
} from "./slices/villainsTeamSlice.js";
import {
  searchNameToBattle,
  searchedNameToBattleReducer,
} from "./slices/searchedNameToBattleSlice.js";
import { setWinners, winnersReducer } from "./slices/winnersSlice.js";
import { reset } from "./actions.js";

const store = configureStore({
  reducer: {
    battleMode: battleModeReducer,
    searchedNameToBattle: searchedNameToBattleReducer,
    heroesTeam: heroesTeamReducer,
    villainsTeam: villainsTeamReducer,
    winners: winnersReducer,
  },
});

export {
  store,
  reset,
  turnOnBattleMode,
  turnOffBattleMode,
  addToHeroesTeam,
  removeFromHeroesTeam,
  addToVillainsTeam,
  removeFromVillainsTeam,
  searchNameToBattle,
  setWinners,
};
