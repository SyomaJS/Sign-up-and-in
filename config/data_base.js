const { examination } = require("./examination");
const { connectDb } = require("../helpers/connectDb");

function getDataDb(info) {
  const conn = connectDb();

  conn.connect((err) => {
    if (err) console.error("error connecting", err);

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
