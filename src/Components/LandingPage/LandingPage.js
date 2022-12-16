import React from "react";
import superman from "../../assets/img/Superman2.png";
import Searchform from "../Searchform/Searchform.js";
import Fade from "react-reveal/Fade.js";
import "./LandingPage.css";

function LandingPage() {
  return (
    <section className="landing">
      <Fade right duration={1000} delay={800} distance="50px">
        <h1 className="landing__heading">
          SUPERHERO
          <br />
          DATABASE
        </h1>
      </Fade>
      <Fade left duration={1000} delay={600} distance="70px">
        <img className="landing__img-superman" src={superman} alt="Superman" />
      </Fade>
      <div className="landing__searchform">
        <Fade right duration={1000} delay={1200} distance="50px">
          <Searchform />
        </Fade>
      </div>
    </section>
  );
}

export default LandingPage;
