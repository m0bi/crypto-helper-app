
var keys = require('../keys.js');

var Redis = require('ioredis');
var redis = new Redis({
  port: 18167,          // Redis port
  host: 'redis-18167.c55.eu-central-1-1.ec2.cloud.redislabs.com',   // Redis host
  family: 4,           // 4 (IPv4) or 6 (IPv6)
  password: keys.redis_key,
  db: 0
});


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
async function definitions() {
var anxpro = await resolve.anxpro();
var anybits = await resolve.anybits();
var binance = await resolve.binance();
var bitbay = await resolve.bitbay();
var bitfinex2 = await resolve.bitfinex2();
var bitflyer = await resolve.bitflyer();
var bitlish = await resolve.bitlish();
var bitstamp = await resolve.bitstamp();
var btcmarkets = await resolve.btcmarkets();
var btctradeim = await resolve.btctradeim();
var cex = await resolve.cex();
var coinex = await resolve.coinex();
var coinexchange = await resolve.coinexchange();
var coinfalcon = await resolve.coinfalcon();
var coinmate = await resolve.coinmate();
var exmo = await resolve.exmo();
var gatecoin = await resolve.gatecoin();
var gemini = await resolve.gemini();
var hitbtc2 = await resolve.hitbtc2();
var ice3x = await resolve.ice3x();
var kraken = await resolve.kraken();
var kucoin = await resolve.kucoin();
var lakebtc = await resolve.lakebtc();
var lbank = await resolve.lbank();
var livecoin = await resolve.livecoin();
var liqui = await resolve.liqui();
var lykke = await resolve.lykke();
//var theocean = resolve.theocean();
var qryptos = await resolve.qryptos();
var quadrigacx = await resolve.quadrigacx();
var therock = await resolve.therock();
var tidex = await resolve.tidex();
var wex = await resolve.wex();
var yobit = await resolve.yobit();
var zaif = await resolve.zaif();
}

module.exports = { 
  database: async function(){
    definitions();
    await redisSet(anxpro);
    await redisSet(anybits);
    await redisSet(binance);
    await redisSet(bitbay);
    await redisSet(bitfinex2);
    await redisSet(bitflyer);
    await redisSet(bitlish);
    await redisSet(bitstamp);
    await redisSet(btcmarkets);
    await redisSet(btctradeim);
    await redisSet(cex);
    await redisSet(coinex);
    await redisSet(coinexchange);
    await redisSet(coinfalcon);
    await redisSet(coinmate);
    await redisSet(exmo);
    await redisSet(gatecoin);
    await redisSet(gemini);
    await redisSet(hitbtc2);
    await redisSet(ice3x);
    await redisSet(kraken);
    await redisSet(kucoin);
    await redisSet(lakebtc);
    await redisSet(lbank);
    await redisSet(livecoin);
    await redisSet(liqui);
    await redisSet(lykke);
    await redisSet(quadrigacx);
    await redisSet(therock);
    await redisSet(tidex);
    await redisSet(wex);
    await redisSet(yobit);
    await redisSet(zaif);
  }
}
