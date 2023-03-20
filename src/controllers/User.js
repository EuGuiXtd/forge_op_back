const bcrypt = require('bcrypt');
const userService = require('../services/User');

const registerUser = async (req, res) => {
  const { user, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const token = await userService.registerUser(user, email, hashedPassword);

  if (token === null) {
    return res.status(409).json({ message: 'Email already registered' });
  }

  return res.status(201).json(token);
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const token = await userService.loginUser(email, password);

  if (token === null) {
    return res.status(401).json({ message: 'User not found' });
  }

  return res.status(201).json(token);
};
module.exports = {
    registerUser,
    loginUser,
};