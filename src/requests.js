import axios from "axios";

export const getBasicHeroInfoById = async (id) => {
  const { data: powerstats } = await axios.get(
    `/.netlify/functions/getBasicHeroInfoByIdPowerstats?id=${id}`
  );

  const { data: image } = await axios.get(
    `/.netlify/functions/getBasicHeroInfoByIdImage?id=${id}`
  );

  return {
    name: powerstats.name,
    powerstats,
    imgUrl: image.url,
    id: powerstats.id,
  };
};

export const getAllHeroInfoById = (id) => {
  return axios.get(`/.netlify/functions/getAllHeroInfoById?id=${id}`);
};

export const searchHeroesByName = (name) => {
  return axios.get(`/.netlify/functions/searchHeroesByName?name=${name}`);
};
