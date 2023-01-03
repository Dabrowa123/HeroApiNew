import React from "react";
import { useSelector } from "react-redux";
import BattleHeroListItem from "./BattleTeamListItem.js";

function BattleTeamList({ team }) {
  const teamList = useSelector((state) => {
    if (team === "heroes") {
      return state.heroesBattle;
    } else if (team === "villains") {
      return state.villainsBattle;
    }
  });

  const winners = useSelector((state) => {
    return state.winners[0];
  });

  const renderedTeamList = teamList.map(({ name, imgUrl, powerstats, id }) => (
    <BattleHeroListItem
      key={id}
      name={name}
      imgUrl={imgUrl}
      powerstats={powerstats}
      id={id}
      team={team}
    />
  ));

  return (
    <section className="battle-heroes">
      <h2 className="battle-heroes__heading">Heroes Team</h2>
      <ul
        className={
          winners === team
            ? "battle-heroes__list battle-heroes__list--shining"
            : "battle-heroes__list"
        }
      >
        {renderedTeamList}
      </ul>
    </section>
  );
}

export default BattleTeamList;
