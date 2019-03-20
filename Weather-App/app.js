const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const chalk = require("chalk");

const address = process.argv[2];

if (!address) {
  console.log(chalk.red.inverse("Please input an address"));
} else {
  // using object destructuring
  geocode(address, (error, { longitude, latitude, location }) => {
    if (error) {
      return console.log(error);
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        console.log(error);
      }
      console.log(chalk.green.inverse(location));
      console.log(chalk.blue.inverse(forecastData));
    });
  });
}
