const express = require('express');
const user = require('./controllers/User');
/* const jwtValidation = require('./middlewares/jwt.validation'); */
const registerValidation = require('./middlewares/register.validation');

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.status(200).json({ message: 'forge_op_back versão 1.0' }));
app.post('/register', registerValidation, user.registerUser);

module.exports = app;