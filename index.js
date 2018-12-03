require('babel-register');
require('dotenv').config();

const { startServer } = require('./src/app');

startServer(process.env.PORT);
