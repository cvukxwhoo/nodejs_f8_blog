const morgan = require("morgan");
const port = 3000;
const express = require("express");
const engine = require("express-handlebars");

const app = express();
// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", ".resources/views");

// route
app.get("/", (req, res) => {
  res.send("home");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
