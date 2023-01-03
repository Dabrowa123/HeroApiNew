import React from "react";
import { useDispatch } from "react-redux";
import { removeHeroBattle, removeVillainBattle } from "../../../store/index.js";

function BattleRemoveCharacterButton({ team, id }) {
  const dispatch = useDispatch();
  const handleHeroRemoveFromBattle = (id) => {
    if (team === "heroes") {
      dispatch(removeHeroBattle(id));
    } else if (team === "villains") {
      dispatch(removeVillainBattle(id));
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
