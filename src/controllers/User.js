const userService = require('../services/User');

const registerUser = async (req, res) => {
  const { user, email, password } = req.body;

  const token = await userService.registerUser(user, email, password);

  if (token === null) {
    return res.status(409).json({ message: 'Email already registered' });
  }

  return res.status(201).json(token);
};
module.exports = {
    registerUser,
};