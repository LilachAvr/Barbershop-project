const jwt = require('jsonwebtoken')
const config = require('../config')

async function  generateJWT(user) {
    const token = await jwt.sign({ id: user._id },
        config.secret, {
        expiresIn: 60 * 60 * 24
    })
    
    return token
}


module.exports = generateJWT;