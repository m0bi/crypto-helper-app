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
var redis = new Redis(process.env.REDIS_URL);



// app.get('/live', function (req, res) {
//   (async function red() {
//     let rootObj = {};
//     await redis.get('anxpro').then(function (result) {
//       let resultArr = JSON.parse(result);
//       resultArr.map((val) => {
//         rootObj[val[1]] = rootObj[val[1]] || [];
//         rootObj[val[1]].push(val);
//       });
//     }).catch(err => console.log(err));
//     await redis.get('anybits').then(function (result) {
//       let resultArr = JSON.parse(result);
//       resultArr.map((val) => {
//         rootObj[val[1]] = rootObj[val[1]] || [];
//         rootObj[val[1]].push(val);
//       });
//     }).catch(err => console.log(err));
//     await redis.get('binance').then(function (result) {
//       let resultArr = JSON.parse(result);
//       resultArr.map((val) => {
//         rootObj[val[1]] = rootObj[val[1]] || [];
//         rootObj[val[1]].push(val);
//       });
//     }).catch(err => console.log(err));
//     await redis.get('bitbay').then(function (result) {
//       let resultArr = JSON.parse(result);
//       resultArr.map((val) => {
//         rootObj[val[1]] = rootObj[val[1]] || [];
//         rootObj[val[1]].push(val);
//       });
//     }).catch(err => console.log(err));
//     await redis.get('bitfinex2').then(function (result) {
//       let resultArr = JSON.parse(result);
//       resultArr.map((val) => {
//         rootObj[val[1]] = rootObj[val[1]] || [];
//         rootObj[val[1]].push(val);
//       });
//     }).catch(err => console.log(err));
//     await redis.get('bitflyer').then(function (result) {
//       let resultArr = JSON.parse(result);
//       resultArr.map((val) => {
//         rootObj[val[1]] = rootObj[val[1]] || [];
//         rootObj[val[1]].push(val);
//       });
//     }).catch(err => console.log(err));
//     await redis.get('bitlish').then(function (result) {
//       let resultArr = JSON.parse(result);
//       resultArr.map((val) => {
//         rootObj[val[1]] = rootObj[val[1]] || [];
//         rootObj[val[1]].push(val);
//       });
//     }).catch(err => console.log(err));
//     await redis.get('bitstamp').then(function (result) {
//       let resultArr = JSON.parse(result);
//       resultArr.map((val) => {
//         rootObj[val[1]] = rootObj[val[1]] || [];
//         rootObj[val[1]].push(val);
//       });
//     }).catch(err => console.log(err));
//     await redis.get('btcmarkets').then(function (result) {
//       let resultArr = JSON.parse(result);
//       resultArr.map((val) => {
//         rootObj[val[1]] = rootObj[val[1]] || [];
//         rootObj[val[1]].push(val);
//       });
//     }).catch(err => console.log(err));
//     await redis.get('btctradeim').then(function (result) {
//       let resultArr = JSON.parse(result);
//       resultArr.map((val) => {
//         rootObj[val[1]] = rootObj[val[1]] || [];
//         rootObj[val[1]].push(val);
//       });
//     }).catch(err => console.log(err));
//     await redis.get('cex').then(function (result) {
//       let resultArr = JSON.parse(result);
//       resultArr.map((val) => {
//         rootObj[val[1]] = rootObj[val[1]] || [];
//         rootObj[val[1]].push(val);
//       });
//     }).catch(err => console.log(err));
//     await redis.get('coinex').then(function (result) {
//       let resultArr = JSON.parse(result);
//       resultArr.map((val) => {
//         rootObj[val[1]] = rootObj[val[1]] || [];
//         rootObj[val[1]].push(val);
//       });
//     }).catch(err => console.log(err));
//     await redis.get('coinexchange').then(function (result) {
//       let resultArr = JSON.parse(result);
//       resultArr.map((val) => {
//         rootObj[val[1]] = rootObj[val[1]] || [];
//         rootObj[val[1]].push(val);
//       });
//     }).catch(err => console.log(err));
//     await redis.get('coinfalcon').then(function (result) {
//       let resultArr = JSON.parse(result);
//       resultArr.map((val) => {
//         rootObj[val[1]] = rootObj[val[1]] || [];
//         rootObj[val[1]].push(val);
//       });
//     }).catch(err => console.log(err));
//     await redis.get('coinmate').then(function (result) {
//       let resultArr = JSON.parse(result);
//       resultArr.map((val) => {
//         rootObj[val[1]] = rootObj[val[1]] || [];
//         rootObj[val[1]].push(val);
//       });
//     }).catch(err => console.log(err));
//     await redis.get('exmo').then(function (result) {
//       let resultArr = JSON.parse(result);
//       resultArr.map((val) => {
//         rootObj[val[1]] = rootObj[val[1]] || [];
//         rootObj[val[1]].push(val);
//       });
//     }).catch(err => console.log(err));
//     await redis.get('gatecoin').then(function (result) {
//       let resultArr = JSON.parse(result);
//       resultArr.map((val) => {
//         rootObj[val[1]] = rootObj[val[1]] || [];
//         rootObj[val[1]].push(val);
//       });
//     }).catch(err => console.log(err));
//     await redis.get('gemini').then(function (result) {
//       let resultArr = JSON.parse(result);
//       resultArr.map((val) => {
//         rootObj[val[1]] = rootObj[val[1]] || [];
//         rootObj[val[1]].push(val);
//       });
//     }).catch(err => console.log(err));
//     await redis.get('hitbtc2').then(function (result) {
//       let resultArr = JSON.parse(result);
//       resultArr.map((val) => {
//         rootObj[val[1]] = rootObj[val[1]] || [];
//         rootObj[val[1]].push(val);
//       });
//     }).catch(err => console.log(err));
//     await redis.get('ice3x').then(function (result) {
//       let resultArr = JSON.parse(result);
//       resultArr.map((val) => {
//         rootObj[val[1]] = rootObj[val[1]] || [];
//         rootObj[val[1]].push(val);
//       });
//     }).catch(err => console.log(err));
//     await redis.get('kraken').then(function (result) {
//       let resultArr = JSON.parse(result);
//       resultArr.map((val) => {
//         rootObj[val[1]] = rootObj[val[1]] || [];
//         rootObj[val[1]].push(val);
//       });
//     }).catch(err => console.log(err));
//     await redis.get('kucoin').then(function (result) {
//       let resultArr = JSON.parse(result);
//       resultArr.map((val) => {
//         rootObj[val[1]] = rootObj[val[1]] || [];
//         rootObj[val[1]].push(val);
//       });
//     }).catch(err => console.log(err));
//     await redis.get('lakebtc').then(function (result) {
//       let resultArr = JSON.parse(result);
//       resultArr.map((val) => {
//         rootObj[val[1]] = rootObj[val[1]] || [];
//         rootObj[val[1]].push(val);
//       });
//     }).catch(err => console.log(err));
//     await redis.get('lbank').then(function (result) {
//       let resultArr = JSON.parse(result);
//       resultArr.map((val) => {
//         rootObj[val[1]] = rootObj[val[1]] || [];
//         rootObj[val[1]].push(val);
//       });
//     }).catch(err => console.log(err));
//     await redis.get('livecoin').then(function (result) {
//       let resultArr = JSON.parse(result);
//       resultArr.map((val) => {
//         rootObj[val[1]] = rootObj[val[1]] || [];
//         rootObj[val[1]].push(val);
//       });
//     }).catch(err => console.log(err));
//     await redis.get('liqui').then(function (result) {
//       let resultArr = JSON.parse(result);
//       resultArr.map((val) => {
//         rootObj[val[1]] = rootObj[val[1]] || [];
//         rootObj[val[1]].push(val);
//       });
//     }).catch(err => console.log(err));
//     await redis.get('lykke').then(function (result) {
//       let resultArr = JSON.parse(result);
//       resultArr.map((val) => {
//         rootObj[val[1]] = rootObj[val[1]] || [];
//         rootObj[val[1]].push(val);
//       });
//     }).catch(err => console.log(err));
//     // await redis.get('theocean').then(function (result) {
//     //   let resultArr = JSON.parse(result);
//     //   resultArr.map((val) => {
//     //     rootObj[val[1]] = rootObje[val[1]] || [];
//     //     rootObj[val[1]].push(val);
//     //   });
//     // });
//     await redis.get('qryptos').then(function (result) {
//       let resultArr = JSON.parse(result);
//       resultArr.map((val) => {
//         rootObj[val[1]] = rootObj[val[1]] || [];
//         rootObj[val[1]].push(val);
//       });
//     }).catch(err => console.log(err));
//     await redis.get('quadrigacx').then(function (result) {
//       let resultArr = JSON.parse(result);
//       resultArr.map((val) => {
//         rootObj[val[1]] = rootObj[val[1]] || [];
//         rootObj[val[1]].push(val);
//       });
//     }).catch(err => console.log(err));
//     await redis.get('therock').then(function (result) {
//       let resultArr = JSON.parse(result);
//       resultArr.map((val) => {
//         rootObj[val[1]] = rootObj[val[1]] || [];
//         rootObj[val[1]].push(val);
//       });
//     }).catch(err => console.log(err));
//     await redis.get('tidex').then(function (result) {
//       let resultArr = JSON.parse(result);
//       resultArr.map((val) => {
//         rootObj[val[1]] = rootObj[val[1]] || [];
//         rootObj[val[1]].push(val);
//       });
//     }).catch(err => console.log(err));
//     await redis.get('wex').then(function (result) {
//       let resultArr = JSON.parse(result);
//       resultArr.map((val) => {
//         rootObj[val[1]] = rootObj[val[1]] || [];
//         rootObj[val[1]].push(val);
//       });
//     }).catch(err => console.log(err));
//     await redis.get('yobit').then(function (result) {
//       let resultArr = JSON.parse(result);
//       resultArr.map((val) => {
//         rootObj[val[1]] = rootObj[val[1]] || [];
//         rootObj[val[1]].push(val);
//       });
//     }).catch(err => console.log(err));
//     await redis.get('zaif').then(function (result) {
//       let resultArr = JSON.parse(result);
//       resultArr.map((val) => {
//         rootObj[val[1]] = rootObj[val[1]] || [];
//         rootObj[val[1]].push(val);
//       });
//     }).catch(err => console.log(err));

    
//     res.json(rootObj);
//   })();
// });

