var express = require("express");
var bodyParser = require("body-parser");
const app = express();

//here I get exchange data.

const ccxt = require('ccxt');



//start of middleware stack
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

var keys = require("./keys.js");
require("dotenv").config();

// const mongoose = require('mongoose');
// var database = 'binancedb';
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/" + database);

//const resolvePromise = [];


//const pairs = ['BCH/BTC', 'BCH/LTC', 'BCH/ETH', 'BCH/USDT', 'BCH/DASH', 'BCH/ZEC', 'BTC/USDT', 'DASH/BTC', 'DASH/LTC', 'DASH/ETH', 'DASH/ZEC', 'EOS/BTC', 'EOS/USDT', 'ETH/BTC', 'ETH/LTC', 'ETH/USDT', 'ETH/ZEC', 'LTC/BTC', 'LTC/ETH', 'LTC/USDT', 'TRX/BTC', 'TRX/USDT', 'XLM/BTC', 'XMR/BTC', 'XRP/BTC', 'ZEC/BTC', 'ZEC/LTC', 'ZEC/ETH'];

module.exports = {
    // news: async function getNews() {
    //     try {
    //         const response = await axios('https://cryptopanic.com/api/posts/?auth_token=518dacbc2f54788fcbd9e182521851725a09b4fa&public=true');
    //         var news = [];
    //         response.data.results.forEach((results) => {

    //             news.push({
    //                 title: results.title,
    //                 pub_data: results.published_at,
    //                 url: results.url
    //             });
    //         });
    //         //console.log(news);
    //         //console.log(response.data.results);
    //         return news;
    //     } catch (error) {
    //         console.error(error);
    //     }
    // },

    exchanges: async function printExchange() {
        let ccxtcontainer = await ccxt.exchanges;
        return ccxtcontainer;
    },
    anxpro: async function printAnx() {
        let anxpro = new ccxt.anxpro();
        await anxpro.loadMarkets();
        const symbols = anxpro.symbols;
        const prices = { 'id': anxpro.id };
        const pairs = ['BTC/BCH', 'LTC/BTC', 'XRP/BTC', 'BCH/BTC', 'ETH/BCH', 'USDT/BCH', 'USDT/BTC', 'BTC/DASH', 'ETH/DASH', 'BTC/EOS', 'USDT/EOS', 'BTC/ETH', 'USDT/ETH', 'BTC/LTC', 'ETH/LTC', 'USDT/LTC', 'BTC/TRX', 'BTC/XLM', 'BTC/XMR', 'BTC/XRP', 'BTC/ZEC', 'ETH/ZEC'];
        const validpairs = [];
        for (let key of symbols) {
            for (let val of pairs) {
                if (key == val) {
                    validpairs.push(val);
                }
            }
        }
        if (anxpro.has['fetchTicker']) {
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await anxpro.fetchTicker(validpairs[i]);
            }
        }
        return prices;

        //return await anxpro.fetch_markets();
    },
    anybits: async function printAnybits() {
        let anybits = new ccxt.anybits();
        await anybits.loadMarkets();
        const symbols = anybits.symbols;
        const prices = { 'id': anybits.id };
        if (anybits.has['fetchTicker']) {
            const pairs = ['BTC/BCH', 'LTC/BTC', 'BTC/BCH', 'XRP/BTC', 'ETH/BTC', 'BCH/BTC', 'ETH/BCH', 'USDT/BCH', 'USDT/BTC', 'BTC/DASH', 'ETH/DASH', 'BTC/EOS', 'USDT/EOS', 'BTC/ETH', 'USDT/ETH', 'BTC/LTC', 'ETH/LTC', 'USDT/LTC', 'BTC/TRX', 'BTC/XLM', 'BTC/XMR', 'BTC/XRP', 'BTC/ZEC', 'ETH/ZEC'];
            const validpairs = [];
            for (let key of symbols) {
                for (let val of pairs) {
                    if (key == val) {
                        validpairs.push(val);
                    }
                }
            }
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await anybits.fetchTicker(validpairs[i]);
            }
        }
        return prices;
        //return await anybits.fetch_markets();
    },
    binance: async function printBinance() {
        let binance = new ccxt.binance();
        await binance.loadMarkets();
        const symbols = binance.symbols;
        const prices = { 'id': binance.id };
        const validpairs = [];
        const pairs = ['BTC/BCH', 'BCH/BTC', 'BCH/ETH', 'BCH/USDT', 'BTC/USDT', 'LTC/BTC', 'LTC/ETH', 'LTC/USDT', 'XRP/BTC', 'ETH/BTC', 'ETH/USDT', 'DASH/BTC', 'DASH/ETH', 'ZEC/BTC', 'ZEC/ETH', 'EOS/BTC', 'EOS/USDT', 'TRX/BTC', 'XLM/BTC', 'XMR/BTC', 'BCH/BTC', 'ETH/BCH', 'USDT/BCH', 'USDT/BTC', 'BTC/DASH', 'ETH/DASH', 'BTC/EOS', 'USDT/EOS', 'BTC/ETH', 'USDT/ETH', 'BTC/LTC', 'ETH/LTC', 'USDT/LTC', 'BTC/TRX', 'BTC/XLM', 'BTC/XMR', 'BTC/XRP', 'BTC/ZEC', 'ETH/ZEC'];
        for (let key of symbols) {
            for (let val of pairs) {
                if (key == val) {
                    validpairs.push(val);
                }
            }
        }
        if (binance.has['fetchTicker']) {
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await binance.fetchTicker(validpairs[i]);
            }
        }
        return prices;
        //return await binance.fetch_markets();
    },
    bitbay: async function printBitbay() {
        let bitbay = new ccxt.bitbay();
        await bitbay.loadMarkets();
        const symbols = bitbay.symbols;
        const prices = { 'id': bitbay.id };
        const pairs = ['BCH/BTC', 'BTC/BCH', 'DASH/BTC', 'ETH/BTC', 'LTC/BTC', 'XRP/BTC', 'BCH/BTC', 'ETH/BCH', 'USDT/BCH', 'USDT/BTC', 'BTC/DASH', 'ETH/DASH', 'BTC/EOS', 'USDT/EOS', 'BTC/ETH', 'USDT/ETH', 'BTC/LTC', 'ETH/LTC', 'USDT/LTC', 'BTC/TRX', 'BTC/XLM', 'BTC/XMR', 'BTC/XRP', 'BTC/ZEC', 'ETH/ZEC'];
        const validpairs = [];
        for (let key of symbols) {
            for (let val of pairs) {
                if (key == val) {
                    validpairs.push(val);
                }
            }
        }
        if (bitbay.has['fetchTicker']) {
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await bitbay.fetchTicker(validpairs[i]);
            }
        }
        return prices;

        //return await bitbay.fetch_markets();
    },
    bitfinex2: async function printBitfinex2() {
        let bitfinex2 = new ccxt.bitfinex2();
        await bitfinex2.loadMarkets();
        const symbols = bitfinex2.symbols;
        const prices = { 'id': bitfinex2.id };
        const validpairs = []
        const pairs = ['BCH/BTC', 'BTC/BCH', 'BCH/ETH', 'BCH/USDT', 'BTC/USDT', 'LTC/BTC', 'LTC/USDT', 'XRP/BTC', 'ETH/BTC', 'ETH/USDT', 'DASH/BTC', 'ZEC/BTC', 'EOS/BTC', 'TRX/BTC', 'XLM/BTC', 'XMR/BTC', 'BCH/BTC', 'ETH/BCH', 'USDT/BCH', 'USDT/BTC', 'BTC/DASH', 'ETH/DASH', 'BTC/EOS', 'USDT/EOS', 'BTC/ETH', 'USDT/ETH', 'BTC/LTC', 'ETH/LTC', 'USDT/LTC', 'BTC/TRX', 'BTC/XLM', 'BTC/XMR', 'BTC/XRP', 'BTC/ZEC', 'ETH/ZEC'];
        for (let key of symbols) {
            for (let val of pairs) {
                if (key == val) {
                    validpairs.push(val);
                }
            }
        }
        if (bitfinex2.has['fetchTicker']) {
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await bitfinex2.fetchTicker(validpairs[i]);
            }
        }
        return prices;
        //return await bitfinex2.fetch_markets();
    },
    bitflyer: async function printBitflyer() {
        let bitflyer = new ccxt.bitflyer();
        await bitflyer.loadMarkets();
        const symbols = bitflyer.symbols;
        const prices = { 'id': bitflyer.id };
        const pairs = ['BCH/BTC', 'ETH/BTC', 'BTC/BCH', 'BCH/BTC', 'ETH/BCH', 'USDT/BCH', 'USDT/BTC', 'BTC/DASH', 'ETH/DASH', 'BTC/EOS', 'USDT/EOS', 'BTC/ETH', 'USDT/ETH', 'BTC/LTC', 'ETH/LTC', 'USDT/LTC', 'BTC/TRX', 'BTC/XLM', 'BTC/XMR', 'BTC/XRP', 'BTC/ZEC', 'ETH/ZEC'];
        const validpairs = [];
        for (let key of symbols) {
            for (let val of pairs) {
                if (key == val) {
                    validpairs.push(val);
                }
            }
        }
        if (bitflyer.has['fetchTicker']) {
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await bitflyer.fetchTicker(validpairs[i]);
            }
        }
        return prices;

        //return await bitflyer.fetch_markets();
    },
    bitstamp: async function printBitstamp() {
        let bitstamp = new ccxt.bitstamp();
        await bitstamp.loadMarkets();
        const symbols = bitstamp.symbols;
        const prices = { 'id': bitstamp.id };
        const validpairs = [];
        const pairs = ['BCH/BTC', 'ETH/BTC', 'LTC/BTC', 'BTC/BCH', 'XRP/BTC', 'BCH/BTC', 'ETH/BCH', 'USDT/BCH', 'USDT/BTC', 'BTC/DASH', 'ETH/DASH', 'BTC/EOS', 'USDT/EOS', 'BTC/ETH', 'USDT/ETH', 'BTC/LTC', 'ETH/LTC', 'USDT/LTC', 'BTC/TRX', 'BTC/XLM', 'BTC/XMR', 'BTC/XRP', 'BTC/ZEC', 'ETH/ZEC'];
        for (let key of symbols) {
            for (let val of pairs) {
                if (key == val) {
                    validpairs.push(val);
                }
            }
        }
        if (bitstamp.has['fetchTicker']) {
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await bitstamp.fetchTicker(validpairs[i]);
            }
        }
        return prices;


        //return await bitstamp.fetch_markets();
    },
    btcalpha: async function printBtcalpha() {
        let btcalpha = new ccxt.btcalpha();
        await btcalpha.loadMarkets();
        const symbols = btcalpha.symbols;
        const prices = { 'id': btcalpha.id };
        const pairs = ['BCH/BTC', 'BTC/USDT', 'ETH/BTC', 'ETH/USDT', 'BTC/BCH', 'LTC/BTC', 'XMR/BTC', 'XRP/BTC', 'ZEC/BTC', 'BCH/BTC', 'ETH/BCH', 'USDT/BCH', 'USDT/BTC', 'BTC/DASH', 'ETH/DASH', 'BTC/EOS', 'USDT/EOS', 'BTC/ETH', 'USDT/ETH', 'BTC/LTC', 'ETH/LTC', 'USDT/LTC', 'BTC/TRX', 'BTC/XLM', 'BTC/XMR', 'BTC/XRP', 'BTC/ZEC', 'ETH/ZEC'];
        const validpairs = [];
        for (let key of symbols) {
            for (let val of pairs) {
                if (key == val) {
                    validpairs.push(val);
                }
            }
        }
        if (btcalpha.has['fetchTicker']) {
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await btcalpha.fetchTicker(validpairs[i]);
            }
        }
        return prices;


        //return await btcalpha.fetch_markets();
    },
    btcmarkets: async function printBtcmarkets() {
        let btcmarkets = new ccxt.btcmarkets();
        await btcmarkets.loadMarkets();
        const symbols = btcmarkets.symbols;
        const prices = { 'id': btcmarkets.id };
        const pairs = ['BCH/BTC', 'ETH/BTC', 'LTC/BTC', 'XRP/BTC', 'BCH/BTC', 'BTC/BCH', 'ETH/BCH', 'USDT/BCH', 'USDT/BTC', 'BTC/DASH', 'ETH/DASH', 'BTC/EOS', 'USDT/EOS', 'BTC/ETH', 'USDT/ETH', 'BTC/LTC', 'ETH/LTC', 'USDT/LTC', 'BTC/TRX', 'BTC/XLM', 'BTC/XMR', 'BTC/XRP', 'BTC/ZEC', 'ETH/ZEC'];
        const validpairs = [];
        for (let key of symbols) {
            for (let val of pairs) {
                if (key == val) {
                    validpairs.push(val);
                }
            }
        }
        if (btcmarkets.has['fetchTicker']) {
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await btcmarkets.fetchTicker(validpairs[i]);
            }
        }
        return prices;

        //return await btcmarkets.fetch_markets();
    },
    btctradeim: async function printBtctradeim() {
        let btctradeim = new ccxt.btctradeim();
        await btctradeim.loadMarkets();
        const symbols = btctradeim.symbols;
        const prices = { 'id': btctradeim.id };
        const pairs = ['EOS/BTC', 'LTC/BTC', 'XRP/BTC', 'BCH/BTC', 'BTC/BCH', 'ETH/BCH', 'USDT/BCH', 'USDT/BTC', 'BTC/DASH', 'ETH/DASH', 'BTC/EOS', 'USDT/EOS', 'BTC/ETH', 'USDT/ETH', 'BTC/LTC', 'ETH/LTC', 'USDT/LTC', 'BTC/TRX', 'BTC/XLM', 'BTC/XMR', 'BTC/XRP', 'BTC/ZEC', 'ETH/ZEC'];
        const validpairs = [];
        for (let key of symbols) {
            for (let val of pairs) {
                if (key == val) {
                    validpairs.push(val);
                }
            }
        }
        if (btctradeim.has['fetchTicker']) {
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await btctradeim.fetchTicker(validpairs[i]);
            }
        }
        return prices;

        //return await btctradeim.fetch_markets();
    },
    cex: async function printCex() {
        let cex = new ccxt.cex();
        await cex.loadMarkets();
        const symbols = cex.symbols;
        const prices = { 'id': cex.id };
        const validpairs = [];
        const pairs = ['BTC/BCH', 'DASH/BTC', 'ETH/BTC', 'XLM/BTC', 'XRP/BTC', 'ZEC/BTC', 'BCH/BTC', 'ETH/BCH', 'USDT/BCH', 'USDT/BTC', 'BTC/DASH', 'ETH/DASH', 'BTC/EOS', 'USDT/EOS', 'BTC/ETH', 'USDT/ETH', 'BTC/LTC', 'ETH/LTC', 'USDT/LTC', 'BTC/TRX', 'BTC/XLM', 'BTC/XMR', 'BTC/XRP', 'BTC/ZEC', 'ETH/ZEC'];
        for (let key of symbols) {
            for (let val of pairs) {
                if (key == val) {
                    validpairs.push(val);
                }
            }
        }
        if (cex.has['fetchTicker']) {
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await cex.fetchTicker(validpairs[i]);
            }
        }
        return prices;

        //return await cex.fetch_markets();
    },
    coinex: async function printCoinex() {
        let coinex = new ccxt.coinex();
        await coinex.loadMarkets();
        const symbols = coinex.symbols;
        const prices = { 'id': coinex.id };
        const pairs = ['BTC/BCH', 'BCH/USDT', 'BTC/USDT', 'DASH/BTC', 'EOS/BTC', 'EOS/USDT', 'ETH/BTC', 'ETH/USDT', 'LTC/BTC', 'LTC/USDT', 'TRX/BTC', 'XMR/BTC', 'XRP/BTC', 'ZEC/BTC', 'BCH/BTC', 'ETH/BCH', 'USDT/BCH', 'USDT/BTC', 'BTC/DASH', 'ETH/DASH', 'BTC/EOS', 'USDT/EOS', 'BTC/ETH', 'USDT/ETH', 'BTC/LTC', 'ETH/LTC', 'USDT/LTC', 'BTC/TRX', 'BTC/XLM', 'BTC/XMR', 'BTC/XRP', 'BTC/ZEC', 'ETH/ZEC'];
        const validpairs = [];
        for (let key of symbols) {
            for (let val of pairs) {
                if (key == val) {
                    validpairs.push(val);
                }
            }
        }
        if (coinex.has['fetchTicker']) {
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await coinex.fetchTicker(validpairs[i]);
            }
        }
        return prices;
        //return await coinex.fetch_markets();
    },
    coinexchange: async function printCoinexchange() { //has price data
        let coinexchange = new ccxt.coinexchange();
        await coinexchange.loadMarkets();
        const symbols = coinexchange.symbols;
        const prices = { 'id': coinexchange.id };
        const validpairs = [];
        const pairs = ['BTC/BCH', 'DASH/BTC', 'DASH/ETH', 'EOS/BTC', 'ETH/BTC', 'LTC/BTC', 'ZEC/BTC', 'BCH/BTC', 'ETH/BCH', 'USDT/BCH', 'USDT/BTC', 'BTC/DASH', 'ETH/DASH', 'BTC/EOS', 'USDT/EOS', 'BTC/ETH', 'USDT/ETH', 'BTC/LTC', 'ETH/LTC', 'USDT/LTC', 'BTC/TRX', 'BTC/XLM', 'BTC/XMR', 'BTC/XRP', 'BTC/ZEC', 'ETH/ZEC'];
        for (let key of symbols) {
            for (let val of pairs) {
                if (key == val) {
                    validpairs.push(val);
                }
            }
        }
        if (coinexchange.has['fetchTicker']) {
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await coinexchange.fetchTicker(validpairs[i]);
            }
        }
        return prices;
    },
    coinmate: async function printcoinmate() {
        let coinmate = new ccxt.coinmate();
        await coinmate.loadMarkets();
        const symbols = coinmate.symbols;
        const prices = { 'id': coinmate.id };
        const validpairs = [];
        const pairs = ['LTC/BTC', 'BCH/BTC', 'BTC/BCH', 'ETH/BCH', 'USDT/BCH', 'USDT/BTC', 'BTC/DASH', 'ETH/DASH', 'BTC/EOS', 'USDT/EOS', 'BTC/ETH', 'USDT/ETH', 'BTC/LTC', 'ETH/LTC', 'USDT/LTC', 'BTC/TRX', 'BTC/XLM', 'BTC/XMR', 'BTC/XRP', 'BTC/ZEC', 'ETH/ZEC']
        for (let key of symbols) {
            for (let val of pairs) {
                if (key == val) {
                    validpairs.push(val);
                }
            }
        }
        if (coinmate.has['fetchTicker']) {
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await coinmate.fetchTicker(validpairs[i]);
            }
        }
        return prices;
        //return await coinmate.fetch_markets();
    },
    exmo: async function printExmo() {
        let exmo = new ccxt.exmo();
        await exmo.loadMarkets();
        const symbols = exmo.symbols;
        const prices = { 'id': exmo.id };
        const validpairs = [];
        const pairs = ['BTC/BCH', 'BCH/ETH', 'BTC/USDT', 'DASH/BTC', 'EOS/BTC', 'ETH/BTC', 'ETH/USDT', 'LTC/BTC', 'XLM/BTC', 'XMR/BTC', 'XRP/BTC', 'ZEC/BTC', 'BCH/BTC', 'ETH/BCH', 'USDT/BCH', 'USDT/BTC', 'BTC/DASH', 'ETH/DASH', 'BTC/EOS', 'USDT/EOS', 'BTC/ETH', 'USDT/ETH', 'BTC/LTC', 'ETH/LTC', 'USDT/LTC', 'BTC/TRX', 'BTC/XLM', 'BTC/XMR', 'BTC/XRP', 'BTC/ZEC', 'ETH/ZEC'];
        for (let key of symbols) {
            for (let val of pairs) {
                if (key == val) {
                    validpairs.push(val);
                }
            }
        }
        if (exmo.has['fetchTicker']) {
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await exmo.fetchTicker(validpairs[i]);
            }
        }
        return prices;

        //return await exmo.fetch_markets();
    },
    gatecoin: async function printGatecoin() {
        let gatecoin = new ccxt.gatecoin();
        await gatecoin.loadMarkets();
        const symbols = gatecoin.symbols;
        const prices = { 'id': gatecoin.id };
        const validpairs = [];
        const pairs = ['BTC/BCH', 'ETH/BTC', 'LTC/ETH', 'LTC/BTC', 'BCH/BTC', 'ETH/BCH', 'USDT/BCH', 'USDT/BTC', 'BTC/DASH', 'ETH/DASH', 'BTC/EOS', 'USDT/EOS', 'BTC/ETH', 'USDT/ETH', 'BTC/LTC', 'ETH/LTC', 'USDT/LTC', 'BTC/TRX', 'BTC/XLM', 'BTC/XMR', 'BTC/XRP', 'BTC/ZEC', 'ETH/ZEC'];
        for (let key of symbols) {
            for (let val of pairs) {
                if (key == val) {
                    validpairs.push(val);
                }
            }
        }
        if (gatecoin.has['fetchTicker']) {
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await gatecoin.fetchTicker(validpairs[i]);
            }
        }
        return prices;
        //return await gatecoin.fetch_markets();
    },
    gemini: async function printGemini() {
        let gemini = new ccxt.gemini();
        await gemini.loadMarkets();
        const symbols = gemini.symbols;
        const prices = { 'id': gemini.id };
        const validpairs = [];
        const pairs = ['ETH/BTC', 'ZEC/BTC', 'ZEC/ETH', 'BTC/BCH', 'BCH/BTC', 'ETH/BCH', 'USDT/BCH', 'USDT/BTC', 'BTC/DASH', 'ETH/DASH', 'BTC/EOS', 'USDT/EOS', 'BTC/ETH', 'USDT/ETH', 'BTC/LTC', 'ETH/LTC', 'USDT/LTC', 'BTC/TRX', 'BTC/XLM', 'BTC/XMR', 'BTC/XRP', 'BTC/ZEC', 'ETH/ZEC'];
        for (let key of symbols) {
            for (let val of pairs) {
                if (key == val) {
                    validpairs.push(val);
                }
            }
        }
        if (gemini.has['fetchTicker']) {
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await gemini.fetchTicker(validpairs[i]);
            }
        }
        return prices;

        //return await gemini.fetch_markets();
    },
    hitbtc2: async function printHitbtc() {
        let hitbtc2 = new ccxt.hitbtc2();
        await hitbtc2.loadMarkets();
        const symbols = hitbtc2.symbols;
        const prices = { 'id': hitbtc2.id };
        const validpairs = [];
        const pairs = ['BTC/BCH', 'BCH/BTC', 'BCH/ETH', 'BCH/USDT', 'BTC/USDT', 'DASH/BTC', 'DASH/ETH', 'EOS/BTC', 'EOS/USDT', 'ETH/BTC', 'ETH/USDT', 'LTC/BTC', 'LTC/ETH', 'LTC/USDT', 'TRX/BTC', 'XLM/BTC', 'XMR/BTC', 'XRP/BTC', 'ZEC/BTC', 'ZEC/ETH', 'BCH/BTC', 'ETH/BCH', 'USDT/BCH', 'USDT/BTC', 'BTC/DASH', 'ETH/DASH', 'BTC/EOS', 'USDT/EOS', 'BTC/ETH', 'USDT/ETH', 'BTC/LTC', 'ETH/LTC', 'USDT/LTC', 'BTC/TRX', 'BTC/XLM', 'BTC/XMR', 'BTC/XRP', 'BTC/ZEC', 'ETH/ZEC'];
        for (let key of symbols) {
            for (let val of pairs) {
                if (key == val) {
                    validpairs.push(val);
                }
            }
        }    
        if (hitbtc2.has['fetchTicker']) {
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await hitbtc2.fetchTicker(validpairs[i]);
            }
        }
        return prices;

        //return await hitbtc2.fetch_markets();
    },
    kraken: async function printKraken() {
        let kraken = new ccxt.kraken();
        await kraken.loadMarkets();
        const symbols = kraken.symbols;
        const prices = { 'id': kraken.id };
        const validpairs = [];
        const pairs = ['BTC/BCH', 'BCH/BTC', 'DASH/BTC', 'EOS/BTC', 'ETH/BTC', 'LTC/BTC', 'XLM/BTC', 'XMR/BTC', 'XRP/BTC', 'ZEC/BTC', 'BCH/BTC', 'ETH/BCH', 'USDT/BCH', 'USDT/BTC', 'BTC/DASH', 'ETH/DASH', 'BTC/EOS', 'USDT/EOS', 'BTC/ETH', 'USDT/ETH', 'BTC/LTC', 'ETH/LTC', 'USDT/LTC', 'BTC/TRX', 'BTC/XLM', 'BTC/XMR', 'BTC/XRP', 'BTC/ZEC', 'ETH/ZEC'];
        for (let key of symbols) {
            for (let val of pairs) {
                if (key == val) {
                    validpairs.push(val);
                }
            }
        }
        if (kraken.has['fetchTicker']) {
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await kraken.fetchTicker(validpairs[i]);
            }
        }
        return prices;

    },
    kucoin: async function printKucoin() {
        let kucoin = new ccxt.kucoin();
        await kucoin.loadMarkets();
        const symbols = kucoin.symbols;
        const prices = { 'id': kucoin.id };
        const validpairs = [];
        const pairs = ['BTC/BCH', 'BCH/ETH', 'BCH/USDT', 'BTC/USDT', 'DASH/BTC', 'DASH/ETH', 'EOS/BTC', 'EOS/USDT', 'ETH/BTC', 'ETH/USDT', 'LTC/BTC', 'LTC/ETH', 'LTC/USDT', 'XLM/BTC', 'BCH/BTC', 'ETH/BCH', 'USDT/BCH', 'USDT/BTC', 'BTC/DASH', 'ETH/DASH', 'BTC/EOS', 'USDT/EOS', 'BTC/ETH', 'USDT/ETH', 'BTC/LTC', 'ETH/LTC', 'USDT/LTC', 'BTC/TRX', 'BTC/XLM', 'BTC/XMR', 'BTC/XRP', 'BTC/ZEC', 'ETH/ZEC'];
        for (let key of symbols) {
            for (let val of pairs) {
                if (key == val) {
                    validpairs.push(val);
                }
            }
        }
        if (kucoin.has['fetchTicker']) {
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await kucoin.fetchTicker(validpairs[i]);
            }
        }
        return prices;

        //return await kucoin.fetch_markets();
    },
    lakebtc: async function printLake() { // has price data
        let lakebtc = new ccxt.lakebtc();
        await lakebtc.loadMarkets();
        const symbols = lakebtc.symbols;
        const prices = { 'id': lakebtc.id };
        const validpairs = [];
        const pairs = ['BTC/BCH', 'BCH/BTC', 'LTC/BTC', 'XRP/BTC', 'BCH/BTC', 'ETH/BCH', 'USDT/BCH', 'USDT/BTC', 'BTC/DASH', 'ETH/DASH', 'BTC/EOS', 'USDT/EOS', 'BTC/ETH', 'USDT/ETH', 'BTC/LTC', 'ETH/LTC', 'USDT/LTC', 'BTC/TRX', 'BTC/XLM', 'BTC/XMR', 'BTC/XRP', 'BTC/ZEC', 'ETH/ZEC'];
        for (let key of symbols) {
            for (let val of pairs) {
                if (key == val) {
                    validpairs.push(val);
                }
            }
        }
        if (lakebtc.has['fetchTicker']) {
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await lakebtc.fetchTicker(validpairs[i]);
            }
        }
        return prices;
    },
    livecoin: async function printLivecoin() { //has price data
        let livecoin = new ccxt.livecoin();
        await livecoin.loadMarkets();
        const symbols = livecoin.symbols;
        const prices = { 'id': livecoin.id };
        const validpairs = [];
        const pairs = ['BTC/BCH', 'DASH/BTC', 'ETH/BTC', 'LTC/BTC', 'TRX/BTC', 'XMR/BTC', 'BCH/BTC', 'ETH/BCH', 'USDT/BCH', 'USDT/BTC', 'BTC/DASH', 'ETH/DASH', 'BTC/ETH', 'USDT/ETH', 'BTC/LTC', 'ETH/LTC', 'USDT/LTC', 'BTC/TRX', 'BTC/XLM', 'BTC/XMR', 'BTC/XRP', 'BTC/ZEC', 'ETH/ZEC'];
        for (let key of symbols) {
            for (let val of pairs) {
                if (key == val) {
                    validpairs.push(val);
                }
            }
        }    
        if (livecoin.has['fetchTicker']) {
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await livecoin.fetchTicker(validpairs[i]);
            }
        }
        return prices;
    },
    liqui: async function printLiqui() {
        let liqui = new ccxt.liqui();
        await liqui.loadMarkets();
        const symbols = liqui.symbols;
        const prices = { 'id': liqui.id };
        const validpairs = [];
        const pairs = ['BTC/BCH', 'BCH/ETH', 'BCH/USDT', 'BTC/USDT', 'DASH/BTC', 'DASH/ETH', 'EOS/BTC', 'ETH/BTC', 'ETH/USDT', 'LTC/BTC', 'LTC/ETH', 'LTC/USDT', 'TRX/BTC', 'BCH/BTC', 'ETH/BCH', 'USDT/BCH', 'USDT/BTC', 'BTC/DASH', 'ETH/DASH', 'BTC/EOS', 'USDT/EOS', 'BTC/ETH', 'USDT/ETH', 'BTC/LTC', 'ETH/LTC', 'USDT/LTC', 'BTC/TRX', 'BTC/XLM', 'BTC/XMR', 'BTC/XRP', 'BTC/ZEC', 'ETH/ZEC'];
        for (let key of symbols) {
            for (let val of pairs) {
                if (key == val) {
                    validpairs.push(val);
                }
            }
        }  
        if (liqui.has['fetchTicker']) {
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await liqui.fetchTicker(validpairs[i]);
            }
        }
        return prices;

        //return await liqui.fetch_markets();
    },
    // theocean: async function printO() {
    //     let theocean = new ccxt.theocean({'enableRateLimit': true,});
    //     await theocean.loadMarkets();
    //     const symbols = theocean.symbols;
    //     const validpairs = [];
    //     const prices = { 'id': theocean.id };
    //     const pairs = ['LTC/BTC', 'XRP/BTC', 'BCH/BTC', 'ETH/BCH', 'ETH/BTC', 'BCH/ETH', 'BCH/USDT', 'BTC/USDT', 'BTC/USDT', 'DASH/BTC', 'DASH/ETH', 'EOS/BTC', 'EOS/USDT', 'ETH/USDT', 'LTC/ETH', 'LTC/USDT', 'TRX/BTC', 'XLM/BTC', 'XMR/BTC', 'ZEC/BTC', 'ZEC/ETH', 'BTC/BCH', 'ETH/BCH', 'USDT/BCH', 'USDT/BTC', 'BTC/DASH', 'ETH/DASH', 'BTC/EOS', 'USDT/EOS', 'BTC/ETH', 'USDT/ETH', 'BTC/LTC', 'ETH/LTC', 'USDT/LTC', 'BTC/TRX', 'BTC/XLM', 'BTC/XMR', 'BTC/XRP', 'BTC/ZEC', 'ETH/ZEC'];
    //     for (let key of symbols) {
    //         for (let val of pairs) {
    //             if (key == val) {
    //                 validpairs.push(val);
    //             }
    //         }
    //     }   
    //     if (theocean.has['fetchTicker']) {
    //         for (let i = 0; i < pairs.length; i++) {
    //             prices[pairs[i]] = await qryptos.fetchTicker(pairs[i]);
    //         }
    //     }
    //     return prices;
    // },
    qryptos: async function printQ() { //has price data
        let qryptos = new ccxt.qryptos();
        await qryptos.loadMarkets();
        const symbols = qryptos.symbols;
        const validpairs = [];
        const prices = { 'id': qryptos.id };
        const pairs = ['BTC/BCH', 'DASH/BTC', 'ETH/BTC', 'LTC/BTC', 'TRX/BTC', 'XLM/BTC', 'XMR/BTC', 'XRP/BTC', 'ZEC/BTC', 'BCH/BTC', 'ETH/BCH', 'USDT/BCH', 'USDT/BTC', 'BTC/DASH', 'ETH/DASH', 'BTC/EOS', 'USDT/EOS', 'BTC/ETH', 'USDT/ETH', 'BTC/LTC', 'ETH/LTC', 'USDT/LTC', 'BTC/TRX', 'BTC/XLM', 'BTC/XMR', 'BTC/XRP', 'BTC/ZEC', 'ETH/ZEC'];
        for (let key of symbols) {
            for (let val of pairs) {
                if (key == val) {
                    validpairs.push(val);
                }
            }
        }   
        if (qryptos.has['fetchTicker']) {
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await qryptos.fetchTicker(validpairs[i]);
            }
        }
        return prices;
    },
    quadrigacx: async function printQuad() {
        let quadrigacx = new ccxt.quadrigacx();
        await quadrigacx.loadMarkets();
        const symbols = quadrigacx.symbols;
        const prices = { 'id': quadrigacx.id };
        const validpairs = [];
        const pairs = ['BTC/BCH', 'ETH/BTC', 'LTC/BTC', 'BCH/BTC', 'ETH/BCH', 'USDT/BCH', 'USDT/BTC', 'BTC/DASH', 'ETH/DASH', 'BTC/EOS', 'USDT/EOS', 'BTC/ETH', 'USDT/ETH', 'BTC/LTC', 'ETH/LTC', 'USDT/LTC', 'BTC/TRX', 'BTC/XLM', 'BTC/XMR', 'BTC/XRP', 'BTC/ZEC', 'ETH/ZEC'];
        for (let key of symbols) {
            for (let val of pairs) {
                if (key == val) {
                    validpairs.push(val);
                }
            }
        } 
        if (quadrigacx.has['fetchTicker']) {
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await quadrigacx.fetchTicker(validpairs[i]);
            }
        }
        return prices;

        //return await quadrigacx.fetch_markets();
    },
    therock: async function printRock() { //has last price
        let therock = new ccxt.therock();
        await therock.loadMarkets();
        const symbols = therock.symbols;
        const prices = { 'id': therock.id };
        const validpairs = [];
        const pairs = ['BTC/BCH', 'BTC/XRP', 'LTC/BTC', 'ZEC/BTC', 'BCH/BTC', 'ETH/BCH', 'USDT/BCH', 'USDT/BTC', 'BTC/DASH', 'ETH/DASH', 'BTC/EOS', 'USDT/EOS', 'BTC/ETH', 'USDT/ETH', 'BTC/LTC', 'ETH/LTC', 'USDT/LTC', 'BTC/TRX', 'BTC/XLM', 'BTC/XMR', 'BTC/XRP', 'BTC/ZEC', 'ETH/ZEC'];
        for (let key of symbols) {
            for (let val of pairs) {
                if (key == val) {
                    validpairs.push(val);
                }
            }
        }
        if (therock.has['fetchTicker']) {
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await therock.fetchTicker(validpairs[i]);
            }
        }
        return prices;
    },
    tidex: async function printTidex() {
        let tidex = new ccxt.tidex();
        await tidex.loadMarkets();
        const symbols = tidex.symbols;
        const prices = { 'id': tidex.id };
        const validpairs = [];
        const pairs = ['BTC/BCH', 'BCH/ETH', 'BTC/USDT', 'DASH/BTC', 'DASH/ETH', 'EOS/BTC', 'ETH/BTC', 'ETH/USDT', 'LTC/BTC', 'LTC/ETH', 'LTC/USDT', 'TRX/BTC', 'BCH/BTC', 'ETH/BCH', 'USDT/BCH', 'USDT/BTC', 'BTC/DASH', 'ETH/DASH', 'BTC/EOS', 'USDT/EOS', 'BTC/ETH', 'USDT/ETH', 'BTC/LTC', 'ETH/LTC', 'USDT/LTC', 'BTC/TRX', 'BTC/XLM', 'BTC/XMR', 'BTC/XRP', 'BTC/ZEC', 'ETH/ZEC'];
        for (let key of symbols) {
            for (let val of pairs) {
                if (key == val) {
                    validpairs.push(val);
                }
            }
        }
        if (tidex.has['fetchTicker']) {
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await tidex.fetchTicker(validpairs[i]);
            }
        }
        return prices;

        //return await tidex.fetch_markets();
    },
    wex: async function printWex() {
        let wex = new ccxt.wex();
        await wex.loadMarkets();
        const symbols = wex.symbols;
        const prices = { 'id': wex.id };
        const validpairs = [];
        const pairs = ['BTC/BCH', 'BCH/ETH', 'BCH/ZEC', 'DASH/BTC', 'DASH/ETH', 'ETH/BTC', 'LTC/BTC', 'ZEC/BTC', 'BCH/BTC', 'ETH/BCH', 'USDT/BCH', 'USDT/BTC', 'BTC/DASH', 'ETH/DASH', 'BTC/EOS', 'USDT/EOS', 'BTC/ETH', 'USDT/ETH', 'BTC/LTC', 'ETH/LTC', 'USDT/LTC', 'BTC/TRX', 'BTC/XLM', 'BTC/XMR', 'BTC/XRP', 'BTC/ZEC', 'ETH/ZEC'];
        for (let key of symbols) {
            for (let val of pairs) {
                if (key == val) {
                    validpairs.push(val);
                }
            }
        }  
        if (wex.has['fetchTicker']) {
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await wex.fetchTicker(validpairs[i]);
            }
        }
        return prices;

        //return await wex.fetch_markets();
    },
    yobit: async function printYobit() {
        let yobit = new ccxt.yobit();
        await yobit.loadMarkets();
        const symbols = yobit.symbols;
        const prices = { 'id': yobit.id };
        const validpairs = [];
        const pairs = ['BTC/BCH', 'BCH/ETH', 'LTC/BTC', 'LTC/ETH', 'ETH/BTC', 'DASH/BTC', 'DASH/ETH', 'ZEC/BTC', 'ZEC/ETH', 'EOS/BTC', 'TRX/BTC', 'BCH/BTC', 'ETH/BCH', 'USDT/BCH', 'USDT/BTC', 'BTC/DASH', 'ETH/DASH', 'BTC/EOS', 'USDT/EOS', 'BTC/ETH', 'USDT/ETH', 'BTC/LTC', 'ETH/LTC', 'USDT/LTC', 'BTC/TRX', 'BTC/XLM', 'BTC/XMR', 'BTC/XRP', 'BTC/ZEC', 'ETH/ZEC'];
        for (let key of symbols) {
            for (let val of pairs) {
                if (key == val) {
                    validpairs.push(val);
                }
            }
        }    
        if (yobit.has['fetchTicker']) {
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await yobit.fetchTicker(validpairs[i]);
            }
        }
        return prices;
        //return await yobit.fetch_markets();
    },
    zaif: async function printZaif() {
        let zaif = new ccxt.zaif();
        await zaif.loadMarkets();
        const symbols = zaif.symbols;
        const prices = { 'id': zaif.id };
        const validpairs = [];
        const pairs = ['BTC/BCH', 'ETH/BTC', 'BCH/BTC', 'ETH/BCH', 'USDT/BCH', 'USDT/BTC', 'BTC/DASH', 'ETH/DASH', 'BTC/EOS', 'USDT/EOS', 'BTC/ETH', 'USDT/ETH', 'BTC/LTC', 'ETH/LTC', 'USDT/LTC', 'BTC/TRX', 'BTC/XLM', 'BTC/XMR', 'BTC/XRP', 'BTC/ZEC', 'ETH/ZEC'];
        for (let key of symbols) {
            for (let val of pairs) {
                if (key == val) {
                    validpairs.push(val);
                }
            }
        }  
        if (zaif.has['fetchTicker']) {
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await zaif.fetchTicker(validpairs[i]);
            }
        }
        return prices;



        //return await zaif.fetch_markets();
    }
}
