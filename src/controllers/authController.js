const { Router } = require('express');
const router = Router();

const jwt = require('jsonwebtoken')
const config = require('../config')
const User = require('../Models/User')
const verifyToken = require('./verifyToken')


router.post("/Users/signUp", async (req, res, next) => {
    const { firstName, lastName, phone, password } = req.body;
    const user = new User({
        firstName,
        lastName,
        phone,
        password
    })
    user.password = await user.encryptPassword(user.password);
    await user.save();

    const token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 60 * 60 * 24
    })

    res.json({ auth: true, token });
});

router.post("/Users/login", async (req, res, next) => {

    const { phone, password } = req.body;
    const user = await User.findOne({ phone: phone });
    if (!user) {
        return res.status(404).send("The phone doesn't exist");
    }
    const validPassword = await user.validatePassword(password)

    if (!validPassword) {
        res.status(401).json({
            auth: false,
            token: null
        })
    }

    const token = await jwt.sign({ id: user._id },
        config.secret, {
        expiresIn: 60 * 60 * 24
    })
    res.json({ auth: true, token });
});

router.get("/Users/me", verifyToken, async (req, res, next) => {
    const user = await User.findById(req.userId, { password: 0 })
    if (!user) {
        return res.status(404).send('No user found');
    }
    res.json(user);
});

module.exports = router