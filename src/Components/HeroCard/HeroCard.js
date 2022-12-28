import React from "react";
import Fade from "react-reveal/Fade.js";
import * as icon from "../../assets/icons/index.js";
import { Link } from "react-router-dom";
import PlaceholderImage from "../../assets/img/400x500_placeholder.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function HeroCard({ name, imgUrl, powerstats, id }) {
  
  return (
    <Fade>
      <div className="hero-card">
        <h2 className="hero-card__heading">
          {name}
        </h2>
        <div className="hero-card__img-container">
          <Link to={`/hero/${id}`}>
            <LazyLoadImage
              className="hero-card__img-component"
              src={imgUrl}
              width={300}
              height={400}
              alt={`${name}`}
              placeholderSrc={PlaceholderImage}
              effect="blur"
            />
          </Link>
        </div>
        <div className="hero-card__stats">
          <div>
            <img
              className="hero-card__stats-icon"
              src={icon.combat}
              alt="combat icon"
            />
            <p>{powerstats.combat === "null" ? "?" : powerstats.combat}</p>
          </div>
          <div>
            <img
              className="hero-card__stats-icon"
              src={icon.durability}
              alt="durability icon"
            />
            <p>
              {powerstats.durability === "null" ? "?" : powerstats.durability}
            </p>
          </div>
          <div>
            <img
              className="hero-card__stats-icon"
              src={icon.intelligence}
              alt="intelligence icon"
            />
            <p>
              {powerstats.intelligence === "null"
                ? "?"
                : powerstats.intelligence}
            </p>
          </div>
          <div>
            <img
              className="hero-card__stats-icon"
              src={icon.speed}
              alt="combat speed"
            />
            <p>{powerstats.speed === "null" ? "?" : powerstats.speed}</p>
          </div>
          <div>
            <img
              className="hero-card__stats-icon"
              src={icon.strength}
              alt="strength icon"
            />
            <p>{powerstats.strength === "null" ? "?" : powerstats.strength}</p>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default HeroCard;
