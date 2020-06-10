const express = require('express');
const app = express();
const path = require('path');
const bodyParser= require('body-parser')
const uploadDestination = 'uploadDestination'

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(require('./controllers/authController'));

app.use(express.static(path.join(__dirname, uploadDestination)))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: false}))
// if (process.env.NODE_ENV === 'production') {
//  app.use(express.static('client/build'))   
// }


module.exports = app;