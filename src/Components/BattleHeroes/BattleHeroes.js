import React from "react";
// import { useState, useEffect } from "react";
// import supermanDesktop from "../../assets/img/superman-desktop.png";
// import supermanMobile from "../../assets/img/superman-mobile.png";
// import Searchform from ".././UI/Searchform/Searchform.js";
// import Fade from "react-reveal/Fade.js";
// import FeaturedHeroesButton from "../UI/Buttons/FeaturedHeroesButton.js";
// import PlaceholderImage from "../../assets/img/superman-placeholder.png";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";
import { useDispatch, useSelector } from "react-redux";
import { removeHeroBattle } from "../../store/index.js";

function BattleHeroes() {
  const dispatch = useDispatch();
  const heroesListBattle = useSelector((state) => {
    return state.heroesBattle;
  });


  const handleHeroRemoveFromBattle = (id) => {
    console.log(id);
    dispatch(removeHeroBattle(id));
  };

  const renderedHeroes = heroesListBattle.map((id) => {
    return (
      <li key={id}>
        {id}
        <button onClick={() => handleHeroRemoveFromBattle(id)}>remove</button>
      </li>
    );
  });

  return (
    <section className="battle-heroes">
      <ul>{renderedHeroes}</ul>
    </section>
  );
}

export default BattleHeroes;
