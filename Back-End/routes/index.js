
const express = require('express')

const usersRouter = require('./internal/users')
const anunciosRouter = require('./internal/anuncio')

const anunciosHRouter = require('./internal/anunciosHome')
const detalhesRouter = require('./internal/anunciosDetails')

const tipoRouter = require('./internal/tipo')
const categoriaRouter = require('./internal/categoria')

const statusRouter = require('./internal/status')
const localizacaoRouter = require('./internal/localizacao')
const ultimosRouter = require('./internal/ultimos')

const perdidosDRouter = require('./internal/perdidosD')
const achadosDRouter = require('./internal/achadosD')

const achadosRouter = require('./internal/achados')
const perdidosRouter = require('./internal/perdidos')

const login = require('./public/login')
const path = require('path')

module.exports = {
  register(app) {

    app.use('/uploads', express.static(path.join('uploads')))

    app.use('/anuncios', anunciosHRouter)
    app.use('/achados', achadosRouter)
    app.use('/perdidosD', perdidosDRouter)
    app.use('/achadosD', achadosDRouter)
    app.use('/perdidos', perdidosRouter) 
    app.use('/users', usersRouter)
    app.use('/anuncio', anunciosRouter)
    app.use('/ultimos', ultimosRouter)
    app.use('/tipo',tipoRouter)
    app.use('/status', statusRouter)
    app.use('/detalhes', detalhesRouter)
    app.use('/categoria', categoriaRouter)
    app.use('/localizacao', localizacaoRouter)
    app.post('/login', login)
  }
}
