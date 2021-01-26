const express = require('express')
const router = express.Router()
const autors = require('../models/autors')

router.get('/', async (req, res) => {
 await autors.getAutors((err, autors) => {
  if (err) {
   throw err;
  } else {
   res.json(autors)
  }
 })
})



router.get('/:_id', async (req, res) => {
 await autors.getAutorById(req.params._id, (err, autor) => {
  if (err) {
   throw err;
  } else {
   res.json(autor)
  }
 })
})


router.post('/', async (req, res) => {
 let autor = req.body;

 await books.addBook(autor, (err, autor) => {
  if (err) {
   throw err;
  } else {
   res.json(autor)
  }
 })
})


router.put('/:_id', async (req, res) => {
 let id = req.params._id;
 let autor = req.body
 await autors.updateAutor(id, autor, {}, (err, autor) => {
  if (err) {
   throw err;
  } else {
   res.json(autor)
  }
 })
})


router.delete('/:_id', async (req, res) => {
 await autor.removeAutor(req.params._id, (err, autor) => {
  if (err) {
   throw err;
  } else {
   res.json(autor)
  }
 })
})

module.exports = router