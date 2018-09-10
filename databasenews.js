var resolve = require("./logicnews.js");
var Redis = require('ioredis');
var keys = require('./keys.js');

var redis = new Redis(process.env.REDIS_URL || {
    port: 11581,          // Redis port
    host: 'redis-11581.c16.us-east-1-2.ec2.cloud.redislabs.com',   // Redis host
    family: 4,           // 4 (IPv4) or 6 (IPv6)
    password: keys.redis_key,
    db: 0
  });

let news = resolve.news();

news.then((response)=>{
    redis.set('news', JSON.stringify(response));
    redis.set('newstime', JSON.stringify(new Date()));
});