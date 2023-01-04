import React from "react";
import { useDispatch } from "react-redux";
import {
  removeFromHeroesTeam,
  removeFromVillainsTeam,
} from "../../../store/index.js";

function BattleRemoveCharacterButton({ team, id }) {
  const dispatch = useDispatch();
  const handleHeroRemoveFromBattle = (id) => {
    if (team === "heroes") {
      dispatch(removeFromHeroesTeam(id));
    } else if (team === "villains") {
      dispatch(removeFromVillainsTeam(id));
    }
  };

  return (
    <button
      className="battle-heroes__remove-button"
      onClick={() => handleHeroRemoveFromBattle(id)}
    >
      Remove
    </button>
  );
}

export default BattleRemoveCharacterButton;
