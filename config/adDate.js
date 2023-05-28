const mysql = require("mysql2");

function addData(req, res) {
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
  const { phone, email, password } = req.body;

  let sql = `INSERT INTO users (phone, email, password) VALUES
    ('${phone}', '${email}', '${password}');`;

  conn.query(sql, (err, result) => {
    if (err) console.error(err.message);
    else {
      console.log(result);
    }
  });
}

module.exports = { addData };
