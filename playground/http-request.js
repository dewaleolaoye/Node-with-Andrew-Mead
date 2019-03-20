const https = require("https");

const url =
  "https://api.darksky.net/forecast/60bb25a3134e0ba16fcdff69d7666fcf/40,-75";
const request = https.request(url, response => {
  let data = "";
  response.on("data", chunk => {
    data = data + chunk.toString();
    // console.log(chunk);
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", error => {
  console.log("An Error", error);
});

request.end();
