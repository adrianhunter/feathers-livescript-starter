'use strict'
authentication = require('./authentication')
user = require('./user')
mongoose = require('mongoose')

module.exports = !->
  app = this
  mongoose.connect app.get 'mongodb'
  mongoose.Promise = global.Promise
  app.configure authentication
  app.configure user
