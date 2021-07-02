const router = require('express').Router()
const { validate } = require('indicative/validator')

const db = require('../../db')

router.get('/', (req, res) => {
  const { limit, page } = req.query

  const _limit = +limit || 20
  const _page = +page || 1

  db.query('SELECT COUNT(id) FROM anuncio', (error, countResults, _) => {
    if (error) {
      throw error
    }

    const offset = (_page - 1) * _limit
    const total = countResults[0]['COUNT(id)']
    const pageCount = Math.ceil(total / _limit)

    db.query('SELECT * FROM anuncio LIMIT ?, ?', [offset, _limit], (error, results, _) => {
      if (error) {
        throw error
      }

      res.send({
        code: 200,
        meta: {
          pagination: {
            total: total,
            pages: pageCount,
            page: _page,
            limit: _limit
          }
        },
        data: results
      })
    })
  })
})

router.get('/:id', (req, res) => {
  const { id } = req.params

  db.query(`SELECT * FROM anuncio WHERE id = ${id}`, (error, results) => {
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

router.post('/', (req, res) => {
  const anuncio = req.body

  validate(anuncio, {
    descricao: 'required',
    telefone:'required|integer',
    data:'required|date',
    localizacao_id:'required|integer',
    categoria_id: 'required|integer',
    status_id: 'required|integer',
    tipo_id:'required|integer',
    user_id: 'required|integer',
    
  }).then((value) => {
    db.query('INSERT INTO anuncio SET ?', [value], (error, results, _) => {
      if (error) {
        throw error
      }

      const { insertId } = results

      db.query('SELECT * FROM anuncio WHERE id = ? LIMIT 1', [insertId], (error, results, _) => {
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


router.delete('/:id', (req, res) => {
  const { id } = req.params

  db.query('SELECT * FROM anuncio WHERE id = ?', [id], (error, results, _) => {
    if (error) {
      throw error
    }

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
})

module.exports = router
