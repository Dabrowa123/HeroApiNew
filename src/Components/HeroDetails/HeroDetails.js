import React, { useEffect, useState } from "react";
import { getAllHeroInfoById } from "../../requests.js";
import { useParams } from "react-router";
import Loader from "../Assets/Loader/Loader.js";
import Fade from "react-reveal/Fade.js";
import Roll from "react-reveal/Roll.js";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PlaceholderImage from "../../pictures/img/400x500_placeholder.jpg";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";
import renderPowerstats from "../../helpers/renderPowerstats.js";

function HeroDetails() {
  const { id } = useParams();
  const [heroData, setHeroData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const powerstats = heroData.powerstats;

  useEffect(() => {
    const fetchAndRenderHeroData = async (id) => {
      const { data } = await getAllHeroInfoById(id);
      setHeroData(data);
      setIsLoading(false);
    };

    fetchAndRenderHeroData(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <section className="details">
        {isLoading && (
          <div className="loader-container">
            <Loader />
          </div>
        )}
        {!isLoading && (
          <Fade>
            <div className="details__card">
              <button
                className="details__goback-button"
                onClick={() => navigate(-1)}
              >
                GO BACK
              </button>
              <div className="details__info">
                <LazyLoadImage
                  className="details__info__img"
                  src={`${heroData.image?.url}`}
                  alt={`${heroData.name}`}
                  width={heroData.image?.width}
                  height={heroData.image?.height}
                  placeholderSrc={PlaceholderImage}
                  effect="blur"
                />
                <div className="details__info__data">
                  <Roll cascade>
                    <h2 className="details__heading">{heroData.name}</h2>
                  </Roll>
                  <h4 className="details__info-position">
                    Full name:{" "}
                    <Roll top cascade>
                      <span className="details__rendered-info">
                        {heroData.biography?.["full-name"] === ""
                          ? "unknown"
                          : heroData.biography?.["full-name"]}
                      </span>
                    </Roll>
                  </h4>
                  <h4 className="details__info-position">
                    Eye color:{" "}
                    <Roll top cascade>
                      <span className="details__rendered-info">
                        {heroData.appearance?.["eye-color"] === "-"
                          ? "unknown"
                          : heroData.appearance?.["eye-color"]}
                      </span>
                    </Roll>
                  </h4>
                  <h4 className="details__info-position">
                    Height:{" "}
                    <Roll top cascade>
                      <span className="details__rendered-info">
                        {heroData.appearance?.height?.[1] === "0 cm"
                          ? "unknown"
                          : heroData.appearance?.height?.[1]}
                      </span>
                    </Roll>
                  </h4>
                  <h4 className="details__info-position">
                    Weight:{" "}
                    <Roll top cascade>
                      <span className="details__rendered-info">
                        {heroData.appearance?.weight?.[1] === "0 kg"
                          ? "unknown"
                          : heroData.appearance?.weight?.[1]}
                      </span>
                    </Roll>
                  </h4>
                  <h4 className="details__info-position">
                    Place of birth:{" "}
                    <Roll top cascade>
                      <span className="details__rendered-info">
                        {heroData.biography?.["place-of-birth"] === "-"
                          ? "unknown"
                          : heroData.biography?.["place-of-birth"]}
                      </span>
                    </Roll>
                  </h4>
                  <h4 className="details__info-position">
                    Occupation:{" "}
                    <Roll top cascade>
                      <span className="details__rendered-info">
                        {heroData.work?.occupation === "-"
                          ? "unknown"
                          : heroData.work?.occupation}
                      </span>
                    </Roll>
                  </h4>
                  <h4 className="details__info-position">
                    Aligment:{" "}
                    <Roll top cascade>
                      <span className="details__rendered-info">
                        {heroData.biography?.alignment === "-"
                          ? "unknown"
                          : heroData.biography?.alignment}
                      </span>
                    </Roll>
                  </h4>
                </div>
              </div>
              <div className="details__stats">
                {renderPowerstats(powerstats, "details")}
              </div>
            </div>
          </Fade>
        )}
      </section>
    </>
  );
}

export default HeroDetails;
