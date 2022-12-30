import React from "react";
import BattleHeroes from "./BattleHeroes.js";
import BattleVillains from "./BattleVillains.js";
import SearchformBattle from "./SearchformBattle.js";
import BattleSearchView from "./BattleSearchView.js";
import { useDispatch, useSelector } from "react-redux";
import { setWinners } from "../../store/index.js";
import { useState } from "react";
import Fade from "react-reveal/Fade.js";


class HeroesTeam {
  constructor(heroes) {
    this.heroes = heroes
  }

  totalSthength() {
    this.heroes.reduce((hero, totalStrenght) => totalStrenght + hero.totalStrength(), 0)
  }
}

class Hero {
  constructor(heroDTO) {
    this.speed = parseInt(heroDTO["speed"])
    this.durability = parseInt(heroDTO["durability"])
  }

  totalStrength() {
    return 1.1*this.speed + 1.2*this.durability
  }
}



function Battle() {
  const [isFight, setIsFight] = useState(false);
  const [noCharacterChoosen, setNoCharacterChoosen] = useState(false);
  
  const hasHeroes = heroesList.length != 0
  const hasVillains = villainsList.length != 0

  const heroesList = useSelector((state) => {
    return state.heroesBattle;
  });

  const villainsList = useSelector((state) => {
    return state.villainsBattle;
  });


  const [battleResult, setBattleResult] = useState("");
  const dispatch = useDispatch();

  const performFight = () => {
    if (hasHeroes.totalSthength() > hasVillains.totalSthength()) {
      setBattleResult("Heroes won");
      dispatch(setWinners("heroes"));
    } else if (hasHeroes.totalSthength() < hasVillains.totalSthength()) {
      setBattleResult("Villains won");
      dispatch(setWinners("villains"));
    } else {
      setBattleResult("No heroes, no villains won - a draw");
      dispatch(setWinners(""));
    }
  }

  const handleFight = () => {
    if (hasHeroes && hasVillains) {
      setNoCharacterChoosen(true);
    } else {
      setNoCharacterChoosen(false);
      performFight()
      setIsFight(true)
    }
  };

  const handleNewFight = () => {
    setIsFight(false);
    dispatch(setWinners(""));
  };

  return (
    <section className="battle">
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