// app.get('/book', function (req, res) {
//   (async function book() {
//     var pairObj = [];
//     await redis.get('anxprobook').then(function (result) {
//       let resultArr = JSON.parse(result);
//       pairObj.push(resultArr);
//     }).catch(err => console.log(err));
//     await redis.get('anybitsbook').then(function (result) {
//       let resultArr = JSON.parse(result);
//       pairObj.push(resultArr);
//     }).catch(err => console.log(err));
//     await redis.get('binancebook').then(function (result) {
//       let resultArr = JSON.parse(result);
//       pairObj.push(resultArr);
//     }).catch(err => console.log(err));
//     await redis.get('bitbaybook').then(function (result) {
//       let resultArr = JSON.parse(result);
//       pairObj.push(resultArr);
//     }).catch(err => console.log(err));
//     await redis.get('bitfinex2book').then(function (result) {
//       let resultArr = JSON.parse(result);
//       pairObj.push(resultArr);
//     }).catch(err => console.log(err));
//     await redis.get('bitflyerbook').then(function (result) {
//       let resultArr = JSON.parse(result);
//       pairObj.push(resultArr);
//     }).catch(err => console.log(err));
//     await redis.get('bitlishbook').then(function (result) {
//       let resultArr = JSON.parse(result);
//       pairObj.push(resultArr);
//     }).catch(err => console.log(err));
//     await redis.get('bitstampbook').then(function (result) {
//       let resultArr = JSON.parse(result);
//       pairObj.push(resultArr);
//     }).catch(err => console.log(err));
//     await redis.get('btcmarketsbook').then(function (result) {
//       let resultArr = JSON.parse(result);
//       pairObj.push(resultArr);
//     }).catch(err => console.log(err));
//     await redis.get('btctradeimbook').then(function (result) {
//       let resultArr = JSON.parse(result);
//       pairObj.push(resultArr);
//     }).catch(err => console.log(err));
//     await redis.get('cexbook').then(function (result) {
//       let resultArr = JSON.parse(result);
//       pairObj.push(resultArr);
//     }).catch(err => console.log(err));
//     await redis.get('coinexbook').then(function (result) {
//       let resultArr = JSON.parse(result);
//       pairObj.push(resultArr);
//     }).catch(err => console.log(err));
//     await redis.get('coinexchangebook').then(function (result) {
//       let resultArr = JSON.parse(result);
//       pairObj.push(resultArr);
//     }).catch(err => console.log(err));
//     await redis.get('coinfalconbook').then(function (result) {
//       let resultArr = JSON.parse(result);
//       pairObj.push(resultArr);
//     }).catch(err => console.log(err));
//     await redis.get('coinmatebook').then(function (result) {
//       let resultArr = JSON.parse(result);
//       pairObj.push(resultArr);
//     }).catch(err => console.log(err));
//     await redis.get('exmobook').then(function (result) {
//       let resultArr = JSON.parse(result);
//       pairObj.push(resultArr);
//     }).catch(err => console.log(err));
//     await redis.get('gatecoinbook').then(function (result) {
//       let resultArr = JSON.parse(result);
//       pairObj.push(resultArr);
//     }).catch(err => console.log(err));
//     await redis.get('geminibook').then(function (result) {
//       let resultArr = JSON.parse(result);
//       pairObj.push(resultArr);
//     }).catch(err => console.log(err));
//     await redis.get('hitbtc2book').then(function (result) {
//       let resultArr = JSON.parse(result);
//       pairObj.push(resultArr);
//     }).catch(err => console.log(err));
//     await redis.get('ice3xbook').then(function (result) {
//       let resultArr = JSON.parse(result);
//       pairObj.push(resultArr);
//     }).catch(err => console.log(err));
//     await redis.get('krakenbook').then(function (result) {
//       let resultArr = JSON.parse(result);
//       pairObj.push(resultArr);
//     }).catch(err => console.log(err));
//     await redis.get('kucoinbook').then(function (result) {
//       let resultArr = JSON.parse(result);
//       pairObj.push(resultArr);
//     }).catch(err => console.log(err));
//     await redis.get('lakebtcbook').then(function (result) {
//       let resultArr = JSON.parse(result);
//       pairObj.push(resultArr);
//     }).catch(err => console.log(err));
//     await redis.get('lbankbook').then(function (result) {
//       let resultArr = JSON.parse(result);
//       pairObj.push(resultArr);
//     }).catch(err => console.log(err));
//     await redis.get('livecoinbook').then(function (result) {
//       let resultArr = JSON.parse(result);
//       pairObj.push(resultArr);
//     }).catch(err => console.log(err));
//     await redis.get('liquibook').then(function (result) {
//       let resultArr = JSON.parse(result);
//       pairObj.push(resultArr);
//     }).catch(err => console.log(err));
//     await redis.get('lykkebook').then(function (result) {
//       let resultArr = JSON.parse(result);
//       pairObj.push(resultArr);
//     }).catch(err => console.log(err));
//     await redis.get('qryptosbook').then(function (result) {
//       let resultArr = JSON.parse(result);
//       pairObj.push(resultArr);
//     }).catch(err => console.log(err));
//     await redis.get('quadrigacxbook').then(function (result) {
//       let resultArr = JSON.parse(result);
//       pairObj.push(resultArr);
//     }).catch(err => console.log(err));
//     await redis.get('therockbook').then(function (result) {
//       let resultArr = JSON.parse(result);
//       pairObj.push(resultArr);
//     }).catch(err => console.log(err));
//     await redis.get('tidexbook').then(function (result) {
//       let resultArr = JSON.parse(result);
//       pairObj.push(resultArr);
//     }).catch(err => console.log(err));
//     await redis.get('wexbook').then(function (result) {
//       let resultArr = JSON.parse(result);
//       pairObj.push(resultArr);
//     }).catch(err => console.log(err));
//     await redis.get('yobitbook').then(function (result) {
//       let resultArr = JSON.parse(result);
//       pairObj.push(resultArr);
//     }).catch(err => console.log(err));
//     await redis.get('zaifbook').then(function (result) {
//       let resultArr = JSON.parse(result);
//       pairObj.push(resultArr);
//     }).catch(err => console.log(err));

