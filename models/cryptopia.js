const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cryptopiaSchema = new Schema({
  coin: String,
  currency: String,
  value: Number,
  date: { type: Date, default: Date.now }
});


const Cryptopia = mongoose.model('Cryptopia', cryptopiaSchema );
module.exports = Cryptopia;