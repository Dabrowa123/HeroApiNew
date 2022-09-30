import axios from "axios";

const ACCESS_TOKEN = 2346700318816566;

export const getBasicHeroInfoById = async (id) => {
  const { data: powerstats } = await axios.get(
    `https://superheroapi.com/api/${ACCESS_TOKEN}/${id}/powerstats`
  );
  const { data: image } = await axios.get(
    `https://superheroapi.com/api/${ACCESS_TOKEN}/${id}/image`
  );

  return {
    name: powerstats.name,
    powerstats,
    imgUrl: image.url,
    id: powerstats.id,
  };
};

export const searchHeroesByName = (name) => {
  return axios.get(
    `https://superheroapi.com/api/${ACCESS_TOKEN}/search/${name}`
    // `https://superheroapi.com/api/2346700318816566/search/batman`
  );
};
