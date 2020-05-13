const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/my_barbershop", { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
const bcrypt = require("bcryptjs");



const Images = new mongoose.Schema({
    filename: String
});

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: String,
    password: String,
    email: String
});

const QueuesSchema = new mongoose.Schema({
    userName: String,
    phone: String,
    time: String,
    date: String,
    style: String,
    barber: String
});


const User = mongoose.model("users", UserSchema);
const Administrator = mongoose.model("userAdmin", UserSchema);
const SettingQueues = mongoose.model("queues", QueuesSchema);
const UploadImages = mongoose.model("uploadImages", Images);


UserSchema.methods.encryptPassword =  (password) => {
    const salt =  bcrypt.getSalt(10);
    return bcrypt.hash(password, salt)
}

 function registration (req, res, next) {
    const { firstName, lastName, phone, password } = req.body;
    let userObj = new User({
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        password: password
    })
    userObj.password = userObj.encryptPassword(userObj.password)
    console.log(userObj);
    res.json({ massage: 'Received' });


}

// function registration(req, res) {

//     const body = req.body;
//     let userObj = new User({
//         firstName: body.firstName,
//         lastName: body.lastName,
//         phone: body.phone,
//         password: body.password

//     })
//     bcrypt.genSalt(10, function (err, salt) {
//         bcrypt.hash(userObj.password, salt, function (err, hash) {
//             userObj.password = hash;
//             userObj.save();
//             res.status(201).send(userObj);
//         });

//     });

// }

function login(req, res) {
    const { phone, password } = req.body;

    const user = User.find(u => { return u.phone === phone && u.password === password })

    if (user) {
        const accessToken = jwt.sign({ phone: user.phone }, accessTokenSecret, { expiresIn: '20m' });
        const refreshToken = jwt.sign({ phone: user.phone }, refreshTokenSecret);
        refreshTokens.push(refreshToken);
        res.json({ accessToken, refreshToken });
    } else {
        res.send('Phone or Password incorrect');
    }
}


// function login(req, res) {
//     const body = req.body;
//     const reqUser = User.findOne({ phone: body.phone }).select('_id password firstName lastName phone')

//     console.log(req.body);
//     console.log('from mongodb');

//     if (reqUser) {
//         reqUser.exec((err, user) => {
//             bcrypt.compare(body.password, user.password, function (err, isMatch) {
//                 if (err) {
//                     console.log(err);
//                 }
//                 else if (isMatch) {
//                     res.send(user)
//                 } else {
//                     res.sendStatus(404);
//                 }
//             })
//         })
//     }
// }

function adminSignUp(req, res) {
    const body = req.body;
    let userObj = new Administrator({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        phone: body.phone,
        password: body.password

    })
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(userObj.password, salt, function (err, hash) {
            userObj.password = hash;
            userObj.save();
            res.status(201).send(userObj);
        });
    });
}

function adminSignIn(req, res) {
    const body = req.body;
    const reqAdmin = Administrator.findOne({ $or: [{ email: body.email }, { phone: body.phone }] }).select('_id password firstName lastName email')

    console.log(req.body);
    console.log('from mongodb');

    if (reqAdmin) {
        reqAdmin.exec((err, user) => {
            bcrypt.compare(body.password, user.password, function (err, isMatch) {
                if (err) {
                    console.log(err);
                }
                else if (isMatch) {
                    res.send(user)
                } else {
                    res.sendStatus(404);
                }
            })
        })
    }
}




function settingQueues(req, res) {
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

}

function getQueues(req, res) {
    return SettingQueues.find({})
        .then((data) => {
            console.log(data, 'data from db');
            res.status(200).send(data);

        })
        .catch((err) => {
            console.log(err);
            res.status(500);
        })
}

function deleteQueues(req, res) {
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
}

function uploadImg(req, res) {
    const obj = new UploadImages({
        filename: req.file.filename,
    })

    obj.save()
    res.status(201).send(obj)
}

function getImages(req, res) {
    return UploadImages.find({})
        .then((date) => {
            console.log(date, 'images from db');
            res.status(200).send(date);
        })
        .catch((err) => {
            console.log(err);
            res.status(500);
        })
}

module.exports.registration = registration;
module.exports.login = login;
module.exports.adminSignIn = adminSignIn;
module.exports.settingQueues = settingQueues;
module.exports.getQueues = getQueues;
module.exports.deleteQueues = deleteQueues;
module.exports.uploadImg = uploadImg;
module.exports.getImages = getImages;
module.exports.adminSignUp = adminSignUp;