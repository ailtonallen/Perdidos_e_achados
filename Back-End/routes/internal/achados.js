const router = require('express').Router()
const { validate } = require('indicative/validator')
const db = require('../../db')

router.get('/', (req, res) => {
  
    db.query(`SELECT
    *
 FROM
    anuncio
 WHERE
    tipo_id=1`, (error, results) => {
      if (error) {
        throw error
      }
  
      res.send(results)
    })
  })
  router.delete('/:id', (req, res) => {
    const { id } = req.params
  
    db.query('DELETE FROM anuncio WHERE id = ?', [id], (error, results) => {
      if (error) {
        throw error
      }
      res.send(results)
    })
  })
  
  router.put('/:id', (req, res) => {
    const { id } = req.params
  
    const { titulo } = req.body
  
    validate(id, {
      titulo: 'required',
      status: 'integer'
    }).then((value) => {
      db.query(`UPDATE anuncio SET titulo = '${titulo}' WHERE id = ${id}`, (error, results, _) => {
        if (error) {
          throw error
        }
  
        res.send(titulo)
      })
    }).catch((error) => {
      res.status(400).send(error)
    })
  })
  module.exports = router