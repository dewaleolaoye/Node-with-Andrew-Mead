const request = require("request");
const chalk = require("chalk");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

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

// geocode("Keffi", (error, data) => {
//   console.log("Error", error);
//   console.log("Data", data);
// });

forecast(-75.7088, 44.1545, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
