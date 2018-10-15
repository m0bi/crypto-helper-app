const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const ccxt = require('ccxt');
const bodyParser = require("body-parser");
//var resolve = require("./logic.js");
var VerifyToken = require('./auth/VerifyToken.js');
const keys = require("./keys");
global.__root = __dirname + '/';
var { DateTime } = require('luxon');
const mongoose = require('mongoose');
var database = 'shortcoindb';
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/" + database);
var cron = require('node-cron');
var Redis = require('ioredis');
var redis = new Redis({
    port: 12599,          // Redis port
    host: 'redis-12599.c55.eu-central-1-1.ec2.cloud.redislabs.com',   // Redis host
    family: 4,           // 4 (IPv4) or 6 (IPv6)
    password: keys.redis_key,
    db: 0
  });
  
var resolve = require("./logic.js");
var dbnews = require('./databasenews/databasenews.js');
var dbusd = require('./databaseusd/databaseusd.js');
var master = require('./master/master.js');

var anxpro = resolve.anxpro();
var anybits = resolve.anybits();
var binance = resolve.binance();
var bitbay = resolve.bitbay();
var bitfinex2 = resolve.bitfinex2();
var bitflyer = resolve.bitflyer();
var bitstamp = resolve.bitstamp();
var btcmarkets = resolve.btcmarkets();
var btctradeim = resolve.btctradeim();
var cex = resolve.cex();
var coinex = resolve.coinex();
var coinexchange = resolve.coinexchange();
var coinmate = resolve.coinmate();
var exmo = resolve.exmo();
var gatecoin = resolve.gatecoin();
var gemini = resolve.gemini();
var hitbtc2 = resolve.hitbtc2();
var kraken = resolve.kraken();
var kucoin = resolve.kucoin();
var lakebtc = resolve.lakebtc();
var livecoin = resolve.livecoin();
var liqui = resolve.liqui();
//var theocean = resolve.theocean();
var quadrigacx = resolve.quadrigacx();
var therock = resolve.therock();
var tidex = resolve.tidex();
var wex = resolve.wex();
var yobit = resolve.yobit();
var zaif = resolve.zaif();

cron.schedule('*/30 * * * *', ()=>{
    dbnews.news();
    console.log("Running task: News");
  });

cron.schedule('*/5 * * * *', ()=>{
    dbusd.dollar();
    console.log("Running task: USD");
  });


async function redisExchange(exchange) {
  try{
  var response = await Promise.resolve(exchange);
    let redisArray = [];
    for (let key in response) {
      if (response[key].last !== undefined) {
        //key is redis key
        //flatten (stringify array and add as response)
        redisArray.push([response.id, key, response[key].last, response[key].bid, response[key].ask, DateTime.local(new Date(response[key].timestamp)).toLocalString(DateTime.DATETIME_SHORT)]);
       // var anxproObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
      }
    }
    redis.set(response.id, JSON.stringify(redisArray), 'ex', 360);
    redis.set('time', JSON.stringify(new Date()));
    } catch(err){
     console.log(err);
    }
}


cron.schedule('*/5 * * * *', ()=>{
  redisExchange(anxpro);
   redisExchange(anybits);
   redisExchange(binance);
   redisExchange(bitbay);
   redisExchange(bitfinex2);
   redisExchange(bitflyer);
   redisExchange(bitstamp);
   redisExchange(btcmarkets);
   redisExchange(btctradeim);
   redisExchange(cex);
   redisExchange(coinex);
   redisExchange(coinexchange);
   redisExchange(coinmate);
   redisExchange(exmo);
   redisExchange(gatecoin);
   redisExchange(gemini);
   redisExchange(hitbtc2);
   redisExchange(kraken);
   redisExchange(kucoin);
   redisExchange(lakebtc);
   redisExchange(livecoin);
   redisExchange(liqui);
   redisExchange(quadrigacx);
   redisExchange(therock);
   redisExchange(tidex);
   redisExchange(wex);
   redisExchange(yobit);
   redisExchange(zaif);
  console.log("Running task: Live");
});


cron.schedule('*/5 * * * *', ()=>{
  (async function red() {
    let rootObj = {};
    await redis.get('anxpro').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('anybits').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('binance').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('bitbay').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('bitfinex2').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('bitflyer').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('bitstamp').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('btcmarkets').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('btctradeim').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('cex').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('coinex').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('coinexchange').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('coinmate').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('exmo').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('gatecoin').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('gemini').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('hitbtc2').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('kraken').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('kucoin').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('lakebtc').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('livecoin').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('liqui').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    // await redis.get('theocean').then(function (result) {
    //   let resultArr = JSON.parse(result);
    //   resultArr.map((val) => {
    //     rootObj[val[1]] = rootObje[val[1]] || [];
    //     rootObj[val[1]].push(val);
    //   });
    // });
    await redis.get('quadrigacx').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('therock').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('tidex').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('wex').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('yobit').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('zaif').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err=>console.log(err));
    redis.set('live', JSON.stringify(rootObj));
  })();
});

cron.schedule('*/5 * * * *', ()=>{
  (async function master() {
    const VALS = [];
    await redis.get('cash').then((result) => {
        VALS.push(JSON.parse(result));
    }).catch(err => console.log(err));
    await redis.get('live').then((result) => {
        VALS.push(JSON.parse(result));
    }).catch(err => console.log(err));
    const RETURN = [];
    for(key in VALS[1]) {
      const SPLIT = key.split('/');
      let returnObject = {};
      VALS[0].map((value)=>{
        if(value.id == SPLIT[0]) {
          returnObject["LID"] = value.id;
          returnObject["leftDisplayName"] = value.display_name;
          returnObject["left24hrChange"] = value.cap24hrChange;
          returnObject["leftPrice"] = value.price;
        }
        if(value.id == SPLIT[1]) {
          returnObject["RID"] = value.id;
          returnObject["rightDisplayName"] = value.display_name;
          returnObject["right24hrChange"] = value.cap24hrChange;
          returnObject["rightPrice"] = value.price;
        }
        if(SPLIT[0] == 'USDT'){
            returnObject["LID"] = 'USDT';
            returnObject["leftDisplayName"] = 'Tether';
            returnObject["left24hrChange"] = 0;
            returnObject["leftPrice"] = 1;
        }
        if(SPLIT[1] == 'USDT'){
            returnObject["RID"] = 'USDT';
            returnObject["rightDisplayName"] = 'Tether';
            returnObject["right24hrChange"] = 0;
            returnObject["rightPrice"] = 1;
        }
      });
      returnObject["values"] = VALS[1][key];
      RETURN.push(returnObject);
    }
    redis.set('master', JSON.stringify(RETURN), 'ex', 360);
  })();
});


cron.schedule('*/5 * * * *', ()=>{
  master.master();
  console.log("Running task: Master");
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
