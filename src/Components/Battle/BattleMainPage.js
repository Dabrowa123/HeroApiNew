import React from "react";
import { useState, useEffect } from "react";
import battle from "../../assets/img/battle2.png";
import supermanMobile from "../../assets/img/superman-mobile.png";
import Searchform from ".././UI/Searchform/Searchform.js";
import Fade from "react-reveal/Fade.js";
import BattleButton from "../UI/Buttons/BattleButton.js";
import PlaceholderImage from "../../assets/img/superman-placeholder.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function BattleMainPage() {
  // const [isDesktop, setIsDesktop] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   if (window.innerWidth > 769) {
  //     setIsDesktop(true);
  //     setIsMobile(false);
  //   } else {
  //     setIsMobile(true);
  //     setIsDesktop(false);
  //   }
  // }, []);

  return (
    <section className="battle-mainpage" id="battle">
      <div className="battle-mainpage__info">
        <h2 className="battle-mainpage__heading">SUPERHERO BATTLE</h2>
        <h2 className="battle-mainpage__description">
          Create championship of your
          <br /> favourite characters
        </h2>
        <BattleButton />
      </div>
      <div className="battle-mainpage__image">
        <Fade left duration={1000} delay={600} distance="70px">
          <LazyLoadImage
            className=""
            src={battle}
            width={"450px"}
            height={"auto"}
            alt="Superman"
            placeholderSrc={PlaceholderImage}
            effect="blur"
          />
        </Fade>
      </div>

      {/* <div className="landing__superman-container">
        {isMobile && (<Fade left duration={1000} delay={600} distance="70px">
          <LazyLoadImage
              className="landing__img-superman"
              src={battle}
              width={supermanDesktop.width}
              height={supermanDesktop.height}
              alt="Superman"
              placeholderSrc={PlaceholderImage}
              effect="blur"
            />
        </Fade>)}

        {isDesktop && (<Fade left duration={1000} delay={600} distance="70px">
          <LazyLoadImage
              className="landing__img-superman"
              src={supermanMobile}
              width={supermanMobile.width}
              height={supermanMobile.height}
              alt="Superman"
              placeholderSrc={PlaceholderImage}
              effect="blur"
            />
        </Fade>)}
      </div>
      <div className="landing__content-container">
        <div className="landing__content">
          <Fade
            right={isDesktop}
            top={isMobile}
            duration={1000}
            delay={800}
            distance="50px"
          >
            <h1 className="landing__heading">
              SUPERHERO
              <br />
              DATABASE
            </h1>
          </Fade>
          <div className="landing__searchform">
            <Fade
              right={isDesktop}
              top={isMobile}
              duration={1000}
              delay={1200}
              distance="50px"
            >
              <Searchform />
            </Fade>
          </div>
          <div className="landing__featured-button-desktop">
            <Fade right duration={1000} delay={1200} distance="50px">
              <FeaturedHeroesButton />
            </Fade>
          </div>
        </div>
      </div>
      <div className="landing__featured-button-mobile">
        <Fade bottom duration={1000} delay={1200} distance="50px">
          <FeaturedHeroesButton />
        </Fade>
      </div> */}
    </section>
  );
}

export default BattleMainPage;
