var express = require("express");
var bodyParser = require("body-parser");
const app = express();

const diff = require('deep-diff').diff; //finding differences between objects
const axios = require('axios');
const curl = require('curlrequest');
const request = require('request');
var Combinatorics = require('js-combinatorics');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

var keys = require("./keys.js");
require("dotenv").config();

const mongoose = require('mongoose');
var database = 'binancedb';
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/" + database);

const resolvePromise = [];

//New Algo
//Shapeshift
//BiBox
//KuCoin
//Kraken
//Bittrex
//GDAX
//binance
//Cryptopia

//BTC
//BCC/BCH
//ETH
//NEO
//LTC
//bnb
//XLM
//XRP
//DASH
//usdt


module.exports = {
    news: async function getNews() {
        try {
            const response = await axios('https://cryptopanic.com/api/posts/?auth_token=518dacbc2f54788fcbd9e182521851725a09b4fa&public=true');
             var news = [];
             response.data.results.forEach((results) => {

                news.push({
                    title: results.title,
                    pub_data: results.published_at,
                    url: results.url
                });
            });
            //console.log(news);
            //console.log(response.data.results);
            return news;
        } catch (error) {
            console.error(error);
        }
    },
    usd: async function getUsd() {
        try {
            let response = await axios('http://coincap.io/front');
            //var usdValues;
            var coincapData = response.data.map(coin => ({ "coin": coin.short, "value": coin.price }));
            //console.log(response);
            //console.log(coincapData)
            return coincapData;
        } catch (error) {
            console.log(error);
        }
    },
    bibox: async function bibox() {
        try {
            let response = await axios('https://api.bibox.com/v1/mdata?cmd=marketAll');
            //console.log(response.data.result);
            var biboxData = response.data.result.map(coin=>({ "coin": coin.coin_symbol, "currency": coin.currency_symbol, "value": coin.last}));
            //console.log(biboxData);
            return biboxData;
        } catch (err) {
            console.log(err);
        }
    },
    kucoin: async function kucoin() {
        try {
            let response = await axios('https://api.kucoin.com/v1/open/tick');
            //console.log(response.data.data);
            var kucoinData = response.data.data.map(coin=>({"coin": coin.coinType, "currency": coin.coinTypePair, "value": coin.lastDealPrice}))
            //console.log(kucoinData);
            return kucoinData;
        } catch (err) {
            console.log(err);
        }
    },
    binance: async function binance() {
        try {
            let response = await axios('https://api.binance.com/api/v3/ticker/price');
            //console.log(response.data);
            return response.data;
        } catch (err) {
            console.log(err);
        }
    },
    cryptopia: async function cryptopia() {
        try {
            let response = await axios('https://www.cryptopia.co.nz/api/GetMarkets');
            //console.log(response.data.Data);
            var cryptopiaData = response.data.Data.map(coin=>({"label": coin.Label, "last": coin.LastPrice}))
            //console.log(cryptopiaData);
            return cryptopiaData;
        } catch (err) {
            console.log(err);
        }
    },
    tokenspread: async function tokenspread() {
        try{
            console.log("called");

            var options = {
                url: 'https://www.tokenspread.com/data/streams/pair_data',
                headers: "authorization: 64ba9faae1b7096d87c83b5a06889b8f7b5e67a819654850"
            }
            let response = await curl.request(options);
                //handle response type: stream
                //maybe don't return response, catch the stream and return the container.
            return response;


            // var oReq = new XMLHttpRequest();
            
            // oReq.onreadystatechange = function() {
            //     if(this.readyState == 4 && this.status == 200) {
            //         console.log(this.responseText);
            //     }
            //     console.log(this.status);
            // }

            // oReq.open("GET", "https://www.tokenspread.com/data/streams/pair_data");
            // oReq.setRequestHeader("authorization", "64ba9faae1b7096d87c83b5a06889b8f7b5e67a819654850");
            // oReq.send();




            // let response = await axios({
            //     method:'get',
            //     url:'https://www.tokenspread.com/data/streams/pair_data',
            //     responseType:'stream',
            //     headers: {"authorization":""}
            //   });

        } catch (err) {
            console.log("Error: " + err);
        }

   }

}
// var coins = [];
// for (var i = 3; i < values.length; i++) {
//     coins.push(Object.keys(values[i].val()));
// }

