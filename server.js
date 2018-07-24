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
global.__root = __dirname + '/';

const mongoose = require('mongoose');
var database = 'shortcoindb';
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/" + database);

let promiseNews = resolve.news();
let exchangeValues = resolve.exchanges();
let bitflyer = resolve.bitflyer();
let bitstamp = resolve.bitstamp();
let bittrex = resolve.bittrex();
let coinbasepro = resolve.coinbasepro();
let cryptopia = resolve.cryptopia();
let gateio = resolve.gateio();
let kraken = resolve.kraken();
let kucoin = resolve.kucoin();
let liqui = resolve.liqui();
let anxpro = resolve.anxpro();
let anybits = resolve.anybits();
let binance = resolve.binance();
let bitbay = resolve.bitbay();
let bitfinex2 = resolve.bitfinex2();
let bitlish = resolve.bitlish();
let btcalpha = resolve.btcalpha();
let btcmarkets = resolve.btcmarkets();
let btctradeim = resolve.btctradeim();
let cex = resolve.cex();
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
let lakebtc = resolve.lakebtc();
let lbank = resolve.lbank();
let livecoin = resolve.livecoin();
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


//exchangeValues.then(response => console.log("Values: " + response)); //works
//  anxpro.then(response => console.log("Anxpro: " + JSON.stringify(response))); // fees
//  anybits.then(response => console.log("Anybits: " + JSON.stringify(response))); //
//  binance.then(response => console.log("Binance: " + JSON.stringify(response))); //
//  bitbay.then(response => console.log("Bitbay: " + JSON.stringify(response))); // fees
bitfinex2.then(response => console.log("Bitfinex: " + JSON.stringify(response))); //
//  bitflyer.then(response => console.log("Bitflyer: " + JSON.stringify(response))); //
//  bitlish.then(response => console.log("Bitlish: " + JSON.stringify(response))); //
//  bitstamp.then(response => console.log("Bitstamp: " + JSON.stringify(response))); //
//  bittrex.then(response => console.log("Bittrex: " + JSON.stringify(response))); //
//  btcmarkets.then(response => console.log("BtcMarkets: " + JSON.stringify(response))); // fees
//  btcalpha.then(response => console.log("BtcAlpha: " + JSON.stringify(response))); // 
//  btctradeim.then(response => console.log("Btctradeim: " + JSON.stringify(response))); //
//  cex.then(response => console.log("CEX: " + JSON.stringify(response))); // 
//  coinbasepro.then(response => console.log("Coinbasepro: " + JSON.stringify(response))); // fees
  // coinegg.then(response => console.log("Coinegg: " + JSON.stringify(response))); // 
  // coinex.then(response => console.log("Coinex: " + JSON.stringify(response))); // fees
  // coinexchange.then(response => console.log("Coinexchange: " + JSON.stringify(response))); // last price
//  coinfalcon.then(response => console.log("Coinfalcon: " + JSON.stringify(response))); // 
//  coinmate.then(response => console.log("Coinmate: " + JSON.stringify(response))); // fees
//  cryptopia.then(response => console.log("Cryptopia: " + JSON.stringify(response))); // fees
//  dsx.then(response => console.log("DSX: " + JSON.stringify(response))); //
//  exmo.then(response => console.log("Exmo: " + JSON.stringify(response))); //
//  gatecoin.then(response => console.log("Gatecoin: " + JSON.stringify(response))); //
//  gateio.then(response => console.log("Gateio: " + JSON.stringify(response))); // fees
//  gemini.then(response => console.log("Gemini: " + JSON.stringify(response))); //
//  hitbtc2.then(response => console.log("HitBtc: " + JSON.stringify(response))); //fees
//  ice3x.then(response => console.log("Ice3x: " + JSON.stringify(response))); // 
  // kraken.then(response => console.log("Kraken: " + JSON.stringify(response))); // has fees
  // kucoin.then(response => console.log("Kucoin: " + JSON.stringify(response))); // has last deal price
//  lakebtc.then(response => console.log("LakeBTC: " + JSON.stringify(response))); // has last price
  // lbank.then(response => console.log("LBank: " + JSON.stringify(response))); //
  // livecoin.then(response => console.log("Livecoin: " + JSON.stringify(response))); //bid/ask prices
  // liqui.then(response => console.log("Liqui: " + JSON.stringify(response))); //taker
  // lykke.then(response => console.log("Lykke: " + JSON.stringify(response))); //
  // qryptos.then(response => console.log("Qryptos: " + JSON.stringify(response))); //market bid, market ask
//  quadrigacx.then(response => console.log("Quadriga: " + JSON.stringify(response))); //includes fees
  // rightbtc.then(response => console.log("Rightbtc: " + JSON.stringify(response))); //
  // southxchange.then(response => console.log("Southxchange: " + JSON.stringify(response)));
//  therock.then(response => console.log("Therock: " + JSON.stringify(response))); //has last price
//  tidex.then(response => console.log("Tidex: " + JSON.stringify(response))); //includes fees
//  wex.then(response => console.log("Wex: " + JSON.stringify(response))); //includes fees
 // yobit.then(response => console.log("Yobit: " + JSON.stringify(response))); //includes fees
//  zaif.then(response => console.log("Zaif: " + JSON.stringify(response))); //
 


// app.get('/', function (req, res) {
//   res.status(200).send('This is an API.');
// });


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
