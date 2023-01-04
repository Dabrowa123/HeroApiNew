import React from "react";
import { useSelector } from "react-redux";
import BattleHeroListItem from "./BattleTeamListItem.js";

function BattleTeamList({ team }) {
  const teamList = useSelector((state) => {
    if (team === "heroes") {
      return state.heroesTeam;
    } else if (team === "villains") {
      return state.villainsTeam;
    }
  });

  const winners = useSelector((state) => {
    return state.winners[0];
  });

  const renderedTeamList = teamList.map(
    ({ name, imgUrl, powerstats, id }, index) => (
      <BattleHeroListItem
        key={index}
        name={name}
        imgUrl={imgUrl}
        powerstats={powerstats}
        id={id}
        team={team}
      />
    )
  );

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