// //I picked this project back up after about a monthlong hiatus and needed to figure out what this one was.
// var mystery2 = values[2].val();
// mystery2 = flattenObject(mystery2);
// mysteryKeys = Object.keys(mystery2);
// mysteryValues = Object.values(mystery2);

// var binance = {};
// var hitb = {};
// var bittrex = {};
// var kraken = {};
// var cryptopia = {};
// var liqui = {};

// mysteryValues.forEach((val, i, container) => {
//     if (val === "BINA") {
//         binance[container[i + 3]] = container[i + 2];
//     }
//     if (val === "HITB") {
//         hitb[container[i + 3]] = container[i + 2];
//     }
//     if (val === "KRKN") {
//         kraken[container[i + 3]] = container[i + 2];
//     }
//     if (val === "BTRX") {
//         bittrex[container[i + 3]] = container[i + 2];
//     }
//     if (val === "LIQU") {
//         liqui[container[i + 3]] = container[i + 2];
//     }
//     if (val === "CPIA") {
//         cryptopia[container[i + 3]] = container[i + 2];
//     }
// });

// var binanceKeys = Object.keys(binance);
// var binanceValues = Object.values(binance);

// for (var i = 0; i < binanceKeys.length; i++) {
//     var lc;
//     if (binanceKeys[i].slice(0, 3).toLowerCase() === "ste") {
//         lc = binanceKeys[i].slice(0, 5).toLowerCase() + "_" + binanceKeys[i].slice(6).toLowerCase();
//     } else {
//         lc = binanceKeys[i].slice(0, 3).toLowerCase() + "_" + binanceKeys[i].slice(4).toLowerCase();
//     }
//     binanceKeys[i] = lc;
// }
// binance = {}
// for (var i = 0; i < binanceKeys.length; i++) {
//     binance[binanceKeys[i]] = binanceValues[i];
// }

// binance = toLowerCase(binance);
// hitb = toLowerCase(hitb);
// bittrex = toLowerCase(bittrex);
// kraken = toLowerCase(kraken);
// cryptopia = toLowerCase(cryptopia);
// liqui = toLowerCase(liqui);



// //this block grabs all of my coin names and eliminates duplicates. Except for three problem cases.

// var shapeshiftMinerFee = [];
// var keys = Object.keys(values[0].child("miner").val());
// for (var i = 0; i < keys.length; i++) {
//     if (values[0].child("miner").child(keys[i]).child("status").val() === "available") {
//         shapeshiftMinerFee.push(values[0].child("miner").child(keys[i]).val());
//     }
// }
// var shapeshiftTrading = Object.keys(values[0].child("min").val());
// coins.push(shapeshiftTrading);
// var trading = Object.keys(values[1].val());
// for (var i = 0; i < trading.length; i++) {
//     trading[i] = trading[i].toLowerCase();
// }
// coins.push(trading);

// var personal1 = Object.keys(values[2].val());
// var personal2 = [];
// var personal3 = [];
// for (var i = 0; i < personal1.length; i++) {
//     personal2.push(Object.keys(values[2].child(personal1[i]).val()));
//     cp = Combinatorics.cartesianProduct([personal1[i]], personal2[i]);
//     personal3.push(cp.toArray());
// }

// var personal4 = [];
// for (var i = 0; i < personal3.length; i++) {
//     for (var j = 0; j < personal3[i].length; j++) {
//         personal4.push(personal3[i][j][0] + "_" + personal3[i][j][1]);
//     }
// }


// coins.push(personal4);
// var mergedCoins = [].concat.apply([], coins);
// mergedCoins = uniq(mergedCoins);

// var coinObj = {};

