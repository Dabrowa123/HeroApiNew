import axios from "axios";

const ACCESS_TOKEN = 2346700318816566;

export const getBasicHeroInfoById = async (id) => {
  const { data: powerstats } = await axios.get(
    `https://www.superheroapi.com/api.php/${ACCESS_TOKEN}/${id}/powerstats`
  );
  const { data: image } = await axios.get(
    `https://www.superheroapi.com/api.php/${ACCESS_TOKEN}/${id}/image`
  );

  return {
    name: powerstats.name,
    powerstats,
    imgUrl: image.url,
    id: powerstats.id,
  };
};

export const getAllHeroInfoById = async (id) => {
  const resp = await axios.get(`/.netlify/functions/heroid?id=${id}`);
  return resp;
};

export const searchHeroesByName = (name) => {
  return axios.get(
    `https://www.superheroapi.com/api.php/${ACCESS_TOKEN}/search/${name}`
  );
};
