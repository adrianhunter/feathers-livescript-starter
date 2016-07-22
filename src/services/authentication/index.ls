authentication = require('feathers-authentication')
FacebookStrategy = require('passport-facebook').Strategy
FacebookTokenStrategy = require('passport-facebook-token')
GoogleStrategy = require('passport-google-oauth20').Strategy
GoogleTokenStrategy = require('passport-google-token').Strategy

module.exports = !->
  app = this
  config = app.get 'auth'
  config.facebook.strategy = FacebookStrategy
  config.facebook.tokenStrategy = FacebookTokenStrategy
  config.google.strategy = GoogleStrategy
  config.google.tokenStrategy = GoogleTokenStrategy
  app.set 'auth', config
  app.configure authentication config