// var alpha = Object.values(values[0].child("rate").val());
// var beta = Object.values(values[0].child("miner").val());
// for (var j = 0; j < alpha.length; j++) {
//     if (mergedCoins.includes(alpha[j].pair)) {
//         coinObj[alpha[j].pair] = alpha[j].rate;
//         if (beta.includes(alpha[j].pair)) {
//             for (var k = 0; k < beta.length; k++) {
//                 if (beta[k].symbol === alpha[j].pair.slice(0, 3)) {
//                     coinObj[alpha[j].pair] = alpha[j].rate - +beta[k].minerFee;
//                 }
//             }

//         }
//     }
// }

// var kucoinKeys = Object.keys(values[1].val());
// var delta = values[1].val();
// var kucoinObj = {}

// kucoinKeys.forEach(function (pair, index) {
//     kucoinObj[pair] = Number(delta[pair].lastDealPrice);
// });
// kucoinObj = toLowerCase(kucoinObj);


// var changellyKeys = Object.keys(values[3].val());
// var zeta = values[3].val();
// var changellyObj = {};
// changellyKeys.forEach(function (pair, index) {
//     changellyObj[pair] = zeta[pair].price;
// });
// delete changellyObj["prices"];

// var bitzKeys = Object.keys(values[4].val());
// var bitzob = values[4].val();
// var bitzObj = {}

// bitzKeys.forEach(function (pair, index) {
//     bitzObj[pair] = bitzob[pair].last;
// });

// var bitsqKeys = Object.keys(values[5].val());
// var bitsqob = values[5].val();
// var bitsqObj = {}

// bitsqKeys.forEach(function (xy, index) {
//     bitsqObj[xy] = bitsqob[xy].last;
// });

// var biboxKeys = Object.keys(values[6].val());
// var biboxob = values[6].val();
// var biboxObj = {}

// biboxKeys.forEach(function (xy, index) {
//     var yx = xy.toString().toLowerCase();
//     yx = yx.substr(0, 3) + "_" + yx.substr(4);
//     biboxObj[yx] = biboxob[xy].last;
// });

// //Shapeshift Differences
// var diffchk1 = diff(coinObj, changellyObj);
// var diffchk2 = diff(coinObj, bitzObj);
// var diffchk3 = diff(coinObj, bitsqObj);
// var diffchk4 = diff(coinObj, biboxObj);
// var diffchk51 = diff(coinObj, bittrex);
// var diffchk52 = diff(coinObj, kraken);
// var diffchk53 = diff(coinObj, cryptopia);
// var diffchk54 = diff(coinObj, liqui);
// var diffchk55 = diff(coinObj, binance);
// var diffchk5 = diff(coinObj, kucoinObj);

// //Changelly Differences
// var diffchk6 = diff(changellyObj, bitzObj);
// var diffchk7 = diff(changellyObj, bitsqObj);
// var diffchk8 = diff(changellyObj, biboxObj);
// var diffchk91 = diff(changellyObj, bittrex);
// var diffchk92 = diff(changellyObj, kraken);
// var diffchk93 = diff(changellyObj, cryptopia);
// var diffchk94 = diff(changellyObj, binance);
// var diffchk95 = diff(changellyObj, liqui);
// var diffchk9 = diff(changellyObj, kucoinObj);

// //bitz Differences
// var diffchk10 = diff(bitzObj, bitsqObj);
// var diffchk11 = diff(bitzObj, biboxObj);
// var diffchk121 = diff(bitzObj, bittrex);
// var diffchk122 = diff(bitzObj, cryptopia);
// var diffchk123 = diff(bitzObj, liqui);
// var diffchk124 = diff(bitzObj, binance);
// var diffchk125 = diff(bitzObj, kraken);
// var diffchk12 = diff(bitzObj, kucoinObj);

// var diffchk13 = diff(bitsqObj, biboxObj);
// var diffchk141 = diff(bitsqObj, bittrex);
// var diffchk142 = diff(bitsqObj, kraken);
// var diffchk143 = diff(bitsqObj, cryptopia);
// var diffchk144 = diff(bitsqObj, liqui);
// var diffchk145 = diff(bitsqObj, binance);
// var diffchk14 = diff(bitsqObj, kucoinObj);

