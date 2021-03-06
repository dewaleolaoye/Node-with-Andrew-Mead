const request = require("request");
const chalk = require("chalk");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=pk.eyJ1IjoiZGV3YWxlb2xhb3llIiwiYSI6ImNqdGUyMDRuejFhZmMzeXA4bTB2NnB4dWwifQ.1IADYxsVwk94LDaeYoizzg&limit=1";
  // url is identical to url variable, while we replace the response object to body using Object destructuring
  request(
    {
      url,
      json: true
    },
    (error, { body }) => {
      if (error) {
        callback("Unable to connect to Location", undefined);
      } else if (body.features.length === 0) {
        callback("Unable to find location, Try another search", undefined);
      } else {
        callback(undefined, {
          latitude: body.features[0].center[1],
          longitude: body.features[0].center[0],
          location: body.features[0].place_name
        });
      }
    }
  );
};

module.exports = geocode;
