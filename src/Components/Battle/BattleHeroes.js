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

  const winners = useSelector((state) => {
    return state.winners[0];
  });

  const renderedHeroes = heroesListBattle.map((hero) => {
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
      // <li className="battle-heroes__list-item" key={hero.id}>
      //   <img src={hero.imgUrl} width={"40px"} />
      //   {hero.name}
      //   {hero.powerstats.combat} {hero.powerstats.durability}
      //   {hero.powerstats.intelligence} {hero.powerstats.speed}
      //   {hero.powerstats.strength}
      //   <button onClick={() => handleHeroRemoveFromBattle(hero)}>remove</button>
      // </li>
    );
  });

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
