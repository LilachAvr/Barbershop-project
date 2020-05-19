const { Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    phone: String,
    password: String,
    email: String
});

UserSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}

UserSchema.methods.validatePassword = function (password) {
    return bcrypt.compare(password, this.password)
}

module.exports = model("userAdmin", UserSchema)