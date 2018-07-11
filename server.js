const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
var resolve = require("./logic.js");
var { Combo, Exchange, News, Usd, Bibox, Binance, Cryptopia, Kucoin } = require('./models');
//const keys = require("./keys");
var VerifyToken = require('./auth/VerifyToken.js');
global.__root = __dirname + '/';

const mongoose = require('mongoose');
var database = 'shortcoindb';
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/" + database);

let promiseNews = resolve.news();
let promiseUsd = resolve.usd();
let promiseBibox = resolve.bibox();
let promiseKucoin = resolve.kucoin();
let promiseBinance = resolve.binance();
let promiseCryptopia = resolve.cryptopia();
let promiseToken = resolve.tokenspread();

promiseToken.then((data)=>console.log("Data: " + data));


// promiseToken.then((response)=>{
//   response.data.pipe(fs.createWriteStream('ada_lovelace.json'));
//   }); //this is the nonworking stuff
recall();
interval();
function interval() {
  setInterval(() => drop(), 600000);
  setInterval(() => recall(), 600500);
}
async function drop() {
  await mongoose.connection.collections['biboxes'].drop(function (err) {
    console.log('collection dropped');
  }).catch(()=> console.log(err));
  await mongoose.connection.collections['binances'].drop(function (err) {
    console.log('collection dropped');
  }).catch(()=> console.log(err));
  await mongoose.connection.collections['cryptopias'].drop(function (err) {
    console.log('collection dropped');
  }).catch(()=> console.log(err));
  await mongoose.connection.collections['kucoins'].drop(function (err) {
    console.log('collection dropped');
  }).catch(()=> console.log(err));
  await mongoose.connection.collections['news'].drop(function (err) {
    console.log('collection dropped');
  }).catch(()=> console.log(err));
  await mongoose.connection.collections['usds'].drop(function (err) {
    console.log('collection dropped');
  }).catch(()=> console.log(err));
}

