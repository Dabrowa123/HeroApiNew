import axios from "axios";

const ACCESS_TOKEN = 2346700318816566;

export const getBasicHeroInfoById = (id) => {
  return axios.get(`https://superheroapi.com/api/${ACCESS_TOKEN}/${id}`);
};
