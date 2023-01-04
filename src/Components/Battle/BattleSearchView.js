import React, { useEffect, useState } from "react";
import { searchHeroesByName } from "../../requests.js";
import { useSelector } from "react-redux";
import HeroCard from "../HeroCard/HeroCard.js";
import Loader from "../Assets/Loader/Loader.js";

function BattleSearchView() {
  const [searchList, setSearchListContent] = useState([]);
  const [characterNotFound, setCharacterNotFound] = useState(false);
  const [isLoading, setLoadingState] = useState(false);
  const [pageInitState, setPageInitState] = useState(true);

  const name = useSelector((state) => {
    return state.searchedNameToBattle[0];
  });
  const uppercaseName = name.charAt(0).toUpperCase() + name.slice(1);

  useEffect(() => {
    if (name === "") {
      return;
    }
    setPageInitState(false);
    setLoadingState(true);
    searchHeroesByName(name).then((searchResults) => {
      const { data } = searchResults;

      if (data.error) {
        setSearchListContent([]);
        setCharacterNotFound(true);
        setLoadingState(false);
        return;
      }

      const { results } = data;

      // Do not render heroes with empty powerstats
      const validatedResults = results.flatMap((hero) =>
        Object.values(hero.powerstats).includes("null", 0) ? [] : hero
      );

      setSearchListContent(validatedResults);
      setPageInitState(false);
      setCharacterNotFound(false);
      setLoadingState(false);
    });
  }, [name]);

  return (
    <>
      {pageInitState && (
        <div className="battle-search__heading">
          <h3>Find characters and add them to battle</h3>
          <span className="search__uppercase-name-span">{uppercaseName}</span>
        </div>
      )}
      {!isLoading && (
        <section className="battle-search">
          {!pageInitState && !characterNotFound && (
            <h2 className="battle-search__heading">
              We found below heroes matching name:{" "}
              <span className="search_uppercase-name-span">
                &nbsp;{uppercaseName}
              </span>
            </h2>
          )}
          <div className="search__list-wrapper">
            {searchList.map(({ powerstats, image, name, id }) => {
              return (
                <HeroCard
                  key={id}
                  powerstats={powerstats}
                  imgUrl={image.url}
                  name={name}
                  id={id}
                />
              );
            })}
          </div>
        </section>
      )}{" "}
      {isLoading && (
        <div className="battle-search__loader-container">
          <Loader />
        </div>
      )}
      {!pageInitState && characterNotFound && !isLoading && (
        <div>
          <h3 className="battle-search__heading">
            Unfortunately, we did not find a character with name:&nbsp;&nbsp;
            <span className="search__uppercase-name-span">{uppercaseName}</span>
          </h3>
        </div>
      )}
    </>
  );
}

export default BattleSearchView;
