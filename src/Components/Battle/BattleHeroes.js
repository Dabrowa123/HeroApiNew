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
import * as icon from "../../assets/icons/index.js";
import batman from "../../assets/img/batman.jpg";
import { useDispatch, useSelector } from "react-redux";
import { removeHeroBattle, store } from "../../store/index.js";
import { getBasicHeroInfoById } from "../../requests.js";

function BattleHeroes() {
  const dispatch = useDispatch();
  const heroesListBattle = useSelector((state) => {
    return state.heroesBattle;
  });

  const handleHeroRemoveFromBattle = (hero) => {
    dispatch(removeHeroBattle(hero));
  };

  const renderedHeroes = heroesListBattle.map((hero) => {
    return (
      <li className="battle-heroes__list-item" key={hero.id}>
        <img src={hero.imgUrl} width={"40px"} />
        {hero.name}
        {hero.powerstats.combat} {hero.powerstats.durability}
        {hero.powerstats.intelligence} {hero.powerstats.speed}
        {hero.powerstats.strength}
        <button onClick={() => handleHeroRemoveFromBattle(hero)}>remove</button>
      </li>
    );
  });

  return (
    <section className="battle-heroes">
      <ul>
        <li className="battle-heroes__list-item">
          <img src={batman} width={"55px"} />
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
        </li>
        {renderedHeroes}
      </ul>
    </section>
  );
}

export default BattleHeroes;
