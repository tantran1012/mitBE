const express = require("express");
const methodOverride = require("method-override");
const path = require("path");
const bodyParser = require("body-parser");
const db = require("./config/db");
const route = require("./routers");
db.connect();

const app = express()
const PORT = process.env.PORT || 3000;

app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

route(app)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})