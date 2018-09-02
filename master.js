var Redis = require('ioredis');
var redis = new Redis(process.env.REDIS_URL);

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
          returnObject["Lid"] = value.id;
          returnObject["LdisplayName"] = value.display_name;
          returnObject["L24hrChange"] = value.cap24hrChange;
          returnObject["Lprice"] = value.price;
        }
        if(value.id == SPLIT[1]) {
          returnObject["Rid"] = value.id;
          returnObject["RdisplayName"] = value.display_name;
          returnObject["R24hrChange"] = value.cap24hrChange;
          returnObject["Rprice"] = value.price;
        }
        if(SPLIT[0] == 'USDT'){
            returnObject["Lid"] = 'USDT';
            returnObject["LdisplayName"] = 'Tether';
            returnObject["L24hrChange"] = 0;
            returnObject["Lprice"] = 1;
        }
        if(SPLIT[1] == 'USDT'){
            returnObject["Rid"] = 'USDT';
            returnObject["RdisplayName"] = 'Tether';
            returnObject["R24hrChange"] = 0;
            returnObject["Rprice"] = 1;
        }
      });
      const SORTAR = VALS[1][key];
      SORTAR.sort(function compareNumbers(a, b) {
        return a[2] - b[2];
      });
      returnObject["Low"] = SORTAR[0];
      returnObject["High"] = SORTAR[SORTAR.length - 1]; 
      RETURN.push(returnObject);
    }
    redis.set('master', JSON.stringify(RETURN));
})();