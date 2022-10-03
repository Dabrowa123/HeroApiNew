// const axios = require("axios");

// //

// exports.handler = async function (event, context) {
//   const batmanAPI = "https://api.tvmaze.com/shows/10?embed=cast";
//   // "https://superheroapi.com/api/2346700318816566/70/powerstats";

//   const response = await axios.get(batmanAPI);
//   const data = await response.json();

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

const API_ENDPOINT = "https://api.tvmaze.com/shows/10?embed=cast";

exports.handler = async (event, context) => {
  let response;
  let data;
  try {
    response = await fetch(API_ENDPOINT);
    data = await response.json();
    // handle response
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
      /* Required for CORS support to work */
      "Access-Control-Allow-Origin": "*",
      /* Required for cookies, authorization headers with HTTPS */
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(data),
  };
};
