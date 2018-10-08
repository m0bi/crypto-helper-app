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

const mongoose = require('mongoose');
var database = 'shortcoindb';
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/" + database);
var cron = require('node-cron');
var Redis = require('ioredis');
var redis = new Redis({
  port: 18167,          // Redis port
  host: 'redis-18167.c55.eu-central-1-1.ec2.cloud.redislabs.com',   // Redis host
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
var bitlish = resolve.bitlish();
var bitstamp = resolve.bitstamp();
var btcmarkets = resolve.btcmarkets();
var btctradeim = resolve.btctradeim();
var cex = resolve.cex();
var coinex = resolve.coinex();
var coinexchange = resolve.coinexchange();
var coinfalcon = resolve.coinfalcon();
var coinmate = resolve.coinmate();
var exmo = resolve.exmo();
var gatecoin = resolve.gatecoin();
var gemini = resolve.gemini();
var hitbtc2 = resolve.hitbtc2();
var ice3x = resolve.ice3x();
var kraken = resolve.kraken();
var kucoin = resolve.kucoin();
var lakebtc = resolve.lakebtc();
var lbank = resolve.lbank();
var livecoin = resolve.livecoin();
var liqui = resolve.liqui();
var lykke = resolve.lykke();
//var theocean = resolve.theocean();
var quadrigacx = resolve.quadrigacx();
var therock = resolve.therock();
var tidex = resolve.tidex();
var wex = resolve.wex();
var yobit = resolve.yobit();
var zaif = resolve.zaif();

let booksAnxpro = resolve.anxpro();
    let booksAnybits = resolve.anybits();
    let booksBinance = resolve.binance();
    let booksBitbay = resolve.bitbay();
    let booksBitfinex2 = resolve.bitfinex2();
    let booksBitflyer = resolve.bitflyer();
    let booksBitlish = resolve.bitlish();
    let booksBitstamp = resolve.bitstamp();
    let booksBtcmarkets = resolve.btcmarkets();
    let booksBtctradeim = resolve.btctradeim();
    let booksCex = resolve.cex();
    let booksCoinex = resolve.coinex();
    let booksCoinexchange = resolve.coinexchange();
    let booksCoinfalcon = resolve.coinfalcon();
    let booksCoinmate = resolve.coinmate();
    let booksExmo = resolve.exmo();
    let booksGatecoin = resolve.gatecoin();
    let booksGemini = resolve.gemini();
    let booksHitbtc2 = resolve.hitbtc2();
    let booksIce3x = resolve.ice3x();
    let booksKraken = resolve.kraken();
    let booksKucoin = resolve.kucoin();
    let booksLakebtc = resolve.lakebtc();
    let booksLbank = resolve.lbank();
    let booksLivecoin = resolve.livecoin();
    let booksLiqui = resolve.liqui();
    let booksLykke = resolve.lykke();
    let booksTherock = resolve.therock();
    let booksTidex = resolve.tidex();
    let booksWex = resolve.wex();
    let booksYobit = resolve.yobit();
    let booksZaif = resolve.zaif();
    
    async function redisSet(exchange) {
      try{
        var response = await Promise.resolve(exchange)
        let redisArray = [];
        for (let key in response) {
      
          redisArray.push([key, response[key]]);
      
        }
        redis.set(response.id + 'book', JSON.stringify(redisArray));
        redis.set('booktime', JSON.stringify(new Date()));
      } catch(error) {
        console.log(error);
      }
    }

async function redisExchange(exchange) {
  try{
  var response = await Promise.resolve(exchange);
    let redisArray = [];
    for (let key in response) {
      if (response[key].last !== undefined) {
        //key is redis key
        //flatten (stringify array and add as response)
        redisArray.push([response.id, key, response[key].last, response[key].bid, response[key].ask, new Date(response[key].timestamp)]);
       // var anxproObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
      }
    }
    redis.set(response.id, JSON.stringify(redisArray));
    redis.set('time', JSON.stringify(new Date()));
} catch(err){
  console.log(err);
}
}

cron.schedule('*/10 * * * *', function(){
 redisSet(booksAnxpro);
 redisSet(booksAnybits);
 redisSet(booksBinance);
 redisSet(booksBitbay);
 redisSet(booksBitfinex2);
 redisSet(booksBitflyer);
 redisSet(booksBitlish);
 redisSet(booksBitstamp);
 redisSet(booksBtcmarkets);
 redisSet(booksBtctradeim);
 redisSet(booksCex);
 redisSet(booksCoinex);
 redisSet(booksCoinexchange);
 redisSet(booksCoinfalcon);
 redisSet(booksCoinmate);
 redisSet(booksExmo);
 redisSet(booksGatecoin);
 redisSet(booksGemini);
 redisSet(booksHitbtc2);
 redisSet(booksIce3x);
 redisSet(booksKraken);
 redisSet(booksKucoin);
 redisSet(booksLakebtc);
 redisSet(booksLbank);
 redisSet(booksLivecoin);
 redisSet(booksLiqui);
 redisSet(booksLykke);
 redisSet(booksWuadrigacx);
 redisSet(booksTherock);
 redisSet(booksTidex);
 redisSet(booksWex);
 redisSet(booksYobit);
 redisSet(booksZaif);
  console.log("Running task: Books");
});

cron.schedule('*/10 * * * *', ()=>{
  dbnews.news();
  console.log("Running task: News");
});

cron.schedule('*/10 * * * *', ()=>{
  redisExchange(anxpro);
   redisExchange(anybits);
   redisExchange(binance);
   redisExchange(bitbay);
   redisExchange(bitfinex2);
   redisExchange(bitflyer);
   redisExchange(bitlish);
   redisExchange(bitstamp);
   redisExchange(btcmarkets);
   redisExchange(btctradeim);
   redisExchange(cex);
   redisExchange(coinex);
   redisExchange(coinexchange);
   redisExchange(coinfalcon);
   redisExchange(coinmate);
   redisExchange(exmo);
   redisExchange(gatecoin);
   redisExchange(gemini);
   redisExchange(hitbtc2);
   redisExchange(ice3x);
   redisExchange(kraken);
   redisExchange(kucoin);
   redisExchange(lakebtc);
   redisExchange(lbank);
   redisExchange(livecoin);
   redisExchange(liqui);
   redisExchange(lykke);
   redisExchange(qryptos);
   redisExchange(quadrigacx);
   redisExchange(therock);
   redisExchange(tidex);
   redisExchange(wex);
   redisExchange(yobit);
   redisExchange(zaif);
  console.log("Running task: Live");
});

cron.schedule('*/10 * * * *', ()=>{
  dbusd.dollar();
  console.log("Running task: USD");
});

cron.schedule('*/10 * * * *', ()=>{
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
    await redis.get('bitlish').then(function (result) {
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
    await redis.get('coinfalcon').then(function (result) {
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
    await redis.get('ice3x').then(function (result) {
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
    await redis.get('lbank').then(function (result) {
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
    await redis.get('lykke').then(function (result) {
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
    await redis.get('qryptos').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
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
    })
  })();
});
cron.schedule('*/10 * * * *', ()=>{
 (async function book() {
  var pairObj = [];
  await redis.get('anxprobook').then(function (result) {
      let resultArr = JSON.parse(result);
      pairObj.push(resultArr);
  }).catch(err => console.log(err));
  await redis.get('anybitsbook').then(function (result) {
      let resultArr = JSON.parse(result);
      pairObj.push(resultArr);
  }).catch(err => console.log(err));
  await redis.get('binancebook').then(function (result) {
      let resultArr = JSON.parse(result);
      pairObj.push(resultArr);
  }).catch(err => console.log(err));
  await redis.get('bitbaybook').then(function (result) {
      let resultArr = JSON.parse(result);
      pairObj.push(resultArr);
  }).catch(err => console.log(err));
  await redis.get('bitfinex2book').then(function (result) {
      let resultArr = JSON.parse(result);
      pairObj.push(resultArr);
  }).catch(err => console.log(err));
  await redis.get('bitflyerbook').then(function (result) {
      let resultArr = JSON.parse(result);
      pairObj.push(resultArr);
  }).catch(err => console.log(err));
  await redis.get('bitlishbook').then(function (result) {
      let resultArr = JSON.parse(result);
      pairObj.push(resultArr);
  }).catch(err => console.log(err));
  await redis.get('bitstampbook').then(function (result) {
      let resultArr = JSON.parse(result);
      pairObj.push(resultArr);
  }).catch(err => console.log(err));
  await redis.get('btcmarketsbook').then(function (result) {
      let resultArr = JSON.parse(result);
      pairObj.push(resultArr);
  }).catch(err => console.log(err));
  await redis.get('btctradeimbook').then(function (result) {
      let resultArr = JSON.parse(result);
      pairObj.push(resultArr);
  }).catch(err => console.log(err));
  await redis.get('cexbook').then(function (result) {
      let resultArr = JSON.parse(result);
      pairObj.push(resultArr);
  }).catch(err => console.log(err));
  await redis.get('coinexbook').then(function (result) {
      let resultArr = JSON.parse(result);
      pairObj.push(resultArr);
  }).catch(err => console.log(err));
  await redis.get('coinexchangebook').then(function (result) {
      let resultArr = JSON.parse(result);
      pairObj.push(resultArr);
  }).catch(err => console.log(err));
  await redis.get('coinfalconbook').then(function (result) {
      let resultArr = JSON.parse(result);
      pairObj.push(resultArr);
  }).catch(err => console.log(err));
  await redis.get('coinmatebook').then(function (result) {
      let resultArr = JSON.parse(result);
      pairObj.push(resultArr);
  }).catch(err => console.log(err));
  await redis.get('exmobook').then(function (result) {
      let resultArr = JSON.parse(result);
      pairObj.push(resultArr);
  }).catch(err => console.log(err));
  await redis.get('gatecoinbook').then(function (result) {
      let resultArr = JSON.parse(result);
      pairObj.push(resultArr);
  }).catch(err => console.log(err));
  await redis.get('geminibook').then(function (result) {
      let resultArr = JSON.parse(result);
      pairObj.push(resultArr);
  }).catch(err => console.log(err));
  await redis.get('hitbtc2book').then(function (result) {
      let resultArr = JSON.parse(result);
      pairObj.push(resultArr);
  }).catch(err => console.log(err));
  await redis.get('ice3xbook').then(function (result) {
      let resultArr = JSON.parse(result);
      pairObj.push(resultArr);
  }).catch(err => console.log(err));
  await redis.get('krakenbook').then(function (result) {
      let resultArr = JSON.parse(result);
      pairObj.push(resultArr);
  }).catch(err => console.log(err));
  await redis.get('kucoinbook').then(function (result) {
      let resultArr = JSON.parse(result);
      pairObj.push(resultArr);
  }).catch(err => console.log(err));
  await redis.get('lakebtcbook').then(function (result) {
      let resultArr = JSON.parse(result);
      pairObj.push(resultArr);
  }).catch(err => console.log(err));
  await redis.get('lbankbook').then(function (result) {
      let resultArr = JSON.parse(result);
      pairObj.push(resultArr);
  }).catch(err => console.log(err));
  await redis.get('livecoinbook').then(function (result) {
      let resultArr = JSON.parse(result);
      pairObj.push(resultArr);
  }).catch(err => console.log(err));
  await redis.get('liquibook').then(function (result) {
      let resultArr = JSON.parse(result);
      pairObj.push(resultArr);
  }).catch(err => console.log(err));
  await redis.get('lykkebook').then(function (result) {
      let resultArr = JSON.parse(result);
      pairObj.push(resultArr);
  }).catch(err => console.log(err));
  await redis.get('qryptosbook').then(function (result) {
      let resultArr = JSON.parse(result);
      pairObj.push(resultArr);
  }).catch(err => console.log(err));
  await redis.get('quadrigacxbook').then(function (result) {
      let resultArr = JSON.parse(result);
      pairObj.push(resultArr);
  }).catch(err => console.log(err));
  await redis.get('therockbook').then(function (result) {
      let resultArr = JSON.parse(result);
      pairObj.push(resultArr);
  }).catch(err => console.log(err));
  await redis.get('tidexbook').then(function (result) {
      let resultArr = JSON.parse(result);
      pairObj.push(resultArr);
  }).catch(err => console.log(err));
  await redis.get('wexbook').then(function (result) {
      let resultArr = JSON.parse(result);
      pairObj.push(resultArr);
  }).catch(err => console.log(err));
  await redis.get('yobitbook').then(function (result) {
      let resultArr = JSON.parse(result);
      pairObj.push(resultArr);
  }).catch(err => console.log(err));
  await redis.get('zaifbook').then(function (result) {
      let resultArr = JSON.parse(result);
      pairObj.push(resultArr);
  }).catch(err => console.log(err));
  
  //do some object reduction to rootObj here before displaying it.
  redis.set('books', JSON.stringify(pairObj));
  //do some object reduction to rootObj here before displaying it.
  redis.set('live', JSON.stringify(rootObj));
})();
});

cron.schedule('*/10 * * * *', ()=>{
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
    redis.set('master', JSON.stringify(RETURN));
  })();
});


cron.schedule('*/10 * * * *', ()=>{
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
