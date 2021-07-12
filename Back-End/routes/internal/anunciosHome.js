const router = require('express').Router()

const db = require('../../db')

router.post('/', (req, res) => {
  const {search} = req.body
  
    db.query(`SELECT an.id, an.titulo, an.descricao, an.recompensa, an.data, an.tipo_id, tipo.descricao AS tipo FROM anuncio AS an INNER JOIN tipo ON (an.tipo_id = tipo.id) ${search ?  " WHERE titulo LIKE '%" + search + "%'" : "" } `, (error, results) => {
      if (error) {
        throw error
      }
  
      res.send(results)
    })
  })

  module.exports = router