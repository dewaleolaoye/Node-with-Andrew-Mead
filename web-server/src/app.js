const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send("Hello Express");
});

app.get("/help", (req, res) => {
  res.send("Help me");
});

app.get("/about", (req, res) => {
  res.send("about page");
});

app.get("/weather", (req, res) => {
  res.send("View Weather");
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