//     //do some object reduction to rootObj here before displaying it.
//     res.json(pairObj);
//   })();
// });

app.get("/API/Prices", (req, res) => {
  (async function test1(){
    await redis.get('live').then(function(result){
      res.json(JSON.parse(result));
    }).catch(err => console.log(err));
  })();
});

app.get("API/books", (req, res) => {
  (async function test2(){
    await redis.get('books').then(function(result){
      res.json(JSON.parse(result));
    }).catch(err => console.log(err));
  })();
});

app.get("/API/news", (req, res) => {
  (async function news() {
    await redis.get('news').then(function (result) {
      res.json(JSON.parse(result));
    }).catch(err => console.log(err));
  })();
});

// app.get("/cash", (req, res) => {
//   (async function cash() {
//     await redis.get('cash').then(function (result) {
//       res.json(JSON.parse(result));
//     }).catch(err => console.log(err));
//   })();
// });

app.get("/API/master", (req, res) => {
  (async function master() {
    await redis.get('hilo').then((result)=>{
      res.json(JSON.parse(result));
    }).catch(err=> console.log(err));
  })();
});

// app.get('/api', function (req, res) {
//   res.status(200).send('./c/:id ./news ./usd ./usd/:id ./bibox ./bibox/:id ./bibox/c/:id ./binance ./binance/:id ./binance/c/:id ./cryptopia ./cryptopia/:id ./cryptopia/c/:id ./kucoin ./kucoin/:id ./kucoin/c/:id');
// });

