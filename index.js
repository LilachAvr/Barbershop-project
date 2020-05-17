// console.log("app is loading");

// const express = require("express");
// const PORT = process.env.PORT || 2000;
// const app = express();



// // const bodyParser = require('body-parser');

// // app.use(bodyParser.json());

// app.use(express.json());
// app.use(express.urlencoded({extended: false}));
// // app.use(bodyParser.urlencoded({ extended: true }));
// const path = require('path');
// const barbershopModule = require('./Users');

// const multer = require("multer");
// const storage = multer.diskStorage({
//   destination: "pictureUser",
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + file.originalname)

//   }
// })
// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 1000000 },
// })

// app.use(express.static(path.join(__dirname, "pictureUser")))

// app.post




// app.post("/Users/signUp", (req, res, next) => {
//   console.log("/usser/register is accessed");
//   barbershopModule.registration(req, res, next);
// });

// app.post("/Users/login", (req, res) => {
//   barbershopModule.login(req, res, next);
// });

// app.post("/userAdmin/register",(req,res, next)=>{
//   console.log("/userAdmin/register is accessed");
//   barbershopModule.adminSignUp(req, res);

// })

// app.post("/userAdmin/login", (req, res, next) => {
//   console.log("/userAdmin/login is accessed");
//   barbershopModule.adminSignIn(req, res);

// })

// app.post("/queues/scheduledCustomerQueues", (req, res) => {
//   console.log("--------------/queues/scheduled Queues is accessed");
//   barbershopModule.settingQueues(req, res);
// })

// app.get("/queues/scheduledCustomerQueues", (req, res) => {
//   console.log("--------------/queues/scheduled Queues is accessed");
//   barbershopModule.getQueues(req, res);
// })

// app.delete("/queues/scheduledCustomerQueues/:id", (req, res) => {
//   console.log("-----delete---------/queues/scheduled Queues is accessed");
//   barbershopModule.deleteQueues(req, res);
// })


// app.get("/adminUpdates", (req, res) => {
//   barbershopModule.gets(req, res);
//   console.log('----------------successfully updated get---------------------');
// })

// app.post("/upload", upload.single('myImage'), (req, res) => {
//   barbershopModule.uploadImg(req, res);
//   console.log('successe upload image');
// });

// app.get("/uploadImg", (req, res) => {
//   console.log("--------------/uploadImg ----------------------");
//   barbershopModule.getImages(req, res);
// })

// app.listen(PORT, () => {
//   console.log(`listening on port ${PORT}`);
// });