// var diffchk151 = diff(binance, bittrex);
// var diffchk152 = diff(binance, kraken);
// var diffchk153 = diff(binance, cryptopia);
// var diffchk154 = diff(binance, liqui);
// var diffchk155 = diff(binance, kucoinObj)

// var diffchk161 = diff(bittrex, kraken);
// var diffchk162 = diff(bittrex, cryptopia);
// var diffchk163 = diff(bittrex, liqui);
// var diffchk164 = diff(bittrex, kucoinObj);

// var diffchk171 = diff(kraken, cryptopia);
// var diffchk172 = diff(kraken, liqui);
// var diffchk173 = diff(kraken, kucoinObj);

// var diffchk181 = diff(cryptopia, liqui);
// var diffchk182 = diff(cryptopia, kucoinObj);

// var binanceBittrex = [];
// var binanceKraken = [];
// var binanceCryptopia = [];
// var binanceLiqui = [];
// var bittrexCryptopia = [];
// var bittrexLiqui = [];
// var bittrexKraken = [];
// var krakenCryptopia = [];
// var krakenLiqui = [];
// var cryptopiaLiqui = [];


// var shapeshiftChangellyDiff = [];
// var shapeshiftBiboxDiff = [];
// var shapeshiftBitsqDiff = [];
// var changellyBiboxDiff = [];
// var bitzBiboxDiff = [];
// var bitsqBiboxDiff = [];
// var shapeshiftBitzDiff = [];
// var changellyBitzDiff = [];
// var changellyBitsqDiff = [];
// var bitzBitsqDiff = [];

// var shapeshiftBittrex = [];
// var shapeshiftKraken = [];
// var shapeshiftCryptopia = [];
// var shapeshiftLiqui = [];
// var shapeshiftBinance = [];
// var changellyBittrex = [];
// var changellyKraken = [];
// var changellyCryptopia = [];
// var changellyLiqui = [];
// var changellyBinance = [];
// var bitzBittrex = [];
// var bitzKraken = [];
// var bitzCryptopia = [];
// var bitzLiqui = [];
// var bitzBinance = [];
// var bitsqBittrex = [];
// var bitsqKraken = [];
// var bitsqCryptopia = [];
// var bitsqLiqui = [];
// var bitsqBinance = [];

// var shapeshiftKucoin = [];
// var changellyKucoin = [];
// var bitzKucoin = [];
// var bitsqKucoin = [];
// var binanceKucoin = [];
// var bittrexKucoin = [];
// var krakenKucoin = [];
// var cryptopiaKucoin = [];

// dif(diffchk5, shapeshiftKucoin);
// dif(diffchk9, changellyKucoin);
// dif(diffchk12, bitzKucoin);
// dif(diffchk14, bitsqKucoin);
// dif(diffchk155, binanceKucoin);
// dif(diffchk164, bittrexKucoin);
// dif(diffchk173, krakenKucoin);
// dif(diffchk182, cryptopiaKucoin);

// dif(diffchk151, binanceBittrex);
// dif(diffchk152, binanceKraken);
// dif(diffchk153, binanceCryptopia);
// dif(diffchk154, binanceLiqui);
// dif(diffchk161, bittrexCryptopia);
// dif(diffchk162, bittrexLiqui);
// dif(diffchk163, bittrexKraken);
// dif(diffchk171, krakenCryptopia);
// dif(diffchk172, krakenLiqui);
// dif(diffchk181, cryptopiaLiqui);

