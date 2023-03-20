const express = require('express');
const cors = require('cors');
const user = require('./controllers/User');
/* const jwtValidation = require('./middlewares/jwt.validation'); */
const registerValidation = require('./middlewares/register.validation');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.status(200).json({ message: 'forge_op_back versão 1.0' }));
app.post('/register', registerValidation, user.registerUser);
app.post('/login', user.loginUser);

module.exports = app;