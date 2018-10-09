var resolve = require("../logicnews.js");
var Redis = require('ioredis');
var keys = require('../keys.js');

var redis = new Redis({
    port: 12599,          // Redis port
    host: 'redis-12599.c55.eu-central-1-1.ec2.cloud.redislabs.com',   // Redis host
    family: 4,           // 4 (IPv4) or 6 (IPv6)
    password: keys.redis_key,
    db: 0
  });
  

let news = resolve.news();

module.exports ={
    news: ()=>{
        news.then((response)=>{
            redis.set('news', JSON.stringify(response));
            redis.set('newstime', JSON.stringify(new Date()));
        });
    }
}
