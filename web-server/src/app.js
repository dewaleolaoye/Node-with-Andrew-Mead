const express = require("express");
const path = require("path");
const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");

app.set("view engine", "hbs");
app.use(express.static(publicDirectoryPath));

// root page
app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Adewale Olaoye"
  });
});

// about page
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Adewale Olaoye"
  });
});

// help page

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Page",
    email: "adewaleolaoye21@gmail.com",
    address: "22, Association Close Ogudu"
  });
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
