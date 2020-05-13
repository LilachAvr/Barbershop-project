const { Schema, model} = require('mongoose');

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    phone: String,
    password: String,
    email: String
});

