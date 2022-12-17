import React from "react";
import superman from "../../assets/img/Superman2.png";
import Searchform from "../Searchform/Searchform.js";
import Fade from "react-reveal/Fade.js";
import "./LandingPage.css";

function LandingPage() {
  return (
    <section className="landing">
      <div className="landing__superman-container">
        <Fade left duration={1000} delay={600} distance="70px">
          <img className="landing__img-superman" src={superman} alt="Superman" />
        </Fade>
      </div>
      <div className="landing__content-container">
        <div className="landing__content">
          <Fade right duration={1000} delay={800} distance="50px">
            <h1 className="landing__heading">
              SUPERHERO
              <br />
              DATABASE
            </h1>
          </Fade>
          <div className="landing__searchform">
            <Fade right duration={1000} delay={1200} distance="50px">
              <Searchform />
            </Fade>
          </div>
          <div>
            <Fade right duration={1000} delay={1200} distance="50px">
              <button className="landing__featured-button">FEATURED HEROES</button>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
