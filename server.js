const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require("body-parser");
//var resolve = require("./logic.js");
var VerifyToken = require('./auth/VerifyToken.js');
const keys = require("./keys");
global.__root = __dirname + '/';
var moment = require('moment');




const Datastore = require('@google-cloud/datastore');

// Your Google Cloud Platform project ID
const projectId = 'coincrusader1-219519';

// Creates a client
const datastore = new Datastore({
    projectId: projectId,
});



//var cron = require('node-cron');
var Redis = require('ioredis');
var redis = new Redis({
    port: 12599, // Redis port
    host: 'redis-12599.c55.eu-central-1-1.ec2.cloud.redislabs.com', // Redis host
    family: 4, // 4 (IPv4) or 6 (IPv6)
    password: keys.redis_key,
    db: 0
});

var usddb = require('./logicusd.js');
var resolve = require("./logic.js");
var newsdb = require("./logicnews.js");

let usd = usddb.cash();
var news = newsdb.news();
var anxpro = resolve.anxpro();
var anybits = resolve.anybits();
var binance = resolve.binance();
var bitbay = resolve.bitbay();
var bitfinex2 = resolve.bitfinex2();
var bitflyer = resolve.bitflyer();
var bitstamp = resolve.bitstamp();
var btcmarkets = resolve.btcmarkets();
var btctradeim = resolve.btctradeim();
var cex = resolve.cex();
var coinex = resolve.coinex();
var coinexchange = resolve.coinexchange();
var coinmate = resolve.coinmate();
var exmo = resolve.exmo();
var gatecoin = resolve.gatecoin();
var gemini = resolve.gemini();
var hitbtc2 = resolve.hitbtc2();
var kraken = resolve.kraken();
var kucoin = resolve.kucoin();
var lakebtc = resolve.lakebtc();
var livecoin = resolve.livecoin();
var liqui = resolve.liqui();
var quadrigacx = resolve.quadrigacx();
var therock = resolve.therock();
var tidex = resolve.tidex();
var wex = resolve.wex();
var yobit = resolve.yobit();
var zaif = resolve.zaif();

async function redisExchange(exchange) {
    try {
        var response = await Promise.resolve(exchange);
        let redisArray = [];
        for (let key in response) {
            if (response[key].last !== undefined) {
                //key is redis key
                //flatten (stringify array and add as response)
                redisArray.push([response.id, key, response[key].last, response[key].bid, response[key].ask, moment(new Date(response[key].timestamp)).fromNow()]);
                // var anxproObj = aggregate(key, response.id, response[key].last, new Date(response[key].timestamp));
            }
        }
        redis.set(response.id, JSON.stringify(redisArray));
    } catch (err) {
        console.log(err);
    }
}


async function away(exchange, rootObj) {
    try {
        let result = await Promise.resolve(redis.get(exchange));
        let resultArr = JSON.parse(result);
        resultArr.map(val => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    } catch (err) {
        console.log(err);
    }
}



function getResult(value) {
    redis.get(value).then(res => {
        return JSON.parse(res);
    }).catch(err => console.log(err));
}



// cron.schedule('*/10 * * * *', () => {
//     (async function () {
//         const VALS = [];
//         let a = await getResult("cash");
//         VALS.push(a);
//         let b = await getResult("live");
//         VALS.push(b);

//         const RETURN = [];

//         for (key in VALS[1]) {
//             const SPLIT = key.split('/');
//             let returnObject = {};
//             VALS[0].map((value) => {
//                 if (value.id == SPLIT[0]) {
//                     returnObject["LID"] = value.id;
//                     returnObject["leftDisplayName"] = value.display_name;
//                     returnObject["left24hrChange"] = value.cap24hrChange;
//                     returnObject["leftPrice"] = value.price;
//                 }
//                 if (value.id == SPLIT[1]) {
//                     returnObject["RID"] = value.id;
//                     returnObject["rightDisplayName"] = value.display_name;
//                     returnObject["right24hrChange"] = value.cap24hrChange;
//                     returnObject["rightPrice"] = value.price;
//                 }
//                 if (SPLIT[0] == 'USDT') {
//                     returnObject["LID"] = 'USDT';
//                     returnObject["leftDisplayName"] = 'Tether';
//                     returnObject["left24hrChange"] = 0;
//                     returnObject["leftPrice"] = 1;
//                 }
//                 if (SPLIT[1] == 'USDT') {
//                     returnObject["RID"] = 'USDT';
//                     returnObject["rightDisplayName"] = 'Tether';
//                     returnObject["right24hrChange"] = 0;
//                     returnObject["rightPrice"] = 1;
//                 }
//             });
//             const SORTAR = VALS[1][key];
//             SORTAR.sort(function compareNumbers(a, b) {
//                 return a[2] - b[2];
//             });
//             returnObject["low"] = SORTAR[0];
//             returnObject["high"] = SORTAR[SORTAR.length - 1];
//             RETURN.push(returnObject);
//         }
//         redis.set('hilo', JSON.stringify(RETURN));
//     })();
// });



if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
} else {
    app.use(express.static("client/public"));
}

var UserController = require(__root + 'user/UserController');
app.use('/api/users', UserController);

var AuthController = require(__root + 'auth/AuthController');
app.use('/api/auth', AuthController);

app.get("/task/news", (req, res) => {
    try {
        (() => {
            news.then((response) => {
                redis.set('news', JSON.stringify(response));
                res.status(200);
            });
        })();
    } catch (err) {
        console.error(err);
        res.status(500);
    }
});
let interval = 300000;
// Imports the Google Cloud client library

// The kind for the new entity
// The name/ID for the new entity

