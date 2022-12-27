import React from "react";
// import { useState, useEffect } from "react";
// import supermanDesktop from "../../assets/img/superman-desktop.png";
// import supermanMobile from "../../assets/img/superman-mobile.png";
// import Searchform from ".././UI/Searchform/Searchform.js";
// import Fade from "react-reveal/Fade.js";
// import FeaturedHeroesButton from "../UI/Buttons/FeaturedHeroesButton.js";
// import PlaceholderImage from "../../assets/img/superman-placeholder.png";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";
import { useDispatch, useSelector } from "react-redux";
import { removeVillainBattle, store } from "../../store/index.js";
import { getBasicHeroInfoById } from "../../requests.js";
import * as icon from "../../assets/icons/index.js";

function BattleVillains() {
  const dispatch = useDispatch();
  const villainsListBattle = useSelector((state) => {
    return state.villainsBattle;
  });

  const handleHeroRemoveFromBattle = (hero) => {
    dispatch(removeVillainBattle(hero));
  };

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
      <ul>{renderedVillains}</ul>
    </section>
  );
}

export default BattleVillains;
