const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.status(200).json({ message: 'forge_op_back versão 1.0' }));

module.exports = app;