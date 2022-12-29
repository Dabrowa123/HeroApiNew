import React from "react";
import { Link } from "react-router-dom";

function BattleButton() {
  return (
    <Link to={"/battle"} smooth duration={1000}>
      <button className="battle-button">PLAY GAME</button>
    </Link>
  );
}

export default BattleButton;
