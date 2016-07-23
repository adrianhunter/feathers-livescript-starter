handler = require 'feathers-errors/handler'
notFound = require './not-found-handler'
logger = require './logger'
ssr = require './ssr'

module.exports = !->
  # Add your custom middleware here. Remember, that
  # just like Express the order matters, so error
  # handling middleware should go last.
  app = this
  app.use ssr app
  app.use notFound!
  app.use logger app
  app.use handler!
