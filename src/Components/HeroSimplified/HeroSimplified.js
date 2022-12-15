import React from "react";
import Fade from "react-reveal/Fade.js";
import * as icon from "../../assets/icons/index.js";
import "./HeroSimplified.css";
import { Link } from "react-router-dom";

function HeroSimplified({ name, imgUrl, powerstats, id }) {
  return (
    <Fade>
      <div className="hero-simplified">
        <h2>{name}</h2>
        <Link to={`/hero/${id}`}>
          <img
            className="hero-simplified__img"
            src={imgUrl}
            alt={`${name}`}
          ></img>
        </Link>
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
