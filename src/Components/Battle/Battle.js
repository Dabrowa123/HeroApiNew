import React from "react";
import BattleHeroes from "../BattleHeroes/BattleHeroes.js";
import BattleVillains from "../BattleVillains/BattleVillains.js";
// import { useState, useEffect } from "react";
// import supermanDesktop from "../../assets/img/superman-desktop.png";
// import supermanMobile from "../../assets/img/superman-mobile.png";
// import Searchform from ".././UI/Searchform/Searchform.js";
// import Fade from "react-reveal/Fade.js";
// import FeaturedHeroesButton from "../UI/Buttons/FeaturedHeroesButton.js";
// import PlaceholderImage from "../../assets/img/superman-placeholder.png";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

function Battle() {
  return (
    <section className="battle">
      <h2>Battle</h2>
      <BattleHeroes />
      <BattleVillains />
    </section>
  );
}

export default Battle;
