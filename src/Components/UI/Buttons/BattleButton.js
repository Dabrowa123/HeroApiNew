import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { turnOnBattleMode } from "../../../store/index.js";

function BattleButton() {
  const dispatch = useDispatch();

  return (
    <Link to={"/battle"} smooth duration={1000}>
      <button
        className="battle-button"
        onClick={() => dispatch(turnOnBattleMode())}
      >
        PLAY GAME
      </button>
    </Link>
  );
}

export default BattleButton;
