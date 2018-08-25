var resolve = require("./logicbooks.js");

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

    if (len(response[key].bids) > 0) { bid = response[key].bids } else { bid = Null }
    if (len(orderbook[key].asks) > 0) { ask = response[key].asks } else { ask = Null }
    if (bid && ask) { spread = (ask - bid) } else { spread = Null }
    console.log(response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread })
    //key is redis key
    //flatten (stringify array and add as response)
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
    console.log(response.id + " " + key + " market price " + JSON.stringify({ 'bid': bid, 'ask': ask, 'spread': spread }) + new Date());
    // var anxproObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));

  }
  redis.set('anxprobook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err));
anybits.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (len(response[key].bids) > 0) { bid = response[key].bids } else { bid = Null }
    if (len(orderbook[key].asks) > 0) { ask = response[key].asks } else { ask = Null }
    if (bid && ask) { spread = (ask - bid) } else { spread = Null }
    console.log(response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread })
    //key is redis key
    //flatten (stringify array and add as response)
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
    console.log(response.id + " " + key + " market price " + JSON.stringify({ 'bid': bid, 'ask': ask, 'spread': spread }) + new Date());
  }
  redis.set('anybitsbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
binance.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (response[key].last !== undefined) {
      if (len(response[key].bids) > 0) { bid = response[key].bids } else { bid = Null }
      if (len(orderbook[key].asks) > 0) { ask = response[key].asks } else { ask = Null }
      if (bid && ask) { spread = (ask - bid) } else { spread = Null }
      console.log(response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread })
      //key is redis key
      //flatten (stringify array and add as response)
      redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
      console.log(response.id + " " + key + " market price " + JSON.stringify({ 'bid': bid, 'ask': ask, 'spread': spread }) + new Date());
    }
  }
  redis.set('binancebook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
bitbay.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (len(response[key].bids) > 0) { bid = response[key].bids } else { bid = Null }
    if (len(orderbook[key].asks) > 0) { ask = response[key].asks } else { ask = Null }
    if (bid && ask) { spread = (ask - bid) } else { spread = Null }
    console.log(response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread })
    //key is redis key
    //flatten (stringify array and add as response)
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
    console.log(response.id + " " + key + " market price " + { 'bid': bid, 'ask': ask, 'spread': spread } + new Date());
  }
  redis.set('bitbaybook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); // fees
bitfinex2.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (len(response[key].bids) > 0) { bid = response[key].bids } else { bid = Null }
    if (len(orderbook[key].asks) > 0) { ask = response[key].asks } else { ask = Null }
    if (bid && ask) { spread = (ask - bid) } else { spread = Null }
    console.log(response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread })
    //key is redis key
    //flatten (stringify array and add as response)
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
    console.log(response.id + " " + key + " market price " + { 'bid': bid, 'ask': ask, 'spread': spread } + new Date());
  }
  redis.set('bitfinex2book', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
bitflyer.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (len(response[key].bids) > 0) { bid = response[key].bids } else { bid = Null }
    if (len(orderbook[key].asks) > 0) { ask = response[key].asks } else { ask = Null }
    if (bid && ask) { spread = (ask - bid) } else { spread = Null }
    console.log(response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread })
    //key is redis key
    //flatten (stringify array and add as response)
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
    console.log(response.id + " " + key + " market price " + JSON.stringify({ 'bid': bid, 'ask': ask, 'spread': spread }) + new Date());
  }
  redis.set('bitflyerbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
bitlish.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (len(response[key].bids) > 0) { bid = response[key].bids } else { bid = Null }
    if (len(orderbook[key].asks) > 0) { ask = response[key].asks } else { ask = Null }
    if (bid && ask) { spread = (ask - bid) } else { spread = Null }
    console.log(response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread })
    //key is redis key
    //flatten (stringify array and add as response)
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
    console.log(response.id + " " + key + " market price " + { 'bid': bid, 'ask': ask, 'spread': spread } + " " + new Date());
  }
  redis.set('bitlishbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
bitstamp.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (len(response[key].bids) > 0) { bid = response[key].bids } else { bid = Null }
    if (len(orderbook[key].asks) > 0) { ask = response[key].asks } else { ask = Null }
    if (bid && ask) { spread = (ask - bid) } else { spread = Null }
    console.log(response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread })
    //key is redis key
    //flatten (stringify array and add as response)
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
    console.log(response.id + " " + key + " market price " + { 'bid': bid, 'ask': ask, 'spread': spread } + new Date());
  }
  redis.set('bitstampbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
btcmarkets.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (len(response[key].bids) > 0) { bid = response[key].bids } else { bid = Null }
    if (len(orderbook[key].asks) > 0) { ask = response[key].asks } else { ask = Null }
    if (bid && ask) { spread = (ask - bid) } else { spread = Null }
    console.log(response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread })
    //key is redis key
    //flatten (stringify array and add as response)
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
    console.log(response.id + " " + key + " market price " + { 'bid': bid, 'ask': ask, 'spread': spread } + " " + new Date());
  }
  redis.set('btcmarketsbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); // fees
btctradeim.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (len(response[key].bids) > 0) { bid = response[key].bids } else { bid = Null }
    if (len(orderbook[key].asks) > 0) { ask = response[key].asks } else { ask = Null }
    if (bid && ask) { spread = (ask - bid) } else { spread = Null }
    console.log(response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread })
    //key is redis key
    //flatten (stringify array and add as response)
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
    console.log(response.id + " " + key + " market price " + { 'bid': bid, 'ask': ask, 'spread': spread } + " " + new Date());
  }
  redis.set('btctradeimbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
cex.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (len(response[key].bids) > 0) { bid = response[key].bids } else { bid = Null }
    if (len(orderbook[key].asks) > 0) { ask = response[key].asks } else { ask = Null }
    if (bid && ask) { spread = (ask - bid) } else { spread = Null }
    console.log(response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread })
    //key is redis key
    //flatten (stringify array and add as response)
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
    console.log(response.id + " " + key + " market price " + { 'bid': bid, 'ask': ask, 'spread': spread } + " " + new Date());
  }
  redis.set('cexbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); // 
coinbasepro.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (len(response[key].bids) > 0) { bid = response[key].bids } else { bid = Null }
    if (len(orderbook[key].asks) > 0) { ask = response[key].asks } else { ask = Null }
    if (bid && ask) { spread = (ask - bid) } else { spread = Null }
    console.log(response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread })
    //key is redis key
    //flatten (stringify array and add as response)
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
    console.log(response.id + " " + key + " market price " + { 'bid': bid, 'ask': ask, 'spread': spread } + " " + new Date());
  }
  redis.set('coinbaseprobook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); // fees
coinegg.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (len(response[key].bids) > 0) { bid = response[key].bids } else { bid = Null }
    if (len(orderbook[key].asks) > 0) { ask = response[key].asks } else { ask = Null }
    if (bid && ask) { spread = (ask - bid) } else { spread = Null }
    console.log(response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread })
    //key is redis key
    //flatten (stringify array and add as response)
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
    console.log(response.id + " " + key + " market price " + { 'bid': bid, 'ask': ask, 'spread': spread } + " " + new Date());
  }
  redis.set('coineggbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); // 
coinex.then(response => {
  let redisArray = [];
  for (let key in response) {
      if (len(response[key].bids) > 0) { bid = response[key].bids } else { bid = Null }
      if (len(orderbook[key].asks) > 0) { ask = response[key].asks } else { ask = Null }
      if (bid && ask) { spread = (ask - bid) } else { spread = Null }
      console.log(response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread })
      //key is redis key
      //flatten (stringify array and add as response)
      redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
      console.log(response.id + " " + key + " market price " + { 'bid': bid, 'ask': ask, 'spread': spread } + " " + new Date());
  }
  redis.set('coinexbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); // fees
coinexchange.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (len(response[key].bids) > 0) { bid = response[key].bids } else { bid = Null }
    if (len(orderbook[key].asks) > 0) { ask = response[key].asks } else { ask = Null }
    if (bid && ask) { spread = (ask - bid) } else { spread = Null }
    console.log(response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread })
    //key is redis key
    //flatten (stringify array and add as response)
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
    console.log(response.id + " " + key + " market price " + { 'bid': bid, 'ask': ask, 'spread': spread } + " " + new Date());
  }
  redis.set('coinexchangebook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); // last price
coinfalcon.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (len(response[key].bids) > 0) { bid = response[key].bids } else { bid = Null }
    if (len(orderbook[key].asks) > 0) { ask = response[key].asks } else { ask = Null }
    if (bid && ask) { spread = (ask - bid) } else { spread = Null }
    console.log(response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread })
    //key is redis key
    //flatten (stringify array and add as response)
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
    console.log(response.id + " " + key + " market price " + { 'bid': bid, 'ask': ask, 'spread': spread } + " " + new Date());
  }
  redis.set('coinfalconbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); // 
coinmate.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (len(response[key].bids) > 0) { bid = response[key].bids } else { bid = Null }
    if (len(orderbook[key].asks) > 0) { ask = response[key].asks } else { ask = Null }
    if (bid && ask) { spread = (ask - bid) } else { spread = Null }
    console.log(response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread })
    //key is redis key
    //flatten (stringify array and add as response)
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
    console.log(response.id + " " + key + " market price " + { 'bid': bid, 'ask': ask, 'spread': spread } + " " + new Date());
  }
  redis.set('coinmatebook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); // fees
dsx.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (len(response[key].bids) > 0) { bid = response[key].bids } else { bid = Null }
    if (len(orderbook[key].asks) > 0) { ask = response[key].asks } else { ask = Null }
    if (bid && ask) { spread = (ask - bid) } else { spread = Null }
    console.log(response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread })
    //key is redis key
    //flatten (stringify array and add as response)
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
    console.log(response.id + " " + key + " market price " + { 'bid': bid, 'ask': ask, 'spread': spread } + " " + new Date());
  }
  redis.set('dsxbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
exmo.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (len(response[key].bids) > 0) { bid = response[key].bids } else { bid = Null }
    if (len(orderbook[key].asks) > 0) { ask = response[key].asks } else { ask = Null }
    if (bid && ask) { spread = (ask - bid) } else { spread = Null }
    console.log(response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread })
    //key is redis key
    //flatten (stringify array and add as response)
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
    console.log(response.id + " " + key + " market price " + { 'bid': bid, 'ask': ask, 'spread': spread } + " " + new Date());
  }
  redis.set('exmobook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
gatecoin.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (len(response[key].bids) > 0) { bid = response[key].bids } else { bid = Null }
    if (len(orderbook[key].asks) > 0) { ask = response[key].asks } else { ask = Null }
    if (bid && ask) { spread = (ask - bid) } else { spread = Null }
    console.log(response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread })
    //key is redis key
    //flatten (stringify array and add as response)
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
    console.log(response.id + " " + key + " market price " + { 'bid': bid, 'ask': ask, 'spread': spread } + " " + new Date());
  }
  redis.set('gatecoinbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
gemini.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (len(response[key].bids) > 0) { bid = response[key].bids } else { bid = Null }
    if (len(orderbook[key].asks) > 0) { ask = response[key].asks } else { ask = Null }
    if (bid && ask) { spread = (ask - bid) } else { spread = Null }
    console.log(response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread })
    //key is redis key
    //flatten (stringify array and add as response)
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
    console.log(response.id + " " + key + " market price " + { 'bid': bid, 'ask': ask, 'spread': spread } + " " + new Date());
  }
  redis.set('geminibook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
hitbtc2.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (len(response[key].bids) > 0) { bid = response[key].bids } else { bid = Null }
    if (len(orderbook[key].asks) > 0) { ask = response[key].asks } else { ask = Null }
    if (bid && ask) { spread = (ask - bid) } else { spread = Null }
    console.log(response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread })
    //key is redis key
    //flatten (stringify array and add as response)
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
    console.log(response.id + " " + key + " market price " + { 'bid': bid, 'ask': ask, 'spread': spread } + " " + new Date());
  }
  redis.set('hitbtc2book', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //fees
ice3x.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (len(response[key].bids) > 0) { bid = response[key].bids } else { bid = Null }
    if (len(orderbook[key].asks) > 0) { ask = response[key].asks } else { ask = Null }
    if (bid && ask) { spread = (ask - bid) } else { spread = Null }
    console.log(response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread })
    //key is redis key
    //flatten (stringify array and add as response)
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
    console.log(response.id + " " + key + " market price " + { 'bid': bid, 'ask': ask, 'spread': spread } + " " + new Date());
  }
  redis.set('ice3xbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); // 
kraken.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (len(response[key].bids) > 0) { bid = response[key].bids } else { bid = Null }
    if (len(orderbook[key].asks) > 0) { ask = response[key].asks } else { ask = Null }
    if (bid && ask) { spread = (ask - bid) } else { spread = Null }
    console.log(response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread })
    //key is redis key
    //flatten (stringify array and add as response)
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
    console.log(response.id + " " + key + " market price " + { 'bid': bid, 'ask': ask, 'spread': spread } + " " + new Date());
  }
  redis.set('krakenbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); // has fees
kucoin.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (len(response[key].bids) > 0) { bid = response[key].bids } else { bid = Null }
    if (len(orderbook[key].asks) > 0) { ask = response[key].asks } else { ask = Null }
    if (bid && ask) { spread = (ask - bid) } else { spread = Null }
    console.log(response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread })
    //key is redis key
    //flatten (stringify array and add as response)
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
    console.log(response.id + " " + key + " market price " + { 'bid': bid, 'ask': ask, 'spread': spread } + " " + new Date());
  }
  redis.set('kucoinbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); // has last deal price
lakebtc.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (len(response[key].bids) > 0) { bid = response[key].bids } else { bid = Null }
    if (len(orderbook[key].asks) > 0) { ask = response[key].asks } else { ask = Null }
    if (bid && ask) { spread = (ask - bid) } else { spread = Null }
    console.log(response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread })
    //key is redis key
    //flatten (stringify array and add as response)
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
    console.log(response.id + " " + key + " market price " + { 'bid': bid, 'ask': ask, 'spread': spread } + " " + new Date());
  }
  redis.set('lakebtcbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); // has last price
lbank.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (len(response[key].bids) > 0) { bid = response[key].bids } else { bid = Null }
    if (len(orderbook[key].asks) > 0) { ask = response[key].asks } else { ask = Null }
    if (bid && ask) { spread = (ask - bid) } else { spread = Null }
    console.log(response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread })
    //key is redis key
    //flatten (stringify array and add as response)
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
    console.log(response.id + " " + key + " market price " + { 'bid': bid, 'ask': ask, 'spread': spread } + " " + new Date());
  }
  redis.set('lbankbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
livecoin.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (len(response[key].bids) > 0) { bid = response[key].bids } else { bid = Null }
    if (len(orderbook[key].asks) > 0) { ask = response[key].asks } else { ask = Null }
    if (bid && ask) { spread = (ask - bid) } else { spread = Null }
    console.log(response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread })
    //key is redis key
    //flatten (stringify array and add as response)
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
    console.log(response.id + " " + key + " market price " + { 'bid': bid, 'ask': ask, 'spread': spread } + " " + new Date());
  }
  redis.set('livecoinbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //bid/ask prices
liqui.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (len(response[key].bids) > 0) { bid = response[key].bids } else { bid = Null }
    if (len(orderbook[key].asks) > 0) { ask = response[key].asks } else { ask = Null }
    if (bid && ask) { spread = (ask - bid) } else { spread = Null }
    console.log(response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread })
    //key is redis key
    //flatten (stringify array and add as response)
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
    console.log(response.id + " " + key + " market price " + { 'bid': bid, 'ask': ask, 'spread': spread } + " " + new Date());
  }
  redis.set('liquibook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //taker
lykke.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (len(response[key].bids) > 0) { bid = response[key].bids } else { bid = Null }
    if (len(orderbook[key].asks) > 0) { ask = response[key].asks } else { ask = Null }
    if (bid && ask) { spread = (ask - bid) } else { spread = Null }
    console.log(response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread })
    //key is redis key
    //flatten (stringify array and add as response)
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
    console.log(response.id + " " + key + " market price " + { 'bid': bid, 'ask': ask, 'spread': spread } + " " + new Date());
  }
  redis.set('lykkebook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
qryptos.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (len(response[key].bids) > 0) { bid = response[key].bids } else { bid = Null }
    if (len(orderbook[key].asks) > 0) { ask = response[key].asks } else { ask = Null }
    if (bid && ask) { spread = (ask - bid) } else { spread = Null }
    console.log(response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread })
    //key is redis key
    //flatten (stringify array and add as response)
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
    console.log(response.id + " " + key + " market price " + { 'bid': bid, 'ask': ask, 'spread': spread } + " " + new Date());
  }
  redis.set('qryptosbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //market bid, market ask
quadrigacx.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (len(response[key].bids) > 0) { bid = response[key].bids } else { bid = Null }
    if (len(orderbook[key].asks) > 0) { ask = response[key].asks } else { ask = Null }
    if (bid && ask) { spread = (ask - bid) } else { spread = Null }
    console.log(response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread })
    //key is redis key
    //flatten (stringify array and add as response)
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
    console.log(response.id + " " + key + " market price " + { 'bid': bid, 'ask': ask, 'spread': spread } + " " + new Date());
  }
  redis.set('quadrigacxbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //includes fees
rightbtc.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (len(response[key].bids) > 0) { bid = response[key].bids } else { bid = Null }
    if (len(orderbook[key].asks) > 0) { ask = response[key].asks } else { ask = Null }
    if (bid && ask) { spread = (ask - bid) } else { spread = Null }
    console.log(response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread })
    //key is redis key
    //flatten (stringify array and add as response)
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
    console.log(response.id + " " + key + " market price " + { 'bid': bid, 'ask': ask, 'spread': spread } + " " + new Date());
  }
  redis.set('rightbtcbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
southxchange.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (len(response[key].bids) > 0) { bid = response[key].bids } else { bid = Null }
    if (len(orderbook[key].asks) > 0) { ask = response[key].asks } else { ask = Null }
    if (bid && ask) { spread = (ask - bid) } else { spread = Null }
    console.log(response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread })
    //key is redis key
    //flatten (stringify array and add as response)
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
    console.log(response.id + " " + key + " market price " + { 'bid': bid, 'ask': ask, 'spread': spread } + " " + new Date());
  }
  redis.set('southxchangebooks', JSON.stringify(redisArray));
  redis.set('bookstime', JSON.stringify(new Date()));
}).catch(err => console.log(err));
therock.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (len(response[key].bids) > 0) { bid = response[key].bids } else { bid = Null }
    if (len(orderbook[key].asks) > 0) { ask = response[key].asks } else { ask = Null }
    if (bid && ask) { spread = (ask - bid) } else { spread = Null }
    console.log(response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread })
    //key is redis key
    //flatten (stringify array and add as response)
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
    console.log(response.id + " " + key + " market price " + { 'bid': bid, 'ask': ask, 'spread': spread } + " " + new Date());
  }
  redis.set('therockbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //has last price
tidex.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (len(response[key].bids) > 0) { bid = response[key].bids } else { bid = Null }
    if (len(orderbook[key].asks) > 0) { ask = response[key].asks } else { ask = Null }
    if (bid && ask) { spread = (ask - bid) } else { spread = Null }
    console.log(response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread })
    //key is redis key
    //flatten (stringify array and add as response)
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
    console.log(response.id + " " + key + " market price " + { 'bid': bid, 'ask': ask, 'spread': spread } + " " + new Date());
  }
  redis.set('tidexbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //includes fees
wex.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (len(response[key].bids) > 0) { bid = response[key].bids } else { bid = Null }
    if (len(orderbook[key].asks) > 0) { ask = response[key].asks } else { ask = Null }
    if (bid && ask) { spread = (ask - bid) } else { spread = Null }
    console.log(response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread })
    //key is redis key
    //flatten (stringify array and add as response)
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
    console.log(response.id + " " + key + " market price " + { 'bid': bid, 'ask': ask, 'spread': spread } + " " + new Date());
  }
  redis.set('wexbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //includes fees
yobit.then(response => {
  let redisArray = [];
  for (let key in response) {
    if (len(response[key].bids) > 0) { bid = response[key].bids } else { bid = Null }
    if (len(orderbook[key].asks) > 0) { ask = response[key].asks } else { ask = Null }
    if (bid && ask) { spread = (ask - bid) } else { spread = Null }
    console.log(response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread })
    //key is redis key
    //flatten (stringify array and add as response)
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
    console.log(response.id + " " + key + " market price " + { 'bid': bid, 'ask': ask, 'spread': spread } + " " + new Date());
  }
  redis.set('yobitbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //includes fees
zaif.then(response => {
  let redisArray = [];
  for (let key in response) {
    //save values immediately to redis instead of using the aggregate function. 
    if (len(response[key].bids) > 0) { bid = response[key].bids } else { bid = Null }
    if (len(orderbook[key].asks) > 0) { ask = response[key].asks } else { ask = Null }
    if (bid && ask) { spread = (ask - bid) } else { spread = Null }
    console.log(response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread })
    //key is redis key
    //flatten (stringify array and add as response)
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
    console.log(response.id + " " + key + " market price " + { 'bid': bid, 'ask': ask, 'spread': spread } + " " + new Date());
  }
  redis.set('zaifbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //