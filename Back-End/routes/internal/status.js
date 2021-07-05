const router = require('express').Router()
const db = require('../../db')

router.get('/', (req, res) => {
  
    db.query(`SELECT * FROM status`, (error, results) => {
      if (error) {
        throw error
      }
  
      res.send(results)
    })
  })
  module.exports = router