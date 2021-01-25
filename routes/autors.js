const express = require('express')
const router = express.Router()
const autors = require('../models/autors')

router.get('/', (req, res) => {
 autors.getAutors((err, autors) => {
  if (err) {
   throw err;
  } else {
   res.json(autors)
  }
 })
})

module.exports = router