// var UserController = require(__root + 'user/UserController');
// app.use('/api/users', UserController);

// var AuthController = require(__root + 'auth/AuthController');
// app.use('/api/auth', AuthController);

// app.get("/api/news", (req, res) => {
//   News.find({}).sort({ date: 1 }).limit(20).then((data) => {
//     //console.log(data);
//     res.json(data);
//   });
// });
// app.get("/api/usd/", (req, res) => {
//   (async function usd() {
//     let test;
//     exchanges.push() Usd.find({}).sort({ date: 1 }).then(data1 => {
//       test = data1;
//     }).catch(() => console.log(err));
//     res.json(test);
//   })();
// });

// app.get("/api/usd/:id", (req, res) => {
//   const id = req.params.id
//   Usd.find({ "coin": id }).sort({ date: 1 }).then(data1 => {
//     res.json(data1);
//   });
// });


// app.get("/api/bibox/", (req, res) => {
//   (async function derive1() {
//     let data;
//     await Bibox.find({}).sort({ date: 1 }).then((data1) => {
//       data = data1;
//     }).catch(() => console.log(err));
//     res.json(data);
//   })();
// });



// //working
// app.get("/api/bibox/c/", (req, res) => {
//   Bibox.find({}).sort({ currency: 1, date: 1 }).then(data1 => { res.json(data1); });
// });

