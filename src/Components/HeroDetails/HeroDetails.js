import React, { useEffect, useState } from "react";
import "./HeroDetails.css";
import { getAllHeroInfoById } from "../../requests.js";
import { useParams } from "react-router";
import Loader from "../Loader/Loader.js";
import Fade from "react-reveal/Fade.js";
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
      console.log(data);
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
                <h2 className="details__heading">{heroData.name}</h2>
                <h4 className="details__info-position">
                  Full name:{" "}
                  <span className="details__rendered-info">
                    {heroData.biography?.["full-name"] === ""
                      ? "Unknown"
                      : heroData.biography?.["full-name"]}
                  </span>
                </h4>
                <h4 className="details__info-position">
                  Eye color:{" "}
                  <span className="details__rendered-info">
                    {heroData.appearance?.["eye-color"] === "-"
                      ? "Unknown"
                      : heroData.appearance?.["eye-color"]}
                  </span>
                </h4>
                <h4 className="details__info-position">
                  Height:{" "}
                  <span className="details__rendered-info">
                    {heroData.appearance?.height?.[1] === "0 cm"
                      ? "Unknown"
                      : heroData.appearance?.height?.[1]}
                  </span>
                </h4>
                <h4 className="details__info-position">
                  Weight:{" "}
                  <span className="details__rendered-info">
                    {heroData.appearance?.weight?.[1] === "0 kg"
                      ? "Unknown"
                      : heroData.appearance?.weight?.[1]}
                  </span>
                </h4>
                <h4 className="details__info-position">
                  Place of birth:{" "}
                  <span className="details__rendered-info">
                    {heroData.biography?.["place-of-birth"] === "-"
                      ? "Unknown"
                      : heroData.biography?.["place-of-birth"]}
                  </span>
                </h4>
                <h4 className="details__info-position">
                  Occupation:{" "}
                  <span className="details__rendered-info">
                    {heroData.work?.occupation === "-"
                      ? "Unknown"
                      : heroData.appearance?.["eye-color"]}
                  </span>
                </h4>
                <h4 className="details__info-position">
                  Aligment:{" "}
                  <span className="details__rendered-info">
                    {heroData.biography?.alignment === "-"
                      ? "Unknown"
                      : heroData.biography?.alignment}
                  </span>
                </h4>
              </div>
            </div>
            <div className="details__stats">
              <div>
                <img
                  className="details__stats__icon"
                  src={icon.combat}
                  alt="combat icon"
                />
                <p>
                  Combat:{" "}
                  {heroData.powerstats?.combat === "null"
                    ? "unknown"
                    : heroData.powerstats?.combat}
                </p>
              </div>
              <div>
                <img
                  className="details__stats__icon"
                  src={icon.durability}
                  alt="durability icon"
                />
                <p>
                  Durability:{" "}
                  {heroData.powerstats?.combat === "null"
                    ? "unknown"
                    : heroData.powerstats?.combat}
                </p>
              </div>
              <div>
                <img
                  className="details__stats__icon"
                  src={icon.intelligence}
                  alt="intelligence icon"
                />
                <p>
                  Intelligence:{" "}
                  {heroData.powerstats?.intelligence === "null"
                    ? "unknown"
                    : heroData.powerstats?.intelligence}
                </p>
              </div>
              <div>
                <img
                  className="details__stats__icon"
                  src={icon.speed}
                  alt="combat speed"
                />
                <p>
                  Speed:{" "}
                  {heroData.powerstats?.speed === "null"
                    ? "unknown"
                    : heroData.powerstats?.speed}
                </p>
              </div>
              <div>
                <img
                  className="details__stats__icon"
                  src={icon.strength}
                  alt="strength icon"
                />
                <p>
                  Strength:{" "}
                  {heroData.powerstats?.strength === "null"
                    ? "unknown"
                    : heroData.powerstats?.strength}
                </p>
              </div>
            </div>
          </div>
        </Fade>
      )}
    </section>
  );
}

export default HeroDetails;
