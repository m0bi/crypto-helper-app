var express = require("express");
var bodyParser = require("body-parser");
const app = express();
const axios = require('axios');
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

var keys = require("./keys.js");
require("dotenv").config();
module.exports = {
    master: async function populate() {
        try{
        const LIVE = axios.get('https://headless-api-crypto.herokuapp.com/live');
        const BOOK = axios.get('https://headless-api-crypto.herokuapp.com/book');
        const CASH = axios.get('https://headless-api-crypto.herokuapp.com/cash');

        const PROMISE = [];
        PROMISE.push(LIVE);
        PROMISE.push(BOOK);
        PROMISE.push(CASH);
        let result = await Promise.all(PROMISE);
        return result;
        } catch(error){
            console.log(error)
        }
    }
}