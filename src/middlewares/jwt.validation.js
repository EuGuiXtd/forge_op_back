const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('authorization');
    const secret = process.env.JWT_SECRET || 'seusecretdetoken';
    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
      }
    try {
        const decoded = jwt.verify(token, secret);
        console.log(decoded);
      } catch (err) {
        return res.status(401).json({ message: 'Token must be a valid token' });
      }
  
    next();
  };