const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(require('./controllers/authController'));

app.use(express.static(path.join(__dirname, "pictureUser")))

module.exports = app;