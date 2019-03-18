const request = require("request");
const chalk = require("chalk");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("Keffi", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});

forecast(-75.7088, 44.1545, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
