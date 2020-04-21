console.log("app is loading");

const express = require("express");
const PORT = process.env.PORT || 2000;
const app = express();



const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const path = require('path');
const barbershopModule = require('./Users');


const multer = require("multer");
const storage = multer.diskStorage({
  destination: "pictureUser",
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)

  }
})
const upload = multer({
  storage: storage
})


app.use(express.static(path.join(__dirname, "pictureUser")))

// app.use(express.static(publicPath));

app.post

app.post("/Users/signUp", upload.single("img"), (req, res) => {
  barbershopModule.registration(req, res);
});

app.post("/Users/login", (req, res) => {
  barbershopModule.login(req, res);
});

// app.post("/userAdmin/register",(req,res)=>{
//   console.log("/userAdmin/register is accessed");
//   barbershopModule.adminSignUp(req, res);

// })

app.post("/userAdmin/login", (req, res) => {
  console.log("/userAdmin/login is accessed");
  barbershopModule.adminSignIn(req, res);

})

app.post("/queues/scheduledCustomerQueues", (req, res) => {
  console.log("--------------/queues/scheduled Queues is accessed");
  barbershopModule.settingQueues(req, res);
})

app.get("/queues/scheduledCustomerQueues", (req, res) => {
  console.log("--------------/queues/scheduled Queues is accessed");
  barbershopModule.getQueues(req, res);
})

app.delete("/queues/scheduledCustomerQueues/:id", (req, res) => {
  console.log("-----delete---------/queues/scheduled Queues is accessed");
  barbershopModule.deleteQueues(req, res);
})

app.put("/adminUpdatesOperatingHours/:day", (req, res) => {
  console.log(req.body);
  barbershopModule.updateOperatingHours(req, res);
  console.log('new',req.body);
  console.log('----------------successfully updated one day---------------------');
})

app.get("/adminUpdates", (req, res) => {
  barbershopModule.gets(req, res);
  console.log('----------------successfully updated get---------------------');
})
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});




