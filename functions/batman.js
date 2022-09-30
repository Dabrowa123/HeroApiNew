exports.handler = async function (event, context) {
  // const batmanAPI = "https://api.tvmaze.com/shows/10?embed=cast";
  // // "https://superheroapi.com/api/2346700318816566/70/powerstats";

  // const response = await fetch(batmanAPI);
  // const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
  };
};
