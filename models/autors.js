const mongoose = require('mongoose');

const autorSchema = new mongoose.Schema({
 name: {
  type: String,
  required: true
 },
 born_year: {
  type: Date,
  required: true
 },
 country: {
  type: String,
  required: true
 },
 image: {
  type: String,
  required: true
 }
})

autorSchema.index({ name: "text", country: "text" })

const autors = module.exports = mongoose.model('autors', autorSchema)

//Get Autors
module.exports.getAutors = function (callback, limit) {
 autors.find(callback).limit(limit);
}