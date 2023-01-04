import React from "react";
import Fade from "react-reveal/Fade.js";
import { Link } from "react-router-dom";
import PlaceholderImage from "../../assets/img/400x500_placeholder.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import renderPowerstats from "../../helpers/renderPowerstats.js";

function HeroCard({ name, imgUrl, powerstats, id }) {
  return (
    <Fade>
      <div className="hero-card">
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

export default HeroCard;
