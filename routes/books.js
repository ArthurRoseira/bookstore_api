const express = require('express')
const router = express.Router()
const books = require('../models/books')

router.get('/', async (req, res) => {
 await books.getBooks((err, books) => {
  if (err) {
   throw err;
  } else {
   res.json(books)
  }
 })
})


router.get('/:_id', async (req, res) => {
 await books.getBookById(req.params._id, (err, book) => {
  if (err) {
   throw err;
  } else {
   res.json(book)
  }
 })
})



router.post('/', async (req, res) => {
 let book = req.body;

 await books.addBook(book, (err, book) => {
  if (err) {
   throw err;
  } else {
   res.json(book)
  }
 })
})

router.put('/:_id', async (req, res) => {
 let id = req.params._id;
 let book = req.body
 await books.updateBook(id, book, {}, (err, book) => {
  if (err) {
   throw err;
  } else {
   res.json(book)
  }
 })
})

router.delete('/:_id', async (req, res) => {
 await books.removeBook(req.params._id, (err, book) => {
  if (err) {
   throw err;
  } else {
   res.json(book)
  }
 })
})


module.exports = router
