const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const fs = require("fs");
const ccxt = require('ccxt');
const bodyParser = require("body-parser");
var resolve = require("./logic.js");
var { Combo, Exchange, News, Usd, Bibox, Binance, Cryptopia, Kucoin } = require('./models');
//import { observable, autorun, action } from "mobx";

//const keys = require("./keys");
var VerifyToken = require('./auth/VerifyToken.js');
global.__root = __dirname + '/';

const mongoose = require('mongoose');
var database = 'shortcoindb';
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/" + database);

// let promiseNews = resolve.news();
// let exchangeValues = resolve.exchanges();
let bitflyer = resolve.bitflyer();
let bitstamp = resolve.bitstamp();
let coinbasepro = resolve.coinbasepro();
//let cryptopia = resolve.cryptopia();
//let gateio = resolve.gateio();
let kraken = resolve.kraken();
let kucoin = resolve.kucoin();
let liqui = resolve.liqui();
let anxpro = resolve.anxpro();
let anybits = resolve.anybits();
let binance = resolve.binance();
let bitbay = resolve.bitbay();
let bitfinex2 = resolve.bitfinex2();
let bitlish = resolve.bitlish();
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


//I am exploring using redis via ioredis to save the most recent set of results and provide them to a reactive app (the bitcoin repository in my github). From my research, I would like to try using MobX to update this data in real time.



//this is the comparison set. I will be comparing these coin/currency pairs across all exchanges listed below.
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
//exchangeValues.then(response => console.log("Values: " + response)); //works
anxpro.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      console.log(aggregate(key, response.id, response[key].last, new Date(response[key].timestamp)));
    }
  }
}).catch(err => console.log(err));
anybits.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      console.log(aggregate(key, response.id, response[key].last, new Date(response[key].timestamp)));
    }
  }
}).catch(err => console.log(err)); //
binance.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      console.log(aggregate(key, response.id, response[key].last, new Date(response[key].timestamp)));
    }
  }
}).catch(err => console.log(err)); //
bitbay.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      console.log(aggregate(key, response.id, response[key].last, new Date(response[key].timestamp)));
    }
  }
}).catch(err => console.log(err)); // fees
bitfinex2.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      console.log(aggregate(key, response.id, response[key].last, new Date(response[key].timestamp)));
    }
  }
}).catch(err => console.log(err)); //
bitflyer.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      console.log(aggregate(key, response.id, response[key].last, new Date(response[key].timestamp)));
    }
  }
}).catch(err => console.log(err)); //
bitlish.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      console.log(aggregate(key, response.id, response[key].last, new Date(response[key].timestamp)));
    }
  }
}).catch(err => console.log(err)); //
bitstamp.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      console.log(aggregate(key, response.id, response[key].last, new Date(response[key].timestamp)));
    }
  }
}).catch(err => console.log(err)); //
btcmarkets.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      console.log(aggregate(key, response.id, response[key].last, new Date(response[key].timestamp)));
    }
  }
}).catch(err => console.log(err)); // fees
btctradeim.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      console.log(aggregate(key, response.id, response[key].last, new Date(response[key].timestamp)));
    }
  }
}).catch(err => console.log(err)); //
cex.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      console.log(aggregate(key, response.id, response[key].last, new Date(response[key].timestamp)));
    }
  }
}).catch(err => console.log(err)); // 
coinbasepro.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      console.log(aggregate(key, response.id, response[key].last, new Date(response[key].timestamp)));
    }
  }
}).catch(err => console.log(err)); // fees
coinegg.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      console.log(aggregate(key, response.id, response[key].last, new Date(response[key].timestamp)));
    }
  }
}).catch(err => console.log(err)); // 
coinex.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      console.log(aggregate(key, response.id, response[key].last, new Date(response[key].timestamp)));
    }
  }
}).catch(err => console.log(err)); // fees
coinexchange.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      console.log(aggregate(key, response.id, response[key].last, new Date(response[key].timestamp)));
    }
  }
}).catch(err => console.log(err)); // last price
coinfalcon.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      console.log(aggregate(key, response.id, response[key].last, new Date(response[key].timestamp)));
    }
  }
}).catch(err => console.log(err)); // 
coinmate.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      console.log(aggregate(key, response.id, response[key].last, new Date(response[key].timestamp)));
    }
  }
}).catch(err => console.log(err)); // fees
dsx.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      console.log(aggregate(key, response.id, response[key].last, new Date(response[key].timestamp)));
    }
  }
}).catch(err => console.log(err)); //
exmo.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      console.log(aggregate(key, response.id, response[key].last, new Date(response[key].timestamp)));
    }
  }
}).catch(err => console.log(err)); //
gatecoin.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      console.log(aggregate(key, response.id, response[key].last, new Date(response[key].timestamp)));
    }
  }
}).catch(err => console.log(err)); //
gemini.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      console.log(aggregate(key, response.id, response[key].last, new Date(response[key].timestamp)));
    }
  }
}).catch(err => console.log(err)); //
hitbtc2.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      console.log(aggregate(key, response.id, response[key].last, new Date(response[key].timestamp)));
    }
  }
}).catch(err => console.log(err)); //fees
ice3x.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      console.log(aggregate(key, response.id, response[key].last, new Date(response[key].timestamp)));
    }
  }
}).catch(err => console.log(err)); // 
kraken.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      console.log(aggregate(key, response.id, response[key].last, new Date(response[key].timestamp)));
    }
  }
}).catch(err => console.log(err)); // has fees
kucoin.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      console.log(aggregate(key, response.id, response[key].last, new Date(response[key].timestamp)));
    }
  }
}).catch(err => console.log(err)); // has last deal price
lakebtc.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      console.log(aggregate(key, response.id, response[key].last, new Date(response[key].timestamp)));
    }
  }
}).catch(err => console.log(err)); // has last price
lbank.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      console.log(aggregate(key, response.id, response[key].last, new Date(response[key].timestamp)));
    }
  }
}).catch(err => console.log(err)); //
livecoin.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      console.log(aggregate(key, response.id, response[key].last, new Date(response[key].timestamp)));
    }
  }
}).catch(err => console.log(err)); //bid/ask prices
liqui.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      console.log(aggregate(key, response.id, response[key].last, new Date(response[key].timestamp)));
    }
  }
}).catch(err => console.log(err)); //taker
lykke.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      console.log(aggregate(key, response.id, response[key].last, new Date(response[key].timestamp)));
    }
  }
}).catch(err => console.log(err)); //
qryptos.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      console.log(aggregate(key, response.id, response[key].last, new Date(response[key].timestamp)));
    }
  }
}).catch(err => console.log(err)); //market bid, market ask
quadrigacx.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      console.log(aggregate(key, response.id, response[key].last, new Date(response[key].timestamp)));
    }
  }
}).catch(err => console.log(err)); //includes fees
rightbtc.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      console.log(aggregate(key, response.id, response[key].last, new Date(response[key].timestamp)));
    }
  }
}).catch(err => console.log(err)); //
southxchange.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      console.log(aggregate(key, response.id, response[key].last, new Date(response[key].timestamp)));
    }
  }
}).catch(err => console.log(err));
therock.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      console.log(aggregate(key, response.id, response[key].last, new Date(response[key].timestamp)));
    }
  }
}).catch(err => console.log(err)); //has last price
tidex.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      console.log(aggregate(key, response.id, response[key].last, new Date(response[key].timestamp)));
    }
  }
}).catch(err => console.log(err)); //includes fees
wex.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      console.log(aggregate(key, response.id, response[key].last, new Date(response[key].timestamp)));
    }
  }
}).catch(err => console.log(err)); //includes fees
yobit.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      console.log(aggregate(key, response.id, response[key].last, new Date(response[key].timestamp)));
    }
  }
}).catch(err => console.log(err)); //includes fees
zaif.then(response => {
  for (let key in response) {
    if (response[key].last !== undefined) {
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      console.log(aggregate(key, response.id, response[key].last, new Date(response[key].timestamp)));
    }
  }
}).catch(err => console.log(err)); //

