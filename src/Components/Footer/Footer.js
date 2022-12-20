import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <p className="footer__credentials">
          This content is kindly provided by{" "}
          <a href="https://superheroapi.com/">Superhero API</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
