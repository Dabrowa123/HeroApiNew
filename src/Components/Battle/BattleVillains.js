import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeVillainBattle} from "../../store/index.js";
import * as icon from "../../assets/icons/index.js";

function BattleVillains() {
  const dispatch = useDispatch();
  const villainsListBattle = useSelector((state) => {
    return state.villainsBattle;
  });

  const handleHeroRemoveFromBattle = (hero) => {
    dispatch(removeVillainBattle(hero));
  };

  const winners = useSelector((state) => {
    return state.winners[0];
  });

  const renderedVillains = villainsListBattle.map((hero) => {
    return (
      <li className="battle-heroes__list-item">
        <img src={hero.imgUrl} width={"50px"} />
        <div className="battle-heroes__list-item-info">
          <div className="battle-heroes__list-item-info-details">
            {hero.name}
            <button
              className="battle-heroes__remove-button"
              onClick={() => handleHeroRemoveFromBattle(hero)}
            >
              Remove
            </button>
          </div>
          <div className="battle-heroes__list-item-info-details">
            <div className="battle-heroes__list-item-stats">
              <img
                className="battle-heroes__stats-icon"
                src={icon.combat}
                alt="combat icon"
              />
              {hero.powerstats.combat}
            </div>
            <div className="battle-heroes__list-item-stats">
              <img
                className="battle-heroes__stats-icon"
                src={icon.durability}
                alt="combat icon"
              />
              {hero.powerstats.durability}
            </div>
            <div className="battle-heroes__list-item-stats">
              <img
                className="battle-heroes__stats-icon"
                src={icon.intelligence}
                alt="combat icon"
              />
              {hero.powerstats.intelligence}
            </div>
            <div className="battle-heroes__list-item-stats">
              <img
                className="battle-heroes__stats-icon"
                src={icon.speed}
                alt="combat icon"
              />
              {hero.powerstats.speed}
            </div>
            <div className="battle-heroes__list-item-stats">
              <img
                className="battle-heroes__stats-icon"
                src={icon.strength}
                alt="combat icon"
              />
              {hero.powerstats.strength}
            </div>
          </div>
        </div>
      </li>
    );
  });

  return (
    <section className="battle-heroes">
      <h2 className="battle-heroes__heading">Villains Team</h2>
      <ul
        className={
          winners === "villains"
            ? "battle-heroes__list battle-heroes__list--shining"
            : "battle-heroes__list"
        }
      >
        {renderedVillains}
      </ul>
    </section>
  );
}

export default BattleVillains;
