const express = require('express')
const router = express.Router()
const books = require('../models/books')

router.get('/', (req, res) => {
 books.getBooks((err, books) => {
  if (err) {
   throw err;
  } else {
   res.json(books)
  }
 })
})

module.exports = router
