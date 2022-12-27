import React from "react";
import BattleHeroes from "./BattleHeroes.js";
import BattleVillains from "./BattleVillains.js";
import SearchformBattle from "./SearchformBattle.js";
import SearchViewBattle from "./SearchViewBattle.js";
import { useSelector } from "react-redux";
import { useState } from "react";
// import { useState, useEffect } from "react";
// import supermanDesktop from "../../assets/img/superman-desktop.png";
// import supermanMobile from "../../assets/img/superman-mobile.png";
// import Searchform from ".././UI/Searchform/Searchform.js";
// import Fade from "react-reveal/Fade.js";
// import FeaturedHeroesButton from "../UI/Buttons/FeaturedHeroesButton.js";
// import PlaceholderImage from "../../assets/img/superman-placeholder.png";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

function Battle() {
  const heroesList = useSelector((state) => {
    return state.heroesBattle;
  });
  const villainsList = useSelector((state) => {
    return state.villainsBattle;
  });

  let heroesStatsSum = heroesList
    .map((hero) => Object.values(hero.powerstats).reduce((a, b) => a + +b, 0))
    .reduce((a, b) => a + +b, 0);

  let villainsStatsSum = villainsList
    .map((hero) => Object.values(hero.powerstats).reduce((a, b) => a + +b, 0))
    .reduce((a, b) => a + +b, 0);

  const [battleResult, setBattleResult] = useState("");

  const handleFigth = () => {
    if (heroesStatsSum - villainsStatsSum > 0) {
      return setBattleResult("heroes won");
    }
    if (heroesStatsSum - villainsStatsSum < 0) {
      return setBattleResult("villains won");
    }
    return setBattleResult("No heroes, no villains won - a draw");
  };

  return (
    <section className="battle">
      <h2>Battle</h2>
      <div className="battle__container">
        <BattleHeroes />
        <BattleVillains />
      </div>
      <button onClick={handleFigth}>Figth!</button>
      <div>Result of Battle: {battleResult}</div>
      <br></br>
      {/* <div>Sum of heroes stats: {heroesStatsSum}</div>
      <br></br>
      <div>Sum of villains stats: {villainsStatsSum}</div>
      <br></br> */}
      <SearchformBattle />
      <SearchViewBattle />
    </section>
  );
}

export default Battle;
