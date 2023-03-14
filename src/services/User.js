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

module.exports = { registerUser };