const mysql = require("mysql2");
const { examination } = require("./examination");
require("dotenv").config();

function getDataDb(info) {
  const HOST = process.env.DB_HOST || "localhost";
  const USER = process.env.DB_USER || "root";
  const PASSWORD = process.env.DB_PASSWORD || "QWERTY";
  const DATABASE = process.env.DB_NAME || "users";

  const conn = mysql.createConnection({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
  });

  conn.connect((err) => {
    if (err) {
      console.error(err.message);
      return;
    }

    console.log("Connected successfully...");

    let sql = "SELECT * FROM users";
    conn.query(sql, (err, result) => {
      if (err) {
        console.error("Error selecting users:", err.message);
        return;
      }

      const ans = examination(info, result);
      return ans;
    });
  });
}

module.exports = { getDataDb };
