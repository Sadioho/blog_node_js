const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");
const app = express();
const port = 3000;

// file static
app.use(express.static(path.join(__dirname, "public")));

//HTTP logger
app.get("/", function (req, res) {
  res.render("home");
});

app.get("/news", function (req, res) {
  res.render("news");
});

app.get("/search", function (req, res) {
  // console.log(req.query.q);
  res.render("search");
});

//template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

//morgan
app.use(morgan("combined"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
