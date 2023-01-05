import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setWinners } from "../../store/index.js";
import usePerformFigth from "../../hooks/usePerformFigth.js";
import useBattleMessage from "../../hooks/useBattleMessage.js";
import BattleTeamList from "./BattleTeamList.js";
import Searchform from "../UI/Searchform/Searchform.js";
import BattleSearchView from "./BattleSearchView.js";
import Fade from "react-reveal/Fade.js";

function Battle() {
  const dispatch = useDispatch();
  const [fightFinished, setFightFinished] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [resultMessage] = useBattleMessage();
  const [heroesAreStronger, villainsAreStronger, noCharacterChoosen] =
    usePerformFigth();

  const handleFight = () => {
    if (noCharacterChoosen) {
      setErrorMessage(true);
      return;
    } else if (heroesAreStronger) {
      dispatch(setWinners("heroes"));
    } else if (villainsAreStronger) {
      dispatch(setWinners("villains"));
    } else {
      dispatch(setWinners(""));
    }
    setFightFinished(true);
    setErrorMessage(false);
  };

  const handleNewFight = () => {
    setFightFinished(false);
    dispatch(setWinners(""));
  };

  return (
    <section className="battle">
      <div className="battle__container">
        <BattleTeamList team="heroes" />
        <BattleTeamList team="villains" />
      </div>

      <div className="battle__result-button">
        {!fightFinished && (
          <Fade>
            <button className="battle__button-fight" onClick={handleFight}>
              Fight!
            </button>
          </Fade>
        )}

        {fightFinished && (
          <div className="battle__result">
            <Fade>
              {resultMessage}
              <button
                className="battle__button-newfight"
                onClick={handleNewFight}
              >
                New Fight
              </button>
            </Fade>
          </div>
        )}

        {errorMessage && (
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
