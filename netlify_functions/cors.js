import fetch from "node-fetch";
// var fetch = require("node-fetch");

exports.handler = async (event, context) => {
  var url = event.path;

  url = url.split(".netlify/functions/cors/")[1];
  url = decodeURIComponent(url);
  url = new URL(url);

  for (let i in event.queryStingParameters) {
    url.searchParams.append(i, event.queryStingParameters[i]);
  }

  var cookie_string = event.headers.cookie || "";
  var userAgent = event.headers["user-agent"] || "";

  var header_to_send = {
    Cookie: cookie_string,
    "User-Agent": userAgent,
    "content-type": "application/json",
    accept: "*/*",
    host: url.host,
  };

  var options = {
    method: event.httpMethod.toUpperCase(),
    headers: header_to_send,
    body: event.body,
  };

  if (
    event.httpMethod.toUpperCase() == "GET" ||
    event.httpMethod.toUpperCase() == "HEAD"
  )
    delete options.body;

  var response = await fetch(url, options);
  var response_text = await response.text();
  var headers = response.headers.raw();

  var cookie_header = null;
  if (headers["set-cookie"]) cookie_header = headers["set-cookie"];

  return {
    statusCode: 200,
    body: response_text,
    headers: {
      "content-type": String(headers["content-type"]) || "text/plain",
    },
    multiValueHeaders: {
      "set-cookie": cookie_header || [],
    },
  };
};
