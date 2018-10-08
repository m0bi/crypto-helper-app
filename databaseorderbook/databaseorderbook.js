var resolve = require("../logicbooks.js");
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

async function redisExchange(exchange) {
  try{
    var response = await Promise.resolve(exchange)
    let redisArray = [];
    for (let key in response) {
  
      redisArray.push([key, response[key]]);
  
    }
    redis.set(exchange + 'book', JSON.stringify(redisArray));
    redis.set('booktime', JSON.stringify(new Date()));
  } catch(error) {
    console.log(error);
  }
}
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
    let qryptos = resolve.qryptos();
    let quadrigacx = resolve.quadrigacx();
    let therock = resolve.therock();
    let tidex = resolve.tidex();
    let wex = resolve.wex();
    let yobit = resolve.yobit();
    let zaif = resolve.zaif();
    

module.exports = {
  orderBook: function(){
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
  }
}