// dif(diffchk145, bitsqBinance);
// dif(diffchk144, bitsqLiqui);
// dif(diffchk143, bitsqCryptopia);
// dif(diffchk142, bitsqKraken);
// dif(diffchk141, bitsqBittrex);
// dif(diffchk124, bitzBinance);
// dif(diffchk123, bitzLiqui);
// dif(diffchk122, bitzCryptopia);
// dif(diffchk125, bitzKraken);
// dif(diffchk121, bitzBittrex);
// dif(diffchk94, changellyBinance);
// dif(diffchk95, changellyLiqui);
// dif(diffchk93, changellyCryptopia);
// dif(diffchk92, changellyKraken);
// dif(diffchk91, changellyBittrex);
// dif(diffchk51, shapeshiftBittrex);
// dif(diffchk52, shapeshiftKraken);
// dif(diffchk53, shapeshiftCryptopia);
// dif(diffchk54, shapeshiftLiqui);
// dif(diffchk55, shapeshiftBinance);

// dif(diffchk1, shapeshiftChangellyDiff);
// dif(diffchk2, shapeshiftBitzDiff);
// dif(diffchk3, shapeshiftBitsqDiff);
// dif(diffchk6, changellyBitzDiff);
// dif(diffchk7, changellyBitsqDiff);
// dif(diffchk10, bitzBitsqDiff);
// dif(diffchk10, bitzBitsqDiff);
// dif(diffchk4, shapeshiftBiboxDiff);
// dif(diffchk8, shapeshiftBiboxDiff);
// dif(diffchk11, bitzBiboxDiff);
// dif(diffchk13, bitsqBiboxDiff);


// var arbitrage = {};

// arbitrage["shapeshift-kucoin"] = shapeshiftKucoin;
// arbitrage["changelly-kucoin"] = changellyKucoin;
// arbitrage["bitz-kucoin"] = bitzKucoin;
// arbitrage["bitsquare-kucoin"] = bitsqKucoin;
// arbitrage["binance-kucoin"] = binanceKucoin;
// arbitrage["bittrex-kucoin"] = bittrexKucoin;
// arbitrage["kraken-kucoin"] = krakenKucoin;
// arbitrage["cryptopia-kucoin"] = cryptopiaKucoin;
// arbitrage["binance-bittrex"] = binanceBittrex;
// arbitrage["binance-kraken"] = binanceKraken;
// arbitrage["binance-cryptopia"] = binanceCryptopia;
// arbitrage["binance-liqui"] = binanceLiqui;
// arbitrage["bittrex-cryptopia"] = bittrexCryptopia;
// arbitrage["bittrex-liqui"] = bittrexLiqui;
// arbitrage["bittrex-kraken"] = bittrexKraken;
// arbitrage["kraken-cryptopia"] = krakenCryptopia;
// arbitrage["kraken-liqui"] = krakenLiqui;
// arbitrage["cryptopia-liqui"] = cryptopiaLiqui;
// arbitrage["bitsquare-kraken"] = bitsqKraken;
// arbitrage["bitsquare-cryptopia"] = bitsqCryptopia;
// arbitrage["bitsquare-liqui"] = bitsqLiqui;
// arbitrage["bitsquare-binance"] = bitsqBinance;
// arbitrage["bitsquare-bittrex"] = bitsqBittrex;
// arbitrage["bitz-binance"] = bitzBinance;
// arbitrage["bitz-biqui"] = bitzLiqui;
// arbitrage["bitz-cryptopia"] = bitzCryptopia;
// arbitrage["bitz-kraken"] = bitzKraken;
// arbitrage["bitz-bittrex"] = bitzBittrex;
// arbitrage["changelly-bittrex"] = changellyBittrex;
// arbitrage["changelly-kraken"] = changellyKraken;
// arbitrage["changelly-cryptopia"] = changellyCryptopia;
// arbitrage["changelly-liqui"] = changellyLiqui;
// arbitrage["changelly-binance"] = changellyBinance;
// arbitrage["shapeshift-bittrex"] = shapeshiftBittrex;
// arbitrage["shapeshift-kraken"] = shapeshiftKraken;
// arbitrage["shapeshift-cryptopia"] = shapeshiftCryptopia;
// arbitrage["shapeshift-liqui"] = shapeshiftLiqui;
// arbitrage["shapeshift-binance"] = shapeshiftBinance;
// arbitrage["bitz-bitsquare"] = bitzBitsqDiff;
// arbitrage["changelly-bitsquare"] = changellyBitsqDiff;
// arbitrage["changelly-bitz"] = changellyBitzDiff;
// arbitrage["shapeshift-bitsquare"] = shapeshiftBitsqDiff;
// arbitrage["shapeshift-bitZ"] = shapeshiftBitzDiff;
// arbitrage["shapeshift-changelly"] = shapeshiftChangellyDiff;
// arbitrage["shapeshift-bibox"] = shapeshiftBiboxDiff;
// arbitrage["changelly-bibox"] = changellyBiboxDiff;
// arbitrage["bitz-bibox"] = bitzBiboxDiff;
// arbitrage["bitsquare-bibox"] = bitsqBiboxDiff;

