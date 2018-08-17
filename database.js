var resolve = require("./logic.js");

var Redis = require('ioredis');
var redis = new Redis(process.env.REDIS_URL);

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


//write to redis async without using a promise.all, then they will overwrite as they update. 

//capture the exchange rates in the redis server and then do the multiplication on the front end. 

//promise = [anxpro, anybits, binance, bitbay, bitfinex2, bitflyer, bitlish, bitstamp, btcmarkets, btctradeim, cex, coinbasepro, coinegg, ]
//exchangeValues.then(response => console.log("Values: " + response)); //works
anxpro.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (response[key].last !== undefined) {
      //key is redis key
      //flatten (stringify array and add as response)
      redisArray.push([response.id, key, response[key].last, new Date(response[key].timestamp)]);
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
     // var anxproObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('anxpro', JSON.stringify(redisArray));
  redis.set('time', JSON.stringify(new Date()));
}).catch(err => console.log(err));
anybits.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (response[key].last !== undefined) {
      redisArray.push([response.id, key, response[key].last, new Date(response[key].timestamp)]);
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      //var anybitsObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('anybits', JSON.stringify(redisArray));
  redis.set('time', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
binance.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (response[key].last !== undefined) {
      redisArray.push([response.id, key, response[key].last, new Date(response[key].timestamp)]);
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      //var binanceObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('binance', JSON.stringify(redisArray));
  redis.set('time', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
bitbay.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (response[key].last !== undefined) {
      redisArray.push([response.id, key, response[key].last, new Date(response[key].timestamp)]);
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      //var bitpayObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('bitbay', JSON.stringify(redisArray));
  redis.set('time', JSON.stringify(new Date()));
}).catch(err => console.log(err)); // fees
bitfinex2.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (response[key].last !== undefined) {
      redisArray.push([response.id, key, response[key].last, new Date(response[key].timestamp)]);
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      //var bitfinex2Obj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('bitfinex2', JSON.stringify(redisArray));
  redis.set('time', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
bitflyer.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (response[key].last !== undefined) {
      redisArray.push([response.id, key, response[key].last, new Date(response[key].timestamp)]);
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      //var bitflyerObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('bitflyer', JSON.stringify(redisArray));
  redis.set('time', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
bitlish.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (response[key].last !== undefined) {
      redisArray.push([response.id, key, response[key].last, new Date(response[key].timestamp)]);
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      //var bitlishObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('bitlish', JSON.stringify(redisArray));
  redis.set('time', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
bitstamp.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (response[key].last !== undefined) {
      redisArray.push([response.id, key, response[key].last, new Date(response[key].timestamp)]);
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      //var bitstampObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('bitstamp', JSON.stringify(redisArray));
  redis.set('time', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
btcmarkets.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (response[key].last !== undefined) {
      redisArray.push([response.id, key, response[key].last, new Date(response[key].timestamp)]);
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
     // var btcmarketsObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('btcmarkets', JSON.stringify(redisArray));
  redis.set('time', JSON.stringify(new Date()));
}).catch(err => console.log(err)); // fees
btctradeim.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (response[key].last !== undefined) {
      redisArray.push([response.id, key, response[key].last, new Date(response[key].timestamp)]);
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      //var btctradeimObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('btctradeim', JSON.stringify(redisArray));
  redis.set('time', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
cex.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (response[key].last !== undefined) {
      redisArray.push([response.id, key, response[key].last, new Date(response[key].timestamp)]);
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      //var cexObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('cex', JSON.stringify(redisArray));
  redis.set('time', JSON.stringify(new Date()));
}).catch(err => console.log(err)); // 
coinbasepro.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (response[key].last !== undefined) {
      redisArray.push([response.id, key, response[key].last, new Date(response[key].timestamp)]);
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      //var coinbaseproObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('coinbasepro', JSON.stringify(redisArray));
  redis.set('time', JSON.stringify(new Date()));
}).catch(err => console.log(err)); // fees
coinegg.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (response[key].last !== undefined) {
      redisArray.push([response.id, key, response[key].last, new Date(response[key].timestamp)]);
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      //var coineggObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('coinegg', JSON.stringify(redisArray));
  redis.set('time', JSON.stringify(new Date()));
}).catch(err => console.log(err)); // 
coinex.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (response[key].last !== undefined) {
      redisArray.push([response.id, key, response[key].last, new Date(response[key].timestamp)]);
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      //var coinexObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('coinex', JSON.stringify(redisArray));
  redis.set('time', JSON.stringify(new Date()));
}).catch(err => console.log(err)); // fees
coinexchange.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (response[key].last !== undefined) {
      redisArray.push([response.id, key, response[key].last, new Date(response[key].timestamp)]);
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      //var coinexchangeObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('coinexchange', JSON.stringify(redisArray));
  redis.set('time', JSON.stringify(new Date()));
}).catch(err => console.log(err)); // last price
coinfalcon.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (response[key].last !== undefined) {
      redisArray.push([response.id, key, response[key].last, new Date(response[key].timestamp)]);
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      //var coinfalconObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('coinfalcon', JSON.stringify(redisArray));
  redis.set('time', JSON.stringify(new Date()));
}).catch(err => console.log(err)); // 
coinmate.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (response[key].last !== undefined) {
      redisArray.push([response.id, key, response[key].last, new Date(response[key].timestamp)]);
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      //var coinmateObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('coinmate', JSON.stringify(redisArray));
  redis.set('time', JSON.stringify(new Date()));
}).catch(err => console.log(err)); // fees
dsx.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (response[key].last !== undefined) {
      redisArray.push([response.id, key, response[key].last, new Date(response[key].timestamp)]);
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      //var dsxObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('dsx', JSON.stringify(redisArray));
  redis.set('time', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
exmo.then(response => {
  let redisArray = [];
  for (let key in response) {
    let redisArray = [];
    if (response[key].last !== undefined) {
      redisArray.push([response.id, key, response[key].last, new Date(response[key].timestamp)]);
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      //var exmoObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('exmo', JSON.stringify(redisArray));
  redis.set('time', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
gatecoin.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (response[key].last !== undefined) {
      redisArray.push([response.id, key, response[key].last, new Date(response[key].timestamp)]);
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      //var gatecoinObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('gatecoin', JSON.stringify(redisArray));
  redis.set('time', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
gemini.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (response[key].last !== undefined) {
      redisArray.push([response.id, key, response[key].last, new Date(response[key].timestamp)]);
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      //var geminiObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('gemini', JSON.stringify(redisArray));
  redis.set('time', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
hitbtc2.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (response[key].last !== undefined) {
      redisArray.push([response.id, key, response[key].last, new Date(response[key].timestamp)]);
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      //var hitbtc2Obj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('hitbtc2', JSON.stringify(redisArray));
  redis.set('time', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //fees
ice3x.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (response[key].last !== undefined) {
      redisArray.push([response.id, key, response[key].last, new Date(response[key].timestamp)]);
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      //var ice3xObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('ice3x', JSON.stringify(redisArray));
  redis.set('time', JSON.stringify(new Date()));
}).catch(err => console.log(err)); // 
kraken.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (response[key].last !== undefined) {
      redisArray.push([response.id, key, response[key].last, new Date(response[key].timestamp)]);
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      //var krakenObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('kraken', JSON.stringify(redisArray));
  redis.set('time', JSON.stringify(new Date()));
}).catch(err => console.log(err)); // has fees
kucoin.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (response[key].last !== undefined) {
      redisArray.push([response.id, key, response[key].last, new Date(response[key].timestamp)]);
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      //var kucoinObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('kucoin', JSON.stringify(redisArray));
  redis.set('time', JSON.stringify(new Date()));
}).catch(err => console.log(err)); // has last deal price
lakebtc.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (response[key].last !== undefined) {
      redisArray.push([response.id, key, response[key].last, new Date(response[key].timestamp)]);
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      //var lakebtcObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('lakebtc', JSON.stringify(redisArray));
  redis.set('time', JSON.stringify(new Date()));
}).catch(err => console.log(err)); // has last price
lbank.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (response[key].last !== undefined) {
      redisArray.push([response.id, key, response[key].last, new Date(response[key].timestamp)]);
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      //var lbankObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('lbank', JSON.stringify(redisArray));
  redis.set('time', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
livecoin.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (response[key].last !== undefined) {
      redisArray.push([response.id, key, response[key].last, new Date(response[key].timestamp)]);
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      //var livecoinObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('livecoin', JSON.stringify(redisArray));
  redis.set('time', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //bid/ask prices
liqui.then(response => {
  let redisArray = [];  
  for (let key in response) {
    if (response[key].last !== undefined) {
      redisArray.push([response.id, key, response[key].last, new Date(response[key].timestamp)]);
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      //var liquiObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('liqui', JSON.stringify(redisArray));
  redis.set('time', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //taker
lykke.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (response[key].last !== undefined) {
      redisArray.push([response.id, key, response[key].last, new Date(response[key].timestamp)]);
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      //var lykkeObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('lykke', JSON.stringify(redisArray));
  redis.set('time', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
qryptos.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (response[key].last !== undefined) {
      redisArray.push([response.id, key, response[key].last, new Date(response[key].timestamp)]);
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      //var qryptosObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('qryptos', JSON.stringify(redisArray));
  redis.set('time', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //market bid, market ask
quadrigacx.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (response[key].last !== undefined) {
      redisArray.push([response.id, key, response[key].last, new Date(response[key].timestamp)]);
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      //var quadrigacxObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('quadrigacx', JSON.stringify(redisArray));
  redis.set('time', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //includes fees
rightbtc.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (response[key].last !== undefined) {
      redisArray.push([response.id, key, response[key].last, new Date(response[key].timestamp)]);
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      //var rightbtcObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('rightbtc', JSON.stringify(redisArray));
  redis.set('time', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
southxchange.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (response[key].last !== undefined) {
      redisArray.push([response.id, key, response[key].last, new Date(response[key].timestamp)]);
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      //var southxchangeObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('southxchange', JSON.stringify(redisArray));
  redis.set('time', JSON.stringify(new Date()));
}).catch(err => console.log(err));
therock.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (response[key].last !== undefined) {
      redisArray.push([response.id, key, response[key].last, new Date(response[key].timestamp)]);
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      //var therockObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('therock', JSON.stringify(redisArray));
  redis.set('time', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //has last price
tidex.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (response[key].last !== undefined) {
      redisArray.push([response.id, key, response[key].last, new Date(response[key].timestamp)]);
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      //var tidexObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('tidex', JSON.stringify(redisArray));
  redis.set('time', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //includes fees
wex.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (response[key].last !== undefined) {
      redisArray.push([response.id, key, response[key].last, new Date(response[key].timestamp)]);
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      //var wexObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('wex', JSON.stringify(redisArray));
  redis.set('time', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //includes fees
yobit.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (response[key].last !== undefined) {
      redisArray.push([response.id, key, response[key].last, new Date(response[key].timestamp)]);
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      //var yobitObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('yobit', JSON.stringify(redisArray));
  redis.set('time', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //includes fees
zaif.then(response => {
  let redisArray = [];
  for (let key in response) {
    //save values immediately to redis instead of using the aggregate function. 
    if (response[key].last !== undefined) {
      redisArray.push([response.id, key, response[key].last, new Date(response[key].timestamp)]);
      console.log(response.id + " " + key + " " + response[key].last + " " + new Date(response[key].timestamp));
      //var zaifObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
    }
  }
  redis.set('zaif', JSON.stringify(redisArray));
  redis.set('time', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //