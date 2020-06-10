const { Schema, model} = require('mongoose');


const Images = new Schema({
    thumbnail: String,
    original: String,
    className: String

});

module.exports = model("uploadImages", Images)