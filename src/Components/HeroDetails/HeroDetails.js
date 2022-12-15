import React, { useEffect, useState } from "react";
import "./HeroDetails.css";
import { getAllHeroInfoById } from "../../requests.js";
import { useParams } from "react-router";
import Loader from "../Loader/Loader.js";
import Fade from 'react-reveal/Fade.js';
import * as icon from "../../assets/icons/index.js";
import "../Loader/Loader.css";

function HeroDetails() {
  const { id } = useParams();
  const [heroData, setHeroData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAndRenderHeroData = async (id) => {
      const { data } = await getAllHeroInfoById(id);
      setHeroData(data);
      setIsLoading(false);
    };

    fetchAndRenderHeroData(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      {isLoading && (
        <div className="loader-container">
          <Loader />
        </div>
      )}
      {!isLoading && (
        <Fade>
          <div className="details">
            <div className="details__info">
              <img
                className="details__info__img"
                src={`${heroData.image?.url}`}
                alt={`${heroData.name}`}
              ></img>
              <div className="details__info__data">
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
            <div className="details__stats">
              <div>
                <img
                  className="details__stats__icon"
                  src={icon.combat}
                  alt="combat icon"
                />
                <p>Combat: {heroData.powerstats?.combat}</p>
              </div>
              <div>
                <img
                  className="details__stats__icon"
                  src={icon.durability}
                  alt="durability icon"
                />
                <p>Durability: {heroData.powerstats?.durability}</p>
              </div>
              <div>
                <img
                  className="details__stats__icon"
                  src={icon.intelligence}
                  alt="intelligence icon"
                />
                <p>Intelligence: {heroData.powerstats?.intelligence}</p>
              </div>
              <div>
                <img
                  className="details__stats__icon"
                  src={icon.speed}
                  alt="combat speed"
                />
                <p>Speed: {heroData.powerstats?.speed}</p>
              </div>
              <div>
                <img
                  className="details__stats__icon"
                  src={icon.strength}
                  alt="strength icon"
                />
                <p>Strength: {heroData.powerstats?.strength}</p>
              </div>
            </div>
          </div>
        </Fade>
      )}
    </section>
  );
}

export default HeroDetails;
