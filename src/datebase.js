const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/my_barbershop",
 { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false }
  ).then(db => console.log('Datebase is Connected!'))