// var training = [];
// var arbiter = flattenObject(arbitrage);

// var arbiterVal = Object.values(arbiter);
// var arbiterKey = Object.keys(arbiter);
// arbiterKey.forEach(function (val, i) {
//     if (i % 4 === 0) {
//         var cl = classing(arbiterKey, arbiterVal, i);
//         if (cl.output !== '0.00') {
//             let first = Object.keys(cl.input)[0].match(/.*-/g);
//             let last = Object.keys(cl.input)[0].match(/-.*?\./g);
//             first = first[0];
//             last = last[0];
//             first = first.slice(0, -1);
//             last = last.slice(1, -1);
//             cl.input.lexchange = first;
//             cl.input.rexchange = last;
//             training.push(cl);
//         }
//     }
// });

// // return training;

// //console.log("****************", "training:", training, "****************");
// return training;







function uniq(a) {
    var seen = {};
    return a.filter(function (item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}


var flattenObject = function (ob) {
    var toReturn = {};

    for (var i in ob) {
        if (!ob.hasOwnProperty(i)) continue;

        if ((typeof ob[i]) == 'object') {
            var flatObject = flattenObject(ob[i]);
            for (var x in flatObject) {
                if (!flatObject.hasOwnProperty(x)) continue;

                toReturn[i + '.' + x] = flatObject[x];
            }
        } else {
            toReturn[i] = ob[i];
        }
    }
    return toReturn;
};

function toLowerCase(obj) {
    var binanceKeys = Object.keys(obj);
    var objValues = Object.values(obj);
    for (var i = 0; i < binanceKeys.length; i++) {
        var lc;
        if (binanceKeys[i].slice(0, 3).toLowerCase() === "ste") {
            lc = binanceKeys[i].slice(0, 5).toLowerCase() + "_" + binanceKeys[i].slice(6).toLowerCase();
        } else if (binanceKeys[i].slice(0, 3).toLowerCase() === "das") {
            lc = binanceKeys[i].slice(0, 4).toLowerCase() + "_" + binanceKeys[i].slice(5).toLowerCase();
        } else {
            lc = binanceKeys[i].slice(0, 3).toLowerCase() + "_" + binanceKeys[i].slice(4).toLowerCase();
        }
        binanceKeys[i] = lc;
    }
    obj = {};
    for (var i = 0; i < binanceKeys.length; i++) {
        obj[binanceKeys[i]] = objValues[i];
    }
    return obj;
}

function dif(diffcheck, array) {
    for (var i = 0; i < diffcheck.length; i++) {
        if (diffcheck[i].kind === 'E') {
            array.push(diffcheck[i]);
        }
    }
}

function classing(key, val, index) {
    var classifier = {}
    var arbit = {}
    for (var i = index; i < (index + 4); i++) {
        for (var j = index + 1; j < (index + 4); j++) {
            arbit[key[j]] = val[j];
        }
    }
    var comp = [];
    for (var i = index; i < (index + 4); i++) {
        for (var j = index + 2; j < (index + 4); j++) {
            comp[key[j]] = val[j];
        }
    }
    classifier["input"] = arbit;
    var vals = Object.values(comp);
    for (var k = 0; k <= index; k++) {
        classifier["output"] = vals.reduce(function (acc, curr) { return Number(Math.abs(acc - curr)).toFixed(2) });
    }
    return classifier;
}
