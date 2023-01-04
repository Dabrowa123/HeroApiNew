import batmanImg from "../../../assets/img/batman.jpg";
import freezeImg from "../../../assets/img/freeze.jpg";
import penguinImg from "../../../assets/img/penguin.jpg";
import hulkImg from "../../../assets/img/hulk.jpg";
import supermanImg from "../../../assets/img/superman.jpg";
import wonderwomanImg from "../../../assets/img/wonderwoman.jpg";
import spidermanImg from "../../../assets/img/spiderman.jpg";

const featuredHeroesArray = [
  {
    id: 70,
    name: "Batman",
    imgUrl: batmanImg,
    powerstats: {
      combat: "100",
      durability: "50",
      intelligence: "100",
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
      intelligence: "75",
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
      intelligence: "75",
      speed: "12",
      strength: "10",
    },
  },
  {
    id: 620,
    name: "Spider-Man",
    imgUrl: spidermanImg,
    powerstats: {
      combat: "85",
      durability: "85",
      intelligence: "90",
      speed: "67",
      strength: "55",
    },
  },
  {
    id: 332,
    name: "Hulk",
    imgUrl: hulkImg,
    powerstats: {
      combat: "85",
      durability: "85",
      intelligence: "88",
      speed: "63",
      strength: "100",
    },
  },
  {
    id: 720,
    name: "Wonder Woman",
    imgUrl: wonderwomanImg,
    powerstats: {
      combat: "100",
      durability: "100",
      intelligence: "88",
      speed: "79",
      strength: "100",
    },
  },
  {
    id: 644,
    name: "Superman",
    imgUrl: supermanImg,
    powerstats: {
      combat: "85",
      durability: "85",
      intelligence: "94",
      speed: "100",
      strength: "100",
    },
  },
];

export default featuredHeroesArray;
