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
    const anuncio =  {
      titulo: req.body.titulo
    }
    console.log(id);
    console.log(anunc);
    // let updateIdanuncio = id.
    db.query('UPDATE anuncio set titulo =?, WHERE id = ?', [anuncio.titulo, id] ,(error, results) => {
  
      // if (error) {
      //   throw error
      //  }
      //  const myStatus =  {
      //   status: results.insertId
      // }
      //  db.query('UPDATE anuncio set status_id = ?, WHERE id = ?', [myStatus, id] ,(error, results) => { 
      // if (error) {
      //   throw error
      //  }
      //  });
      res.send(results)
    })
  })
  module.exports = router