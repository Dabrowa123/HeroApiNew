import React from "react";
import * as icon from "../../assets/icons/index.js";
import BattleRemoveCharacterButton from "../UI/Buttons/BattleRemoveCharacterButton.js";

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
          <div className="battle-heroes__list-item-stats">
            <img
              className="battle-heroes__stats-icon"
              src={icon.combat}
              alt="combat icon"
            />
            {powerstats.combat}
          </div>
          <div className="battle-heroes__list-item-stats">
            <img
              className="battle-heroes__stats-icon"
              src={icon.durability}
              alt="combat icon"
            />
            {powerstats.durability}
          </div>
          <div className="battle-heroes__list-item-stats">
            <img
              className="battle-heroes__stats-icon"
              src={icon.intelligence}
              alt="combat icon"
            />
            {powerstats.intelligence}
          </div>
          <div className="battle-heroes__list-item-stats">
            <img
              className="battle-heroes__stats-icon"
              src={icon.speed}
              alt="combat icon"
            />
            {powerstats.speed}
          </div>
          <div className="battle-heroes__list-item-stats">
            <img
              className="battle-heroes__stats-icon"
              src={icon.strength}
              alt="combat icon"
            />
            {powerstats.strength}
          </div>
        </div>
      </div>
    </li>
  );
}

export default BattleTeamListItem;
