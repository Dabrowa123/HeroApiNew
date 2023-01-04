import React from "react";
import Fade from "react-reveal/Fade.js";
import * as icon from "../../assets/icons/index.js";
import { Link } from "react-router-dom";
import PlaceholderImage from "../../assets/img/400x500_placeholder.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useDispatch } from "react-redux";
import { addHeroBattle, addVillainBattle } from "../../store/index.js";
import renderPowerstats from "../../helpers/renderPowerstats.js";

function BattleHeroCard({ name, imgUrl, powerstats, id }) {
  const dispatch = useDispatch();
  const handleAddToHeroes = () => {
    const hero = { name, imgUrl, powerstats, id };
    dispatch(addHeroBattle(hero));
  };
  const handleAddToVillains = () => {
    const hero = { name, imgUrl, powerstats, id };
    dispatch(addVillainBattle(hero));
  };

  return (
    <Fade>
      <div className="hero-card">
        <div className="battle-hero-card__buttons-container">
          <span
            className="battle-hero-card__btn battle-hero-card__btn--add"
            onClick={handleAddToHeroes}
          >
            Add to Heroes
          </span>
          <span
            className="battle-hero-card__btn battle-hero-card__btn--remove"
            onClick={handleAddToVillains}
          >
            Add to Villains
          </span>
        </div>
        <h2 className="hero-card__heading">{name}</h2>
        <div className="hero-card__img-container">
          <Link to={`/hero/${id}`}>
            <LazyLoadImage
              className="hero-card__img-component"
              src={imgUrl}
              width={260}
              height={320}
              alt={`${name}`}
              placeholderSrc={PlaceholderImage}
              effect="blur"
            />
          </Link>
        </div>
        <div className="hero-card__stats">
          {renderPowerstats(powerstats, "hero-card")}
        </div>
      </div>
    </Fade>
  );
}

export default BattleHeroCard;
