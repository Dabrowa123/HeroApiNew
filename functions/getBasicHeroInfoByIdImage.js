// const axios = require("axios");

// //

// exports.handler = async function (event, context) {
//   const batmanAPI = "https://www.superheroapi.com/api.php/2346700318816566/70";
//   // "https://superheroapi.com/api/2346700318816566/70/powerstats";

//   const data = await axios.get(batmanAPI);
//   // const data = await response.json();
//   console.log(data);
//   return {
//     statusCode: 200,
//     headers: {
//       /* Required for CORS support to work */
//       "Access-Control-Allow-Origin": "*",
//       /* Required for cookies, authorization headers with HTTPS */
//       "Access-Control-Allow-Credentials": true,
//     },
//     body: JSON.stringify(data),
//   };
// };

// const fetch = require("node-fetch");

import fetch from "node-fetch";

// const API_ENDPOINT = `https://www.superheroapi.com/api.php/2346700318816566/70`;
// ("https://superheroapi.com/api/2346700318816566/70/powerstats");

exports.handler = async (event, context) => {
  const id = await event.queryStringParameters.id;

  let response;
  let data;
  try {
    response = await fetch(
      `https://www.superheroapi.com/api.php/2346700318816566/${id}/image`
    );
    data = await response.json();
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message,
      }),
    };
  }

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(data),
  };
};
