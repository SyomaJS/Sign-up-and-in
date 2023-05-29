const mysql = require("mysql2");
const { connectDb } = require("../helpers/connectDb");

function addData(req, res) {
  const conn = connectDb();

  const { phone, email, password, first_name, last_name } = req.body;

  let sql = "SELECT * FROM users";
  conn.query(sql, (err, result) => {
    if (err) {
      console.error("Error selecting users:", err.message);
      return;
    }

    let check = true;
    for (const user of result) {
      if (user.email == email || user.phone == phone) {
        check = false;
        break;
      }
    }

    if (check) {
      try {
        check = false;
        let sql = `INSERT INTO users (first_name, last_name, phone, email, password) VALUES
    ('${first_name}', '${last_name}', '${phone}', '${email}', '${password}');`;

        conn.query(sql, (err, result) => {
          if (err) console.error("Error: ", err.message);
          else {
            console.log(result);
          }
        });
      } catch (err) {
        console.log(`Error while inserting .. ${err.message}`);
      }
    } else {
      console.log("Unaqa email yoki number band ... ");
    }
  });
}

module.exports = { addData };

/*
    ('John', 'Doe', '1234567890', 'john.doe@mail.ru', '123456'),
    ('Jane', 'Smith', '9876543210', 'jane.smith@mail.ru', '654321'),
*/
