

const usersRouter = require('./internal/users')
const anunciosRouter = require('./internal/anuncio')

const login = require('./public/login')

module.exports = {
  register(app) {
    app.use('/users', usersRouter)
    app.use('/anuncio', anunciosRouter)
    
    app.post('/login', login)
  }
}
