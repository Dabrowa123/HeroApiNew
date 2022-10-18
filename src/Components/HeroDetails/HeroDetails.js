import React, { useEffect, useState } from "react";
import "./HeroDetails.css";
import { getAllHeroInfoById } from "../../requests.js";
import { useParams } from "react-router";

function HeroDetails() {
  const { id } = useParams();
  const [heroData, setHeroData] = useState({});

  const fetchAndRenderHeroData = async (id) => {
    const { data } = await getAllHeroInfoById(id);
    console.log(data);
    setHeroData(data);
  };

  useEffect(() => {
    fetchAndRenderHeroData(id);
  }, []);

  return (
    <section>
      <h1>Hero's Details</h1>
      <h2>{heroData.name}</h2>
    </section>
  );
}

export default HeroDetails;
