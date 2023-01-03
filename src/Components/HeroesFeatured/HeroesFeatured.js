import React, { useRef } from "react";
import HeroCard from "../HeroCard/HeroCard.js";
import chevronLeft from "../../assets/icons/chevron-left.png";
import chevronRight from "../../assets/icons/chevron-right.png";
import featuredHeroesArray from "../Assets/PreloadedData/FeaturedHeroData.js";
import swiperCustomSettings from "../../helpers/swiperCustomSettings.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function HeroesFeatured() {
  const swiperRef = useRef();

  return (
    <section className="featured" id="featured">
      <h1 className="featured__heading">Featured Heroes</h1>
      <div className="featured__list">
        <button
          className="swiper-mybutton swiper-mybutton--prev noSelect"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <img src={chevronLeft} alt="arrow left" />
        </button>

        <Swiper
          slidesPerView={3}
          breakpoints={swiperCustomSettings}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop={true}
          className="mySwiper"
        >
          {featuredHeroesArray.map(({ name, imgUrl, powerstats, id }) => (
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

        <button
          className="swiper-mybutton swiper-mybutton--next noSelect"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <img src={chevronRight} alt="arrow right" />
        </button>
      </div>
    </section>
  );
}

export default HeroesFeatured;
