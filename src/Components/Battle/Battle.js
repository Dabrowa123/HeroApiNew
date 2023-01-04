import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setWinners } from "../../store/index.js";
import useTeamsStatistics from "../../hooks/useTeamsStatistics.js";
import useBattleMessage from "../../hooks/useBattleMessage.js";
import BattleTeamList from "./BattleTeamList.js";
import Searchform from "../UI/Searchform/Searchform.js";
import BattleSearchView from "./BattleSearchView.js";
import Fade from "react-reveal/Fade.js";

function Battle() {
  const dispatch = useDispatch();
  const [isFight, setIsFight] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [resultMessage] = useBattleMessage();
  const [heroesTeamStatistics, villainsTeamStatistics, noCharacterChoosen] =
    useTeamsStatistics();

  const handleFight = () => {
    setErrorMessage(false);
    if (noCharacterChoosen) {
      setErrorMessage(true);
    } else if (heroesTeamStatistics - villainsTeamStatistics > 0) {
      dispatch(setWinners("heroes"));
      setIsFight(true);
    } else if (heroesTeamStatistics - villainsTeamStatistics < 0) {
      dispatch(setWinners("villains"));
      setIsFight(true);
    } else {
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
