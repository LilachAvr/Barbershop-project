const { Schema, model} = require('mongoose');


const Images = new Schema({
    filename: String
});

module.exports = model("uploadImages", Images)