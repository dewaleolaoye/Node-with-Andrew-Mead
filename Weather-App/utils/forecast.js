const request = require("request");
const chalk = require("chalk");

const forecast = (longitude, latitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/60bb25a3134e0ba16fcdff69d7666fcf/" +
    longitude +
    "," +
    latitude;
  // url is identical to url variable, while we replace the response object to body using Object destructuring
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect weather service", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.daily.data[0].summary +
          " It is currently " +
          body.currently.temperature +
          " degrees out and " +
          body.currently.precipProbability +
          "% of rain"
      );
    }
  });
};

module.exports = forecast;
