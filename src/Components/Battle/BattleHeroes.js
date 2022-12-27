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
      <li key={hero.id}>
        <img src={hero.imgUrl} width={"40px"} />
        name: {hero.name}
        {hero.powerstats.combat} {hero.powerstats.durability}
        {hero.powerstats.intelligence} {hero.powerstats.speed}
        {hero.powerstats.strength}
        <button onClick={() => handleHeroRemoveFromBattle(hero)}>remove</button>
      </li>
    );
  });

  return (
    <section className="battle-heroes">
      <ul>{renderedHeroes}</ul>
    </section>
  );
}

export default BattleHeroes;
