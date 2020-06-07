// const app = require('./app')
require('./datebase')
const PORT = process.env.PORT || 2000

async function init(){
  await app.listen(PORT);
  console.log('Server on port 2000');
  
}
const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(require('./controllers/authController'));

app.use(express.static(path.join(__dirname, "pictureUser")))
init();

