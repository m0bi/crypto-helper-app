var express = require("express");
var bodyParser = require("body-parser");
const app = express();
const axios = require("axios");
//here I get exchange data.





//start of middleware stack
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

var keys = require("./keys.js");
require("dotenv").config();

module.exports = {
    cash: async function getCash() {
        try {
            const COINS = [];
            const BCH = await axios('http://coincap.io/page/BCH');
            COINS.push(BCH);
            const BTC = await axios('http://coincap.io/page/BTC');
            COINS.push(BTC);
            const DASH = await axios('http://coincap.io/page/DASH');
            COINS.push(DASH);
            const EOS = await axios('http://coincap.io/page/EOS');
            COINS.push(EOS);
            const ETH = await axios('http://coincap.io/page/ETH');
            COINS.push(ETH);
            const LTC = await axios('http://coincap.io/page/LTC');
            COINS.push(LTC);
            const TRX = await axios('http://coincap.io/page/TRX');
            COINS.push(TRX);
            const XLM = await axios('http://coincap.io/page/XLM');
            COINS.push(XLM);
            const XMR = await axios('http://coincap.io/page/XMR');
            COINS.push(XMR);
            const XRP = await axios('http://coincap.io/page/XRP');
            COINS.push(XRP);
            const ZEC = await axios('http://coincap.io/page/ZEC');
            COINS.push(ZEC);
            //console.log(news);
            //console.log(response.data.results);
            return coins;
        } catch (error) {
            console.error(error);
        }
    }
}