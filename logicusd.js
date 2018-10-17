var express = require("express");
var bodyParser = require("body-parser");
const app = express();
const axios = require("axios");
//here I get exchange data.





//start of middleware stack
app.use(bodyParser.urlencoded({
    extended: false
}));

// parse application/json
app.use(bodyParser.json());

var keys = require("./keys.js");
require("dotenv").config();


module.exports = {
    cash: async function getCash() {
        try {
            const COINS = [];
            const BCH = axios('http://coincap.io/page/BCH');
            COINS.push(BCH);
            const BTC = axios('http://coincap.io/page/BTC');
            COINS.push(BTC);
            const DASH = axios('http://coincap.io/page/DASH');
            COINS.push(DASH);
            const EOS = axios('http://coincap.io/page/EOS');
            COINS.push(EOS);
            const ETH = axios('http://coincap.io/page/ETH');
            COINS.push(ETH);
            const LTC = axios('http://coincap.io/page/LTC');
            COINS.push(LTC);
            const TRX = axios('http://coincap.io/page/TRX');
            COINS.push(TRX);
            const XLM = axios('http://coincap.io/page/XLM');
            COINS.push(XLM);
            const XMR = axios('http://coincap.io/page/XMR');
            COINS.push(XMR);
            const XRP = axios('http://coincap.io/page/XRP');
            COINS.push(XRP);
            const ZEC = axios('http://coincap.io/page/ZEC');
            COINS.push(ZEC);
            //console.log(news);
            //console.log(response.data.results);
            let result = await Promise.all(COINS);
            const data = [];
            for (let i = 0; i < result.length; i++) {
                data.push(result[i].data);
            }
            
            return data;
        } catch (error) {
            console.error(error);
        }
    }
}