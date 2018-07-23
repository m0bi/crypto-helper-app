var express = require("express");
var bodyParser = require("body-parser");
const app = express();

const diff = require('deep-diff').diff; //finding differences between objects
const axios = require('axios');
const request = require('request');
var Combinatorics = require('js-combinatorics');

//here I get exchange data.

const ccxt = require('ccxt');



//start of middleware stack
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
    
    exchanges: async function printExchange() {
        let ccxtcontainer = await ccxt.exchanges;
        return ccxtcontainer;
    },
    _1btcxe: async function print1btcxe() {
        let _1btcxe = new ccxt._1btcxe();
        return await _1btcxe.fetch_markets();
    },
    acx: async function printAcx() {
        let acx = new ccxt.acx();
        return await acx.fetch_markets();
    },
    anxpro: async function printAnx() {
        let anxpro = new ccxt.anxpro();
        return await anxpro.fetch_markets();
    },
    anybits: async function printAnybits() {
        let anybits = new ccxt.anybits();
        return await anybits.fetch_markets();
    },
    bibox: async function printBibox() {
        let bibox = new ccxt.bibox();
        return await bibox.fetch_markets();
    },
    binance: async function printBinance() {
        let binance = new ccxt.binance();
        return await binance.fetch_markets();
    },
    bitbay: async function printBitbay() {
        let bitbay = new ccxt.bitbay();
        return await bitbay.fetch_markets();
    },
    bitfinex2: async function printBitfinex2(){
        let bitfinex2 = new ccxt.bitfinex2();
        return await bitfinex2.fetch_markets();
    },
    bitflyer: async function printBitflyer() {
        let bitflyer = new ccxt.bitflyer();
        return await bitflyer.fetch_markets();
    },
    bithumb: async function printBithumb() {
        let bithumb = new ccxt.bithumb();
        return await bithumb.fetch_markets();
    },
    bitlish: async function printBitlish() {
        let bitlish = new ccxt.bitlish();
        return await bitlish.fetch_markets();
    },
    bitstamp: async function printBitstamp() {
        let bitstamp = new ccxt.bitstamp ();
        return await bitstamp.fetch_markets();
    },
    bittrex: async function printBittrex() {
        let bittrex = new ccxt.bittrex ();
        return await bittrex.fetch_markets();
    },
    btcalpha: async function printBtcalpha() {
        let btcalpha = new ccxt.btcalpha();
        return await btcalpha.fetch_markets();
    },
    btcmarkets: async function printBtcmarkets() {
        let btcmarkets = new ccxt.btcmarkets();
        return await btcmarkets.fetch_markets();
    },
    btctradeim: async function printBtctradeim() {
        let btctradeim = new ccxt.btctradeim();
        return await btctradeim.fetch_markets();
    },
    cex: async function printCex(){
        let cex = new ccxt.cex();
        return await cex.fetch_markets();
    },
    cobinhood: async function printCobinhood() {
        let cobinhood = new ccxt.cobinhood();
        return await cobinhood.fetch_markets();
    },
    coinbasepro: async function printCoinbasepro() {
        let coinbasepro = new ccxt.coinbasepro();
        return await coinbasepro.fetch_markets();
    },
    coinegg: async function printCoinegg() {
        let coinegg = new ccxt.coinegg();
        return await coinegg.fetch_markets();
    },
    coinex: async function printCoinex() {
        let coinex = new ccxt.coinex();
        return await coinex.fetch_markets();
    },
    coinexchange: async function printCoinexchange() {
        let coinexchange = new ccxt.coinexchange();
        return await coinexchange.fetch_markets();
    },
    coinfalcon: async function printCoinfalcon() {
        let coinfalcon = new ccxt.coinfalcon();
        return await coinfalcon.fetch_markets();
    },
    coinfloor: async function printCoinfloor() {
        let coinfloor = new ccxt.coinfloor();
        return await coinfloor.fetch_markets();
    },
    coinmate: async function printcoinmate() {
        let coinmate = new ccxt.coinmate();
        return await coinmate.fetch_markets();
    },
    coinspot: async function printcoinspot() {
        let coinspot = new ccxt.coinspot();
        return await coinspot.fetch_markets();
    },
    crypton: async function printcrypton(){
        let crypton = new ccxt.crypton();
        return await crypton.fetch_markets();
    },
    cryptopia: async function printCryptopia() {
        let cryptopia = new ccxt.cryptopia();
        return await cryptopia.fetch_markets();
    },
    dsx: async function printDsx() {
        let dsx = new ccxt.dsx();
        return await dsx.fetch_markets();
    },
    deribit: async function printDeribit() {
        let deribit = new ccxt.deribit();
        return await deribit.fetch_markets();
    },
    exmo: async function printExmo() {
        let exmo = new ccxt.exmo();
        return await exmo.fetch_markets();
    },
    gatecoin: async function printGatecoin() {
        let gatecoin = new ccxt.gatecoin();
        return await gatecoin.fetch_markets();
    },
    gateio: async function printGateio() {
        let gateio = new ccxt.gateio();
        return await gateio.fetch_markets();
    },
    gemini: async function printGemini() {
        let gemini = new ccxt.gemini();
        return await gemini.fetch_markets();
    },
    getbtc: async function printGetbtc() {
        let getbtc = new ccxt.getbtc();
        return await getbtc.fetch_markets();
    },
    hitbtc2: async function printHitbtc() {
        let hitbtc2 = new ccxt.hitbtc2();
        return await hitbtc2.fetch_markets();
    },
    ice3x: async function printice3x() {
        let ice3x = new ccxt.ice3x();
        return await ice3x.fetch_markets();
    },
    itbit: async function printItbit() {
        let itbit = new ccxt.itbit();
        return await itbit.fetch_markets();
    },
    kraken: async function printKraken() {
        let kraken = new ccxt.kraken() // log HTTP requests
        return await kraken.fetch_markets() // request markets
        //console.log (kraken.id, kraken.markets)    // output a full list of all loaded markets
        // console.log (Object.keys (kraken.markets)) // output a short list of market symbols
        // console.log (kraken.markets['BTC/USD'])    // output single market details
        // await kraken.fetch_markets () // return a locally cached version, no reload
        // let reloadedMarkets = await kraken.fetch_markets (true) // force HTTP reload = true
        // console.log (reloadedMarkets['ETH/BTC'])
    },
    kucoin: async function printKucoin() {
        let kucoin = new ccxt.kucoin ();
        return await kucoin.fetch_markets();
    },
    kuna: async function printKuna() {
        let kuna = new ccxt.kuna();
        return await kuna.fetch_markets();
    },
    lakebtc: async function printLake() {
        let lakebtc = new ccxt.lakebtc();
        return await lakebtc.fetch_markets();
    },
    lbank: async function printLbank() {
        let lbank = new ccxt.lbank();
        return await lbank.fetch_markets();
    },
    livecoin: async function printLivecoin() {
        let livecoin = new ccxt.livecoin();
        return await livecoin.fetch_markets();
    },
    liqui: async function printLiqui() {
        let liqui = new ccxt.liqui ();
        return await liqui.fetch_markets();
    },
    lykke: async function printLykke() {
        let lykke = new ccxt.lykke();
        return await lykke.fetch_markets();
    },
    mixcoins: async function printMixCoins() {
        let mixcoins = new ccxt.mixcoins();
        return await mixcoins.fetch_markets();
    },
    nova: async function printNova() {
        let nova = new ccxt.nova();
        return await nova.fetch_markets();
    },
    okcoinusd: async function printOK() {
        let okcoinusd = new ccxt.okcoinusd();
        return await okcoinusd.fetch_markets();
    },
    qryptos: async function printQ() {
        let qryptos = new ccxt.qryptos();
        return await qryptos.fetch_markets();
    },
    quadrigacx: async function printQuad() {
        let quadrigacx = new ccxt.quadrigacx();
        return await quadrigacx.fetch_markets();
    },
    quoinex: async function printQuo() {
        let quoinex = new ccxt.quoinex();
        return await quoinex.fetch_markets();
    },
    rightbtc: async function printRight() {
        let rightbtc = new ccxt.rightbtc();
        return await rightbtc.fetch_markets();
    },
    southxchange: async function printSouth() {
        let southxchange = new ccxt.southxchange();
        return await southxchange.fetch_markets();
    },
    therock: async function printRock() {
        let therock = new ccxt.therock();
        return await therock.fetch_markets();
    },
    tidebit: async function printTide() {
        let tidebit = new ccxt.tidebit();
        return await tidebit.fetch_markets();
    },
    tidex: async function printTidex() {
        let tidex = new ccxt.tidex();
        return await tidex.fetch_markets();
    },
    wex: async function printWex() {
        let wex = new ccxt.wex();
        return await wex.fetch_markets();
    },
    yobit: async function printYobit() {
        let yobit = new ccxt.yobit();
        return await yobit.fetch_markets();
    },
    zaif: async function printZaif() {
        let zaif = new ccxt.zaif();
        return await zaif.fetch_markets();
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

// var Binancece = {};
// vabinanceb =binance// var bittrex = {};
// var kraken = {};
// var cryptopia = {}; async ftBit2cn printBibox() {

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
