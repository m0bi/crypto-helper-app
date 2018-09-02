var Redis = require('ioredis');
var redis = new Redis(process.env.REDIS_URL);

(async function red() {
    let rootObj = {};
    await redis.get('anxpro').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('anybits').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('binance').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('bitbay').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('bitfinex2').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('bitflyer').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('bitlish').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('bitstamp').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('btcmarkets').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('btctradeim').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('cex').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('coinex').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('coinexchange').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('coinfalcon').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('coinmate').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('exmo').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('gatecoin').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('gemini').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('hitbtc2').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('ice3x').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('kraken').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('kucoin').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('lakebtc').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('lbank').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('livecoin').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('liqui').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('lykke').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    // await redis.get('theocean').then(function (result) {
    //   let resultArr = JSON.parse(result);
    //   resultArr.map((val) => {
    //     rootObj[val[1]] = rootObje[val[1]] || [];
    //     rootObj[val[1]].push(val);
    //   });
    // });
    await redis.get('qryptos').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('quadrigacx').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('therock').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('tidex').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('wex').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('yobit').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));
    await redis.get('zaif').then(function (result) {
        let resultArr = JSON.parse(result);
        resultArr.map((val) => {
            rootObj[val[1]] = rootObj[val[1]] || [];
            rootObj[val[1]].push(val);
        });
    }).catch(err => console.log(err));

    //do some object reduction to rootObj here before displaying it.
    redis.set('live', JSON.stringify(rootObj));
})();

(async function book() {
    var pairObj = [];
    await redis.get('anxprobook').then(function (result) {
        let resultArr = JSON.parse(result);
        pairObj.push(resultArr);
    }).catch(err => console.log(err));
    await redis.get('anybitsbook').then(function (result) {
        let resultArr = JSON.parse(result);
        pairObj.push(resultArr);
    }).catch(err => console.log(err));
    await redis.get('binancebook').then(function (result) {
        let resultArr = JSON.parse(result);
        pairObj.push(resultArr);
    }).catch(err => console.log(err));
    await redis.get('bitbaybook').then(function (result) {
        let resultArr = JSON.parse(result);
        pairObj.push(resultArr);
    }).catch(err => console.log(err));
    await redis.get('bitfinex2book').then(function (result) {
        let resultArr = JSON.parse(result);
        pairObj.push(resultArr);
    }).catch(err => console.log(err));
    await redis.get('bitflyerbook').then(function (result) {
        let resultArr = JSON.parse(result);
        pairObj.push(resultArr);
    }).catch(err => console.log(err));
    await redis.get('bitlishbook').then(function (result) {
        let resultArr = JSON.parse(result);
        pairObj.push(resultArr);
    }).catch(err => console.log(err));
    await redis.get('bitstampbook').then(function (result) {
        let resultArr = JSON.parse(result);
        pairObj.push(resultArr);
    }).catch(err => console.log(err));
    await redis.get('btcmarketsbook').then(function (result) {
        let resultArr = JSON.parse(result);
        pairObj.push(resultArr);
    }).catch(err => console.log(err));
    await redis.get('btctradeimbook').then(function (result) {
        let resultArr = JSON.parse(result);
        pairObj.push(resultArr);
    }).catch(err => console.log(err));
    await redis.get('cexbook').then(function (result) {
        let resultArr = JSON.parse(result);
        pairObj.push(resultArr);
    }).catch(err => console.log(err));
    await redis.get('coinexbook').then(function (result) {
        let resultArr = JSON.parse(result);
        pairObj.push(resultArr);
    }).catch(err => console.log(err));
    await redis.get('coinexchangebook').then(function (result) {
        let resultArr = JSON.parse(result);
        pairObj.push(resultArr);
    }).catch(err => console.log(err));
    await redis.get('coinfalconbook').then(function (result) {
        let resultArr = JSON.parse(result);
        pairObj.push(resultArr);
    }).catch(err => console.log(err));
    await redis.get('coinmatebook').then(function (result) {
        let resultArr = JSON.parse(result);
        pairObj.push(resultArr);
    }).catch(err => console.log(err));
    await redis.get('exmobook').then(function (result) {
        let resultArr = JSON.parse(result);
        pairObj.push(resultArr);
    }).catch(err => console.log(err));
    await redis.get('gatecoinbook').then(function (result) {
        let resultArr = JSON.parse(result);
        pairObj.push(resultArr);
    }).catch(err => console.log(err));
    await redis.get('geminibook').then(function (result) {
        let resultArr = JSON.parse(result);
        pairObj.push(resultArr);
    }).catch(err => console.log(err));
    await redis.get('hitbtc2book').then(function (result) {
        let resultArr = JSON.parse(result);
        pairObj.push(resultArr);
    }).catch(err => console.log(err));
    await redis.get('ice3xbook').then(function (result) {
        let resultArr = JSON.parse(result);
        pairObj.push(resultArr);
    }).catch(err => console.log(err));
    await redis.get('krakenbook').then(function (result) {
        let resultArr = JSON.parse(result);
        pairObj.push(resultArr);
    }).catch(err => console.log(err));
    await redis.get('kucoinbook').then(function (result) {
        let resultArr = JSON.parse(result);
        pairObj.push(resultArr);
    }).catch(err => console.log(err));
    await redis.get('lakebtcbook').then(function (result) {
        let resultArr = JSON.parse(result);
        pairObj.push(resultArr);
    }).catch(err => console.log(err));
    await redis.get('lbankbook').then(function (result) {
        let resultArr = JSON.parse(result);
        pairObj.push(resultArr);
    }).catch(err => console.log(err));
    await redis.get('livecoinbook').then(function (result) {
        let resultArr = JSON.parse(result);
        pairObj.push(resultArr);
    }).catch(err => console.log(err));
    await redis.get('liquibook').then(function (result) {
        let resultArr = JSON.parse(result);
        pairObj.push(resultArr);
    }).catch(err => console.log(err));
    await redis.get('lykkebook').then(function (result) {
        let resultArr = JSON.parse(result);
        pairObj.push(resultArr);
    }).catch(err => console.log(err));
    await redis.get('qryptosbook').then(function (result) {
        let resultArr = JSON.parse(result);
        pairObj.push(resultArr);
    }).catch(err => console.log(err));
    await redis.get('quadrigacxbook').then(function (result) {
        let resultArr = JSON.parse(result);
        pairObj.push(resultArr);
    }).catch(err => console.log(err));
    await redis.get('therockbook').then(function (result) {
        let resultArr = JSON.parse(result);
        pairObj.push(resultArr);
    }).catch(err => console.log(err));
    await redis.get('tidexbook').then(function (result) {
        let resultArr = JSON.parse(result);
        pairObj.push(resultArr);
    }).catch(err => console.log(err));
    await redis.get('wexbook').then(function (result) {
        let resultArr = JSON.parse(result);
        pairObj.push(resultArr);
    }).catch(err => console.log(err));
    await redis.get('yobitbook').then(function (result) {
        let resultArr = JSON.parse(result);
        pairObj.push(resultArr);
    }).catch(err => console.log(err));
    await redis.get('zaifbook').then(function (result) {
        let resultArr = JSON.parse(result);
        pairObj.push(resultArr);
    }).catch(err => console.log(err));

    //do some object reduction to rootObj here before displaying it.
    redis.set('books', JSON.stringify(pairObj));
})();

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
      returnObject["values"] = VALS[1][key];
      RETURN.push(returnObject);
    }
    redis.set('master', JSON.stringify(RETURN));
})();