var resolve = require("./logic.js");
var keys = require('./keys.js');

var Redis = require('ioredis');
var redis = new Redis(process.env.REDIS_URL || {
  port: 11581,          // Redis port
  host: 'redis-11581.c16.us-east-1-2.ec2.cloud.redislabs.com',   // Redis host
  family: 4,           // 4 (IPv4) or 6 (IPv6)
  password: keys.redis_key,
  db: 0
});

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
let coinex = resolve.coinex();
let coinexchange = resolve.coinexchange();
let coinfalcon = resolve.coinfalcon();
let coinmate = resolve.coinmate();
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
//let theocean = resolve.theocean();
let qryptos = resolve.qryptos();
let quadrigacx = resolve.quadrigacx();
let therock = resolve.therock();
let tidex = resolve.tidex();
let wex = resolve.wex();
let yobit = resolve.yobit();
let zaif = resolve.zaif();


//write to redis async without using a promise.all, then they will overwrite as they update. 

//capture the exchange rates in the redis server and then do the multiplication on the front end. 

//promise = [anxpro, anybits, binance, bitbay, bitfinex2, bitflyer, bitlish, bitstamp, btcmarkets, btctradeim, cex, coinbasepro, coinegg, ]
//exchangeValues.then(response => console.log("Values: " + response)); //works

function redisSet(exchange) {
  exchange.then(response => {
    let redisArray = [];
    for (let key in response) {
      if (response[key].last !== undefined) {
        //key is redis key
        //flatten (stringify array and add as response)
        redisArray.push([response.id, key, response[key].last, response[key].bid, response[key].ask, new Date(response[key].timestamp)]);
       // var anxproObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
      }
    }
    redis.set(exchange.id, JSON.stringify(redisArray));
    redis.set('time', JSON.stringify(new Date()));
  }).catch(err => console.log(err));
}

redisSet(anxpro);
redisSet(anybits);
redisSet(binance);
redisSet(bitbay);
redisSet(bitfinex2);
redisSet(bitflyer);
redisSet(bitlish);
redisSet(bitstamp);
redisSet(btcmarkets);
redisSet(btctradeim);
redisSet(cex);
redisSet(coinex);
redisSet(coinexchange);
redisSet(coinfalcon);
redisSet(coinmate);
redisSet(exmo);
redisSet(gatecoin);
redisSet(gemini);
redisSet(hitbtc2);
redisSet(ice3x);
redisSet(kraken);
redisSet(kucoin);
redisSet(lakebtc);
redisSet(lbank);
redisSet(livecoin);
redisSet(liqui);
redisSet(lykke);
redisSet(qryptos);
redisSet(quadrigacx);
redisSet(therock);
redisSet(tidex);
redisSet(wex);
redisSet(yobit);
redisSet(zaif);
