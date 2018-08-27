var resolve = require("./logicusd.js");
var Redis = require('ioredis');
var redis = new Redis(process.env.REDIS_URL);

let usd = resolve.cash();

usd.then((response)=>{
    console.log(response);
    redis.set('cash', JSON.stringify(response));
    redis.set('cashtime', JSON.stringify(new Date()));
});