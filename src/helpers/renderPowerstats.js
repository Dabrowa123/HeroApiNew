import * as icon from "../../src/assets/icons/index.js";

function renderPowerstats(powerstats, classBlockName) {
  const { power, ...restPowerstats } = powerstats;

  return Object.keys(restPowerstats).map((keyName, i) => {
    return (
      <div className={`${classBlockName}__list-item-stats`} key={i}>
        <img
          className={`${classBlockName}__stats-icon`}
          src={icon[keyName]}
          alt={`${keyName} icon`}
        />
        <p>
          {restPowerstats[keyName] === "null" ? "?" : restPowerstats[keyName]}
        </p>
      </div>
    );
  });
}

export default renderPowerstats;
