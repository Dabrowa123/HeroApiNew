import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { searchHeroesByName } from "../../requests.js";
import HeroSimplified from "../HeroSimplified/HeroSimplified.js";
import Loader from "../Loader/Loader.js";
import "./SearchView.css";

function SearchView() {
  const [searchList, setSearchListContent] = useState([]);
  const [isLoading, setLoadingState] = useState(true);
  const { name } = useParams();

  useEffect(() => {
    setLoadingState(true);
    searchHeroesByName(name).then((searchResults) => {
      const { data } = searchResults;

      if (data.error) {
        return;
      }

      const { results } = data;

      setSearchListContent(results);
      setLoadingState(false);
    });
  }, [name]);

  return (
    <>
      {!isLoading && (
        <section className="search">
          {searchList.map(({ powerstats, image, name, id }) => {
            return (
              <HeroSimplified
                key={id}
                powerstats={powerstats}
                imgUrl={image.url}
                name={name}
                id={id}
              />
            );
          })}
        </section>
      )}{" "}
      {isLoading && (
        <div className="loader-container">
          <Loader />
        </div>
      )}
    </>
  );
}

export default SearchView;
