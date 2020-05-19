const jwt = require('jsonwebtoken');
const config = require('../config')

function verifyToken(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(401).json({
            auth: false,
            message: 'No token provied'
        });
    }
    const decoded = jwt.verify(token, config.secret);
    console.log(decoded );
    
    req.userId = decoded.id;
    next();
}

module.exports = verifyToken;

