import * as icon from "../../src/assets/icons/index.js";

function renderPowerstats(powerstats) {
  const { power, ...restPowerstats } = powerstats;

  return Object.keys(restPowerstats).map((keyName, i) => {
    return (
      <div className="battle-heroes__list-item-stats" key={i}>
        <img
          className="battle-heroes__stats-icon"
          src={icon[keyName]}
          alt={`${keyName} icon`}
        />
        {restPowerstats[keyName]}
      </div>
    );
  });
}

export default renderPowerstats;
