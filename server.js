const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const fs = require("fs");
const ccxt = require('ccxt');
const bodyParser = require("body-parser");
//var resolve = require("./logic.js");
var { Combo, Exchange, News, Usd, Bibox, Binance, Cryptopia, Kucoin } = require('./models');
//const keys = require("./keys");
var VerifyToken = require('./auth/VerifyToken.js');
const keys = require("./keys");
global.__root = __dirname + '/';

// const mongoose = require('mongoose');
// var database = 'shortcoindb';
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/" + database);

var Redis = require('ioredis');
var redis = new Redis(process.env.REDIS_URL);



app.get('/', function (req, res) {
  (function red() {
    var pairObj = {
      'BCH/BTC': [],
      'BCH/ETH': [],
      'BCH/USDT': [],
      'BTC/USDT': [],
      'DASH/BTC': [],
      'DASH/ETH': [],
      'EOS/BTC': [],
      'EOS/USDT': [],
      'ETH/BTC': [],
      'ETH/USDT': [],
      'LTC/BTC': [],
      'LTC/ETH': [],
      'LTC/USDT': [],
      'TRX/BTC': [],
      'XLM/BTC': [],
      'XMR/BTC': [],
      'XRP/BTC': [],
      'ZEC/BTC': [],
      'ZEC/ETH': []
    };
    let exchanges = [];
    exchanges.push(redis.get('anxpro'));
    exchanges.push(redis.get('anybits'));
    exchanges.push(redis.get('binance'));
    exchanges.push(redis.get('bitbay'));
    exchanges.push(redis.get('bitfinex2'));
    exchanges.push(redis.get('bitflyer'));
    exchanges.push(redis.get('bitlish'));
    exchanges.push(redis.get('bitstamp'));
    exchanges.push(redis.get('btcmarkets'));
    exchanges.push(redis.get('btctradeim'));
    exchanges.push(redis.get('cex'));
    exchanges.push(redis.get('coinbasepro'));
    exchanges.push(redis.get('coinegg'));
    exchanges.push(redis.get('coinex'));
    exchanges.push(redis.get('coinexchange'));
    exchanges.push(redis.get('coinfalcon'));
    exchanges.push(redis.get('coinmate'));
    exchanges.push(redis.get('dsx'));
    exchanges.push(redis.get('exmo'));
    exchanges.push(redis.get('gatecoin'));
    exchanges.push(redis.get('gemini'));
    exchanges.push(redis.get('hitbtc2'));
    exchanges.push(redis.get('ice3x'));
    exchanges.push(redis.get('kraken'));
    exchanges.push(redis.get('kucoin'));
    exchanges.push(redis.get('lakebtc'));
    exchanges.push(redis.get('lbank'));
    exchanges.push(redis.get('livecoin'));
    exchanges.push(redis.get('liqui'));
    exchanges.push(redis.get('lykke'));
    exchanges.push(redis.get('qryptos'));
    exchanges.push(redis.get('quadrigacx'));
    exchanges.push(redis.get('rightbtc'));
    exchanges.push(redis.get('southxchange'));
    exchanges.push(redis.get('therock'));
    exchanges.push(redis.get('tidex'));
    exchanges.push(redis.get('wex'));
    exchanges.push(redis.get('yobit'));
    exchanges.push(redis.get('zaif'));
    // //use promise.all here. This will increase the speed of the load.
    //rootObj.push(exchanges);
    Promise.all(exchanges.map(p => p.catch(() => undefined))).then((result) => {
      for (let i = 0; i < result.length; i++) {
          let resultArr = JSON.parse(result[i]);
          resultArr.map((val) => { pairObj[val[1]].push(val) });
      }
      res.json(pairObj);
    }).catch(err => console.log(err));
    //do some object reduction to rootObj here before displaying it.
    
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



app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
