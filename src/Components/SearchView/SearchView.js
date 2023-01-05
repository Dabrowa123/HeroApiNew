import React from "react";
import { useParams } from "react-router";
import HeroCard from "../HeroCard/HeroCard.js";
import Loader from "../Assets/Loader/Loader.js";
import useSearchResults from "../../hooks/useSearchResults.js";

function SearchView() {
  const { name } = useParams();
  const [searchList, characterNotFound, isLoading, uppercaseName] =
    useSearchResults(name);

  return (
    <>
      {isLoading && <Loader />}

      {!isLoading && (
        <section className="search">
          <h2 className="search__heading">
            We found below heroes matching name:
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

      {!isLoading && characterNotFound && (
        <div className="search__notfound">
          <h3>Unfortunately, we did not find a character with name:</h3>
          <span className="search__uppercase-name-span">{uppercaseName}</span>
        </div>
      )}
    </>
  );
}

export default SearchView;
