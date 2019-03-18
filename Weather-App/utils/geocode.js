const request = require("request");
const chalk = require("chalk");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=pk.eyJ1IjoiZGV3YWxlb2xhb3llIiwiYSI6ImNqdGUyMDRuejFhZmMzeXA4bTB2NnB4dWwifQ.1IADYxsVwk94LDaeYoizzg&limit=1";
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to Location", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find location, Try another search", undefined);
    } else {
      callback(undefined, {
        longitude: response.body.features[0].center[1],
        latitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;
