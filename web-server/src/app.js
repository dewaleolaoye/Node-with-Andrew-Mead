const express = require("express");
const path = require("path");
const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));
app.get("", (req, res) => {
  res.send("<h1>Hello Express</h1>");
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
