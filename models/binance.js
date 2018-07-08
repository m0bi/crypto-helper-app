const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const binanceSchema = new Schema({
  coin: String,
  currency: String,
  value: Number,
  date: { type: Date, default: Date.now }
});


const Binance = mongoose.model('Binance', binanceSchema );
module.exports = Binance;