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
let bibox = resolve.bibox();
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
let kuna = resolve.kuna();
let lakebtc = resolve.lakebtc();
let lbank = resolve.lbank();
let livecoin = resolve.livecoin();
let lykke = resolve.lykke();
let nova = resolve.nova();
let qryptos = resolve.qryptos();
let quadrigacx = resolve.quadrigacx();
let rightbtc = resolve.rightbtc();
let southxchange = resolve.southxchange();
let therock = resolve.therock();
let tidex = resolve.tidex();
let wex = resolve.wex();
let yobit = resolve.yobit();
let zaif = resolve.zaif();


exchangeValues.then(response => console.log("Values: " + response)); //works
 //anxpro.then(response => console.log("Anxpro: " + JSON.stringify(response))); // fees
 //anybits.then(response => console.log("Anybits: " + JSON.stringify(response))); //
 //bibox.then(response => console.log("Bibox:" + JSON.stringify(response[0]))); //last deal price
 //binance.then(response => console.log("Binance: " + JSON.stringify(response))); //
 //bitbay.then(response => console.log("Bitbay: " + JSON.stringify(response))); // fees
 //bitfinex2.then(response => console.log("Bitfinex: " + JSON.stringify(response))); //
 //bitflyer.then(response => console.log("Bitflyer: " + JSON.stringify(response))); //
//  bitlish.then(response => console.log("Bitlish: " + JSON.stringify(response))); //
//  bitstamp.then(response => console.log("Bitstamp: " + JSON.stringify(response))); //
//  bittrex.then(response => console.log("Bittrex: " + JSON.stringify(response))); //
//  btcmarkets.then(response => console.log("BtcMarkets: " + JSON.stringify(response))); // fees
//  btcalpha.then(response => console.log("BtcAlpha: " + JSON.stringify(response))); // 
//  btctradeim.then(response => console.log("Btctradeim: " + JSON.stringify(response))); //
//  cex.then(response => console.log("CEX: " + JSON.stringify(response))); // 
//  coinbasepro.then(response => console.log("Coinbasepro: " + JSON.stringify(response))); // fees
//  coinegg.then(response => console.log("Coinegg: " + JSON.stringify(response))); // 
//  coinex.then(response => console.log("Coinex: " + JSON.stringify(response))); // fees
//  coinexchange.then(response => console.log("Coinexchange: " + JSON.stringify(response[0]))); // last price
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
//  kraken.then(response => console.log("Kraken: " + JSON.stringify(response))); // has fees
//  kucoin.then(response => console.log("Kucoin: " + JSON.stringify(response))); // has last deal price
//  kuna.then(response => console.log("Kuna: " + JSON.stringify(response))); //
//  lakebtc.then(response => console.log("LakeBTC: " + JSON.stringify(response[0]))); // has last price
//  lbank.then(response => console.log("LBank: " + JSON.stringify(response))); //
//  livecoin.then(response => console.log("Livecoin: " + JSON.stringify(response[0]))); //bid/ask prices
//  liqui.then(response => console.log("Liqui: " + JSON.stringify(response))); //taker
//  lykke.then(response => console.log("Lykke: " + JSON.stringify(response))); //
//  nova.then(response => console.log("Nova: " + JSON.stringify(response[0]))); // has ask price
//  qryptos.then(response => console.log("Qryptos: " + JSON.stringify(response[0]))); //market bid, market ask
//  quadrigacx.then(response => console.log("Quadriga: " + JSON.stringify(response))); //includes fees
//  rightbtc.then(response => console.log("Rightbtc: " + JSON.stringify(response))); //
//  southxchange.then(response => console.log("Southxchange: " + JSON.stringify(response)));
//  therock.then(response => console.log("Therock: " + JSON.stringify(response[0]))); //has last price
//  tidex.then(response => console.log("Tidex: " + JSON.stringify(response))); //includes fees
//  wex.then(response => console.log("Wex: " + JSON.stringify(response))); //includes fees
//  yobit.then(response => console.log("Yobit: " + JSON.stringify(response))); //includes fees
//  zaif.then(response => console.log("Zaif: " + JSON.stringify(response))); //
 


// promiseToken.then((response)=>{
//   response.data.pipe(fs.createWriteStream('ada_lovelace.json'));
//   }); //this is the nonworking stuff
//recall();
// interval();
// function interval() {
//   setInterval(() => drop(), 600000);
//   setInterval(() => recall(), 600500);
// }

// (function recall() {
//   Promise.all([promiseNews, promiseUsd, promiseBibox, promiseKucoin, promiseBinance, promiseCryptopia]).then(([newsData, usdData, biboxData, kucoinData, binanceData, cryptopiaData]) => {

