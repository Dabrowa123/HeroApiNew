import * as icon from "../pictures/icons/index.js";

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
        <p className={`${classBlockName}__stats-info`}>
          {restPowerstats[keyName] === "null" ? "?" : restPowerstats[keyName]}
        </p>
      </div>
    );
  });
}

export default renderPowerstats;
