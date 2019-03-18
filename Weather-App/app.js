const request = require("request");

const url =
  "https://api.darksky.net/forecast/60bb25a3134e0ba16fcdff69d7666fcf/37.8267,-122.4233";

request({ url: url, json: true }, (error, response) => {
  console.log(
    response.body.hourly.data[0].summary +
      " It is currently " +
      response.body.currently.temperature +
      " degrees out and " +
      response.body.currently.precipProbability +
      "% of rain"
  );
});

const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGV3YWxlb2xhb3llIiwiYSI6ImNqdGUyMDRuejFhZmMzeXA4bTB2NnB4dWwifQ.1IADYxsVwk94LDaeYoizzg&limit=1";
request({ url: geocodeURL, json: true }, (error, response) => {
  const latitude = response.body.features[0].center[1];
  const longitude = response.body.features[0].center[0];

  console.log("latitude: " + latitude);
  console.log("longitude: " + longitude);
});
