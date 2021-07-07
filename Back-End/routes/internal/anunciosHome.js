const router = require('express').Router()

const db = require('../../db')

router.get('/', (req, res) => {
  
    db.query(`SELECT an.id, an.titulo, an.descricao, an.recompensa, an.data, an.tipo_id, users.nome AS nome, users.telefone AS telefone, tipo.descricao AS tipo FROM anuncio AS an INNER JOIN tipo ON (an.tipo_id = tipo.id) INNER JOIN users`, (error, results) => {
      if (error) {
        throw error
      }
  
      res.send(results)
    })
  })
  module.exports = router