import React from "react";
import { Link } from 'react-scroll';
import "./FeaturedHeroesButton.css";

function FeaturedHeroesButton() {
  return (
    <Link to="featured" smooth duration={1000}>
      <button className="featured-button">
        FEATURED HEROES
      </button>
    </Link>
  );
}

export default FeaturedHeroesButton;
