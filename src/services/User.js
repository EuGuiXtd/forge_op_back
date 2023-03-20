const bcrypt = require('bcrypt');
const { User } = require('../models');
const { GenerateToken } = require('../Jwt.utils/jwt.generate');

const registerUser = async (user, email, password) => {
  const users = await User.findOne({
    where: { email },
  });
  if (users) {
    return null;
  }

  await User.create({ user, email, password });
  const token = GenerateToken({ email });
  return { token };
};

const loginUser = async (email, password) => {
  const user = await User.findOne({
    where: { email },
  });
  console.log(user);
  const dbPassword = user.password;
  const validate = await bcrypt.compare(password, dbPassword);
  if (validate === false || !user === null) {
    return null;
  }
  const token = GenerateToken({ email });
  return { token };
};
module.exports = { registerUser, loginUser };