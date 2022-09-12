import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { searchHeroesByName } from "../../requests";
import HeroSimplified from "../HeroSimplified/HeroSimplified";
import "./SearchView.css";

function SearchView() {
  const [searchList, setSearchListContent] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    searchHeroesByName(name).then((searchResults) => {
      const { data } = searchResults;

      if (data.error) {
        return;
      }

      const { results } = data;

      setSearchListContent(results);
    });
  }, [name]);

  return (
    <section className="search">
      {searchList.map(({ powerstats, image, name }) => {
        return (
          <HeroSimplified
            powerstats={powerstats}
            imgUrl={image.url}
            name={name}
          />
        );
      })}
    </section>
  );
}

export default SearchView;
