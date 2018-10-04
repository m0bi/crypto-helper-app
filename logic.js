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

function marketPrice(exchange, order){
    let orderbook = exchange.fetchOrderBook (order)
    let bid = orderbook.bids.length ? orderbook.bids[0][0] : undefined
  let ask = orderbook.asks.length ? orderbook.asks[0][0] : undefined
  let spread = (bid && ask) ? ask - bid : undefined
  return { 'symbol': order, 'bid': bid, 'ask': ask, 'last': spread }
  }

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
        let anxpro = new ccxt.anxpro({
            'enableRateLimit': true,
        });
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
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await marketPrice(anxpro, validpairs[i]);
            }
        return prices;

        //return await anxpro.fetch_markets();
    },
    anybits: async function printAnybits() {
        let anybits = new ccxt.anybits({
            'enableRateLimit': true,
        });
        await anybits.loadMarkets();
        const symbols = anybits.symbols;
        const prices = { 'id': anybits.id };
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
                prices[validpairs[i]] = await marketPrice(anybits, validpairs[i]);
            }
        return prices;
        //return await anybits.fetch_markets();
    },
    binance: async function printBinance() {
        let binance = new ccxt.binance({
            'enableRateLimit': true,
        });
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
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await marketPrice(binance, validpairs[i]);
            }
        return prices;
        //return await binance.fetch_markets();
    },
    bitbay: async function printBitbay() {
        let bitbay = new ccxt.bitbay({
            'enableRateLimit': true,
        });
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
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await marketPrice(bitbay, validpairs[i]);
            }
        return prices;

        //return await bitbay.fetch_markets();
    },
    bitfinex2: async function printBitfinex2() {
        let bitfinex2 = new ccxt.bitfinex2({
            'enableRateLimit': true,
        });
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
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await marketPrice(bitfinex2, validpairs[i]);
            }
        return prices;
        //return await bitfinex2.fetch_markets();
    },
    bitflyer: async function printBitflyer() {
        let bitflyer = new ccxt.bitflyer({
            'enableRateLimit': true,
        });
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
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await marketPrice(bitflyer, validpairs[i]);
            }
        return prices;

        //return await bitflyer.fetch_markets();
    },
    bitlish: async function printBitlish() {
        let bitlish = new ccxt.bitlish({
            'enableRateLimit': true,
        });
        await bitlish.loadMarkets();
        const symbols = bitlish.symbols;
        const validpairs = [];
        const pairs = ['BCH/BTC', 'BTC/USDT', 'BTC/BCH', 'LTC/BTC', 'XRP/BTC', 'ETH/BTC', 'ETH/USDT', 'DASH/BTC', 'ZEC/BTC', 'BCH/BTC', 'ETH/BCH', 'USDT/BCH', 'USDT/BTC', 'BTC/DASH', 'ETH/DASH', 'BTC/EOS', 'USDT/EOS', 'BTC/ETH', 'USDT/ETH', 'BTC/LTC', 'ETH/LTC', 'USDT/LTC', 'BTC/TRX', 'BTC/XLM', 'BTC/XMR', 'BTC/XRP', 'BTC/ZEC', 'ETH/ZEC'];
        const prices = { 'id': bitlish.id };
        for (let key of symbols) {
            for (let val of pairs) {
                if (key == val) {
                    validpairs.push(val);
                }
            }
        }
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await marketPrice(bitlish, validpairs[i]);
            }
        return prices;


        //return await bitlish.fetch_markets();
    },
    bitstamp: async function printBitstamp() {
        let bitstamp = new ccxt.bitstamp({
            'enableRateLimit': true,
        });
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
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await marketPrice(bitstamp, validpairs[i]);
            }
        return prices;


        //return await bitstamp.fetch_markets();
    },
    btcalpha: async function printBtcalpha() {
        let btcalpha = new ccxt.btcalpha({
            'enableRateLimit': true,
        });
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
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await marketPrice(btcalpha, validpairs[i]);
            }
        return prices;


        //return await btcalpha.fetch_markets();
    },
    btcmarkets: async function printBtcmarkets() {
        let btcmarkets = new ccxt.btcmarkets({
            'enableRateLimit': true,
        });
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
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await marketPrice(btcmarkets, validpairs[i]);
            }
        return prices;

        //return await btcmarkets.fetch_markets();
    },
    btctradeim: async function printBtctradeim() {
        let btctradeim = new ccxt.btctradeim({
            'enableRateLimit': true,
        });
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
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await marketPrice(btctradeim, validpairs[i]);
            }
        return prices;

        //return await btctradeim.fetch_markets();
    },
    cex: async function printCex() {
        let cex = new ccxt.cex({
            'enableRateLimit': true,
        });
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
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await marketPrice(cex, validpairs[i]);
            }
        return prices;

        //return await cex.fetch_markets();
    },
    coinex: async function printCoinex() {
        let coinex = new ccxt.coinex({
            'enableRateLimit': true,
        });
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
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await marketPrice(coinex, validpairs[i]);
            }
        return prices;
        //return await coinex.fetch_markets();
    },
    coinexchange: async function printCoinexchange() { //has price data
        let coinexchange = new ccxt.coinexchange({
            'enableRateLimit': true,
        });
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
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await marketPrice(coinexchange, validpairs[i]);
            }
        return prices;
    },
    coinfalcon: async function printCoinfalcon() {
        let coinfalcon = new ccxt.coinfalcon({
            'enableRateLimit': true,
        });
        await coinfalcon.loadMarkets();
        const symbols = coinfalcon.symbols;
        const prices = { 'id': coinfalcon.id };
        const validpairs = [];
        const pairs = ['BTC/BCH', 'BTC/USDT', 'EOS/USDT', 'ETH/BTC', 'TRX/BTC', 'XRP/BTC', 'BCH/BTC', 'ETH/BCH', 'USDT/BCH', 'USDT/BTC', 'BTC/DASH', 'ETH/DASH', 'BTC/EOS', 'USDT/EOS', 'BTC/ETH', 'USDT/ETH', 'BTC/LTC', 'ETH/LTC', 'USDT/LTC', 'BTC/TRX', 'BTC/XLM', 'BTC/XMR', 'BTC/XRP', 'BTC/ZEC', 'ETH/ZEC'];
        for (let key of symbols) {
            for (let val of pairs) {
                if (key == val) {
                    validpairs.push(val);
                }
            }
        }
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await marketPrice(coinfalcon, validpairs[i]);
            }
        return prices;

        //return await coinfalcon.fetch_markets();
    },
    coinmate: async function printcoinmate() {
        let coinmate = new ccxt.coinmate({
            'enableRateLimit': true,
        });
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
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await marketPrice(coinmate, validpairs[i]);
            }
        return prices;
        //return await coinmate.fetch_markets();
    },
    exmo: async function printExmo() {
        let exmo = new ccxt.exmo({
            'enableRateLimit': true,
        });
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
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await marketPrice(exmo, validpairs[i]);
            }
        return prices;

        //return await exmo.fetch_markets();
    },
    gatecoin: async function printGatecoin() {
        let gatecoin = new ccxt.gatecoin({
            'enableRateLimit': true,
        });
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
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await marketPrice(gatecoin, validpairs[i]);
            }
        return prices;
        //return await gatecoin.fetch_markets();
    },
    gemini: async function printGemini() {
        let gemini = new ccxt.gemini({
            'enableRateLimit': true,
        });
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
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await marketPrice(gemini, validpairs[i]);
            }
        return prices;

        //return await gemini.fetch_markets();
    },
    hitbtc2: async function printHitbtc() {
        let hitbtc2 = new ccxt.hitbtc2({
            'enableRateLimit': true,
        });
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
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await marketPrice(hitbtc2, validpairs[i]);
            }
        return prices;

        //return await hitbtc2.fetch_markets();
    },
    ice3x: async function printice3x() {
        let ice3x = new ccxt.ice3x({
            'enableRateLimit': true,
        });
        await ice3x.loadMarkets();
        const symbols = ice3x.symbols;
        const prices = { 'id': ice3x.id };
        const validpairs = []
        const pairs = ['BTC/BCH', 'BCH/BTC', 'DASH/BTC', 'ETH/BTC', 'LTC/BTC', 'XMR/BTC', 'ZEC/BTC', 'BCH/BTC', 'ETH/BCH', 'USDT/BCH', 'USDT/BTC', 'BTC/DASH', 'ETH/DASH', 'BTC/EOS', 'USDT/EOS', 'BTC/ETH', 'USDT/ETH', 'BTC/LTC', 'ETH/LTC', 'USDT/LTC', 'BTC/TRX', 'BTC/XLM', 'BTC/XMR', 'BTC/XRP', 'BTC/ZEC', 'ETH/ZEC'];
        for (let key of symbols) {
            for (let val of pairs) {
                if (key == val) {
                    validpairs.push(val);
                }
            }
        }   
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await marketPrice(ice3x, validpairs[i]);
            }
        return prices;

        //return await ice3x.fetch_markets();
    },
    kraken: async function printKraken() {
        let kraken = new ccxt.kraken({
            'enableRateLimit': true,
        });
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
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await marketPrice(kraken, validpairs[i]);
            }
        return prices;

    },
    kucoin: async function printKucoin() {
        let kucoin = new ccxt.kucoin({
            'enableRateLimit': true,
        });
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
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await marketPrice(kucoin, validpairs[i]);
            }
        return prices;

        //return await kucoin.fetch_markets();
    },
    lakebtc: async function printLake() { // has price data
        let lakebtc = new ccxt.lakebtc({
            'enableRateLimit': true,
        });
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
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await marketPrice(lakebtc, validpairs[i]);
            }
        return prices;
    },
    lbank: async function printLbank() {
        let lbank = new ccxt.lbank({
            'enableRateLimit': true,
        });
        await lbank.loadMarkets();
        const symbols = lbank.symbols;
        const prices = { 'id': lbank.id };
        const validpairs = [];
        const pairs = ['BTC/BCH', 'BCH/ETH', 'BCH/USDT', 'BTC/USDT', 'DASH/BTC', 'ETH/BTC', 'ETH/USDT', 'LTC/BTC', 'ZEC/BTC', 'ZEC/ETH', 'BCH/BTC', 'ETH/BCH', 'USDT/BCH', 'USDT/BTC', 'BTC/DASH', 'ETH/DASH', 'BTC/EOS', 'USDT/EOS', 'BTC/ETH', 'USDT/ETH', 'BTC/LTC', 'ETH/LTC', 'USDT/LTC', 'BTC/TRX', 'BTC/XLM', 'BTC/XMR', 'BTC/XRP', 'BTC/ZEC', 'ETH/ZEC'];
        for (let key of symbols) {
            for (let val of pairs) {
                if (key == val) {
                    validpairs.push(val);
                }
            }
        }   
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await marketPrice(lbank, validpairs[i]);
            }
        return prices;

        //return await lbank.fetch_markets();
    },
    livecoin: async function printLivecoin() { //has price data
        let livecoin = new ccxt.livecoin({
            'enableRateLimit': true,
        });
        await livecoin.loadMarkets();
        const symbols = livecoin.symbols;
        const prices = { 'id': livecoin.id };
        const validpairs = [];
        const pairs = ['BTC/BCH', 'DASH/BTC', 'EOS/BTC', 'ETH/BTC', 'LTC/BTC', 'TRX/BTC', 'XMR/BTC', 'BCH/BTC', 'ETH/BCH', 'USDT/BCH', 'USDT/BTC', 'BTC/DASH', 'ETH/DASH', 'BTC/EOS', 'USDT/EOS', 'BTC/ETH', 'USDT/ETH', 'BTC/LTC', 'ETH/LTC', 'USDT/LTC', 'BTC/TRX', 'BTC/XLM', 'BTC/XMR', 'BTC/XRP', 'BTC/ZEC', 'ETH/ZEC'];
        for (let key of symbols) {
            for (let val of pairs) {
                if (key == val) {
                    validpairs.push(val);
                }
            }
        }    
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await marketPrice(livecoin, validpairs[i]);
            }
        return prices;
    },
    liqui: async function printLiqui() {
        let liqui = new ccxt.liqui({
            'enableRateLimit': true,
        });
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
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await marketPrice(liqui, validpairs[i]);
            }
        return prices;

        //return await liqui.fetch_markets();
    },
    lykke: async function printLykke() {
        let lykke = new ccxt.lykke({
            'enableRateLimit': true,
        });
        await lykke.loadMarkets();
        const symbols = lykke.symbols;
        const prices = { 'id': lykke.id };
        const validpairs = [];
        const pairs = ['BTC/BCH', 'DASH/BTC', 'EOS/BTC', 'ETH/BTC', 'LTC/BTC', 'ZEC/BTC', 'BCH/BTC', 'ETH/BCH', 'USDT/BCH', 'USDT/BTC', 'BTC/DASH', 'ETH/DASH', 'BTC/EOS', 'USDT/EOS', 'BTC/ETH', 'USDT/ETH', 'BTC/LTC', 'ETH/LTC', 'USDT/LTC', 'BTC/TRX', 'BTC/XLM', 'BTC/XMR', 'BTC/XRP', 'BTC/ZEC', 'ETH/ZEC'];
        for (let key of symbols) {
            for (let val of pairs) {
                if (key == val) {
                    validpairs.push(val);
                }
            }
        } 
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await marketPrice(lykke, validpairs[i]);
            }
        return prices;

        //return await lykke.fetch_markets();
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
        let qryptos = new ccxt.qryptos({
            'enableRateLimit': true,
        });
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
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await marketPrice(qryptos, validpairs[i]);
            }
        return prices;
    },
    quadrigacx: async function printQuad() {
        let quadrigacx = new ccxt.quadrigacx({
            'enableRateLimit': true,
        });
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
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await marketPrice(quadrigacx, validpairs[i]);
            }
        return prices;

        //return await quadrigacx.fetch_markets();
    },
    therock: async function printRock() { //has last price
        let therock = new ccxt.therock({
            'enableRateLimit': true,
        });
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
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await marketPrice(therock, validpairs[i]);
            }
        return prices;
    },
    tidex: async function printTidex() {
        let tidex = new ccxt.tidex({
            'enableRateLimit': true,
        });
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
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await marketPrice(tidex, validpairs[i]);
            }
        return prices;

        //return await tidex.fetch_markets();
    },
    wex: async function printWex() {
        let wex = new ccxt.wex({
            'enableRateLimit': true,
        });
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
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await marketPrice(wex, validpairs[i]);
            }
        return prices;

        //return await wex.fetch_markets();
    },
    yobit: async function printYobit() {
        let yobit = new ccxt.yobit({
            'enableRateLimit': true,
        });
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
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await marketPrice(yobit, validpairs[i]);
            }
        return prices;
        //return await yobit.fetch_markets();
    },
    zaif: async function printZaif() {
        let zaif = new ccxt.zaif({
            'enableRateLimit': true,
        });
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
            for (let i = 0; i < validpairs.length; i++) {
                prices[validpairs[i]] = await marketPrice(zaif, validpairs[i]);
            }
        return prices;



        //return await zaif.fetch_markets();
    }
}
