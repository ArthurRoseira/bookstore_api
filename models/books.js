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
module.exports.getBooks = function (callback, limit) {
 books.find(callback).limit(limit);
}