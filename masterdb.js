var resolve = require("./master.js");
var Redis = require('ioredis');
var redis = new Redis(process.env.REDIS_URL);


let master = resolve.master();

master.then((response)=>{
    redis.set('master', JSON.stringify(response));
    redis.set('mastertime', JSON.stringify(new Date()));
});