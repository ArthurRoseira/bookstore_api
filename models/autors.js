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
module.exports.getAutors = async function (callback, limit) {
 await autors.find(callback).limit(limit);
}
//Get Autor by ID
module.exports.getAutorById = async function (id, callback) {
 await autors.findById(id, callback);
}
//Add Autor
module.exports.addAutor = async function (autor, callback) {
 await autor.create(autor, callback);
}
//Update Autor
module.exports.updateAutor = async function (id, _autor, options, callback) {
 var query = { _id: id };
 await autor.findOneAndUpdate(query, { $set: _autor }, { upsert: true }, callback)
}

//remove Autor
module.exports.removeAutor = async function (id, callback) {
 var query = { _id: id };
 await autor.remove(query, callback);
}