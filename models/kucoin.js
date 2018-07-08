const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const kucoinSchema = new Schema({
  coin: String,
  currency: String,
  value: Number,
  date: { type: Date, default: Date.now }
});


const Kucoin = mongoose.model('Kucoin', kucoinSchema );
module.exports = Kucoin;