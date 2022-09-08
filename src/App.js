import React, { useEffect, useState } from "react";
import { getBasicHeroInfoById } from "./requests";
import "./App.css";
import Nav from "./Components/Nav/Nav";

const featuredHeroesIds = [10, 502, 505];

function App() {
  useEffect(() => {
    fetchAndRenderFeaturedHeroes();
  }, []);

  const [featuredHeroesList, setfeaturedHeroesList] = useState([]);

  const fetchAndRenderFeaturedHeroes = async () => {
    let heroes = [];
    for (const heroId of featuredHeroesIds) {
      const { data } = await getBasicHeroInfoById(heroId);
      heroes.push(data);
    }
    setfeaturedHeroesList(heroes);
  };

  return (
    <>
      <Nav></Nav>

      <main></main>
      {featuredHeroesList.map((hero) => (
        <h2>{hero.name}</h2>
      ))}
      <footer></footer>
    </>
  );
}

export default App;
