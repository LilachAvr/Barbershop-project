const { Router } = require('express');
const router = Router();

const jwt = require('jsonwebtoken')
const config = require('../config')
const User = require('../Models/User')
const Administrator = require('../Models/AdminLogin')
const UploadImages = require('../Models/uploadImage')
const SettingQueues = require('../Models/settingQ')
const generateJWT = require('../utils/auth')
const verifyToken = require('./verifyToken')


const multer = require("multer");
const storage = multer.diskStorage({
    destination: "pictureUser",
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)

    }
})
const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
})





router.post("/users/signUp", async (req, res, next) => {
    const { firstName, lastName, phone, password } = req.body;
    const user = new User({
        firstName,
        lastName,
        phone,
        password
    })
    user.password = await user.encryptPassword(user.password);
    await user.save();

    const token = await generateJWT(user)
    res.json({ auth: true, token });
});


router.post("/users/login", async (req, res, next) => {
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
    const token = await generateJWT(user)
    res.json({ auth: true, token });
});

router.get('/users/getUser', verifyToken, async (req, res, next) => {
    const user = await User.findById(req.userId, { password: 0 })
    if (!user) {
        return res.status(404).send('No user found');
    }
    res.json(user);
});

router.get("/Users/me", verifyToken, async (req, res, next) => {
    const user = await User.findById(req.userId, { password: 0 })
    token = req.get('x-access-token')
    console.log(token);
    
    if (!user) { 
        return res.status(404).send('No user found');
    }
    res.json(user);
});

router.post("/userAdmin/register", async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;
    const user = new Administrator({
        firstName,
        lastName,
        email,
        password
    })
    user.password = await user.encryptPassword(user.password);
    await user.save();

    const token = await generateJWT(user)
    res.json({ auth: true, token });
});

router.post("/userAdmin/login", async (req, res, next) => {

    const { email, password } = req.body;
    const user = await Administrator.findOne({ email: email });
    if (!user) {
        return res.status(404).send("The email doesn't exist");
    }
    const validPassword = await user.validatePassword(password)

    if (!validPassword) {
        res.status(401).json({
            auth: false,
            token: null
        })
    }

    const token = await generateJWT(user)
    res.json({ auth: true, token });
})

///////////////////////////////////////////////////////////////not work/////////////////////////////////////////////////////////////////////
// router.get('/userAdmin/getUser', verifyToken, async (req, res, next) => {
//     const user = await User.findById(req.userId, { password: 0 })
//     if (!user) {


//         return res.status(404).send('No user found');
//     }
//     res.json(user);
// });

// router.get("/userAdmin/me", verifyToken, async (req, res, next) => {
//     const user = await User.findById(req.userId, { password: 0 })
//     if (!user) {
//         console.log('wnrf', res);
//         return res.status(404).send('No user found');
//     }
//     res.json(user);
// });
///////////////////////////////////////////////////////////////not work/////////////////////////////////////////////////////////////////////

router.post("/upload", upload.single('myImage'), (req, res) => {
    const obj = new UploadImages({
        filename: req.file.filename,
    })

    obj.save()
    res.status(201).send(obj)
    console.log('successe upload image');
});

router.get("/uploadImg", (req, res) => {
    console.log("--------------/uploadImg ----------------------");
    return UploadImages.find({})
        .then((date) => {
            console.log(date, 'images from db');
            res.status(200).send(date);
        })
        .catch((err) => {
            console.log(err);
            res.status(500);
        })
})

router.post("/queues/scheduledCustomerQueues", (req, res) => {
    console.log("--------------/queues/scheduled Queues is accessed");
    const user = req.body;
    const userObj = new SettingQueues({
        userName: user.userName,
        phone: user.phone,
        time: user.time,
        date: user.date,
        style: user.style,
        barber: user.barber
    })

    SettingQueues.findOne({ $or: [{ userName: userObj.userName }, { $and: [{ date: userObj.date }, { time: userObj.time }] }] }, function (err, obj) {
        if (err) throw err;
        if (obj === null) {

            console.log('insert new document');


            userObj.save();
            res.status(201).send(userObj);



        } else {
            // findTimeInDate(userObj, res);

            console.log('error already exist');

            res.status(409).send(userObj);

        }
    })
})

router.get("/queues/scheduledCustomerQueues", (req, res) => {
    console.log("--------------/queues/scheduled Queues is accessed");
    return SettingQueues.find({})
        .then((data) => {
            console.log(data, 'data from db');
            res.status(200).send(data);

        })
        .catch((err) => {
            console.log(err);
            res.status(500);
        })
})

router.delete("/queues/scheduledCustomerQueues/:id", (req, res) => {
    console.log("-----delete---------/queues/scheduled Queues is accessed");
    console.log(req.params.id);
    console.log(req.params.phone);
    SettingQueues.remove({ _id: req.params.id })


        .then((data) => {
            SettingQueues.find({ phone: req.params.phone })
            // console.log(req.params.id, 'data from db');
            res.status(200).send(data);
            // console.log(data, 'deleted!!!');
            console.log(SettingQueues, 'ahdjhfskladJHSDAJFKSAJDHDafksjhafksjhfasgjkhfaksjhfa--------------------------------------------------------------');


        })
        .catch((err) => {
            console.log(err);
            res.status(500);
        })
})

module.exports = router