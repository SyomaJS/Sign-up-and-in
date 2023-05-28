const mysql = require("mysql2");

function connectDb(info) {
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
  });

  return conn;
}


module.exports = { connectDb };
