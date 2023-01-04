import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { searchHeroesByName } from "../../requests.js";
import HeroCard from "../HeroCard/HeroCard.js";
import Loader from "../Assets/Loader/Loader.js";

function SearchView() {
  const [searchList, setSearchListContent] = useState([]);
  const [characterNotFound, setcharacterNotFound] = useState(false);
  const [isLoading, setLoadingState] = useState(true);
  const { name } = useParams();
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

      setSearchListContent(results);
      setLoadingState(false);
    });
  }, [name]);

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
