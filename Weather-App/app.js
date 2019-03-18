const request = require("request");
const chalk = require("chalk");
const geocode = require("./utils/geocode");

// const url =
//   "https://api.darksky.net/forecast/60bb25a3134e0ba16fcdff69d7666fcf/37.8267,-122.4233";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log(chalk.red.inverse("Unable to connect"));
//   } else if (response.body.error) {
//     console.log(chalk.red.inverse("Unable to find location"));
//   } else {
//     console.log(
//       chalk.green.inverse(
//         response.body.hourly.data[0].summary +
//           " It is currently " +
//           response.body.currently.temperature +
//           " degrees out and " +
//           response.body.currently.precipProbability +
//           "% of rain"
//       )
//     );
//   }
// });

// Geocoding

// const geocodeURL =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGV3YWxlb2xhb3llIiwiYSI6ImNqdGUyMDRuejFhZmMzeXA4bTB2NnB4dWwifQ.1IADYxsVwk94LDaeYoizzg&limit=1";
// request({ url: geocodeURL, json: true }, (error, response) => {
//   if (error) {
//     console.log(chalk.red.inverse("Unable to connect"));
//   } else if (response.body.features.length === 0) {
//     console.log(
//       chalk.red.inverse("Unable to find loation, Try another search")
//     );
//   } else {
//     const latitude = response.body.features[0].center[1];
//     const longitude = response.body.features[0].center[0];
//     console.log(
//       chalk.green.inverse("latitude: " + latitude, "longitude: " + longitude)
//     );
//   }
// });

geocode("Keffi", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
