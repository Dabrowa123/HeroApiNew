import { configureStore } from "@reduxjs/toolkit";
import { heroesReducer, addHero, removeHero } from "./slices/heroesSlice";
import {
  villainsReducer,
  addVillain,
  removeVillain,
} from "./slices/villainsSlice";
import { reset } from "./actions";

const store = configureStore({
  reducer: {
    heroes: heroesReducer,
    villains: villainsReducer,
  },
});

export { store, reset, addHero, removeHero, addVillain, removeVillain };
