var express = require("express");
var bodyParser = require("body-parser");
const path = require("path");

// MongoDb Connection here
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017");
var db = mongoose.connection;
db.on("Error", console.log.bind(console, "Error in Connection"));
db.once("Open", function (callback) {
  console.log("Connection Successfull");
});
//
var app = express();

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.post("/", function (req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var pass = req.body.password;
  var phone = req.body.phone;

  var data = {
    name: name,
    Model: Model,
    CarNumber: CarNumber,
    Color: Color,
  };
  // MongoDb Collection code here
  db.collection("CarDetails").insertOne(data, function (err, collection) {
    if (err) throw err;
    console.log("Data Inserted Successfully");
  });

  //
  res.sendFile(path.join(__dirname + ".//signup_success.html"));
});

app
  .get("/", function (req, res) {
    res.set({
      "Access-control-Allow-Origin": "*",
    });
    res.sendFile(path.join(__dirname + "./components/Form"));
  })
  .listen(3000);

console.log("server listening at port 3000");
