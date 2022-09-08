import React from "react";
import "./HeroSimplified.css";

function HeroSimplified({ name, imgUrl, powerstats }) {
  return (
    <div className="featured__hero">
      <h2>{name}</h2>
      <img src={imgUrl} alt={`${name}'s photo`}></img>
      <div className="featured__hero__stats">
        <div>
          <p>combat: {powerstats.combat}</p>
        </div>
        <div>
          <p>durability: {powerstats.durability}</p>
        </div>
        <div>
          <p>intelligence: {powerstats.intelligence}</p>
        </div>
        <div>
          <p>speed: {powerstats.speed}</p>
        </div>
        <div>
          <p>strength: {powerstats.strength}</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSimplified;
