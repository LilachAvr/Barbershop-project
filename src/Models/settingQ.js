
const { Schema, model} = require('mongoose');

const QueuesSchema = new Schema({
    userName: String,
    phone: String,
    time: String,
    date: String,
    style: String,
    barber: String
});


module.exports = model("queues", QueuesSchema);