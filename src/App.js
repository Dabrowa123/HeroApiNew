import React, { useEffect, useState } from "react";
import { getBasicHeroInfoById } from "./requests";
import "./App.css";
import Nav from "./Components/Nav/Nav";

const featuredHeroesIds = [70, 457, 514];

function App() {
  useEffect(() => {
    fetchAndRenderFeaturedHeroes();
  }, []);

  const [featuredHeroesList, setfeaturedHeroesList] = useState([]);

  const fetchAndRenderFeaturedHeroes = async () => {
    let heroes = [];
    for (const heroId of featuredHeroesIds) {
      const data = await getBasicHeroInfoById(heroId);
      heroes.push(data);
    }
    setfeaturedHeroesList(heroes);
    console.log(heroes);
  };

  return (
    <>
      <Nav></Nav>

      <main>
        <section className="featured">
          {featuredHeroesList.map(({ name, imgUrl, powerstats }) => (
            <div className="featured__hero">
              <h2>{name}</h2>
              <img src={imgUrl} alt={`${name}'s photo`}></img>
              <div className="featured__hero__stats">
                <div>
                  <p>combat: {powerstats.combat}</p>
                </div>
                <div>
                  <p>durability: {powerstats.durability}</p>
                </div>
                <div>
                  <p>intelligence: {powerstats.intelligence}</p>
                </div>
                <div>
                  <p>speed: {powerstats.speed}</p>
                </div>
                <div>
                  <p>strength: {powerstats.strength}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
