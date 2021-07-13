const router = require('express').Router()

const db = require('../../db')

router.get('/', (req, res) => {
    
    db.query(`SELECT an.id, an.titulo, an.descricao, an.recompensa, an.data, an.status_id, status.descricao AS status FROM anuncio AS an INNER JOIN status ON (an.status_id = status.id) `, (error, results) => {
      if (error) {
        throw error
      }
  
      res.send(results)
    })
  })

  module.exports = router