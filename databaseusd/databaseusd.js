var keys = ('../keys.js');
var resolve = require("../logicusd.js");
var Redis = require('ioredis');
var keys = require('../keys.js');
var redis = new Redis({
    port: 12599,          // Redis port
    host: 'redis-12599.c55.eu-central-1-1.ec2.cloud.redislabs.com',   // Redis host
    family: 4,           // 4 (IPv4) or 6 (IPv6)
    password: keys.redis_key,
    db: 0
  });
  


let usd = resolve.cash();
module.exports = {
    dollar: ()=>{
        usd.then((response)=>{
            redis.set('cash', JSON.stringify(response));
            redis.set('cashtime', JSON.stringify(new Date()));
        });
    }
}
