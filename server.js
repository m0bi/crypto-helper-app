const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const ccxt = require('ccxt');
const bodyParser = require("body-parser");
//var resolve = require("./logic.js");
//const keys = require("./keys");
var VerifyToken = require('./auth/VerifyToken.js');
const keys = require("./keys");
global.__root = __dirname + '/';

const mongoose = require('mongoose');
var database = 'shortcoindb';
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/" + database);
var Redis = require('ioredis');
var redis = new Redis({
  port: 18167,          // Redis port
  host: 'redis-18167.c55.eu-central-1-1.ec2.cloud.redislabs.com',   // Redis host
  family: 4,           // 4 (IPv4) or 6 (IPv6)
  password: keys.redis_key,
  db: 0
});


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static("client/public"));
}

var UserController = require(__root + 'user/UserController');
app.use('/api/users', UserController);

var AuthController = require(__root + 'auth/AuthController');
app.use('/api/auth', AuthController);


app.get("/api/live", (req, res) => {
  (async function test1(){
    await redis.get('live').then(function(result){
      res.json(JSON.parse(result));
    }).catch(err => console.log(err));
  })();
});

app.get("/api/books", (req, res) => {
  (async function test2(){
    await redis.get('books').then(function(result){
      res.json(JSON.parse(result));
    }).catch(err => console.log(err));
  })();
});

app.get("/api/news", (req, res) => {
  (async function news() {
    await redis.get('news').then(function (result) {
      res.json(JSON.parse(result));
    }).catch(err => console.log(err));
  })();
});


app.get("/api/master", (req, res) => {
  (async function master() {
    await redis.get('hilo').then((result)=>{
      res.json(JSON.parse(result));
    }).catch(err=> console.log(err));
  })();
});



app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
