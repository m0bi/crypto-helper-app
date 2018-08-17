const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const fs = require("fs");
const ccxt = require('ccxt');
const bodyParser = require("body-parser");
var resolve = require("./logic.js");
var { Combo, Exchange, News, Usd, Bibox, Binance, Cryptopia, Kucoin } = require('./models');
//const keys = require("./keys");
var VerifyToken = require('./auth/VerifyToken.js');
const keys = require("./keys");
global.__root = __dirname + '/';

// const mongoose = require('mongoose');
// var database = 'shortcoindb';
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/" + database);

var Redis = require('ioredis');
var redis = new Redis(process.env.REDIS_URL)

// let promiseNews = resolve.news();
// let exchangeValues = resolve.exchanges();

//let cryptopia = resolve.cryptopia();
//let gateio = resolve.gateio();
let anxpro = resolve.anxpro();
let anybits = resolve.anybits();
let binance = resolve.binance();
let bitbay = resolve.bitbay();
let bitfinex2 = resolve.bitfinex2();
let bitflyer = resolve.bitflyer();
let bitlish = resolve.bitlish();
let bitstamp = resolve.bitstamp();
let btcmarkets = resolve.btcmarkets();
let btctradeim = resolve.btctradeim();
let cex = resolve.cex();
let coinbasepro = resolve.coinbasepro();
let coinegg = resolve.coinegg();
let coinex = resolve.coinex();
let coinexchange = resolve.coinexchange();
let coinfalcon = resolve.coinfalcon();
let coinmate = resolve.coinmate();
let dsx = resolve.dsx();
let exmo = resolve.exmo();
let gatecoin = resolve.gatecoin();
let gemini = resolve.gemini();
let hitbtc2 = resolve.hitbtc2();
let ice3x = resolve.ice3x();
let kraken = resolve.kraken();
let kucoin = resolve.kucoin();
let lakebtc = resolve.lakebtc();
let lbank = resolve.lbank();
let livecoin = resolve.livecoin();
let liqui = resolve.liqui();
let lykke = resolve.lykke();
let qryptos = resolve.qryptos();
let quadrigacx = resolve.quadrigacx();
let rightbtc = resolve.rightbtc();
let southxchange = resolve.southxchange();
let therock = resolve.therock();
let tidex = resolve.tidex();
let wex = resolve.wex();
let yobit = resolve.yobit();
let zaif = resolve.zaif();

