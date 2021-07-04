const auth = require('../middlewares/auth')

const usersRouter = require('./internal/users')
const anunciosRouter = require('./internal/anuncio')

const login = require('./public/login')

module.exports = {
  register(app) {
    app.use('/users', auth, usersRouter)
    app.use('/anuncio',auth, anunciosRouter)
    
    app.post('/login', login)
  }
}
