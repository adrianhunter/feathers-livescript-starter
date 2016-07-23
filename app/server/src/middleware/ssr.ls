const routes = require 'client/routes'
const _ = require 'underscore'
const m = require('mithril')
const render = require('mithril-node-render')

render(m('span', 'huhu'))

module.exports = (app) ->
  # Add a logger to our app object for convenience
	(req, res, next)!->
		console.log req.url
		console.log routes
		route = _.find routes,(route)-> route.path is req.url
		if route
			res.write HTML render route.component
			res.end!
		else
			next!



function HTML(component)
	"""
	<html>
		<head>
			<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
			<link rel="stylesheet" href="https://code.getmdl.io/1.1.3/material.indigo-pink.min.css">
			<meta name="fragment" content="!">
			<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		    <meta http-equiv="X-UA-Compatible" content="IE=edge">
		    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
		    <meta name="apple-mobile-web-app-status-bar-style" content="black">
		</head>

		<body>
			#{component}
			<script src="/app.js"></script>
		</body>
	</html>
	"""
