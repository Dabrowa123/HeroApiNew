import React, { useEffect, useState } from "react";
import { searchHeroesByName } from "../../requests.js";
import { useDispatch, useSelector } from "react-redux";
import HeroCardBattle from "../HeroCardBattle/HeroCardBattle.js";
import Loader from "../Assets/Loader/Loader.js";

function SearchViewBattle() {
  const [searchList, setSearchListContent] = useState([]);
  const [characterNotFound, setcharacterNotFound] = useState(false);
  const [isLoading, setLoadingState] = useState(true);

  // const dispatch = useDispatch();
  const name = useSelector((state) => {
    return state.searchedNameToBattle[0];
  });
  const uppercaseName = name.charAt(0).toUpperCase() + name.slice(1);

  useEffect(() => {
    setLoadingState(true);
    searchHeroesByName(name).then((searchResults) => {
      const { data } = searchResults;

      if (data.error) {
        setSearchListContent([]);
        setcharacterNotFound(true);
        setLoadingState(false);
        return;
      }

      const { results } = data;

      setcharacterNotFound(false);
      setSearchListContent(results);
      setLoadingState(false);
    });
  }, [name]);

  return (
    <>
      {!isLoading && (
        <section className="search">
          {!characterNotFound && (
            <h2 className="search__heading">
              We found below heroes matching name:{" "}
              <span className="search_uppercase-name-span">
                &nbsp;{uppercaseName}
              </span>
            </h2>
          )}
          <div className="search__list-wrapper">
            {searchList.map(({ powerstats, image, name, id }) => {
              return (
                <HeroCardBattle
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
        <div className="search__loader-container">
          <Loader />
        </div>
      )}
      {characterNotFound && !isLoading && (
        <div className="search__notfound">
          <h3>Unfortunately, we did not find a character with name:</h3>
          <span className="search__uppercase-name-span">{uppercaseName}</span>
        </div>
      )}
    </>
  );
}

export default SearchViewBattle;
