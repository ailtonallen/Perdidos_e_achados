const router = require('express').Router()
const { validate } = require('indicative/validator')
var multer  = require('multer')
var fs  = require('fs')
var path  = require('path')
var upload = multer({ dest: 'uploads/' })

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

router.post('/', upload.single("foto"), (req, res) => {
  const anuncio = req.body
  const { filename, destination, originalname } =  req.file

  const ext = path.extname(originalname);
  const source_file =  `${destination}/${filename}`;
  const target_file =  `${destination}${filename}${ext}`;

fs.renameSync(source_file, target_file);

console.log(ext);
console.log(req.file);

validate(anuncio, {
    titulo: 'required',
    descricao: 'required',
    data:'required|date',
    localizacao_id:'required|integer',
    categoria_id: 'required|integer',
    status_id: 'required|integer',
    tipo_id:'required|integer'
  }).then((value) => {
    const MIME_TYPE_MAP = {
      'image/png': 'png',
      'image/jpeg': 'jpeg',
      'image/jpg': 'jpg'
    };
    
    value.filename = target_file;   

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