//     for (var i = 0; i < newsData.length; i++) {
//       News.create(newsData[i]).then((dbNews) => { }).catch((err) => console.log(err));
//     }
//     for (var i = 0; i < usdData.length; i++) {
//       Usd.create(usdData[i]).then((dbUsd) => { }).catch((err) => console.log(err));
//     }
//     for (var i = 0; i < biboxData.length; i++) {
//       Bibox.create(biboxData[i]).then((dbBibox) => { }).catch((err) => console.log(err));
//     }
//     for (var i = 0; i < kucoinData.length; i++) {
//       Kucoin.create(kucoinData[i]).then((dbKucoin) => { }).catch((err) => console.log(err));
//     }
//     var binanceValue;
//     for (var i = 0; i < binanceData.length; i++) {
//       let val1;
//       let val2;
//       val1 = binanceData[i].symbol;
//       val2 = binanceData[i].symbol;
//       val1 = val1.slice(0, 3);
//       val2 = val2.slice(-3);
//       binanceValue = { "coin": val1, "currency": val2, "value": binanceData[i].price };
//       Binance.create(binanceValue).then((dbBinance) => { }).catch((err) => console.log(err));
//     }
//     var cryptopiaValue = {};
//     for (var i = 0; i < cryptopiaData.length; i++) {
//       let val1;
//       let val2;
//       val1 = cryptopiaData[i].label;
//       val2 = cryptopiaData[i].label;
//       val1 = val1.slice(0, 3);
//       val2 = val2.slice(-3);
//       cryptopiaValue = { "coin": val1, "currency": val2, "value": cryptopiaData[i].last };
//       Cryptopia.create(cryptopiaValue).then((dbCryptopia) => { }).catch((err) => console.log(err));
//     }




//     //console.log(lastData);
//     //console.log(newsData);
//     //console.log(newsData);
//     // for (var i = 0; i < lastData.length; i++) {
//     //   Exchange.create(lastData[i]).then((dbLast) => { }).catch((err) => console.log(err));
//     // }
//     // console.log(News);
//     // var usdArray = [];

//     // usdData.forEach((value) => {
//     //   usdArray.push({
//     //     coin: Object.values(value)[0],
//     //     value: Object.values(value)[1]
//     //   });
//     // });
//     // for (var i = 0; i < usdArray.length; i++) {
//     //   Usd.create(usdArray[i]).then((dbUsd) => { }).catch((err) => console.log(err));
//     // }

//     // var comboObj = {
//     //   lexchange: "",
//     //   rexchange: "",
//     //   coincurrency: "",
//     //   lhs: "",
//     //   rhs: "",
//     //   diff: "",
//     //   usddiff: 0,
//     //   usdlhs: 0,
//     //   usdrhs: 0
//     // }
//     // var comboArray = [];

//     // // console.log(lastData);
//     // lastData.forEach((value) => {
//     //   let objVals = Object.values(value.input);
//     //   let comboObj = {};
//     //   comboObj.coincurrency = objVals[0];
//     //   comboObj.lhs = objVals[1];
//     //   comboObj.rhs = objVals[2];
//     //   comboObj.diff = value.output;
//     //   comboObj.lexchange = objVals[3]
//     //   comboObj.rexchange = objVals[4]
//     //   //console.log(comboObj);
//     //   comboArray.push(comboObj);
//     // });

//     // //console.log(comboArray);

//     // comboArray.forEach((val, i, container) => {
//     //   var currency = val.coincurrency.match(/_.*/g);
//     //   //console.log(currency);
//     //   var currency2 = currency[0];
//     //   var currency2 = currency2.slice(1);


//     //   Usd.findOne({ coin: currency2.toUpperCase() }).sort({ date: 1 }).then((resolve) => {
//     //     var usddiff = +(+val.diff * resolve.value).toFixed(2);
//     //     var usdlhs = +(+val.lhs * resolve.value).toFixed(2);
//     //     var usdrhs = +(+val.rhs * resolve.value).toFixed(2);
//     //     //console.log(comboArray);
//     //     container[i].usddiff = usddiff;
//     //     container[i].usdlhs = usdlhs;
//     //     container[i].usdrhs = usdrhs;
//     //     //console.log(usdiff);

//     //     if (i === container.length - 1) {
//     //       //console.log(container);
//     //       for (let j = 0; j < container.length; j++) {
//     //         Combo.create(container[j]).then((dbCombo) => {  }).catch((err) => console.log(err));
//     //       }
//     //     }
//     //   }).catch((err) => console.log(err));
//     // });

//   });


// })();




// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// } else {
//   app.use(express.static("client/public"));
// }
app.get('/', function (req, res) {
  res.status(200).send('This is an API.');
});


app.get('/api', function (req, res) {
  res.status(200).send('./c/:id ./news ./usd ./usd/:id ./bibox ./bibox/:id ./bibox/c/:id ./binance ./binance/:id ./binance/c/:id ./cryptopia ./cryptopia/:id ./cryptopia/c/:id ./kucoin ./kucoin/:id ./kucoin/c/:id');
});

var UserController = require(__root + 'user/UserController');
app.use('/api/users', UserController);

var AuthController = require(__root + 'auth/AuthController');
app.use('/api/auth', AuthController);

app.get("/api/news", (req, res) => {
  News.find({}).sort({ date: 1 }).limit(20).then((data) => {
    //console.log(data);
    res.json(data);
  });
});
app.get("/api/usd/", (req, res) => {
  (async function usd() {
    let test;
    await Usd.find({}).sort({ date: 1 }).then(data1 => {
      test = data1;
    }).catch(() => console.log(err));
    res.json(test);
  })();
});

app.get("/api/usd/:id", (req, res) => {
  const id = req.params.id
  Usd.find({ "coin": id }).sort({ date: 1 }).then(data1 => {
    res.json(data1);
  });
});


app.get("/api/bibox/", (req, res) => {
  (async function derive1() {
    let data;
    await Bibox.find({}).sort({ date: 1 }).then((data1) => {
      data = data1;
    }).catch(() => console.log(err));
    res.json(data);
  })();
});

//not working - full set
// app.get("/api/bibox/c/:id", (req, res) => {
//   const id = req.params.id
//   async function loop() {
//     let data;
//     let usData;
//     await Bibox.find({ "currency": id }).sort({ date: 1 }).then((data1) => {
//       data = data1;
//     }).catch(()=> console.log(err));
//     await Usd.find({ "coin": id }).sort({ date: 1 }).limit(1).then(data1 => {
//       usData = data1;
//     }).catch(()=> console.log(err));
//   }
//   async function derive2() {
//     loop();
//     await Bibox.find({ "currency": id }).sort({ date: 1 }).then((data1) => {
//       res.json(data1);
//     }).catch(()=> console.log(err));


//   }
//   derive2();
// });

//working
app.get("/api/bibox/c/", (req, res) => {
  Bibox.find({}).sort({ currency: 1, date: 1 }).then(data1 => { res.json(data1); });
});

app.get("/api/bibox/:id", (req, res) => {
  const id = req.params.id
    (async function derive3() {
      let data;
      let usData;
      await Bibox.find({ "coin": id }).sort({ date: 1 }).then((data1) => {
        data = data1;
      }).catch(() => console.log(err));
      await Usd.find({ "coin": id }).sort({ date: 1 }).limit(1).then(data1 => {
        usData = data1;
      }).catch(() => console.log(err));
      usData.push(data);
      res.json(usData);
    })();
});

app.get("/api/binance/", (req, res) => {
  Binance.find({}).sort({ date: 1 }).then((data1) => {
    res.json(data1);
  })
});

app.get("/api/binance/:id", (req, res) => {
  const id = req.params.id;
  (async function derive4() {
    let data;
    let usData;
    await Binance.find({ "coin": id }).sort({ date: 1 }).then((data1) => {
      data = data1;
    }).catch(() => console.log(err));
    await Usd.find({ "coin": id }).sort({ date: 1 }).limit(1).then(data1 => {
      usData = data1;
    }).catch(() => console.log(err));
    usData.push(data);
    res.json(usData);
  })();
});

app.get("/api/binance/c/:id", (req, res) => {
  const id = req.params.id;
  (async function derive5() {
    let data;
    let usData;
    await Binance.find({ "currency": id }).sort({ date: 1 }).then((data1) => {
      data = data1;
    }).catch(() => console.log(err));
    await Usd.find({ "coin": id }).sort({ date: 1 }).limit(1).then(data1 => {
      usData = data1;
    }).catch(() => console.log(err));
    usData.push(data);
    res.json(usData);
  })();
});

//not working
app.get("/api/binance/c/", (req, res) => {
  Binance.find({}).sort({ currency: 1, date: 1 }).then(data1 => { res.json(data1); });
});

app.get("/api/cryptopia/", (req, res) => {
  (async function derive6() {
    await Cryptopia.find({}).sort({ date: 1 }).then((data1) => {
      res.json(data1);
    }).catch(() => console.log(err));
  })();
});

