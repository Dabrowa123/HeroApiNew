import React from "react";
import BattleTeamList from "./BattleTeamList.js";
import Searchform from "../UI/Searchform/Searchform.js";
import BattleSearchView from "./BattleSearchView.js";
import { useDispatch, useSelector } from "react-redux";
import { setWinners } from "../../store/index.js";
import { useState } from "react";
import Fade from "react-reveal/Fade.js";

function Battle() {
  const [isFight, setIsFight] = useState(false);
  const [noCharacterChoosen, setNoCharacterChoosen] = useState(false);

  const heroesTeam = useSelector((state) => {
    return state.heroesTeam;
  });
  const villainsTeam = useSelector((state) => {
    return state.villainsTeam;
  });

  let heroesStatsSum = heroesTeam
    .map((hero) => Object.values(hero.powerstats).reduce((a, b) => a + +b, 0))
    .reduce((a, b) => a + +b, 0);

  let villainsStatsSum = villainsTeam
    .map((hero) => Object.values(hero.powerstats).reduce((a, b) => a + +b, 0))
    .reduce((a, b) => a + +b, 0);

  const [battleResult, setBattleResult] = useState("");
  const dispatch = useDispatch();

  const handleFight = () => {
    if (heroesTeam.length === 0 || villainsTeam.length === 0) {
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
    dispatch(setWinners(""));
  };

  return (
    <section className="battle">
      <div className="battle__container">
        <BattleTeamList team="heroes" />
        <BattleTeamList team="villains" />
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
      <Searchform formId="search-input-battle" classBlockName="searchform" />
      <BattleSearchView />
    </section>
  );
}

export default Battle;
