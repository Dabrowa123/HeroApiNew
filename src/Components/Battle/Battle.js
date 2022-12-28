import React from "react";
import BattleHeroes from "./BattleHeroes.js";
import BattleVillains from "./BattleVillains.js";
import SearchformBattle from "./SearchformBattle.js";
import BattleSearchView from "./BattleSearchView.js";
import { useDispatch, useSelector } from "react-redux";
import { setWinners, store } from "../../store/index.js";
import { useState } from "react";
// import { useState, useEffect } from "react";
// import supermanDesktop from "../../assets/img/superman-desktop.png";
// import supermanMobile from "../../assets/img/superman-mobile.png";
// import Searchform from ".././UI/Searchform/Searchform.js";
import Fade from "react-reveal/Fade.js";
// import Slide from 'react-reveal/Slide.js';
// import e from "cors";
// import FeaturedHeroesButton from "../UI/Buttons/FeaturedHeroesButton.js";
// import PlaceholderImage from "../../assets/img/superman-placeholder.png";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

function Battle() {
  const [isFight, setIsFight] = useState(false);
  const [noCharacterChoosen, setNoCharacterChoosen] = useState(false);

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
  const dispatch = useDispatch();

  const handleFight = () => {
    if (heroesStatsSum + villainsStatsSum === 0) {
      setNoCharacterChoosen(true);
    } else if (heroesStatsSum - villainsStatsSum > 0) {
      setNoCharacterChoosen(false);
      setBattleResult("Heroes won");
      dispatch(setWinners("heroes"));
      setIsFight(true);
    } else if (heroesStatsSum - villainsStatsSum < 0) {
      setNoCharacterChoosen(false);
      setBattleResult("Villains won");
      dispatch(setWinners("villains"));
      setIsFight(true);
    } else {
      setNoCharacterChoosen(false);
      setBattleResult("No heroes, no villains won - a draw");
      dispatch(setWinners(""));
      setIsFight(true);
    }
  };

  const handleNewFight = () => {
    setIsFight(false);
  };

  return (
    <section className="battle">
      <h2>Battle</h2>
      <div className="battle__container">
        <BattleHeroes />
        <BattleVillains />
      </div>
      <div className="battle__result-button">
        {!isFight && (
          <Fade>
            <button className="battle__button-fight" onClick={handleFight}>
              Fight!
            </button>
          </Fade>
        )}
        {isFight && (
          <div className="battle__result">
            <Fade>
              {battleResult}
              <button
                className="battle__button-newfight"
                onClick={handleNewFight}
              >
                New Fight
              </button>
            </Fade>
          </div>
        )}
        {noCharacterChoosen && (
          <Fade>
            <div className="battle__choose-character">
              Please, find and choose characters first
            </div>
          </Fade>
        )}
      </div>
      <br></br>
      <SearchformBattle />
      <BattleSearchView />
    </section>
  );
}

export default Battle;
