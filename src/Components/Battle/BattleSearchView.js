import React from "react";
import { useSelector } from "react-redux";
import HeroCard from "../HeroCard/HeroCard.js";
import Loader from "../Assets/Loader/Loader.js";
import useSearchResults from "../../hooks/useSearchResults.js";

function BattleSearchView() {
  const name = useSelector((state) => {
    return state.searchedNameToBattle[0];
  });
  const [
    searchList,
    characterNotFound,
    isLoading,
    uppercaseName,
    pageInitState,
  ] = useSearchResults(name);

  return (
    <>
      {pageInitState && (
        <div className="battle-search__heading">
          <h3>Find characters and add them to battle</h3>
        </div>
      )}

      {isLoading && <Loader />}

      {!isLoading && !pageInitState && (
        <section className="battle-search">
          <h2 className="battle-search__heading">
            We found below heroes matching name:{" "}
            <span className="search_uppercase-name-span">
              &nbsp;{uppercaseName}
            </span>
          </h2>
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
