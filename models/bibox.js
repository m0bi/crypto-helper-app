const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const biboxSchema = new Schema({
  coin: String,
  currency: String,
  value: Number,
  date: { type: Date, default: Date.now }
});


const Bibox = mongoose.model('Bibox', biboxSchema );
module.exports = Bibox;