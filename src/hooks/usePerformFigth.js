import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

function usePerformFigth() {
  const heroesTeam = useSelector((state) => {
    return state.heroesTeam;
  });
  const villainsTeam = useSelector((state) => {
    return state.villainsTeam;
  });

  // Adding statistics of all team members
  let getTeamStatisticAndSum = (team) => {
    return team
      .map(({ powerstats }) => Object.values(powerstats))
      .flat()
      .map((powerstat) => parseInt(powerstat))
      .reduce((a, b) => a + b, 0);
  };

  const heroesTeamStatistics = getTeamStatisticAndSum(heroesTeam);
  const villainsTeamStatistics = getTeamStatisticAndSum(villainsTeam);

  // Comparing teams' statistics
  const [heroesAreStronger, setHeroesAreStronger] = useState();
  const [villainsAreStronger, setVillainsAreStronger] = useState();
  useEffect(() => {
    if (heroesTeamStatistics - villainsTeamStatistics > 0) {
      setHeroesAreStronger(true);
      setVillainsAreStronger(false);
    } else if (heroesTeamStatistics - villainsTeamStatistics < 0) {
      setVillainsAreStronger(true);
      setHeroesAreStronger(false);
    }
  }, [heroesTeamStatistics, villainsTeamStatistics]);

  // Checking if any character is choosen
  const noHeroChosen = heroesTeam.length === 0;
  const noVillainChosen = villainsTeam.length === 0;
  const noCharacterChoosen = noHeroChosen || noVillainChosen;

  return [heroesAreStronger, villainsAreStronger, noCharacterChoosen];
}

export default usePerformFigth;
