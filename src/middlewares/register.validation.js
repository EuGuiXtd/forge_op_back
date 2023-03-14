/* eslint-disable complexity */
module.exports = (req, res, next) => {
    const { user, email, password } = req.body;
    const regexemail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    if (!user || !email || !password) {
        return res.status(401).json({ message: 'All fields must be placed' });
      }
    if (password.length < 6) {
        return res.status(401).json({ message: 'Password must have a length 6' });
    }
    if (user.length > 12) {
        return res.status(401).json({ message: 'user must have a length 12' });
    }
    if (!regexemail.test(email)) {
        return res.status(401).json({ message: 'Email must be a valid email' });
    }
  
    next();
  };