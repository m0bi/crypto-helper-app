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


//const pairs = ['BCH/BTC', 'BCH/LTC', 'BCH/ETH', 'BCH/USDT', 'BCH/DASH', 'BCH/ZEC', 'BTC/USDT', 'DASH/BTC', 'DASH/LTC', 'DASH/ETH', 'DASH/ZEC', 'EOS/BTC', 'EOS/USDT', 'ETH/BTC', 'ETH/LTC', 'ETH/USDT', 'ETH/ZEC', 'LTC/BTC', 'LTC/ETH', 'LTC/USDT', 'TRX/BTC', 'TRX/USDT', 'XLM/BTC', 'XMR/BTC', 'XRP/BTC', 'ZEC/BTC', 'ZEC/LTC', 'ZEC/ETH'];

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
    anxpro: async function printAnx() {
        let anxpro = new ccxt.anxpro({
            'enableRateLimit': true,
        });
        await anxpro.loadMarkets();
        const prices = {'id':anxpro.id};
        const pairs = ['LTC/BTC', 'XRP/BTC'];
        for (let i = 0; i < pairs.length; i++) {
            prices[pairs[i]] = await anxpro.fetchTicker(pairs[i]);
        }
        return prices;
        //return await anxpro.fetch_markets();
    },
    anybits: async function printAnybits() {
        let anybits = new ccxt.anybits({
            'enableRateLimit': true,
        });
        await anybits.loadMarkets();
        const prices = {'id':anybits.id};
        const pairs = ['BCH/BTC', 'LTC/BTC', 'LTC/ETH', 'XRP/BTC', 'ETH/BTC', 'DASH/BTC', 'DASH/ETH'];
        for (let i = 0; i < pairs.length; i++) {
            prices[pairs[i]] = await anybits.fetchTicker(pairs[i]);
        }
        return prices;

        //return await anybits.fetch_markets();
    },
    binance: async function printBinance() {
        let binance = new ccxt.binance({
            'enableRateLimit': true,
        });
        await binance.loadMarkets();
        const prices = {'id':binance.id};
        const pairs = ['BCH/BTC', 'BCH/ETH', 'BCH/USDT', 'BTC/USDT', 'LTC/BTC', 'LTC/ETH', 'LTC/USDT', 'XRP/BTC', 'ETH/BTC', 'ETH/USDT', 'DASH/BTC', 'DASH/ETH', 'ZEC/BTC', 'ZEC/ETH', 'EOS/BTC', 'EOS/USDT', 'TRX/BTC', 'TRX/USDT', 'XLM/BTC', 'XMR/BTC'];
        for (let i = 0; i < pairs.length; i++) {
            prices[pairs[i]] = await binance.fetchTicker(pairs[i]);
        }
        return prices;
        //return await binance.fetch_markets();
    },
    bitbay: async function printBitbay() {
        let bitbay = new ccxt.bitbay({
            'enableRateLimit': true,
        });
        await bitbay.loadMarkets();
        const prices = {'id':bitbay.id};
        const pairs = ['BCH/BTC', 'DASH/BTC', 'ETH/BTC', 'LTC/BTC', 'XRP/BTC'];
        for (let i = 0; i < pairs.length; i++) {
            prices[pairs[i]] = await bitbay.fetchTicker(pairs[i]);
        }
        return prices;

        //return await bitbay.fetch_markets();
    },
    bitfinex2: async function printBitfinex2() {
        let bitfinex2 = new ccxt.bitfinex2({
            'enableRateLimit': true,
        });
        await bitfinex2.loadMarkets();
        const prices = {'id':bitfinex2.id};
        const pairs = ['BCH/BTC', 'BCH/ETH', 'BCH/USDT', 'BTC/USDT', 'LTC/BTC', 'LTC/USDT', 'XRP/BTC', 'ETH/BTC', 'ETH/USDT', 'DASH/BTC', 'ZEC/BTC', 'EOS/BTC', 'TRX/BTC', 'XLM/BTC', 'XMR/BTC'];
        for (let i = 0; i < pairs.length; i++) {
            prices[pairs[i]] = await bitfinex2.fetchTicker(pairs[i]);
        }
        return prices;

        //return await bitfinex2.fetch_markets();
    },
    bitflyer: async function printBitflyer() {
        let bitflyer = new ccxt.bitflyer({
            'enableRateLimit': true,
        });
        await bitflyer.loadMarkets();
        const prices = {'id':bitflyer.id};
        const pairs = ['BCH/BTC', 'ETH/BTC'];
        for (let i = 0; i < pairs.length; i++) {
            prices[pairs[i]] = await bitflyer.fetchTicker(pairs[i]);
        }
        return prices;

        //return await bitflyer.fetch_markets();
    },
    bitlish: async function printBitlish() {
        let bitlish = new ccxt.bitlish({
            'enableRateLimit': true,
        });
        await bitlish.loadMarkets();
        const prices = {'id':bitlish.id};
        const pairs = ['BCH/BTC', 'BCH/USDT', 'BTC/USDT', 'LTC/BTC', 'XRP/BTC', 'ETH/BTC', 'ETH/USDT', 'DASH/BTC', 'ZEC/BTC'];
        for (let i = 0; i < pairs.length; i++) {
            prices[pairs[i]] = await bitlish.fetchTicker(pairs[i]);
        }
        return prices;


        //return await bitlish.fetch_markets();
    },
    bitstamp: async function printBitstamp() {
        let bitstamp = new ccxt.bitstamp({
            'enableRateLimit': true,
        });
        await bitstamp.loadMarkets();
        const prices = {'id': bitstamp.id};
        const pairs = ['BCH/BTC', 'ETH/BTC', 'LTC/BTC', 'XRP/BTC'];
        for (let i = 0; i < pairs.length; i++) {
            prices[pairs[i]] = await bitstamp.fetchTicker(pairs[i]);
        }
        return prices;
        

        //return await bitstamp.fetch_markets();
    },
    btcalpha: async function printBtcalpha() {
        let btcalpha = new ccxt.btcalpha({
            'enableRateLimit': true,
        });
        await btcalpha.loadMarkets();
        const prices = {'id': btcalpha.id};
        const pairs = ['BCH/BTC', 'BTC/USDT', 'ETH/BTC', 'ETH/USDT', 'LTC/BTC', 'XMR/BTC', 'XRP/BTC', 'ZEC/BTC'];
        for (let i = 0; i < pairs.length; i++) {
            prices[pairs[i]] = await btcalpha.fetchTicker(pairs[i]);
        }
        return prices;
        

        //return await btcalpha.fetch_markets();
    },
    btcmarkets: async function printBtcmarkets() {
        let btcmarkets = new ccxt.btcmarkets({
            'enableRateLimit': true,
        });
        await btcmarkets.loadMarkets();
        const prices = {'id': btcmarkets.id};
        const pairs = ['BCH/BTC', 'ETH/BTC', 'LTC/BTC', 'XRP/BTC'];
        for (let i = 0; i < pairs.length; i++) {
            prices[pairs[i]] = await btcmarkets.fetchTicker(pairs[i]);
        }
        return prices;

        //return await btcmarkets.fetch_markets();
    },
    btctradeim: async function printBtctradeim() {
        let btctradeim = new ccxt.btctradeim({
            'enableRateLimit': true,
        });
        await btctradeim.loadMarkets();
        const prices = {'id': btctradeim.id};
        const pairs = ['BCH/BTC', 'EOS/BTC', 'LTC/BTC', 'XRP/BTC'];
        for (let i = 0; i < pairs.length; i++) {
            prices[pairs[i]] = await btctradeim.fetchTicker(pairs[i]);
        }
        return prices;

        //return await btctradeim.fetch_markets();
    },
    cex: async function printCex() {
        let cex = new ccxt.cex({
            'enableRateLimit': true,
        });
        await cex.loadMarkets();
        const prices = {'id':cex.id};
        const pairs = ['BCH/BTC', 'DASH/BTC', 'ETH/BTC', 'XLM/BTC', 'XRP/BTC', 'ZEC/BTC'];
        for (let i = 0; i < pairs.length; i++) {
            prices[pairs[i]] = await cex.fetchTicker(pairs[i]);
        }
        return prices;

        //return await cex.fetch_markets();
    },
    coinbasepro: async function printCoinbasepro() {
        let coinbasepro = new ccxt.coinbasepro({
            'enableRateLimit': true,
        });
        await coinbasepro.loadMarkets();
        const prices = {'id':coinbasepro.id};
        const pairs = ['BCH/BTC', 'ETH/BTC', 'LTC/BTC'];
        for (let i = 0; i < pairs.length; i++) {
            prices[pairs[i]] = await coinbasepro.fetchTicker(pairs[i]);
        }
        return prices;
        
        //return await coinbasepro.fetch_markets();
    },
    coinegg: async function printCoinegg() {
        let coinegg = new ccxt.coinegg({
            'enableRateLimit': true,
        });
        await coinegg.loadMarkets();
        const prices = {'id':coinegg.id};
        const pairs = ['BCH/BTC', 'BCH/ETH', 'BTC/USDT', 'EOS/BTC', 'EOS/USDT', 'ETH/BTC', 'ETH/USDT', 'LTC/BTC', 'LTC/ETH', 'LTC/USDT', 'TRX/BTC', 'XLM/BTC', 'XRP/BTC'];
        for (let i = 0; i < pairs.length; i++) {
            prices[pairs[i]] = await coinegg.fetchTicker(pairs[i]);
        }
        return prices;

        //return await coinegg.fetch_markets();
    },
    coinex: async function printCoinex() {
        let coinex = new ccxt.coinex({
            'enableRateLimit': true,
        });
        await coinex.loadMarkets();
        const prices = {'id':coinex.id};
        const pairs =  ['BCH/USDT', 'BTC/USDT', 'DASH/BTC', 'EOS/BTC', 'EOS/USDT', 'ETH/BTC', 'ETH/USDT', 'LTC/BTC', 'LTC/USDT', 'TRX/BTC', 'XMR/BTC', 'XRP/BTC', 'ZEC/BTC'];
        for (let i = 0; i < pairs.length; i++) {
            prices[pairs[i]] = await coinex.fetchTicker(pairs[i]);
        }
        return prices;
        //return await coinex.fetch_markets();
    },
    coinexchange: async function printCoinexchange() { //has price data
        let coinexchange = new ccxt.coinexchange({
            'enableRateLimit': true,
        });
        await coinexchange.loadMarkets();
        const prices = {'id':coinexchange.id};
        const pairs =  ['BCH/BTC', 'DASH/BTC', 'DASH/ETH', 'EOS/BTC', 'ETH/BTC', 'LTC/BTC', 'ZEC/BTC'];
        for (let i = 0; i < pairs.length; i++) {
            prices[pairs[i]] = await coinexchange.fetchTicker(pairs[i]);
        }
        return prices;
    },
    coinfalcon: async function printCoinfalcon() {
        let coinfalcon = new ccxt.coinfalcon({
            'enableRateLimit': true,
        });
        await coinfalcon.loadMarkets();
        const prices = {'id':coinfalcon.id};
        const pairs = ['BCH/BTC', 'BTC/USDT', 'EOS/USDT', 'ETH/BTC', 'TRX/BTC', 'XRP/BTC'];
        for (let i = 0; i < pairs.length; i++) {
            prices[pairs[i]] = await coinfalcon.fetchTicker(pairs[i]);
        }
        return prices;

        //return await coinfalcon.fetch_markets();
    },
    coinmate: async function printcoinmate() {
        let coinmate = new ccxt.coinmate({
            'enableRateLimit': true,
        });
        await coinmate.loadMarkets();
        const prices = {'id':coinmate.id};
        prices['LTC/BTC'] = await coinmate.fetchTicker('LTC/BTC');
        return prices;

        //return await coinmate.fetch_markets();
    },
    dsx: async function printDsx() {
        let dsx = new ccxt.dsx({
            'enableRateLimit': true,
        });
        await dsx.loadMarkets();
        const prices = {'id':dsx.id};
        const pairs = ['BCH/BTC', 'ETH/BTC', 'LTC/BTC'];
        for (let i = 0; i < pairs.length; i++) {
            prices[pairs[i]] = await dsx.fetchTicker(pairs[i]);
        }
        return prices;
        //return await dsx.fetch_markets();
    },
    exmo: async function printExmo() {
        let exmo = new ccxt.exmo({
            'enableRateLimit': true,
        });
        await exmo.loadMarkets();
        const prices = {'id':exmo.id};
        const pairs = ['BCH/BTC', 'BCH/ETH', 'BTC/USDT', 'DASH/BTC', 'EOS/BTC', 'ETH/BTC', 'ETH/LTC', 'ETH/USDT', 'LTC/BTC', 'XLM/BTC', 'XMR/BTC', 'XRP/BTC', 'ZEC/BTC'];
        for (let i = 0; i < pairs.length; i++) {
            prices[pairs[i]] = await exmo.fetchTicker(pairs[i]);
        }
        return prices;

        //return await exmo.fetch_markets();
    },
    gatecoin: async function printGatecoin() {
        let gatecoin = new ccxt.gatecoin({
            'enableRateLimit': true,
        });
        await gatecoin.loadMarkets();
        const prices = {'id':gatecoin.id};
        const pairs = ['BCH/BTC', 'ETH/BTC', 'LTC/ETH', 'LTC/BTC'];
        for (let i = 0; i < pairs.length; i++) {
            prices[pairs[i]] = await gatecoin.fetchTicker(pairs[i]);
        }
        return prices;
        //return await gatecoin.fetch_markets();
    },
    gemini: async function printGemini() {
        let gemini = new ccxt.gemini({
            'enableRateLimit': true,
        });
        await gemini.loadMarkets();
        const prices = {'id':gemini.id};
        const pairs = ['ETH/BTC', 'ZEC/BTC', 'ZEC/ETH'];
        for (let i = 0; i < pairs.length; i++) {
            prices[pairs[i]] = await gemini.fetchTicker(pairs[i]);
        }
        return prices;

        //return await gemini.fetch_markets();
    },
    hitbtc2: async function printHitbtc() {
        let hitbtc2 = new ccxt.hitbtc2({
            'enableRateLimit': true,
        });
        await hitbtc2.loadMarkets();
        const prices = {'id':hitbtc2.id};
        const pairs = ['BCH/BTC', 'BCH/ETH', 'BCH/USDT', 'BTC/USDT', 'DASH/BTC', 'DASH/ETH', 'EOS/BTC', 'EOS/USDT', 'ETH/BTC', 'ETH/USDT', 'LTC/BTC', 'LTC/ETH', 'LTC/USDT', 'TRX/BTC', 'TRX/USDT', 'XLM/BTC', 'XMR/BTC', 'XRP/BTC', 'ZEC/BTC', 'ZEC/ETH'];
        for (let i = 0; i < pairs.length; i++) {
            prices[pairs[i]] = await hitbtc2.fetchTicker(pairs[i]);
        }
        return prices;

        //return await hitbtc2.fetch_markets();
    },
    ice3x: async function printice3x() {
        let ice3x = new ccxt.ice3x({
            'enableRateLimit': true,
        });
        await ice3x.loadMarkets();
        const prices = {'id':ice3x.id};
        const pairs = ['BCH/BTC', 'DASH/BTC', 'ETH/BTC', 'LTC/BTC', 'XMR/BTC', 'ZEC/BTC'];
        for (let i = 0; i < pairs.length; i++) {
            prices[pairs[i]] = await ice3x.fetchTicker(pairs[i]);
        }
        return prices;

        //return await ice3x.fetch_markets();
    },
    kraken: async function printKraken() {
        let kraken = new ccxt.kraken({
            'enableRateLimit': true,
        })
        await kraken.loadMarkets();
        const prices = {'id':kraken.id};
        const pairs = ['BCH/BTC', 'DASH/BTC', 'EOS/BTC', 'ETH/BTC', 'LTC/BTC', 'XLM/BTC', 'XMR/BTC', 'XRP/BTC', 'ZEC/BTC'];
        for (let i = 0; i < pairs.length; i++) {
            prices[pairs[i]] = await kraken.fetchTicker(pairs[i]);
        }
        return prices;

    },
    kucoin: async function printKucoin() {
        let kucoin = new ccxt.kucoin({
            'enableRateLimit': true,
        });
        await kucoin.loadMarkets();
        const prices = {'id':kucoin.id};
        const pairs = ['BCH/BTC', 'BCH/ETH', 'BCH/USDT', 'BTC/USDT', 'DASH/BTC', 'DASH/ETH', 'EOS/BTC', 'EOS/USDT', 'ETH/BTC', 'ETH/USDT', 'LTC/BTC', 'LTC/ETH', 'LTC/USDT', 'XLM/BTC'];
        for (let i = 0; i < pairs.length; i++) {
            prices[pairs[i]] = await kucoin.fetchTicker(pairs[i]);
        }
        return prices;

        //return await kucoin.fetch_markets();
    },
    lakebtc: async function printLake() { // has price data
        let lakebtc = new ccxt.lakebtc({
            'enableRateLimit': true,
        });
        await lakebtc.loadMarkets();
        const prices = {'id':lakebtc.id};
        const pairs = ['BCH/BTC', 'LTC/BTC', 'XRP/BTC'];
        for (let i = 0; i < pairs.length; i++) {
            prices[pairs[i]] = await lakebtc.fetchTicker(pairs[i]);
        }
        return prices;
    },
    lbank: async function printLbank() {
        let lbank = new ccxt.lbank({
            'enableRateLimit': true,
        });
        await lbank.loadMarkets();
        const prices = {'id':lbank.id};
        const pairs = ['BCH/BTC', 'BCH/ETH', 'BCH/USDT', 'BTC/USDT', 'DASH/BTC', 'ETH/BTC', 'ETH/USDT', 'LTC/BTC', 'ZEC/BTC', 'ZEC/ETH'];
        for (let i = 0; i < pairs.length; i++) {
            prices[pairs[i]] = await lbank.fetchTicker(pairs[i]);
        }
        return prices;

        //return await lbank.fetch_markets();
    },
    livecoin: async function printLivecoin() { //has price data
        let livecoin = new ccxt.livecoin({
            'enableRateLimit': true,
        });
        await livecoin.loadMarkets();
        const prices = {'id':livecoin.id};
        const pairs = ['BCH/BTC', 'DASH/BTC', 'EOS/BTC', 'ETH/BTC', 'LTC/BTC', 'TRX/BTC', 'XMR/BTC'];
        for (let i = 0; i < pairs.length; i++) {
            prices[pairs[i]] = await livecoin.fetchTicker(pairs[i]);
        }
        return prices;
    },
    liqui: async function printLiqui() {
        let liqui = new ccxt.liqui({
            'enableRateLimit': true,
        });
        await liqui.loadMarkets();
        const prices = {'id':liqui.id};
        const pairs = ['BCH/BTC', 'BCH/ETH', 'BCH/USDT', 'BTC/USDT', 'DASH/BTC', 'DASH/ETH', 'EOS/BTC', 'ETH/BTC', 'ETH/USDT', 'LTC/BTC', 'LTC/ETH', 'LTC/USDT', 'TRX/BTC'];
        for (let i = 0; i < pairs.length; i++) {
            prices[pairs[i]] = await liqui.fetchTicker(pairs[i]);
        }
        return prices;

        //return await liqui.fetch_markets();
    },
    lykke: async function printLykke() {
        let lykke = new ccxt.lykke({
            'enableRateLimit': true,
        });
        await lykke.loadMarkets();
        const prices = {'id':lykke.id};
        const pairs = ['BCH/BTC', 'DASH/BTC', 'EOS/BTC', 'ETH/BTC', 'LTC/BTC', 'ZEC/BTC'];
        for (let i = 0; i < pairs.length; i++) {
            prices[pairs[i]] = await lykke.fetchTicker(pairs[i]);
        }
        return prices;

        //return await lykke.fetch_markets();
    },
    qryptos: async function printQ() { //has price data
        let qryptos = new ccxt.qryptos({
            'enableRateLimit': true,
        });
        await qryptos.loadMarkets();
        const prices = {'id':qryptos.id};
        const pairs = ['BCH/BTC', 'DASH/BTC', 'ETH/BTC', 'LTC/BTC', 'TRX/BTC', 'XLM/BTC', 'XMR/BTC', 'XRP/BTC', 'ZEC/BTC'];
        for (let i = 0; i < pairs.length; i++) {
            prices[pairs[i]] = await qryptos.fetchTicker(pairs[i]);
        }
        return prices;
    },
    quadrigacx: async function printQuad() {
        let quadrigacx = new ccxt.quadrigacx({
            'enableRateLimit': true,
        });
        await quadrigacx.loadMarkets();
        const prices = {'id':quadrigacx.id};
        const pairs = ['BCH/BTC', 'ETH/BTC', 'LTC/BTC'];
        for (let i = 0; i < pairs.length; i++) {
            prices[pairs[i]] = await quadrigacx.fetchTicker(pairs[i]);
        }
        return prices;
        
        //return await quadrigacx.fetch_markets();
    },
    rightbtc: async function printRight() {
        let rightbtc = new ccxt.rightbtc({
            'enableRateLimit': true,
        });
        await rightbtc.loadMarkets();
        const prices = {'id':rightbtc.id};
        const pairs = ['BCH/BTC', 'EOS/BTC', 'ETH/BTC', 'LTC/BTC', 'TRX/BTC'];
        for (let i = 0; i < pairs.length; i++) {
            prices[pairs[i]] = await rightbtc.fetchTicker(pairs[i]);
        }
        return prices;

        //return await rightbtc.fetch_markets();
    },
    southxchange: async function printSouth() {
        let southxchange = new ccxt.southxchange({
            'enableRateLimit': true,
        });
        await southxchange.loadMarkets();
        const prices = {'id':southxchange.id};
        const pairs = ['BCH/BTC', 'DASH/BTC', 'ETH/BTC', 'LTC/BTC'];
        for (let i = 0; i < pairs.length; i++) {
            prices[pairs[i]] = await southxchange.fetchTicker(pairs[i]);
        }
        return prices;

        //return await southxchange.fetch_markets();
    },
    therock: async function printRock() { //has last price
        let therock = new ccxt.therock({
            'enableRateLimit': true,
        });
        await therock.loadMarkets();
        const prices = {'id':therock.id};
        const pairs = ['BCH/BTC', 'BTC/XRP', 'LTC/BTC', 'ZEC/BTC'];
        for (let i = 0; i < pairs.length; i++) {
            prices[pairs[i]] = await therock.fetchTicker(pairs[i]);
        }
        return prices;
    },
    tidex: async function printTidex() {
        let tidex = new ccxt.tidex({
            'enableRateLimit': true,
        });
        await tidex.loadMarkets();
        const prices = {'id':tidex.id};
        const pairs = ['BCH/BTC', 'BCH/ETH', 'BTC/USDT', 'DASH/BTC', 'DASH/ETH', 'EOS/BTC', 'ETH/BTC', 'ETH/USDT', 'LTC/BTC', 'LTC/ETH', 'LTC/USDT', 'TRX/BTC'];
        for (let i = 0; i < pairs.length; i++) {
            prices[pairs[i]] = await tidex.fetchTicker(pairs[i]);
        }
        return prices;

        //return await tidex.fetch_markets();
    },
    wex: async function printWex() {
        let wex = new ccxt.wex({
            'enableRateLimit': true,
        });
        await wex.loadMarkets();
        const prices = {'id':wex.id};
        const pairs = ['BCH/BTC', 'BCH/DASH', 'BCH/ETH', 'BCH/LTC', 'BCH/ZEC', 'DASH/BTC', 'DASH/ETH', 'DASH/LTC', 'DASH/ZEC', 'ETH/BTC', 'ETH/LTC', 'ETH/ZEC', 'LTC/BTC', 'ZEC/BTC', 'ZEC/LTC'];
        for (let i = 0; i < pairs.length; i++) {
            prices[pairs[i]] = await wex.fetchTicker(pairs[i]);
        }
        return prices;

        //return await wex.fetch_markets();
    },
    yobit: async function printYobit() {
        let yobit = new ccxt.yobit({
            'enableRateLimit': true,
        });
        await yobit.loadMarkets();
        const prices = {'id':yobit.id};
        const pairs = ['BCH/BTC', 'BCH/ETH', 'LTC/BTC', 'LTC/ETH', 'ETH/BTC', 'DASH/BTC', 'DASH/ETH', 'ZEC/BTC', 'ZEC/ETH', 'EOS/BTC', 'TRX/BTC'];
        for (let i = 0; i < pairs.length; i++) {
            prices[pairs[i]] = await yobit.fetchTicker(pairs[i]);
        }
        return prices;
        //return await yobit.fetch_markets();
    },
    zaif: async function printZaif() {
        let zaif = new ccxt.zaif({
            'enableRateLimit': true,
        });
        await zaif.loadMarkets();
        const prices = {'id':zaif.id};
        const pairs = ['BCH/BTC', 'ETH/BTC'];
        for (let i = 0; i < pairs.length; i++) {
            prices[pairs[i]] = await zaif.fetchTicker(pairs[i]);
        }
        return prices;


        //return await zaif.fetch_markets();
    }
}
