

const usersRouter = require('./internal/users')
const anunciosRouter = require('./internal/anuncio')

const tipoRouter = require('./internal/tipo')
const categoriaRouter = require('./internal/categoria')

const statusRouter = require('./internal/status')
const localizacaoRouter = require('./internal/localizacao')

const login = require('./public/login')

module.exports = {
  register(app) {
    app.use('/users', usersRouter)
    app.use('/anuncio', anunciosRouter)

    app.use('/tipo', tipoRouter)
    app.use('/status', statusRouter)
    
    app.use('/categoria', categoriaRouter)
    app.use('/localizacao', localizacaoRouter)
    
    app.post('/login', login)
  }
}
