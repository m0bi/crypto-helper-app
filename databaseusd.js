var resolve = require("./logicusd.js");
var Redis = require('ioredis');
var keys = require('./keys.js');
var redis = new Redis({
    port: 18167,          // Redis port
    host: 'redis-18167.c55.eu-central-1-1.ec2.cloud.redislabs.com',   // Redis host
    family: 4,           // 4 (IPv4) or 6 (IPv6)
    password: keys.redis_key,
    db: 0
  });


let usd = resolve.cash();

usd.then((response)=>{
    redis.set('cash', JSON.stringify(response));
    redis.set('cashtime', JSON.stringify(new Date()));
});