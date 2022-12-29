import batmanImg from "../../../assets/img/batman.jpg";
import freezeImg from "../../../assets/img/freeze.jpg";
import penguinImg from "../../../assets/img/penguin.jpg";
import robinImg from "../../../assets/img/robin.jpg";
import jokerImg from "../../../assets/img/joker.jpg";
import catwomanImg from "../../../assets/img/catwoman.jpg";

const featuredHeroesArray = [
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
  {
    id: 370,
    name: "Joker",
    imgUrl: jokerImg,
    powerstats: {
      combat: "70",
      durability: "70",
      id: "370",
      intelligence: "100",
      name: "Joker",
      power: "30",
      response: "success",
      speed: "12",
      strength: "10",
    },
  },
  {
    id: 165,
    name: "Catwoman",
    imgUrl: catwomanImg,
    powerstats: {
      combat: "85",
      durability: "85",
      id: "165",
      intelligence: "69",
      name: "Catwoman",
      power: "30",
      response: "success",
      speed: "33",
      strength: "11",
    },
  },
  {
    id: 561,
    name: "Robin",
    imgUrl: robinImg,
    powerstats: {
      combat: "85",
      durability: "85",
      id: "561",
      intelligence: "88",
      name: "Robin",
      power: "30",
      response: "success",
      speed: "27",
      strength: "11",
    },
  },
];

export default featuredHeroesArray;
