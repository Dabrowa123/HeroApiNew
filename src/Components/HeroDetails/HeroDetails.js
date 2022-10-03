import React, { useEffect } from "react";
import "./HeroDetails.css";
import axios from "axios";

function HeroDetails() {
  const fetchData = async () => {
    const results = await axios.get("/.netlify/netlify/functions/batman");
    console.log(results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <h1>Hero's Details</h1>
      <p>{}</p>
    </section>
  );
}

export default HeroDetails;
