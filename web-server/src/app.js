const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

// Define path for express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup for handlebars engine and root location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup Static Directory to serve
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
    name: "Adewale Olaoye",
    email: "adewaleolaoye21@gmail.com"
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address || req.query.address === "") {
    return res.send({
      error: "You have not input address"
    });
  }
  res.send({
    forecast: "It is sunny",
    location: "Lagos",
    address: req.query.address
  });
});

// query string
app.get("/products", (req, res) => {
  console.log(req.query.search);
  if (
    req.query.serch === "" ||
    !req.query.search ||
    req.query.search === "undefined"
  ) {
    return res.send({
      error: "You must provide a search term"
    });
  }

  // console.log(req.query);
  res.send({
    products: "[]"
  });
});

// help/ address that does not exist
app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    errorMessage: "Help Article not found"
  });
});

// from the root, address that did not exist
app.get("*", (req, res) => {
  res.render("404", {
    title: 404,
    errorMessage: "Page Not Found"
  });
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
