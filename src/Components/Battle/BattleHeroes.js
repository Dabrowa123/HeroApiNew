import React from "react";
import { useSelector } from "react-redux";
import BattleHeroListItem from "./BattleHeroListItem.js";

function BattleHeroes() {
  const heroesListBattle = useSelector((state) => {
    return state.heroesBattle;
  });

  const winners = useSelector((state) => {
    return state.winners[0];
  });

  const renderedHeroes = heroesListBattle.map(
    ({ name, imgUrl, powerstats, id }) => (
      <BattleHeroListItem
        key={id}
        name={name}
        imgUrl={imgUrl}
        powerstats={powerstats}
        id={id}
      />
    )
  );

  return (
    <section className="battle-heroes">
      <h2 className="battle-heroes__heading">Heroes Team</h2>
      <ul
        className={
          winners === "heroes"
            ? "battle-heroes__list battle-heroes__list--shining"
            : "battle-heroes__list"
        }
      >
        {/* <li className="battle-heroes__list-item">
          <img src={batman} width={"55px"} height={"75px"}/>
          <div className="battle-heroes__list-item-info">
            <div className="battle-heroes__list-item-info-details">
              Batman
              <button className="battle-heroes__remove-button">Remove</button>
            </div>
            <div className="battle-heroes__list-item-info-details">
              <div className="battle-heroes__list-item-stats">
                <img
                  className="battle-heroes__stats-icon"
                  src={icon.combat}
                  alt="combat icon"
                />
                50
              </div>
              <div className="battle-heroes__list-item-stats">
                <img
                  className="battle-heroes__stats-icon"
                  src={icon.durability}
                  alt="combat icon"
                />
                40{" "}
              </div>
              <div className="battle-heroes__list-item-stats">
                <img
                  className="battle-heroes__stats-icon"
                  src={icon.intelligence}
                  alt="combat icon"
                />
                30{" "}
              </div>
              <div className="battle-heroes__list-item-stats">
                <img
                  className="battle-heroes__stats-icon"
                  src={icon.speed}
                  alt="combat icon"
                />
                20{" "}
              </div>
              <div className="battle-heroes__list-item-stats">
                <img
                  className="battle-heroes__stats-icon"
                  src={icon.strength}
                  alt="combat icon"
                />
                60
              </div>
            </div>
          </div>
        </li> */}
        {renderedHeroes}
      </ul>
    </section>
  );
}

export default BattleHeroes;
