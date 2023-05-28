// <___ main ___>
const express = require("express");
const { connectDatabase, getDataDb, useDb } = require("./config/db");
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
  const { phone, emal, password } = req.body;
  examination(phone, emal, password, req, res);
});

connectDatabase();
useDb(DB_NAME);
getDataDb();