function recall() {
  Promise.all([promiseNews, promiseUsd, promiseBibox, promiseKucoin, promiseBinance, promiseCryptopia]).then(([newsData, usdData, biboxData, kucoinData, binanceData, cryptopiaData]) => {

    for (var i = 0; i < newsData.length; i++) {
      News.create(newsData[i]).then((dbNews) => { }).catch((err) => console.log(err));
    }
    for (var i = 0; i < usdData.length; i++) {
      Usd.create(usdData[i]).then((dbUsd) => { }).catch((err) => console.log(err));
    }
    for (var i = 0; i < biboxData.length; i++) {
      Bibox.create(biboxData[i]).then((dbBibox) => { }).catch((err) => console.log(err));
    }
    for (var i = 0; i < kucoinData.length; i++) {
      Kucoin.create(kucoinData[i]).then((dbKucoin) => { }).catch((err) => console.log(err));
    }
    var binanceValue;
    for (var i = 0; i < binanceData.length; i++) {
      let val1;
      let val2;
      val1 = binanceData[i].symbol;
      val2 = binanceData[i].symbol;
      val1 = val1.slice(0, 3);
      val2 = val2.slice(-3);
      binanceValue = { "coin": val1, "currency": val2, "value": binanceData[i].price };
      Binance.create(binanceValue).then((dbBinance) => { }).catch((err) => console.log(err));
    }
    var cryptopiaValue = {};
    for (var i = 0; i < cryptopiaData.length; i++) {
      let val1;
      let val2;
      val1 = cryptopiaData[i].label;
      val2 = cryptopiaData[i].label;
      val1 = val1.slice(0, 3);
      val2 = val2.slice(-3);
      cryptopiaValue = { "coin": val1, "currency": val2, "value": cryptopiaData[i].last };
      Cryptopia.create(cryptopiaValue).then((dbCryptopia) => { }).catch((err) => console.log(err));
    }




    //console.log(lastData);
    //console.log(newsData);
    //console.log(newsData);
    // for (var i = 0; i < lastData.length; i++) {
    //   Exchange.create(lastData[i]).then((dbLast) => { }).catch((err) => console.log(err));
    // }
    // console.log(News);
    // var usdArray = [];

    // usdData.forEach((value) => {
    //   usdArray.push({
    //     coin: Object.values(value)[0],
    //     value: Object.values(value)[1]
    //   });
    // });
    // for (var i = 0; i < usdArray.length; i++) {
    //   Usd.create(usdArray[i]).then((dbUsd) => { }).catch((err) => console.log(err));
    // }

    // var comboObj = {
    //   lexchange: "",
    //   rexchange: "",
    //   coincurrency: "",
    //   lhs: "",
    //   rhs: "",
    //   diff: "",
    //   usddiff: 0,
    //   usdlhs: 0,
    //   usdrhs: 0
    // }
    // var comboArray = [];

    // // console.log(lastData);
    // lastData.forEach((value) => {
    //   let objVals = Object.values(value.input);
    //   let comboObj = {};
    //   comboObj.coincurrency = objVals[0];
    //   comboObj.lhs = objVals[1];
    //   comboObj.rhs = objVals[2];
    //   comboObj.diff = value.output;
    //   comboObj.lexchange = objVals[3]
    //   comboObj.rexchange = objVals[4]
    //   //console.log(comboObj);
    //   comboArray.push(comboObj);
    // });

    // //console.log(comboArray);

    // comboArray.forEach((val, i, container) => {
    //   var currency = val.coincurrency.match(/_.*/g);
    //   //console.log(currency);
    //   var currency2 = currency[0];
    //   var currency2 = currency2.slice(1);


    //   Usd.findOne({ coin: currency2.toUpperCase() }).sort({ date: 1 }).then((resolve) => {
    //     var usddiff = +(+val.diff * resolve.value).toFixed(2);
    //     var usdlhs = +(+val.lhs * resolve.value).toFixed(2);
    //     var usdrhs = +(+val.rhs * resolve.value).toFixed(2);
    //     //console.log(comboArray);
    //     container[i].usddiff = usddiff;
    //     container[i].usdlhs = usdlhs;
    //     container[i].usdrhs = usdrhs;
    //     //console.log(usdiff);

    //     if (i === container.length - 1) {
    //       //console.log(container);
    //       for (let j = 0; j < container.length; j++) {
    //         Combo.create(container[j]).then((dbCombo) => {  }).catch((err) => console.log(err));
    //       }
    //     }
    //   }).catch((err) => console.log(err));
    // });

  });


}




// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// } else {
//   app.use(express.static("client/public"));
// }
app.get('/', function (req, res) {
  res.status(200).send('This is an API.');
});


app.get('/api', function (req, res) {
  res.status(200).send('./c/:id ./news ./usd ./usd/:id ./bibox ./bibox/:id ./bibox/c/:id ./binance ./binance/:id ./binance/c/:id ./cryptopia ./cryptopia/:id ./cryptopia/c/:id ./kucoin ./kucoin/:id ./kucoin/c/:id');
});

var UserController = require(__root + 'user/UserController');
app.use('/api/users', UserController);

var AuthController = require(__root + 'auth/AuthController');
app.use('/api/auth', AuthController);

app.get("/api/news", (req, res) => {
  News.find({}).sort({ date: 1 }).limit(20).then((data) => {
    //console.log(data);
    res.json(data);
  });
});
app.get("/api/usd/", (req, res) => {
  async function usd() {
    let test;
    await Usd.find({}).sort({ date: 1 }).then(data1 => {
      test = data1;
    }).catch(()=> console.log(err));
    res.json(test);
  }
  usd();
});

app.get("/api/usd/:id", (req, res) => {
  const id = req.params.id
  Usd.find({ "coin": id }).sort({ date: 1 }).then(data1 => {
    res.json(data1);
  });
});


app.get("/api/bibox/", (req, res) => {
  async function derive1() {
    let data;
    await Bibox.find({}).sort({ date: 1 }).then((data1) => {
      data = data1;
    }).catch(()=> console.log(err));
    res.json(data);
  }
  derive1();
});

