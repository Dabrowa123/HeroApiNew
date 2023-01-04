import { useSelector } from "react-redux";

function useTeamsStatistics() {
  const heroesTeam = useSelector((state) => {
    return state.heroesTeam;
  });
  const villainsTeam = useSelector((state) => {
    return state.villainsTeam;
  });

  // Adding all team heros' statistics
  let getTeamStatisticAndSum = (team) => {
    return team
      .map(({ powerstats }) => Object.values(powerstats))
      .flat()
      .map((powerstat) => parseInt(powerstat))
      .reduce((a, b) => a + b, 0);
  };

  const heroesTeamStatistics = getTeamStatisticAndSum(heroesTeam);
  const villainsTeamStatistics = getTeamStatisticAndSum(villainsTeam);

  const noHeroChosen = heroesTeam.length === 0;
  const noVillainChosen = villainsTeam.length === 0;
  const noCharacterChoosen = noHeroChosen || noVillainChosen;

  return [heroesTeamStatistics, villainsTeamStatistics, noCharacterChoosen];
}

export default useTeamsStatistics;
