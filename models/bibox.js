const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const biboxSchema = new Schema({
  coin: String,
  currency: String,
  value: Number,
  usdval: { type: Number, default: 0 },
  date: { type: Date, default: Date.now }
});


const Bibox = mongoose.model('Bibox', biboxSchema );
module.exports = Bibox;