function aggregate(coin, id, price, time) {
  for (let [key, value] of Object.entries(pairOBJ)) {
    if (key === coin) {
      value.push([id, price, time]);
    }
  }
  return pairOBJ;
}

//these are my promise functions, to make sure I get a full set of results once I reformulate to a promise.all construction (promise.settle here)

// Promise.settle([]).then(function(results) {
//   results.forEach(function(pi, index) {
//       if (pi.isFulfilled()) {
//           console.log("p[" + index + "] is fulfilled with value = ", pi.value());
//       } else {
//           console.log("p[" + index + "] is rejected with reasons = ", pi.reason());
//       }
//   });
// });

// Promise.settle = function(promises) {
//   function PromiseInspection(fulfilled, val) {
//       return {
//           isFulfilled: function() {
//               return fulfilled;
//           }, isRejected: function() {
//               return !fulfilled;
//           }, isPending: function() {
//               // PromiseInspection objects created here are never pending
//               return false;
//           }, value: function() {
//               if (!fulfilled) {
//                   throw new Error("Can't call .value() on a promise that is not fulfilled");
//               }
//               return val;
//           }, reason: function() {
//               if (fulfilled) {
//                   throw new Error("Can't call .reason() on a promise that is fulfilled");
//               }
//               return val;
//           }
//       };
//   }

//   return Promise.all(promises.map(function(p) {
//       // make sure any values are wrapped in a promise
//       return Promise.resolve(p).then(function(val) {
//           return new PromiseInspection(true, val);
//       }, function(err) {
//           return new PromiseInspection(false, err);
//       });
//   }));
// }

app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
