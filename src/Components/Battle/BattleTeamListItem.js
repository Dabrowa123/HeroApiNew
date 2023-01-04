import React from "react";
import BattleRemoveCharacterButton from "../UI/Buttons/BattleRemoveCharacterButton.js";
import renderPowerstats from "../../helpers/renderPowerstats.js";

function BattleTeamListItem({ name, imgUrl, powerstats, id, team }) {
  return (
    <li className="battle-heroes__list-item">
      <img src={imgUrl} width={"50px"} alt={name} />
      <div className="battle-heroes__list-item-info">
        <div className="battle-heroes__list-item-info-details">
          {name}
          <BattleRemoveCharacterButton id={id} team={team} />
        </div>
        <div className="battle-heroes__list-item-info-details">
          {renderPowerstats(powerstats, "battle-heroes")}
        </div>
      </div>
    </li>
  );
}

export default BattleTeamListItem;
