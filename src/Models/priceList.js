const { Schema, model} = require('mongoose');

const PriceSchema = new Schema({
    haircutType: String,
    price: String
});


module.exports = model("prices", PriceSchema);