// app.get("/api/bibox/:id", (req, res) => {
//   const id = req.params.id
//     (async function derive3() {
//       let data;
//       let usData;
//       await Bibox.find({ "coin": id }).sort({ date: 1 }).then((data1) => {
//         data = data1;
//       }).catch(() => console.log(err));
//       await Usd.find({ "coin": id }).sort({ date: 1 }).limit(1).then(data1 => {
//         usData = data1;
//       }).catch(() => console.log(err));
//       usData.push(data);
//       res.json(usData);
//     })();
// });

// app.get("/api/binance/", (req, res) => {
//   Binance.find({}).sort({ date: 1 }).then((data1) => {
//     res.json(data1);
//   })
// });

// app.get("/api/binance/:id", (req, res) => {
//   const id = req.params.id;
//   (async function derive4() {
//     let data;
//     let usData;
//     await Binance.find({ "coin": id }).sort({ date: 1 }).then((data1) => {
//       data = data1;
//     }).catch(() => console.log(err));
//     await Usd.find({ "coin": id }).sort({ date: 1 }).limit(1).then(data1 => {
//       usData = data1;
//     }).catch(() => console.log(err));
//     usData.push(data);
//     res.json(usData);
//   })();
// });

// app.get("/api/binance/c/:id", (req, res) => {
//   const id = req.params.id;
//   (async function derive5() {
//     let data;
//     let usData;
//     await Binance.find({ "currency": id }).sort({ date: 1 }).then((data1) => {
//       data = data1;
//     }).catch(() => console.log(err));
//     await Usd.find({ "coin": id }).sort({ date: 1 }).limit(1).then(data1 => {
//       usData = data1;
//     }).catch(() => console.log(err));
//     usData.push(data);
//     res.json(usData);
//   })();
// });

// //not working
// app.get("/api/binance/c/", (req, res) => {
//   Binance.find({}).sort({ currency: 1, date: 1 }).then(data1 => { res.json(data1); });
// });

// app.get("/api/cryptopia/", (req, res) => {
//   (async function derive6() {
//     await Cryptopia.find({}).sort({ date: 1 }).then((data1) => {
//       res.json(data1);
//     }).catch(() => console.log(err));
//   })();
// });

// app.get("/api/cryptopia/:id", (req, res) => {
//   const id = req.params.id;
//   (async function derive7() {
//     let data;
//     let usData;
//     await Cryptopia.find({ "coin": id }).sort({ date: 1 }).then((data1) => {
//       data = data1;
//     }).catch(() => console.log(err));
//     await Usd.find({ "coin": id }).sort({ date: 1 }).limit(1).then(data1 => {
//       usData = data1;
//     }).catch(() => console.log(err));
//     usData.push(data);
//     res.json(usData);
//   })();
// });

