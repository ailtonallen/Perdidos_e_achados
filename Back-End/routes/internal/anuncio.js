const router = require('express').Router()
const { validate } = require('indicative/validator')

const db = require('../../db')

router.get('/', (req, res) => {
  const { page, limit } = req.query

  db.query('SELECT COUNT(*) FROM anuncio', (error, results) => {
    if (error) {
      throw error
    }

    const count = results[0]['COUNT(*)']

    const _limit = Number(limit) || 10
    const _page = Number(page) || 1

    const offset = (_page - 1) * _limit

    db.query('SELECT an.id, an.titulo, an.descricao, an.recompensa, an.data, an.tipo_id, users.nome AS nome, users.telefone AS telefone, tipo.descricao AS tipo FROM anuncio AS an INNER JOIN tipo ON (an.tipo_id = tipo.id) INNER JOIN users LIMIT ?, ?', [offset, _limit], (error, results, _) => {
      if (error) {
        throw error
      }

      const pages = Math.ceil(count / _limit)

      res.send({
        code: 200,
        meta: {
          pagination: {
            total: count,
            pages: pages,
            page: _page,
          }
        },
        data: results,
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

router.get('/:id', (req, res) => {
  const { id } = req.params
  db.query(`SELECT * FROM anuncio WHERE id = ${id}`, (error, results) => {
    if (error) {
      throw error
    }

    res.send(results)
})
})

router.post('/', (req, res) => {
  const anuncio = req.body

  validate(anuncio, {
    titulo: 'required',
    descricao: 'required',
    data:'required|date',
    localizacao_id:'required|integer',
    categoria_id: 'required|integer',
    status_id: 'required|integer',
    tipo_id:'required|integer',
    
    
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
