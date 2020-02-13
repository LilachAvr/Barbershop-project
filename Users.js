
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/my_barbershop", { useUnifiedTopology: true, useNewUrlParser: true }); 
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    img: String
});

const QueuesSchema = new mongoose.Schema({
    userName: String,
    email: String,
    time: String,
    date: String,
    style: String
});

const User = mongoose.model("users", UserSchema);
const Administrator = mongoose.model("userAdmin", UserSchema);
const SettingQueues = mongoose.model("queues", QueuesSchema);

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
        email: body.email,
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

 function login  (req, res) {
    const body = req.body;
    const reqUser =  User.findOne({ email: body.email }).select('_id password firstName lastName email')
    
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
//         email: user.email,
//         password: user.password

//     })
//     Administrator.findOne({ email: objUser.email }, function (err, objAdmin) {
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
        email: user.email,
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
    console.log(req.params.email);
    SettingQueues.remove({ _id: req.params.id })



        .then((data) => {
            SettingQueues.find({ email: req.params.email })
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

module.exports.registration = registration;
module.exports.login = login;
module.exports.adminSignIn = adminSignIn;
module.exports.settingQueues = settingQueues;
module.exports.getQueues = getQueues;
module.exports.deleteQueues = deleteQueues;
