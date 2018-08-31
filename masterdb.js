var resolve = require("./master.js");

let master = resolve.master();

master.then((response)=>{
    redis.set('master', JSON.stringify(response));
    redis.set('mastertime', JSON.stringify(new Date()));
});