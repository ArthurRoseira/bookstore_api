const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
 Title: {
  type: String,
  required: true
 },
 Autor: {
  type: String,
  required: true
 },
 Cover: {
  type: String,
  required: true
 },
 Genres: {
  type: String,
  required: true
 },
 ISBN: {
  type: String,
  required: true
 }
})

bookSchema.index({ Title: "text", Autor: "text" })

const books = module.exports = mongoose.model('books', bookSchema)

//Get Books
module.exports.getBooks = async function (callback, limit) {
 await books.find(callback).limit(limit);
}
//Get Book By id
module.exports.getBookById = async function (id, callback) {
 await books.findById(id, callback);
}
//Add Book
module.exports.addBook = async function (book, callback) {
 await books.create(book, callback);
}

//Update Autor
module.exports.updateBook = async function (id, _book, options, callback) {
 var query = { _id: id };
 await books.findOneAndUpdate(query, { $set: _book }, { upsert: true }, callback)
}

//Delete Book
module.exports.removeBook = async function (id, callback) {
 var query = { _id: id };
 await books.remove(query, callback);
}