// app.get("/api/cryptopia/c/:id", (req, res) => {
//   const id = req.params.id;
//   (async function derive8() {
//     let data;
//     let usData;
//     await Cryptopia.find({ "currency": id }).sort({ date: 1 }).then((data1) => {
//       data = data1;
//     }).catch(() => console.log(err));
//     await Usd.find({ "coin": id }).sort({ date: 1 }).limit(1).then(data1 => {
//       usData = data1;
//     }).catch(() => console.log(err));
//     usData.push(data);
//     res.json(usData);
//   })();
// });

// app.get("/api/cryptopia/c/", (req, res) => {
//   Cryptopia.find({}).sort({ currency: 1, date: 1 }).then(data1 => { res.json(data1); });
// });

// app.get("/api/kucoin/", (req, res) => {
//   const id = req.params.id;
//   Kucoin.find({}).sort({ date: 1 }).then((data1) => {
//     res.json(data1);
//   })
// });

// app.get("/api/kucoin/:id", (req, res) => {
//   const id = req.params.id;
//   (async function derive9() {
//     let data;
//     let usData;
//     await Kucoin.find({ "coin": id }).sort({ date: 1 }).then((data1) => {
//       data = data1;
//     }).catch(() => console.log(err));
//     await Usd.find({ "coin": id }).sort({ date: 1 }).limit(1).then(data1 => {
//       usData = data1;
//     }).catch(() => console.log(err));
//     usData.push(data);
//     res.json(usData);
//   })();
// });

// app.get("/api/kucoin/c/:id", (req, res) => {
//   const id = req.params.id;
//   (async function derive10() {
//     let data;
//     let usData;
//     await Kucoin.find({ "currency": id }).sort({ date: 1 }).then((data1) => {
//       data = data1;
//     }).catch(() => console.log(err));
//     await Usd.find({ "coin": id }).sort({ date: 1 }).limit(1).then(data1 => {
//       usData = data1;
//     }).catch(() => console.log(err));
//     usData.push(data);
//     res.json(usData);
//   })();
// });

// app.get("/api/kucoin/c/", (req, res) => {
//   Kucoin.find({}).sort({ currency: 1, date: 1 }).then(data1 => { res.json(data1); });
// });

// app.get("/api/:id", (req, res) => {
//   const id = req.params.id
//     (async function derive11() {
//       const XTC = [];
//       await Usd.find({ "coin": id }).sort({ date: 1 }).limit(1).then(data1 => {
//         XTC.push(data1);
//       }).catch(() => console.log(err));
//       await Bibox.find({ "coin": id }).sort({ date: 1 }).then((data1) => {
//         XTC.push(data1);
//       }).catch(() => console.log(err));
//       await Binance.find({ "coin": id }).sort({ date: 1 }).then((data1) => {
//         XTC.push(data1);
//       }).catch(() => console.log(err));
//       await Cryptopia.find({ "coin": id }).sort({ date: 1 }).then((data1) => {
//         XTC.push(data1);
//       }).catch(() => console.log(err));
//       await Kucoin.find({ "coin": id }).sort({ date: 1 }).then((data1) => {
//         XTC.push(data1);
//       }).catch(() => console.log(err));
//       res.json(XTC);
//     })();
// });

// app.get("/api/c/:id", (req, res) => {
//   (async function derive12() {
//     const XTC = [];
//     const id = req.params.id
//     await Usd.find({ "coin": id }).sort({ date: 1 }).limit(1).then(data1 => {
//       XTC.push(data1);
//     }).catch(() => console.log(err));
//     await Bibox.find({ "currency": id }).sort({ data: 1 }).then((data1) => {
//       XTC.push(data1);
//     }).catch(() => console.log(err));
//     await Binance.find({ "currency": id }).sort({ data: 1 }).then((data1) => {
//       XTC.push(data1);
//     }).catch(() => console.log(err));
//     await Cryptopia.find({ "currency": id }).sort({ data: 1 }).then((data1) => {
//       XTC.push(data1);
//     }).catch(() => console.log(err));
//     await Kucoin.find({ "currency": id }).sort({ data: 1 }).then((data1) => {
//       XTC.push(data1);
//     }).catch(() => console.log(err));
//     var usd;
//     console.log(XTC[0][0].value);
//     for (let i = 1; i < XTC.length; i++) {
//       XTC[i].map((a, j) => {
//         usd = XTC[i][j].value * XTC[0][0].value;
//         XTC[i][j].usdval = usd;
//       });
//     }
//     res.json(XTC);
//   })();
// });
// app.get("*", function (req, res) {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });


app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
