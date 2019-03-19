const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const chalk = require("chalk");

const address = process.argv[2];

if (!address) {
  console.log(chalk.red.inverse("Please input an address"));
} else {
  geocode(address, (error, data) => {
    if (error) {
      return console.log(error);
    }
    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        console.log(error);
      }
      console.log(chalk.green.inverse(data.location));
      console.log(chalk.blue.inverse(forecastData));
    });
  });
}
