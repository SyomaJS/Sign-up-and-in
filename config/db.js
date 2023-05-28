const mysql = require("mysql2");
require("dotenv").config();

const HOST = process.env.DB_HOST || "localhost";
const USER = process.env.DB_USER || "root";
const PASSWORD = process.env.DB_PASSWORD || "QWERTY";

function connectDatabase() {
  try {
    const conn = mysql.createConnection({
      host: HOST,
      user: USER,
      password: PASSWORD,
    });

    conn.connect((err) => {
      if (err) console.error(err.message);
      console.log("Connected successfully . . .  ");
    });

    return conn;
  } catch (err) {
    console.log("An error occurred while connecting ... " + err.message);
  }
}

function useDb(name) {
  conn = connectDatabase();
  let sql = `use users`;
  conn.query(sql, (err, result) => {
    if (err) console.error("Error use", err.message);
    else console.log("Using database > > >");
  });
}

function getDataDb() {
  try {
    const conn = connectDatabase();
    useDb("qwert");
    let sql = "SELECT * FROM users;";
    conn.query(sql, (err, rows) => {
      if (err) console.error("Error select users", err.message);
      console.log("rows:", rows);
    });
  } catch (err) {
    console.log("ERROR: " + err.message);
  }
}

module.exports = { connectDatabase, getDataDb, useDb };
