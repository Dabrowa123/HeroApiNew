import React from "react";
import battleMobile from "../../assets/img/battleMobile.png";
import battleDesktop from "../../assets/img/battleDesktop.jpg";
import Fade from "react-reveal/Fade.js";
import BattleButton from "../UI/Buttons/BattleButton.js";
import PlaceholderImage from "../../assets/img/battle-placeholder.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import useScreenSizeCheck from "../../hooks/useScreenSizeCheck.js";

function BattleMainPage() {
  const [isMobile, isDesktop] = useScreenSizeCheck();

  return (
    <section className="battle-mainpage" id="battle">
      <div className="battle-mainpage__info">
        <h2 className="battle-mainpage__heading">SUPERHERO BATTLE</h2>

        <h2 className="battle-mainpage__description">
          Create championship of your favourite characters
        </h2>

        {isDesktop && (
          <div className="battle-mainpage__button">
            <BattleButton />
          </div>
        )}
      </div>

      <div className="battle-mainpage__image">
        {isMobile && (
          <>
            <Fade left duration={1000} delay={600} distance="70px">
              <LazyLoadImage
                src={battleMobile}
                width={"320px"}
                height={"auto"}
                alt="Wonder Woman"
                placeholderSrc={PlaceholderImage}
                effect="blur"
              />
            </Fade>
            <div className="battle-mainpage__button">
              <BattleButton />
            </div>
          </>
        )}

        {isDesktop && (
          <Fade left duration={1000} delay={600} distance="70px">
            <LazyLoadImage
              src={battleDesktop}
              width={"340px"}
              height={"auto"}
              alt="Wonder Woman"
              placeholderSrc={PlaceholderImage}
              effect="blur"
            />
          </Fade>
        )}
      </div>
    </section>
  );
}

export default BattleMainPage;