app.get("/api/cryptopia/:id", (req, res) => {
  const id = req.params.id;
  (async function derive7() {
    let data;
    let usData;
    await Cryptopia.find({ "coin": id }).sort({ date: 1 }).then((data1) => {
      data = data1;
    }).catch(() => console.log(err));
    await Usd.find({ "coin": id }).sort({ date: 1 }).limit(1).then(data1 => {
      usData = data1;
    }).catch(() => console.log(err));
    usData.push(data);
    res.json(usData);
  })();
});

app.get("/api/cryptopia/c/:id", (req, res) => {
  const id = req.params.id;
  (async function derive8() {
    let data;
    let usData;
    await Cryptopia.find({ "currency": id }).sort({ date: 1 }).then((data1) => {
      data = data1;
    }).catch(() => console.log(err));
    await Usd.find({ "coin": id }).sort({ date: 1 }).limit(1).then(data1 => {
      usData = data1;
    }).catch(() => console.log(err));
    usData.push(data);
    res.json(usData);
  })();
});

app.get("/api/cryptopia/c/", (req, res) => {
  Cryptopia.find({}).sort({ currency: 1, date: 1 }).then(data1 => { res.json(data1); });
});

app.get("/api/kucoin/", (req, res) => {
  const id = req.params.id;
  Kucoin.find({}).sort({ date: 1 }).then((data1) => {
    res.json(data1);
  })
});

app.get("/api/kucoin/:id", (req, res) => {
  const id = req.params.id;
  (async function derive9() {
    let data;
    let usData;
    await Kucoin.find({ "coin": id }).sort({ date: 1 }).then((data1) => {
      data = data1;
    }).catch(() => console.log(err));
    await Usd.find({ "coin": id }).sort({ date: 1 }).limit(1).then(data1 => {
      usData = data1;
    }).catch(() => console.log(err));
    usData.push(data);
    res.json(usData);
  })();
});

app.get("/api/kucoin/c/:id", (req, res) => {
  const id = req.params.id;
  (async function derive10() {
    let data;
    let usData;
    await Kucoin.find({ "currency": id }).sort({ date: 1 }).then((data1) => {
      data = data1;
    }).catch(() => console.log(err));
    await Usd.find({ "coin": id }).sort({ date: 1 }).limit(1).then(data1 => {
      usData = data1;
    }).catch(() => console.log(err));
    usData.push(data);
    res.json(usData);
  })();
});

app.get("/api/kucoin/c/", (req, res) => {
  Kucoin.find({}).sort({ currency: 1, date: 1 }).then(data1 => { res.json(data1); });
});

app.get("/api/:id", (req, res) => {
  const id = req.params.id
    (async function derive11() {
      const XTC = [];
      await Usd.find({ "coin": id }).sort({ date: 1 }).limit(1).then(data1 => {
        XTC.push(data1);
      }).catch(() => console.log(err));
      await Bibox.find({ "coin": id }).sort({ date: 1 }).then((data1) => {
        XTC.push(data1);
      }).catch(() => console.log(err));
      await Binance.find({ "coin": id }).sort({ date: 1 }).then((data1) => {
        XTC.push(data1);
      }).catch(() => console.log(err));
      await Cryptopia.find({ "coin": id }).sort({ date: 1 }).then((data1) => {
        XTC.push(data1);
      }).catch(() => console.log(err));
      await Kucoin.find({ "coin": id }).sort({ date: 1 }).then((data1) => {
        XTC.push(data1);
      }).catch(() => console.log(err));
      res.json(XTC);
    })();
});

app.get("/api/c/:id", (req, res) => {
  (async function derive12() {
    const XTC = [];
    const id = req.params.id
    await Usd.find({ "coin": id }).sort({ date: 1 }).limit(1).then(data1 => {
      XTC.push(data1);
    }).catch(() => console.log(err));
    await Bibox.find({ "currency": id }).sort({ data: 1 }).then((data1) => {
      XTC.push(data1);
    }).catch(() => console.log(err));
    await Binance.find({ "currency": id }).sort({ data: 1 }).then((data1) => {
      XTC.push(data1);
    }).catch(() => console.log(err));
    await Cryptopia.find({ "currency": id }).sort({ data: 1 }).then((data1) => {
      XTC.push(data1);
    }).catch(() => console.log(err));
    await Kucoin.find({ "currency": id }).sort({ data: 1 }).then((data1) => {
      XTC.push(data1);
    }).catch(() => console.log(err));
    var usd;
    console.log(XTC[0][0].value);
    for (let i = 1; i < XTC.length; i++) {
      XTC[i].map((a, j) => {
        usd = XTC[i][j].value * XTC[0][0].value;
        XTC[i][j].usdval = usd;
      });
    }
    res.json(XTC);
  })();
});
// app.get("*", function (req, res) {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });



app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
