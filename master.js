var express = require("express");
var bodyParser = require("body-parser");
const app = express();
var Redis = require('ioredis');
var redis = new Redis(process.env.REDIS_URL);
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

var keys = require("./keys.js");
require("dotenv").config();
module.exports = {
    master: async function populate() {
        const VALUE = (async function accumulate() {
            try {
                await (async function usd() {
                    var CASH = [];
                    redis.get('cash').then((result) => {
                        CASH.push(JSON.parse(result));
                    })
                })();
                await (async function red() {
                    var TICKER = [];
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
                    }).catch(err => console.log(err));
                    TICKER.push(rootObj);
                })();
                await (async function book() {
                    var BOOKS = [];
                    let pairObj = [];    
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
                    BOOKS.push(pairObj);
                })();
                cat = CASH.concat(TICKER);
                cat = cat.concat(BOOKS);
                return cat;
            } catch (error) {
                console.log(error);
            }
        })();
        return VALUE;
    }
}