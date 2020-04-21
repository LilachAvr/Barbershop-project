
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/my_barbershop", { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: String,
    password: String,
    img: String
});

const QueuesSchema = new mongoose.Schema({
    userName: String,
    phone: String,
    time: String,
    date: String,
    style: String
});
const UpdateActivityTimeSchema = new mongoose.Schema({
    timeOpen: String,
    timeClose: String,
    day: String
});

const User = mongoose.model("users", UserSchema);
const Administrator = mongoose.model("userAdmin", UserSchema);
const SettingQueues = mongoose.model("queues", QueuesSchema);
const AdminUpdatesActivityTime = mongoose.model("updateacttimes", UpdateActivityTimeSchema);

findTimeInDate = (arj, res) => {
    SettingQueues.findOne({ time: arj.time }, function (err, obj) {
        if (err) throw err;
        if (obj === null) {

            arj.save();
            res.status(201);
            return
            // .send(arj);

        } else {
            console.log(arj);
            res.status(403);

            return
        }
    }
    )
};


function registration(req, res) {

    const body = req.body;
    let userObj = new User({
        firstName: body.firstName,
        lastName: body.lastName,
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

function login(req, res) {
    const body = req.body;
    const reqUser = User.findOne({ phone: body.phone }).select('_id password firstName lastName phone')

    if (reqUser) {
        reqUser.exec((err, user) => {
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

// function adminSignUp(req, res) {
//     const user = req.body;
//     var objUser = new Administrator({
//         firstName: user.firstName,
//         lastName: user.lastName,
//         phone: user.phone,
//         password: user.password

//     })
//     Administrator.findOne({ phone: objUser.phone }, function (err, objAdmin) {
//         if (err) throw err;
//         if (objAdmin !== null) {
//             res.status(403).send('already exists');
//         } else {
//             console.log(objAdmin);
//             objUser.save();
//             res.status(201).send(objUser);
//         }
//     })

// }


function adminSignIn(req, res) {
    const user = req.body;
    console.log('jj');

    console.log(req.body);
    console.log('from mongodb');

    Administrator.findOne({ email: user.email, password: user.password }, function (err, objAdmin) {
        if (err) {
            console.log(err);
            console.log(objAdmin);
            console.log('error');

        }
        else if (objAdmin) {
            console.log(objAdmin);
            res.send(objAdmin)
        } else {
            console.log(objAdmin);
            res.sendStatus(404);
            console.log('error 404');
        }
    })


}

function settingQueues(req, res) {
    const user = req.body;
    const userObj = new SettingQueues({
        userName: user.userName,
        phone: user.phone,
        time: user.time,
        date: user.date,
        style: user.style
    })

    SettingQueues.findOne({ date: userObj.date }, function (err, obj) {
        if (err) throw err;
        if (obj === null) {

            console.log('insert new document');

            userObj.save();
            res.status(201).send(userObj);



        } else {
            findTimeInDate(userObj, res);

            console.log('error already exist');

            res.status(404).send(userObj);

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

function gets(req, res) {
    return AdminUpdatesActivityTime.find({})
        .then((data) => {
            console.log(data, 'data from db');
            res.status(200).send(data);

        })
        .catch((err) => {
            console.log(err);
            res.status(500);
        })
}

function updateOperatingHours(req, res) {
    let day = req.params.day;
    console.log(day, 'day');
    
    
    AdminUpdatesActivityTime.findOne({ day: day }, function (err, foundObj) {
        console.log(foundObj,'foundobj');
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            if (!foundObj) {
                
                res.sendStatus(404);

            } else {
                // if (req.body.day) {
                //     foundObj.day = req.body.day;
                // }
                if (req.body.timeOpen) {
                    foundObj.timeOpen = req.body.timeOpen;
                }
                if (req.body.timeClose) {
                    foundObj.timeClose = req.body.timeClose
                }
                foundObj.save(function (err, updateObj) {
                    if (err) {
                        console.log(err);
                        res.sendStatus(500);
                    } else {
                        res.send(updateObj);
                    }
                })
            }
        }
    })

}

module.exports.registration = registration;
module.exports.login = login;
module.exports.adminSignIn = adminSignIn;
module.exports.settingQueues = settingQueues;
module.exports.getQueues = getQueues;
module.exports.deleteQueues = deleteQueues;
module.exports.updateOperatingHours = updateOperatingHours;
module.exports.gets = gets;