const pairOBJ = {
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
//write to redis async without using a promise.all, then they will overwrite as they update. 

//capture the exchange rates in the redis server and then do the multiplication on the front end. 

//promise = [anxpro, anybits, binance, bitbay, bitfinex2, bitflyer, bitlish, bitstamp, btcmarkets, btctradeim, cex, coinbasepro, coinegg, ]
//exchangeValues.then(response => console.log("Values: " + response)); //works
function redisWrite(){
anxpro.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      //key is redis key
      //flatten (stringify array and add as response)
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      var anxproObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('anxpro', JSON.stringify(anxproObj));
}).catch(err => console.log(err));
anybits.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      var anybitsObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('anybits', JSON.stringify(anybitsObj));
}).catch(err => console.log(err)); //
binance.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      var binanceObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('binance', JSON.stringify(binanceObj));
}).catch(err => console.log(err)); //
bitbay.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      var bitpayObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('bitpay', JSON.stringify(bitpayObj));
}).catch(err => console.log(err)); // fees
bitfinex2.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      var bitfinex2Obj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('bitfinex2', JSON.stringify(bitfinex2Obj));
}).catch(err => console.log(err)); //
bitflyer.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      var bitflyerObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('bitflyer', JSON.stringify(bitflyerObj));
}).catch(err => console.log(err)); //
bitlish.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      var bitlishObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('bitlish', JSON.stringify(bitlishObj));
}).catch(err => console.log(err)); //
bitstamp.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      var bitstampObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('bitstamp', JSON.stringify(bitstampObj));
}).catch(err => console.log(err)); //
btcmarkets.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      var btcmarketsObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('btcmarkets', JSON.stringify(btcmarketsObj));
}).catch(err => console.log(err)); // fees
btctradeim.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      var btctradeimObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('btctradeim', JSON.stringify(btctradeimObj));
}).catch(err => console.log(err)); //
cex.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      var cexObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('cex', JSON.stringify(cexObj));
}).catch(err => console.log(err)); // 
coinbasepro.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      var coinbaseproObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('coinbasepro', JSON.stringify(coinbaseproObj));
}).catch(err => console.log(err)); // fees
coinegg.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      var coineggObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('coinegg', JSON.stringify(coineggObj));
}).catch(err => console.log(err)); // 
coinex.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      var coinexObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('coinex', JSON.stringify(coinexObj));
}).catch(err => console.log(err)); // fees
coinexchange.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      var coinexchangeObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('coinexchange', JSON.stringify(coinexchangeObj));
}).catch(err => console.log(err)); // last price
coinfalcon.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      var coinfalconObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('coinfalcon', JSON.stringify(coinfalconObj));
}).catch(err => console.log(err)); // 
coinmate.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      var coinmateObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('coinmate', JSON.stringify(coinmateObj));
}).catch(err => console.log(err)); // fees
dsx.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      var dsxObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('dsx', JSON.stringify(dsxObj));
}).catch(err => console.log(err)); //
exmo.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      var exmoObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('exmo', JSON.stringify(exmoObj));
}).catch(err => console.log(err)); //
gatecoin.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      var gatecoinObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('gatecoin', JSON.stringify(gatecoinObj));
}).catch(err => console.log(err)); //
gemini.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      var geminiObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('gemini', JSON.stringify(geminiObj));
}).catch(err => console.log(err)); //
hitbtc2.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      var hitbtc2Obj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('hitbtc2', JSON.stringify(hitbtc2Obj));
}).catch(err => console.log(err)); //fees
ice3x.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      var ice3xObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('ice3x', JSON.stringify(ice3xObj));
}).catch(err => console.log(err)); // 
kraken.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      var krakenObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('kraken', JSON.stringify(krakenObj));
}).catch(err => console.log(err)); // has fees
kucoin.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      var kucoinObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('kucoin', JSON.stringify(kucoinObj));
}).catch(err => console.log(err)); // has last deal price
lakebtc.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      var lakebtcObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('lakebtc', JSON.stringify(lakebtcObj));
}).catch(err => console.log(err)); // has last price
lbank.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      var lbankObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('lbank', JSON.stringify(lbankObj));
}).catch(err => console.log(err)); //
livecoin.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      var livecoinObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('livecoin', JSON.stringify(livecoinObj));
}).catch(err => console.log(err)); //bid/ask prices
liqui.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      var liquiObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('liqui', JSON.stringify(liquiObj));
}).catch(err => console.log(err)); //taker
lykke.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      var lykkeObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('lykke', JSON.stringify(lykkeObj));
}).catch(err => console.log(err)); //
qryptos.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      var qryptosObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('qryptos', JSON.stringify(qryptosObj));
}).catch(err => console.log(err)); //market bid, market ask
quadrigacx.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      var quadrigacxObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('quadrigacx', JSON.stringify(quadrigacxObj));
}).catch(err => console.log(err)); //includes fees
rightbtc.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      var rightbtcObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('rightbtc', JSON.stringify(rightbtcObj));
}).catch(err => console.log(err)); //
southxchange.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      var southxchangeObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('southxchange', JSON.stringify(southxchangeObj));
}).catch(err => console.log(err));
therock.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      var therockObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('therock', JSON.stringify(therockObj));
}).catch(err => console.log(err)); //has last price
tidex.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      var tidexObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('tidex', JSON.stringify(zaifObj));
}).catch(err => console.log(err)); //includes fees
wex.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      var wexObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('wex', JSON.stringify(wexObj));
}).catch(err => console.log(err)); //includes fees
yobit.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      var yobitObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('yobit', JSON.stringify(yobitObj));
}).catch(err => console.log(err)); //includes fees
zaif.then(response => {
  for (let key in response) {

    //save values immediately to redis instead of using the aggregate function. 
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      var zaifObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
      console.log("zaifObj: " + JSON.stringify(zaifObj));
    }
  }
  redis.set('zaif', JSON.stringify(zaifObj));
}).catch(err => console.log(err)); //
}

function aggregate(coin, id, price, time) {
  //could be a global redis store (possible race condition issues).
  //store a set of values for each server.
  for (let [key, value] of Object.entries(pairOBJ)) {
    if (key === coin) {
      value.push([id, price, time]);
    }
  }

  //save individual key values with 

  //value needs to be compared with previous values of pairOBJ.key
  //highest value must be written to high (not added, overwritten)
  //lowest value must be written to low (not added, overwritten)
  return pairOBJ;
}

app.get('/', function (req, res) {
  redisWrite();
  res.status(200).send('This is an API.');
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
//     await Usd.find({}).sort({ date: 1 }).then(data1 => {
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