//not working - full set
// app.get("/api/bibox/c/:id", (req, res) => {
//   const id = req.params.id
//   async function loop() {
//     let data;
//     let usData;
//     await Bibox.find({ "currency": id }).sort({ date: 1 }).then((data1) => {
//       data = data1;
//     }).catch(()=> console.log(err));
//     await Usd.find({ "coin": id }).sort({ date: 1 }).limit(1).then(data1 => {
//       usData = data1;
//     }).catch(()=> console.log(err));
//   }
//   async function derive2() {
//     loop();
//     await Bibox.find({ "currency": id }).sort({ date: 1 }).then((data1) => {
//       res.json(data1);
//     }).catch(()=> console.log(err));


//   }
//   derive2();
// });

//working
app.get("/api/bibox/c/", (req, res) => {
  Bibox.find({}).sort({ currency: 1, date: 1 }).then(data1 => { res.json(data1); });
});

app.get("/api/bibox/:id", (req, res) => {
  const id = req.params.id
  async function derive3() {
    let data;
    let usData;
    await Bibox.find({ "coin": id }).sort({ date: 1 }).then((data1) => {
      data = data1;
    }).catch(()=> console.log(err));
    await Usd.find({ "coin": id }).sort({ date: 1 }).limit(1).then(data1 => {
      usData = data1;
    }).catch(()=> console.log(err));
    usData.push(data);
    res.json(usData);
  }
  derive3();
});

app.get("/api/binance/", (req, res) => {
  Binance.find({}).sort({ date: 1 }).then((data1) => {
    res.json(data1);
  })
});

app.get("/api/binance/:id", (req, res) => {
  const id = req.params.id;
  async function derive4() {
    let data;
    let usData;
    await Binance.find({ "coin": id }).sort({ date: 1 }).then((data1) => {
      data = data1;
    }).catch(()=> console.log(err));
    await Usd.find({ "coin": id }).sort({ date: 1 }).limit(1).then(data1 => {
      usData = data1;
    }).catch(()=> console.log(err));
    usData.push(data);
    res.json(usData);
  }
  derive4();
});

app.get("/api/binance/c/:id", (req, res) => {
  const id = req.params.id;
  async function derive5() {
    let data;
    let usData;
    await Binance.find({ "currency": id }).sort({ date: 1 }).then((data1) => {
      data = data1;
    }).catch(()=> console.log(err));
    await Usd.find({ "coin": id }).sort({ date: 1 }).limit(1).then(data1 => {
      usData = data1;
    }).catch(()=> console.log(err));
    usData.push(data);
    res.json(usData);
  }
  derive5();
});

//not working
app.get("/api/binance/c/", (req, res) => {
  Binance.find({}).sort({ currency: 1, date: 1 }).then(data1 => { res.json(data1); });
});

app.get("/api/cryptopia/", (req, res) => {
  async function derive6() {
    await Cryptopia.find({}).sort({ date: 1 }).then((data1) => {
      res.json(data1);
    }).catch(()=> console.log(err));
  }
  derive6();
});

app.get("/api/cryptopia/:id", (req, res) => {
  const id = req.params.id;
  async function derive7() {
    let data;
    let usData;
    await Cryptopia.find({ "coin": id }).sort({ date: 1 }).then((data1) => {
      data = data1;
    }).catch(()=> console.log(err));
    await Usd.find({ "coin": id }).sort({ date: 1 }).limit(1).then(data1 => {
      usData = data1;
    }).catch(()=> console.log(err));
    usData.push(data);
    res.json(usData);
  }
  derive7();
});

app.get("/api/cryptopia/c/:id", (req, res) => {
  const id = req.params.id;
  async function derive8() {
    let data;
    let usData;
    await Cryptopia.find({ "currency": id }).sort({ date: 1 }).then((data1) => {
      data = data1;
    }).catch(()=> console.log(err));
    await Usd.find({ "coin": id }).sort({ date: 1 }).limit(1).then(data1 => {
      usData = data1;
    }).catch(()=> console.log(err));
    usData.push(data);
    res.json(usData);
  }
  derive8();
});

