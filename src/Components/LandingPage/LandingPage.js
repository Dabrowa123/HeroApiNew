import React from "react";
import supermanDesktop from "../../pictures/img/superman-desktop.png";
import supermanMobile from "../../pictures/img/superman-mobile.png";
import Searchform from ".././UI/Searchform/Searchform.js";
import Fade from "react-reveal/Fade.js";
import FeaturedHeroesButton from "../UI/Buttons/FeaturedHeroesButton.js";
import PlaceholderImage from "../../pictures/img/superman-placeholder.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import useScreenSizeCheck from "../../hooks/useScreenSizeCheck.js";

function LandingPage() {
  const [isMobile, isDesktop] = useScreenSizeCheck();

  return (
    <section className="landing" id="landing">
      <div className="landing__superman-container">
        {isMobile && (
          <Fade left duration={1000} delay={600} distance="70px">
            <LazyLoadImage
              className="landing__img-superman"
              src={supermanDesktop}
              width={supermanDesktop.width}
              height={supermanDesktop.height}
              alt="Superman"
              placeholderSrc={PlaceholderImage}
              effect="blur"
            />
          </Fade>
        )}

        {isDesktop && (
          <Fade left duration={1000} delay={600} distance="70px">
            <LazyLoadImage
              className="landing__img-superman"
              src={supermanMobile}
              width={supermanMobile.width}
              height={supermanMobile.height}
              alt="Superman"
              placeholderSrc={PlaceholderImage}
              effect="blur"
            />
          </Fade>
        )}
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
              <Searchform
                formId="search-input-nav"
                classBlockName="searchform"
              />
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
