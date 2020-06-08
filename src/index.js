// const app = require('./app')
require('./datebase')
const PORT = process.env.PORT || 2000

// async function init(){
//   await app.listen(PORT);
//   console.log('Server on port 2000');
  
// }
const express = require('express');
const app = express();
const path = require('path');

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/my_barbershop",
 { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false }
  ).then(db => console.log('Datebase is Connected!'))


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(require('./controllers/authController'));

app.use(express.static(path.join(__dirname, "pictureUser")))
app.listen(PORT,console.log(`Server is starting at ${PORT}`))
// init();

