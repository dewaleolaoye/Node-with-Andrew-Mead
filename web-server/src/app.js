const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send("<h1>Hello Express</h1>");
});

app.get("/help", (req, res) => {
  res.send({
    name: "Adewale",
    surname: "Olaoye"
  });
});

app.get("/about", (req, res) => {
  res.send("<h2>About page</h2>");
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "It is sunny",
    location: "Lagos"
  });
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
