import React, { useEffect, useState } from "react";
import "./HeroDetails.css";
import { getAllHeroInfoById } from "../../requests.js";
import { useParams } from "react-router";

function HeroDetails() {
  const { id } = useParams();
  const [heroData, setHeroData] = useState({});

  const fetchAndRenderHeroData = async (id) => {
    const { data } = await getAllHeroInfoById(id);
    console.log(data);
    setHeroData(data);
  };

  useEffect(() => {
    fetchAndRenderHeroData(id);
    console.log(heroData.image["url"]);
  }, []);

  return (
    <section>
      <div className="details">
        <img
          className="details__img"
          src={`${heroData.image["url"]}`}
          alt={`${heroData.name}`}
        ></img>
        <div className="details__info">
          <h2>{heroData.name}</h2>
          <h4>Full name: {heroData.biography["full-name"]}</h4>
          <h4>Place of birth: {heroData.biography["place-of-birth"]}</h4>
        </div>
      </div>
    </section>
  );
}

export default HeroDetails;
