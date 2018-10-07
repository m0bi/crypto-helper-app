var Redis = require('ioredis');
var redis = new Redis({
  port: 18167,          // Redis port
  host: 'redis-18167.c55.eu-central-1-1.ec2.cloud.redislabs.com',   // Redis host
  family: 4,           // 4 (IPv4) or 6 (IPv6)
  password: keys.redis_key,
  db: 0
});
(async function master() {
    const VALS = [];
    await redis.get('cash').then((result) => {
        VALS.push(JSON.parse(result));
    }).catch(err => console.log(err));
    await redis.get('live').then((result) => {
        VALS.push(JSON.parse(result));
    }).catch(err => console.log(err));
    const RETURN = [];
    for(key in VALS[1]) {
      const SPLIT = key.split('/');
      let returnObject = {};
      VALS[0].map((value)=>{
        if(value.id == SPLIT[0]) {
          returnObject["LID"] = value.id;
          returnObject["leftDisplayName"] = value.display_name;
          returnObject["left24hrChange"] = value.cap24hrChange;
          returnObject["leftPrice"] = value.price;
        }
        if(value.id == SPLIT[1]) {
          returnObject["RID"] = value.id;
          returnObject["rightDisplayName"] = value.display_name;
          returnObject["right24hrChange"] = value.cap24hrChange;
          returnObject["rightPrice"] = value.price;
        }
        if(SPLIT[0] == 'USDT'){
            returnObject["LID"] = 'USDT';
            returnObject["leftDisplayName"] = 'Tether';
            returnObject["left24hrChange"] = 0;
            returnObject["leftPrice"] = 1;
        }
        if(SPLIT[1] == 'USDT'){
            returnObject["RID"] = 'USDT';
            returnObject["rightDisplayName"] = 'Tether';
            returnObject["right24hrChange"] = 0;
            returnObject["rightPrice"] = 1;
        }
      });
      const SORTAR = VALS[1][key];
      SORTAR.sort(function compareNumbers(a, b) {
        return a[2] - b[2];
      });
      returnObject["low"] = SORTAR[0];
      returnObject["high"] = SORTAR[SORTAR.length - 1]; 
      RETURN.push(returnObject);
    }
    redis.set('hilo', JSON.stringify(RETURN));
})();