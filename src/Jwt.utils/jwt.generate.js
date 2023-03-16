const jwt = require('jsonwebtoken');

const GenerateToken = (email) => {
  const secret = process.env.JWT_SECRET || 'seusecretdetoken';
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const payload = { 
    email,
  };

    const token = jwt.sign(payload, secret, jwtConfig);
    return token;
};

module.exports = { GenerateToken };
