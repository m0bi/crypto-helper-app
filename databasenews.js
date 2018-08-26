var resolve = require("./logicnews.js");
var Redis = require('ioredis');
var redis = new Redis(process.env.REDIS_URL);

let news = resolve.news();

news.then((response)=>{
    redis.set('news', JSON.stringify(response));
    redis.set('newstime', JSON.stringify(new Date()));
});