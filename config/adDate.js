const mysql = require("mysql2");
const { connectDb } = require("../helpers/connectDb");

function addData(req, res) {
  const conn = connectDb();

  const { phone, email, password } = req.body;

  let sql = "SELECT * FROM users";
  conn.query(sql, (err, result) => {
    if (err) {
      console.error("Error selecting users:", err.message);
      return;
    }
    let check = true;
    for (const user of result) {
      if (user.email == email) {
        check = false;
        break;
      }
    }

    if (check) {
      check = false;
      let sql = `INSERT INTO users (phone, email, password) VALUES
      ('${phone}', '${email}', '${password}');`;

      conn.query(sql, (err, result) => {
        if (err) console.error(err.message);
        else {
          console.log(result);
        }
      });
    } else {
      console.log("Unaqa email band ... ");
    }
  });
}

module.exports = { addData };
