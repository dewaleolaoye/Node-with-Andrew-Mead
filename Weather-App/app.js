const request = require("request");

const url =
  "https://api.darksky.net/forecast/60bb25a3134e0ba16fcdff69d7666fcf/37.8267,-122.4233";

request({ url: url, json: true }, (error, response) => {
  console.log(
    "It is currently " +
      response.body.currently.temperature +
      " degrees out and " +
      response.body.currently.precipProbability +
      "% of rain"
  );
});
