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
    }
}