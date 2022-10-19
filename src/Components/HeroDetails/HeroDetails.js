import React, { useEffect, useState } from "react";
import "./HeroDetails.css";
import { getAllHeroInfoById } from "../../requests.js";
import { useParams } from "react-router";

function HeroDetails() {
  const { id } = useParams();
  const [heroData, setHeroData] = useState({});

  useEffect(() => {
    console.log(id);
    const fetchAndRenderHeroData = async (id) => {
      const { data } = await getAllHeroInfoById(id);
      console.log(data);
      setHeroData(data);
    };

    fetchAndRenderHeroData(id);
  }, []);

  return (
    <section>
      <div className="details">
        <img
          className="details__img"
          src={`${heroData.image?.url}`}
          alt={`${heroData.name}`}
        ></img>
        <div className="details__info">
          <h2>{heroData.name}</h2>
          <h4>Full name: {heroData.biography?.["full-name"]}</h4>
          <h4>Eye color: {heroData.appearance?.["eye-color"]}</h4>
          <h4>Height: {heroData.appearance?.height?.[1]}</h4>
          <h4>Weight: {heroData.appearance?.weight?.[1]}</h4>
          <h4>Place of birth: {heroData.biography?.["place-of-birth"]}</h4>
          <h4>Occupation: {heroData.work?.occupation}</h4>
          <h4>Aligment: {heroData.biography?.alignment}</h4>
        </div>
      </div>
    </section>
  );
}

export default HeroDetails;