app.get("/api/cryptopia/c/", (req, res) => {
  Cryptopia.find({}).sort({ currency: 1, date: 1 }).then(data1 => { res.json(data1); });
});

app.get("/api/kucoin/", (req, res) => {
  const id = req.params.id;
  Kucoin.find({}).sort({ date: 1 }).then((data1) => {
    res.json(data1);
  })
});

app.get("/api/kucoin/:id", (req, res) => {
  const id = req.params.id;
  async function derive9() {
    let data;
    let usData;
    await Kucoin.find({ "coin": id }).sort({ date: 1 }).then((data1) => {
      data = data1;
    }).catch(()=> console.log(err));
    await Usd.find({ "coin": id }).sort({ date: 1 }).limit(1).then(data1 => {
      usData = data1;
    }).catch(()=> console.log(err));
    usData.push(data);
    res.json(usData);
  }
  derive9();
});

app.get("/api/kucoin/c/:id", (req, res) => {
  const id = req.params.id;
  async function derive10() {
    let data;
    let usData;
    await Kucoin.find({ "currency": id }).sort({ date: 1 }).then((data1) => {
      data = data1;
    }).catch(()=> console.log(err));
    await Usd.find({ "coin": id }).sort({ date: 1 }).limit(1).then(data1 => {
      usData = data1;
    }).catch(()=> console.log(err));
    usData.push(data);
    res.json(usData);
  }
  derive10();
});

app.get("/api/kucoin/c/", (req, res) => {
    Kucoin.find({}).sort({ currency: 1, date: 1 }).then(data1 => { res.json(data1); });
});

app.get("/api/:id", (req, res) => {
  const id = req.params.id
  async function derive11() {
    const XTC = [];
    await Usd.find({ "coin": id }).sort({ date: 1 }).limit(1).then(data1 => {
      XTC.push(data1);
    }).catch(()=> console.log(err));
    await Bibox.find({ "coin": id }).sort({ date: 1 }).then((data1) => {
      XTC.push(data1);
    }).catch(()=> console.log(err));
    await Binance.find({ "coin": id }).sort({ date: 1 }).then((data1) => {
      XTC.push(data1);
    }).catch(()=> console.log(err));
    await Cryptopia.find({ "coin": id }).sort({ date: 1 }).then((data1) => {
      XTC.push(data1);
    }).catch(()=> console.log(err));
    await Kucoin.find({ "coin": id }).sort({ date: 1 }).then((data1) => {
      XTC.push(data1);
    }).catch(()=> console.log(err));
    res.json(XTC);
    XTC = [];
  }
  derive11();
});

app.get("/api/c/:id", (req, res) => {
  async function derive12() {
    const XTC = [];
    const id = req.params.id
    await Usd.find({ "coin": id }).sort({ date: 1 }).limit(1).then(data1 => {
      XTC.push(data1);
    }).catch(()=> console.log(err));
    await Bibox.find({ "currency": id }).sort({ data: 1 }).then((data1) => {
      XTC.push(data1);
    }).catch(()=> console.log(err));
    await Binance.find({ "currency": id }).sort({ data: 1 }).then((data1) => {
      XTC.push(data1);
    }).catch(()=> console.log(err));
    await Cryptopia.find({ "currency": id }).sort({ data: 1 }).then((data1) => {
      XTC.push(data1);
    }).catch(()=> console.log(err));
    await Kucoin.find({ "currency": id }).sort({ data: 1 }).then((data1) => {
      XTC.push(data1);
    }).catch(()=> console.log(err));
    var usd;
    console.log(XTC[0][0].value);
    for (let i = 1; i < XTC.length; i++) {
      XTC[i].map((a, j) => {
        usd = XTC[i][j].value * XTC[0][0].value;
        XTC[i][j].usdval = usd;
      });
    }
    res.json(XTC);
  }
  derive12();
  XTC=[];
});
// app.get("*", function (req, res) {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });



app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