function addDataStore(kind, name, a, number) {
    // The Cloud Datastore key for the new entity

    const taskKey = datastore.key([kind, name]);


    // Prepares the new entity
    const task = {
        key: taskKey,
        data: {
            name: a[number].id,
            market_cap: a[number].market_cap,
            cap24hrChange: a[number].cap24hrChange,
            supply: a[number].supply,
            volume: a[number].volume,
            price: a[number].price,
            vwap_h24: a[number].vwap_h24,
            time: new Date()
        },
    };

    // Saves the entity
    datastore
        .save(task)
        .catch(err => {
            console.error('ERROR:', err);
        });
}
setInterval(() => {
    usd.then((response) => {
        addDataStore("coindb", "bch" + Date.now().toString(), response, 0);
        addDataStore("coindb", "btc" + Date.now().toString(), response, 1);
        addDataStore("coindb", "dash" + Date.now().toString(), response, 2);
        addDataStore("coindb", "eos" + Date.now().toString(), response, 3);
        addDataStore("coindb", "eth" + Date.now().toString(), response, 4);
        addDataStore("coindb", "ltc" + Date.now().toString(), response, 5);
        addDataStore("coindb", "trx" + Date.now().toString(), response, 6);
        addDataStore("coindb", "xlm" + Date.now().toString(), response, 7);
        addDataStore("coindb", "xmr" + Date.now().toString(), response, 8);
        addDataStore("coindb", "xrp" + Date.now().toString(), response, 9);
        addDataStore("coindb", "zec" + Date.now().toString(), response, 10);

        redis.set('cash', JSON.stringify(response));
    })
}, interval);
app.get("/task/cash", (req, res) => {
    try {
        (() => {
            usd.then((response) => {
                redis.set('cash', JSON.stringify(response));
                res.status(200);
            })
        })();
    } catch (err) {
        console.log(err);
        res.status(500);
    }
});

setInterval(()=>{
    redisExchange(anxpro);
    redisExchange(anybits);
    redisExchange(binance);
    redisExchange(bitbay);
    redisExchange(bitfinex2);
    redisExchange(bitflyer);
    redisExchange(bitstamp);
    redisExchange(btcmarkets);
    redisExchange(btctradeim);
    redisExchange(cex);
    redisExchange(coinex);
    redisExchange(coinexchange);
    redisExchange(coinmate);
    redisExchange(exmo);
    redisExchange(gatecoin);
    redisExchange(gemini);
    redisExchange(hitbtc2);
    redisExchange(kraken);
    redisExchange(kucoin);
    redisExchange(lakebtc);
    redisExchange(livecoin);
    redisExchange(liqui);
    redisExchange(quadrigacx);
    redisExchange(therock);
    redisExchange(tidex);
    redisExchange(wex);
    redisExchange(yobit);
    redisExchange(zaif);
}, interval);
app.get('/task/data', (req, res) => {
    redisExchange(anxpro);
    redisExchange(anybits);
    redisExchange(binance);
    redisExchange(bitbay);
    redisExchange(bitfinex2);
    redisExchange(bitflyer);
    redisExchange(bitstamp);
    redisExchange(btcmarkets);
    redisExchange(btctradeim);
    redisExchange(cex);
    redisExchange(coinex);
    redisExchange(coinexchange);
    redisExchange(coinmate);
    redisExchange(exmo);
    redisExchange(gatecoin);
    redisExchange(gemini);
    redisExchange(hitbtc2);
    redisExchange(kraken);
    redisExchange(kucoin);
    redisExchange(lakebtc);
    redisExchange(livecoin);
    redisExchange(liqui);
    redisExchange(quadrigacx);
    redisExchange(therock);
    redisExchange(tidex);
    redisExchange(wex);
    redisExchange(yobit);
    redisExchange(zaif);
    res.status(200);

});

app.get('/task/live', (req, res) => {
    (async function () {
        let rootObj = {};

        await away("anxpro", rootObj);
        await away("anybits", rootObj);
        await away("binance", rootObj);
        await away("bitbay", rootObj);
        await away("bitfinex2", rootObj);
        await away("bitflyer", rootObj);
        await away("bitstamp", rootObj);
        await away("btcmarkets", rootObj);
        await away("btctradeim", rootObj);
        await away("cex", rootObj);
        await away("coinex", rootObj);
        await away("coinexchange", rootObj);
        await away("coinmate", rootObj);
        await away("exmo", rootObj);
        await away("gatecoin", rootObj);
        await away("gemini", rootObj);
        await away("hitbtc2", rootObj);
        await away("kraken", rootObj);
        await away("kucoin", rootObj);
        await away("lakebtc", rootObj);
        await away("livecoin", rootObj);
        await away("liqui", rootObj);
        await away("quadrigacx", rootObj);
        await away("therock", rootObj);
        await away("tidex", rootObj);
        await away("wex", rootObj);
        await away("yobit", rootObj);
        await away("zaif", rootObj);
        redis.set('live', JSON.stringify(rootObj));
        res.status(200);
    })();
});

app.get("/api/cash", (req, res) => {
    redis.get('cash').then(function (result) {
        res.json(JSON.parse(result));
    }).catch(err => console.log(err));
});

app.get("/api/live", (req, res) => {
    redis.get('live').then(function (result) {
        res.json(JSON.parse(result));
    }).catch(err => console.log(err));
});

app.get("/api/news", (req, res) => {
    redis.get('news').then(function (result) {
        res.json(JSON.parse(result));
    }).catch(err => console.log(err));
});


app.get("/api/master", (req, res) => {
    redis.get('hilo').then((result) => {
        res.json(JSON.parse(result));
    }).catch(err => console.log(err));
});



app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});