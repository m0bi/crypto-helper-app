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
    cash: function getCash() {
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
            Promise.all(COINS).then((res)=>{
                return res;
            });
        } catch (error) {
            console.error(error);
        }
    }
}