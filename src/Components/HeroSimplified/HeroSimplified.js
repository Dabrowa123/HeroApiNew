import React from "react";
import Fade from "react-reveal/Fade.js";
import * as icon from "../../assets/icons/index.js";
import "./HeroSimplified.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PlaceholderImage from "../../assets/img/400x500_placeholder.jpg";
import "react-lazy-load-image-component/src/effects/blur.css";

function HeroSimplified({ name, imgUrl, powerstats, id }) {
  return (
    <Fade>
      <div className="hero-simplified">
        <h2>{name}</h2>
        <div className="hero-simplified__img-container">
          <Link to={`/hero/${id}`}>
            <LazyLoadImage
              className="hero-simplified__img-component"
              src={imgUrl}
              width={300}
              height={400}
              alt={`${name}`}
              placeholderSrc={PlaceholderImage}
              effect="blur"
            />
          </Link>
        </div>
        <div className="hero-simplified__stats">
          <div>
            <img
              className="hero-simplified__stats__icon"
              src={icon.combat}
              alt="combat icon"
            />
            <p>{powerstats.combat}</p>
          </div>
          <div>
            <img
              className="hero-simplified__stats__icon"
              src={icon.durability}
              alt="durability icon"
            />
            <p>{powerstats.durability}</p>
          </div>
          <div>
            <img
              className="hero-simplified__stats__icon"
              src={icon.intelligence}
              alt="intelligence icon"
            />
            <p>{powerstats.intelligence}</p>
          </div>
          <div>
            <img
              className="hero-simplified__stats__icon"
              src={icon.speed}
              alt="combat speed"
            />
            <p>{powerstats.speed}</p>
          </div>
          <div>
            <img
              className="hero-simplified__stats__icon"
              src={icon.strength}
              alt="strength icon"
            />
            <p>{powerstats.strength}</p>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default HeroSimplified;
