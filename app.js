// <___ main ___>
const express = require("express");
const { getDataDb } = require("./config/db");
require("dotenv").config();
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 3030;
const DB_NAME = process.env.PORT || "users";

const app = express();
app.set("view engine", "ejs");
app.use(express.static("styles"));

app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Listening on ${PORT} port`);
});

// </___ main ___>

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  const { phone, email, password } = req.body;
  getDataDb({ phone, email, password, res });
});
