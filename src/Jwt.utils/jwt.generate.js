const jwt = require('jsonwebtoken');

const GenerateToken = (payload) => {
  const secret = process.env.JWT_SECRET || 'seusecretdetoken';
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

    const token = jwt.sign(payload, secret, jwtConfig);
    return token;
};

module.exports = { GenerateToken };
