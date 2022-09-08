import React, { useEffect, useState } from "react";
import { getBasicHeroInfoById } from "../../requests";
import HeroSimplified from "../HeroSimplified/HeroSimplified";
import "./HeroesFeatured.css";

const featuredHeroesIds = [70, 457, 514];

function HeroesFeatured() {
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
  };

  return (
    <section className="featured">
      {featuredHeroesList.map(({ name, imgUrl, powerstats }) => (
        <HeroSimplified name={name} imgUrl={imgUrl} powerstats={powerstats} />
      ))}
    </section>
  );
}

export default HeroesFeatured;
