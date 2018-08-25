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

    let orderbook = response;
    let bid = orderbook[key].bids.length ? orderbook[key].bids[0][0] : undefined
    let ask = orderbook[key].asks.length ? orderbook[key].asks[0][0] : undefined
    let spread = (bid && ask) ? ask - bid : undefined
    console.log(response.id, key, 'market price', { bid, ask, spread })
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
    // var anxproObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));

  }
  redis.set('anxprobook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err));
anybits.then(response => {
  let redisArray = [];
  for (let key in response) {
    let orderbook = response;
    let bid = orderbook[key].bids.length ? orderbook[key].bids[0][0] : undefined
    let ask = orderbook[key].asks.length ? orderbook[key].asks[0][0] : undefined
    let spread = (bid && ask) ? ask - bid : undefined
    console.log(response.id, key, 'market price', { bid, ask, spread })
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
  }
  redis.set('anybitsbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
binance.then(response => {
  let redisArray = [];
  for (let key in response) {
    let orderbook = response;
    let bid = orderbook[key].bids.length ? orderbook[key].bids[0][0] : undefined
    let ask = orderbook[key].asks.length ? orderbook[key].asks[0][0] : undefined
    let spread = (bid && ask) ? ask - bid : undefined
    console.log(response.id, key, 'market price', { bid, ask, spread })
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
  }
  redis.set('binancebook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
bitbay.then(response => {
  let redisArray = [];
  for (let key in response) {
    let orderbook = response;
    let bid = orderbook[key].bids.length ? orderbook[key].bids[0][0] : undefined
    let ask = orderbook[key].asks.length ? orderbook[key].asks[0][0] : undefined
    let spread = (bid && ask) ? ask - bid : undefined
    console.log(response.id, key, 'market price', { bid, ask, spread })
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
  }
  redis.set('bitbaybook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); // fees
bitfinex2.then(response => {
  let redisArray = [];
  for (let key in response) {
    let orderbook = response;
    let bid = orderbook[key].bids.length ? orderbook[key].bids[0][0] : undefined
    let ask = orderbook[key].asks.length ? orderbook[key].asks[0][0] : undefined
    let spread = (bid && ask) ? ask - bid : undefined
    console.log(response.id, key, 'market price', { bid, ask, spread })
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
  }
  redis.set('bitfinex2book', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
bitflyer.then(response => {
  let redisArray = [];
  for (let key in response) {
    let orderbook = response;
    let bid = orderbook[key].bids.length ? orderbook[key].bids[0][0] : undefined
    let ask = orderbook[key].asks.length ? orderbook[key].asks[0][0] : undefined
    let spread = (bid && ask) ? ask - bid : undefined
    console.log(response.id, key, 'market price', { bid, ask, spread })
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
  }
  redis.set('bitflyerbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
bitlish.then(response => {
  let redisArray = [];
  for (let key in response) {
    let orderbook = response;
    let bid = orderbook[key].bids.length ? orderbook[key].bids[0][0] : undefined
    let ask = orderbook[key].asks.length ? orderbook[key].asks[0][0] : undefined
    let spread = (bid && ask) ? ask - bid : undefined
    console.log(response.id, key, 'market price', { bid, ask, spread })
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
  }
  redis.set('bitlishbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
bitstamp.then(response => {
  let redisArray = [];
  for (let key in response) {
    let orderbook = response;
    let bid = orderbook[key].bids.length ? orderbook[key].bids[0][0] : undefined
    let ask = orderbook[key].asks.length ? orderbook[key].asks[0][0] : undefined
    let spread = (bid && ask) ? ask - bid : undefined
    console.log(response.id, key, 'market price', { bid, ask, spread })
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
  }
  redis.set('bitstampbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
btcmarkets.then(response => {
  let redisArray = [];
  for (let key in response) {
    let orderbook = response;
    let bid = orderbook[key].bids.length ? orderbook[key].bids[0][0] : undefined
    let ask = orderbook[key].asks.length ? orderbook[key].asks[0][0] : undefined
    let spread = (bid && ask) ? ask - bid : undefined
    console.log(response.id, key, 'market price', { bid, ask, spread })
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
  }
  redis.set('btcmarketsbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); // fees
btctradeim.then(response => {
  let redisArray = [];
  for (let key in response) {
    let orderbook = response;
    let bid = orderbook[key].bids.length ? orderbook[key].bids[0][0] : undefined
    let ask = orderbook[key].asks.length ? orderbook[key].asks[0][0] : undefined
    let spread = (bid && ask) ? ask - bid : undefined
    console.log(response.id, key, 'market price', { bid, ask, spread })
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
  }
  redis.set('btctradeimbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
cex.then(response => {
  let redisArray = [];
  for (let key in response) {
    let orderbook = response;
    let bid = orderbook[key].bids.length ? orderbook[key].bids[0][0] : undefined
    let ask = orderbook[key].asks.length ? orderbook[key].asks[0][0] : undefined
    let spread = (bid && ask) ? ask - bid : undefined
    console.log(response.id, key, 'market price', { bid, ask, spread })
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
  }
  redis.set('cexbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); // 
coinbasepro.then(response => {
  let redisArray = [];
  for (let key in response) {
    let orderbook = response;
    let bid = orderbook[key].bids.length ? orderbook[key].bids[0][0] : undefined
    let ask = orderbook[key].asks.length ? orderbook[key].asks[0][0] : undefined
    let spread = (bid && ask) ? ask - bid : undefined
    console.log(response.id, key, 'market price', { bid, ask, spread })
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
  }
  redis.set('coinbaseprobook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); // fees
coinegg.then(response => {
  let redisArray = [];
  for (let key in response) {
    let orderbook = response;
    let bid = orderbook[key].bids.length ? orderbook[key].bids[0][0] : undefined
    let ask = orderbook[key].asks.length ? orderbook[key].asks[0][0] : undefined
    let spread = (bid && ask) ? ask - bid : undefined
    console.log(response.id, key, 'market price', { bid, ask, spread })
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
  }
  redis.set('coineggbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); // 
coinex.then(response => {
  let redisArray = [];
  for (let key in response) {
    let orderbook = response;
    let bid = orderbook[key].bids.length ? orderbook[key].bids[0][0] : undefined
    let ask = orderbook[key].asks.length ? orderbook[key].asks[0][0] : undefined
    let spread = (bid && ask) ? ask - bid : undefined
    console.log(response.id, key, 'market price', { bid, ask, spread })
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
  }
  redis.set('coinexbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); // fees
coinexchange.then(response => {
  let redisArray = [];
  for (let key in response) {
    let orderbook = response;
    let bid = orderbook[key].bids.length ? orderbook[key].bids[0][0] : undefined
    let ask = orderbook[key].asks.length ? orderbook[key].asks[0][0] : undefined
    let spread = (bid && ask) ? ask - bid : undefined
    console.log(response.id, key, 'market price', { bid, ask, spread })
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
  }
  redis.set('coinexchangebook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); // last price
coinfalcon.then(response => {
  let redisArray = [];
  for (let key in response) {
    let orderbook = response;
    let bid = orderbook[key].bids.length ? orderbook[key].bids[0][0] : undefined
    let ask = orderbook[key].asks.length ? orderbook[key].asks[0][0] : undefined
    let spread = (bid && ask) ? ask - bid : undefined
    console.log(response.id, key, 'market price', { bid, ask, spread })
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
  }
  redis.set('coinfalconbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); // 
coinmate.then(response => {
  let redisArray = [];
  for (let key in response) {
    let orderbook = response;
    let bid = orderbook[key].bids.length ? orderbook[key].bids[0][0] : undefined
    let ask = orderbook[key].asks.length ? orderbook[key].asks[0][0] : undefined
    let spread = (bid && ask) ? ask - bid : undefined
    console.log(response.id, key, 'market price', { bid, ask, spread })
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
  }
  redis.set('coinmatebook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); // fees
dsx.then(response => {
  let redisArray = [];
  for (let key in response) {
    let orderbook = response;
    let bid = orderbook[key].bids.length ? orderbook[key].bids[0][0] : undefined
    let ask = orderbook[key].asks.length ? orderbook[key].asks[0][0] : undefined
    let spread = (bid && ask) ? ask - bid : undefined
    console.log(response.id, key, 'market price', { bid, ask, spread })
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
  }
  redis.set('dsxbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
exmo.then(response => {
  let redisArray = [];
  for (let key in response) {
    let orderbook = response;
    let bid = orderbook[key].bids.length ? orderbook[key].bids[0][0] : undefined
    let ask = orderbook[key].asks.length ? orderbook[key].asks[0][0] : undefined
    let spread = (bid && ask) ? ask - bid : undefined
    console.log(response.id, key, 'market price', { bid, ask, spread })
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
  }
  redis.set('exmobook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
gatecoin.then(response => {
  let redisArray = [];
  for (let key in response) {
    let orderbook = response;
    let bid = orderbook[key].bids.length ? orderbook[key].bids[0][0] : undefined
    let ask = orderbook[key].asks.length ? orderbook[key].asks[0][0] : undefined
    let spread = (bid && ask) ? ask - bid : undefined
    console.log(response.id, key, 'market price', { bid, ask, spread })
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
  }
  redis.set('gatecoinbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
gemini.then(response => {
  let redisArray = [];
  for (let key in response) {
    let orderbook = response;
    let bid = orderbook[key].bids.length ? orderbook[key].bids[0][0] : undefined
    let ask = orderbook[key].asks.length ? orderbook[key].asks[0][0] : undefined
    let spread = (bid && ask) ? ask - bid : undefined
    console.log(response.id, key, 'market price', { bid, ask, spread })
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
  }
  redis.set('geminibook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
hitbtc2.then(response => {
  let redisArray = [];
  for (let key in response) {
    let orderbook = response;
    let bid = orderbook[key].bids.length ? orderbook[key].bids[0][0] : undefined
    let ask = orderbook[key].asks.length ? orderbook[key].asks[0][0] : undefined
    let spread = (bid && ask) ? ask - bid : undefined
    console.log(response.id, key, 'market price', { bid, ask, spread })
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
  }
redis.set('hitbtc2book', JSON.stringify(redisArray));
redis.set('booktime', JSON.stringify(new Date()));
}).catch (err => console.log(err)); //fees
ice3x.then(response => {
  let redisArray = [];
  for (let key in response) {
    let orderbook = response;
    let bid = orderbook[key].bids.length ? orderbook[key].bids[0][0] : undefined
    let ask = orderbook[key].asks.length ? orderbook[key].asks[0][0] : undefined
    let spread = (bid && ask) ? ask - bid : undefined
    console.log(response.id, key, 'market price', { bid, ask, spread })
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
  }
  redis.set('ice3xbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); // 
kraken.then(response => {
  let redisArray = [];
  for (let key in response) {
    let orderbook = response;
    let bid = orderbook[key].bids.length ? orderbook[key].bids[0][0] : undefined
    let ask = orderbook[key].asks.length ? orderbook[key].asks[0][0] : undefined
    let spread = (bid && ask) ? ask - bid : undefined
    console.log(response.id, key, 'market price', { bid, ask, spread })
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
  }
  redis.set('krakenbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); // has fees
kucoin.then(response => {
  let redisArray = [];
  for (let key in response) {
    let orderbook = response;
    let bid = orderbook[key].bids.length ? orderbook[key].bids[0][0] : undefined
    let ask = orderbook[key].asks.length ? orderbook[key].asks[0][0] : undefined
    let spread = (bid && ask) ? ask - bid : undefined
    console.log(response.id, key, 'market price', { bid, ask, spread })
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
  }
  redis.set('kucoinbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); // has last deal price
lakebtc.then(response => {
  let redisArray = [];
  for (let key in response) {
    let orderbook = response;
    let bid = orderbook[key].bids.length ? orderbook[key].bids[0][0] : undefined
    let ask = orderbook[key].asks.length ? orderbook[key].asks[0][0] : undefined
    let spread = (bid && ask) ? ask - bid : undefined
    console.log(response.id, key, 'market price', { bid, ask, spread })
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
  }
  redis.set('lakebtcbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); // has last price
lbank.then(response => {
  let redisArray = [];
  for (let key in response) {
    let orderbook = response;
    let bid = orderbook[key].bids.length ? orderbook[key].bids[0][0] : undefined
    let ask = orderbook[key].asks.length ? orderbook[key].asks[0][0] : undefined
    let spread = (bid && ask) ? ask - bid : undefined
    console.log(response.id, key, 'market price', { bid, ask, spread })
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
  }
  redis.set('lbankbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
livecoin.then(response => {
  let redisArray = [];
  for (let key in response) {
    let orderbook = response;
    let bid = orderbook[key].bids.length ? orderbook[key].bids[0][0] : undefined
    let ask = orderbook[key].asks.length ? orderbook[key].asks[0][0] : undefined
    let spread = (bid && ask) ? ask - bid : undefined
    console.log(response.id, key, 'market price', { bid, ask, spread })
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
  }
  redis.set('livecoinbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //bid/ask prices
liqui.then(response => {
  let redisArray = [];
  for (let key in response) {
    let orderbook = response;
    let bid = orderbook[key].bids.length ? orderbook[key].bids[0][0] : undefined
    let ask = orderbook[key].asks.length ? orderbook[key].asks[0][0] : undefined
    let spread = (bid && ask) ? ask - bid : undefined
    console.log(response.id, key, 'market price', { bid, ask, spread })
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
  }
  redis.set('liquibook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //taker
lykke.then(response => {
  let redisArray = [];
  for (let key in response) {
    let orderbook = response;
    let bid = orderbook[key].bids.length ? orderbook[key].bids[0][0] : undefined
    let ask = orderbook[key].asks.length ? orderbook[key].asks[0][0] : undefined
    let spread = (bid && ask) ? ask - bid : undefined
    console.log(response.id, key, 'market price', { bid, ask, spread })
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
  }
  redis.set('lykkebook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
qryptos.then(response => {
  let redisArray = [];
  for (let key in response) {
    let orderbook = response;
    let bid = orderbook[key].bids.length ? orderbook[key].bids[0][0] : undefined
    let ask = orderbook[key].asks.length ? orderbook[key].asks[0][0] : undefined
    let spread = (bid && ask) ? ask - bid : undefined
    console.log(response.id, key, 'market price', { bid, ask, spread })
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
  }
  redis.set('qryptosbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //market bid, market ask
quadrigacx.then(response => {
  let redisArray = [];
  for (let key in response) {
    let orderbook = response;
    let bid = orderbook[key].bids.length ? orderbook[key].bids[0][0] : undefined
    let ask = orderbook[key].asks.length ? orderbook[key].asks[0][0] : undefined
    let spread = (bid && ask) ? ask - bid : undefined
    console.log(response.id, key, 'market price', { bid, ask, spread })
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
  }
  redis.set('quadrigacxbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //includes fees
rightbtc.then(response => {
  let redisArray = [];
  for (let key in response) {
    let orderbook = response;
    let bid = orderbook[key].bids.length ? orderbook[key].bids[0][0] : undefined
    let ask = orderbook[key].asks.length ? orderbook[key].asks[0][0] : undefined
    let spread = (bid && ask) ? ask - bid : undefined
    console.log(response.id, key, 'market price', { bid, ask, spread })
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
  }
  redis.set('rightbtcbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //
southxchange.then(response => {
  let redisArray = [];
  for (let key in response) {
    let orderbook = response;
    let bid = orderbook[key].bids.length ? orderbook[key].bids[0][0] : undefined
    let ask = orderbook[key].asks.length ? orderbook[key].asks[0][0] : undefined
    let spread = (bid && ask) ? ask - bid : undefined
    console.log(response.id, key, 'market price', { bid, ask, spread })
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
  }
  redis.set('southxchangebooks', JSON.stringify(redisArray));
  redis.set('bookstime', JSON.stringify(new Date()));
}).catch(err => console.log(err));
therock.then(response => {
  let redisArray = [];
  for (let key in response) {
    let orderbook = response;
    let bid = orderbook[key].bids.length ? orderbook[key].bids[0][0] : undefined
    let ask = orderbook[key].asks.length ? orderbook[key].asks[0][0] : undefined
    let spread = (bid && ask) ? ask - bid : undefined
    console.log(response.id, key, 'market price', { bid, ask, spread })
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
  }
  redis.set('therockbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //has last price
tidex.then(response => {
  let redisArray = [];
  for (let key in response) {
    let orderbook = response;
    let bid = orderbook[key].bids.length ? orderbook[key].bids[0][0] : undefined
    let ask = orderbook[key].asks.length ? orderbook[key].asks[0][0] : undefined
    let spread = (bid && ask) ? ask - bid : undefined
    console.log(response.id, key, 'market price', { bid, ask, spread })
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
  }
  redis.set('tidexbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //includes fees
wex.then(response => {
  let redisArray = [];
  for (let key in response) {
    let orderbook = response;
    let bid = orderbook[key].bids.length ? orderbook[key].bids[0][0] : undefined
    let ask = orderbook[key].asks.length ? orderbook[key].asks[0][0] : undefined
    let spread = (bid && ask) ? ask - bid : undefined
    console.log(response.id, key, 'market price', { bid, ask, spread })
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
  }
  redis.set('wexbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //includes fees
yobit.then(response => {
  let redisArray = [];
  for (let key in response) {
    let orderbook = response;
    let bid = orderbook[key].bids.length ? orderbook[key].bids[0][0] : undefined
    let ask = orderbook[key].asks.length ? orderbook[key].asks[0][0] : undefined
    let spread = (bid && ask) ? ask - bid : undefined
    console.log(response.id, key, 'market price', { bid, ask, spread })
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
  }
  redis.set('yobitbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //includes fees
zaif.then(response => {
  let redisArray = [];
  for (let key in response) {
    let orderbook = response;
    let bid = orderbook[key].bids.length ? orderbook[key].bids[0][0] : undefined
    let ask = orderbook[key].asks.length ? orderbook[key].asks[0][0] : undefined
    let spread = (bid && ask) ? ask - bid : undefined
    console.log(response.id, key, 'market price', { bid, ask, spread })
    redisArray.push([response.id, key, 'market price', { 'bid': bid, 'ask': ask, 'spread': spread }]);
  }
  redis.set('zaifbook', JSON.stringify(redisArray));
  redis.set('booktime', JSON.stringify(new Date()));
}).catch(err => console.log(err)); //