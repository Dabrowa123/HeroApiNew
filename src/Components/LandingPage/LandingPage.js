import React from "react";
import { useState, useEffect } from "react";
import superman from "../../assets/img/Superman.png";
import Searchform from "../Searchform/Searchform.js";
import Fade from "react-reveal/Fade.js";
import FeaturedHeroesButton from "../Assets/Buttons/FeaturedHeroesButton.js";
import "./LandingPage.css";

function LandingPage() {

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section className="landing">
      <div className="landing__superman-container">
        <Fade left duration={1000} delay={600} distance="70px">
          <img
            className="landing__img-superman"
            src={superman}
            alt="Superman"
          />
        </Fade>
      </div>
      <div className="landing__content-container">
        <div className="landing__content">
          <Fade right={isDesktop} top={isMobile} duration={1000} delay={800} distance="50px">
            <h1 className="landing__heading">
              SUPERHERO
              <br />
              DATABASE
            </h1>
          </Fade>
          <div className="landing__searchform">
            <Fade right={isDesktop} top={isMobile} duration={1000} delay={1200} distance="50px">
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
      </div>
    </section>
  );
}

export default LandingPage;
