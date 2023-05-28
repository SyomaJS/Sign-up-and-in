const examination = (info, base) => {
  const { phone, email, password } = info;
  const user = base.filter((user) => user.email == email)[0];

  console.log(phone, email, password);
  console.log(user.phone, user.email, user.password);

  
  const { phoneDb, emailDb, passwordDb } = user;
  if (phoneDb == phone && passwordDb == password && emailDb == email) {
    return true;
  } else {
    return false;
  }
};

module.exports = { examination };
