import { React } from "react";
import HeroCard from "../HeroCard/HeroCard.js";
import batmanImg from "../../assets/img/batman.jpg";
import freezeImg from "../../assets/img/freeze.jpg";
import penguinImg from "../../assets/img/penguin.jpg";
import "react-multi-carousel/lib/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { Pagination } from "swiper";
import { Navigation } from "swiper";

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
    {
      id: 5142,
      name: "Penguin2",
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
      id: 5143,
      name: "Penguin3",
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
      <h1 className="featured__heading">Featured Heroes</h1>
      <div className="featured__list">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          navigation={true}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {featuredHeroes.map(({ name, imgUrl, powerstats, id }) => (
            <SwiperSlide>
              <HeroCard
                key={id}
                name={name}
                imgUrl={imgUrl}
                powerstats={powerstats}
                id={id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    // <section className="featured" id="featured">
    //   <h1 className="featured__heading">Featured Heroes</h1>
    //   <div className="featured__list">
    //     {featuredHeroes.map(({ name, imgUrl, powerstats, id }) => (
    //       <HeroCard
    //         key={id}
    //         name={name}
    //         imgUrl={imgUrl}
    //         powerstats={powerstats}
    //         id={id}
    //       />
    //     ))}
    //   </div>
    // </section>
  );
}

export default HeroesFeatured;
