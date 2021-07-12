const router = require('express').Router()

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
  
      const [anuncio] = results
  
      db.query('DELETE FROM anuncio WHERE id = ?', [id], (error, _, __) => {
        if (error) {
          throw error
        }
  
        res.send({
          code: 200,
          meta: null,
          data: anuncio
        })
      })
    })
  router.put('/:id', (req, res) => {
    const { id } = req.params
  
    const anuncio = req.body
  
    validate(anuncio, {
      status: 'required',
      titulo: 'required',
    }).then(async (value) => {
      sanitize(value, {
        status: 'integer',
        titulo: ''
      })
  
      db.query('UPDATE anuncio SET ? WHERE id = ?', [value, id], (error, results, _) => {
        if (error) {
          throw error
        }
  
        db.query('SELECT * FROM anuncio WHERE id = ? LIMIT 1', [id], (error, results, _) => {
          if (error) {
            throw error
          }
 
          res.send({
            code: 200,
            meta: null,
            data: results[0]
          })
        })
      })
    }).catch((error) => {
      res.status(400).send(error)
    })
  })
  module.exports = router