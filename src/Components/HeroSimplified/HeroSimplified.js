import React from "react";
import * as icon from "../../assets/icons/index.js";
import "./HeroSimplified.css";
import { Link } from "react-router-dom";

function HeroSimplified({ name, imgUrl, powerstats, id }) {
  return (
    <div className="featured__hero">
      <h2>{name}</h2>
      <Link to={`/hero/${id}`}>
        <img className="featured__hero__img" src={imgUrl} alt={`${name}`}></img>
      </Link>
      <div className="featured__hero__stats">
        <div>
          <img
            className="featured__hero__stats__icon"
            src={icon.combat}
            alt="combat icon"
          />
          <p>{powerstats.combat}</p>
        </div>
        <div>
          <img
            className="featured__hero__stats__icon"
            src={icon.durability}
            alt="durability icon"
          />
          <p>{powerstats.durability}</p>
        </div>
        <div>
          <img
            className="featured__hero__stats__icon"
            src={icon.intelligence}
            alt="intelligence icon"
          />
          <p>{powerstats.intelligence}</p>
        </div>
        <div>
          <img
            className="featured__hero__stats__icon"
            src={icon.speed}
            alt="combat speed"
          />
          <p>{powerstats.speed}</p>
        </div>
        <div>
          <img
            className="featured__hero__stats__icon"
            src={icon.strength}
            alt="strength icon"
          />
          <p>{powerstats.strength}</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSimplified;
