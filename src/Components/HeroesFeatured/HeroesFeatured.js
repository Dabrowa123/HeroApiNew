import { React } from "react";
import HeroCard from "../HeroCard/HeroCard.js";
import "./HeroesFeatured.css";
import batmanImg from "../../assets/img/batman.jpg";
import freezeImg from "../../assets/img/freeze.jpg";
import penguinImg from "../../assets/img/penguin.jpg";

function HeroesFeatured() {
  const featuredHeroes = [
    {
      id: 70,
      name: "Batman",
      imgUrl: batmanImg,
      powerstats: {
        combat: "100",
        durability: "50",
        id: "70",
        intelligence: "100",
        name: "Batman",
        power: "47",
        response: "success",
        speed: "27",
        strength: "26",
      },
    },
    {
      id: 457,
      name: "Mister Freeze",
      imgUrl: freezeImg,
      powerstats: {
        combat: "28",
        durability: "70",
        id: "457",
        intelligence: "75",
        name: "Mister Freeze",
        power: "37",
        response: "success",
        speed: "12",
        strength: "32",
      },
    },
    {
      id: 514,
      name: "Penguin",
      imgUrl: penguinImg,
      powerstats: {
        combat: "45",
        durability: "28",
        id: "514",
        intelligence: "75",
        name: "Penguin",
        power: "30",
        response: "success",
        speed: "12",
        strength: "10",
      },
    },
  ];

  return (
    <section className="featured" id="featured">
      <h1>Featured Heroes</h1>
      <div className="featured__list">
        {featuredHeroes.map(({ name, imgUrl, powerstats, id }) => (
          <HeroCard
            key={id}
            name={name}
            imgUrl={imgUrl}
            powerstats={powerstats}
            id={id}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroesFeatured;
