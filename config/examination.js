const examination = (info, base) => {
  const { phone, email, password, res } = info;
  const user = base.filter((user) => user.email == email)[0];
  if (user) {
    const emailDb = user.email;
    const phoneDb = user.phone;
    const passwordDb = user.password;

    if (phoneDb == phone && passwordDb == password && emailDb == email) {
      res.render("home");
    } else {
      res.render("index");
    }
  } else {
    console.log("User does not exist");
  }
};

module.exports = { examination };
