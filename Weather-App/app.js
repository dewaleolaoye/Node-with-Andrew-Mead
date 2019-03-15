const request = require("request");

const url =
  "https://api.darksky.net/forecast/60bb25a3134e0ba16fcdff69d7666fcf/37.8267,-122.4233";

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.currently);
});
