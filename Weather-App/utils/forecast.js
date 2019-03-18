const request = require("request");
const chalk = require("chalk");

const forecast = (longitude, latitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/60bb25a3134e0ba16fcdff69d7666fcf/" +
    longitude +
    "," +
    latitude;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect weather service", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        response.body.daily.data[0].summary +
          " It is currently " +
          response.body.currently.temperature +
          " degrees out and " +
          response.body.currently.precipProbability +
          "% of rain"
      );
    }
  });
};

module.exports = forecast;
