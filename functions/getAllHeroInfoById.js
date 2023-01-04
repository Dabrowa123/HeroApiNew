import fetch from "node-fetch";

exports.handler = async (event, context) => {
  const id = await event.queryStringParameters.id;

  const API_URL = process.env.API_URL;

  let response;
  let data;
  try {
    response = await fetch(`${API_URL}/${id}`);
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
