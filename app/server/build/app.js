/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var app, port, server;
	app = __webpack_require__(1);
	port = app.get('port');
	global.window = {};
	server = app.listen(port);
	server.on('listening', function(){
	  return console.log('server started');
	});
	//# sourceMappingURL=/Users/adrianjager/dev/github/feathers-livescript-starter/app/node_modules/livescript-loader/index.js!/Users/adrianjager/dev/github/feathers-livescript-starter/app/server/src/index.ls.map


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path, serveStatic, favicon, compress, cors, feathers, configuration, hooks, rest, bodyParser, socketio, middleware, services, app;
	path = __webpack_require__(2);
	serveStatic = __webpack_require__(3)['static'];
	favicon = __webpack_require__(4);
	compress = __webpack_require__(5);
	cors = __webpack_require__(6);
	feathers = __webpack_require__(3);
	configuration = __webpack_require__(7);
	hooks = __webpack_require__(8);
	rest = __webpack_require__(9);
	bodyParser = __webpack_require__(10);
	socketio = __webpack_require__(11);
	middleware = __webpack_require__(12);
	services = __webpack_require__(27);
	app = feathers();
	app.configure(configuration(path.join(__dirname, '..')));
	app.use(compress()).options('*', cors()).use(cors()).use(favicon(path.join(app.get('public'), 'favicon.ico'))).use(bodyParser.json()).use(bodyParser.urlencoded({
	  extended: true
	})).configure(hooks()).configure(rest()).configure(socketio()).configure(services).configure(middleware);
	module.exports = app;
	//# sourceMappingURL=/Users/adrianjager/dev/github/feathers-livescript-starter/app/server/node_modules/livescript-loader/index.js!/Users/adrianjager/dev/github/feathers-livescript-starter/app/server/src/app.ls.map


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("feathers");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("serve-favicon");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("cors");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("feathers-configuration");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("feathers-hooks");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("feathers-rest");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("feathers-socketio");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var handler, notFound, logger, ssr;
	handler = __webpack_require__(13);
	notFound = __webpack_require__(14);
	logger = __webpack_require__(16);
	ssr = __webpack_require__(18);
	module.exports = function(){
	  var app;
	  app = this;
	  app.use(ssr(app));
	  app.use(notFound());
	  app.use(logger(app));
	  app.use(handler());
	};
	//# sourceMappingURL=/Users/adrianjager/dev/github/feathers-livescript-starter/app/server/node_modules/livescript-loader/index.js!/Users/adrianjager/dev/github/feathers-livescript-starter/app/server/src/middleware/index.ls.map


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("feathers-errors/handler");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var errors;
	errors = __webpack_require__(15);
	module.exports = function(){
	  return function(req, res, next){
	    next(new (errors.NotFound)('Page not found'));
	  };
	};
	//# sourceMappingURL=/Users/adrianjager/dev/github/feathers-livescript-starter/app/server/node_modules/livescript-loader/index.js!/Users/adrianjager/dev/github/feathers-livescript-starter/app/server/src/middleware/not-found-handler.ls.map


/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("feathers-errors");

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var winston;
	winston = __webpack_require__(17);
	module.exports = function(app){
	  app.logger = winston;
	  return function(error, req, res, next){
	    var message;
	    if (error) {
	      message = "error";
	      if (error.code === 404) {
	        winston.info(message);
	      } else {
	        winston.error(message);
	        winston.info(error.stack);
	      }
	      next(error);
	    }
	  };
	};
	//# sourceMappingURL=/Users/adrianjager/dev/github/feathers-livescript-starter/app/server/node_modules/livescript-loader/index.js!/Users/adrianjager/dev/github/feathers-livescript-starter/app/server/src/middleware/logger.ls.map


/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("winston");

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var routes, _, m, render;
	routes = __webpack_require__(19);
	_ = __webpack_require__(25);
	m = __webpack_require__(20);
	render = __webpack_require__(26);
	render(m('span', 'huhu'));
	module.exports = function(app){
	  return function(req, res, next){
	    var route;
	    console.log(req.url);
	    console.log(routes);
	    route = _.find(routes, function(route){
	      return route.path === req.url;
	    });
	    if (route) {
	      res.write(HTML(render(route.component)));
	      res.end();
	    } else {
	      next();
	    }
	  };
	};
	function HTML(component){
	  return "<html>\n	<head>\n		<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">\n		<link rel=\"stylesheet\" href=\"https://code.getmdl.io/1.1.3/material.indigo-pink.min.css\">\n		<meta name=\"fragment\" content=\"!\">\n		<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n	    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n	    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0\">\n	    <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\">\n	</head>\n\n	<body>\n		" + component + "\n		<script src=\"/app.js\"></script>\n	</body>\n</html>";
	}
	//# sourceMappingURL=/Users/adrianjager/dev/github/feathers-livescript-starter/app/server/node_modules/livescript-loader/index.js!/Users/adrianjager/dev/github/feathers-livescript-starter/app/server/src/middleware/ssr.ls.map


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var m, routes;
	m = __webpack_require__(20);
	routes = [{
	  name: 'Home',
	  path: '/',
	  component: __webpack_require__(21)
	}];
	module.exports = routes;
	//# sourceMappingURL=/Users/adrianjager/dev/github/feathers-livescript-starter/app/server/node_modules/livescript-loader/index.js!/Users/adrianjager/dev/github/feathers-livescript-starter/app/client/src/routes.ls.map


/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("mithril");

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var m, Card, Header, Home;
	m = __webpack_require__(20);
	Card = __webpack_require__(22);
	Header = __webpack_require__(23);
	Home = {};
	Home.view = function(){
	  return m('.demo-layout-transparent.mdl-layout.mdl-js-layout.mdl-layout--fixed-header', [Header, m.component(Card)]);
	};
	module.exports = Home;
	//# sourceMappingURL=/Users/adrianjager/dev/github/feathers-livescript-starter/app/client/node_modules/livescript-loader/index.js!/Users/adrianjager/dev/github/feathers-livescript-starter/app/client/src/views/home.ls.map


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var m, Card;
	m = __webpack_require__(20);
	Card = {};
	Card.controller = function(args){};
	Card.view = function(ctrl, args){
	  return m("div.demo-card-square.mdl-card.mdl-shadow--2dp", [m("div.mdl-card__title.mdl-card--expand", [m("h2.mdl-card__title-text", 'update')]), m("div.mdl-card__supporting-text", 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.'), m("div.mdl-card__actions.mdl-card--border", [m("a.mdl-button.mdl-button--colored.mdl-js-button.mdl-js-ripple-effect", 'view updates')])]);
	};
	module.exports = Card;
	//# sourceMappingURL=/Users/adrianjager/dev/github/feathers-livescript-starter/app/client/node_modules/livescript-loader/index.js!/Users/adrianjager/dev/github/feathers-livescript-starter/app/client/src/mdl/card.ls.map


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var m, Header, HyperHeader;
	m = __webpack_require__(20);
	Header = __webpack_require__(24);
	HyperHeader = m.component(Header, {
	  title: 'hallo'
	});
	module.exports = HyperHeader;
	//# sourceMappingURL=/Users/adrianjager/dev/github/feathers-livescript-starter/app/client/node_modules/livescript-loader/index.js!/Users/adrianjager/dev/github/feathers-livescript-starter/app/client/src/components/header.ls.map


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var m, Header;
	m = __webpack_require__(20);
	Header = {};
	Header.controller = function(args){};
	Header.view = function(ctrl, args){
	  console.log(ctrl, args);
	  return m('header.mdl-layout__header', [m('.mdl-layout__header-row', [m('span.mdl-layout-title', 'Title'), m('.mdl-layout-spacer'), m('nav.mdl-navigation', [m('a.mdl-navigation__link[href=\'\']', 'Link'), m('a.mdl-navigation__link[href=\'\']', 'Link'), m('a.mdl-navigation__link[href=\'\']', 'Link'), m('a.mdl-navigation__link[href=\'\']', 'Link')])])]);
	};
	module.exports = Header;
	//# sourceMappingURL=/Users/adrianjager/dev/github/feathers-livescript-starter/app/client/node_modules/livescript-loader/index.js!/Users/adrianjager/dev/github/feathers-livescript-starter/app/client/src/mdl/header.ls.map


/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("underscore");

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("mithril-node-render");

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var authentication, user, mongoose;
	authentication = __webpack_require__(28);
	user = __webpack_require__(34);
	mongoose = __webpack_require__(37);
	module.exports = function(){
	  var app;
	  app = this;
	  mongoose.connect(app.get('mongodb'));
	  mongoose.Promise = global.Promise;
	  app.configure(authentication);
	  app.configure(user);
	};
	//# sourceMappingURL=/Users/adrianjager/dev/github/feathers-livescript-starter/app/server/node_modules/livescript-loader/index.js!/Users/adrianjager/dev/github/feathers-livescript-starter/app/server/src/services/index.ls.map


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var authentication, FacebookStrategy, FacebookTokenStrategy, GoogleStrategy, GoogleTokenStrategy;
	authentication = __webpack_require__(29);
	FacebookStrategy = __webpack_require__(30).Strategy;
	FacebookTokenStrategy = __webpack_require__(31);
	GoogleStrategy = __webpack_require__(32).Strategy;
	GoogleTokenStrategy = __webpack_require__(33).Strategy;
	module.exports = function(){
	  var app, config;
	  app = this;
	  config = app.get('auth');
	  config.facebook.strategy = FacebookStrategy;
	  config.facebook.tokenStrategy = FacebookTokenStrategy;
	  config.google.strategy = GoogleStrategy;
	  config.google.tokenStrategy = GoogleTokenStrategy;
	  app.set('auth', config);
	  app.configure(authentication(config));
	};
	//# sourceMappingURL=/Users/adrianjager/dev/github/feathers-livescript-starter/app/server/node_modules/livescript-loader/index.js!/Users/adrianjager/dev/github/feathers-livescript-starter/app/server/src/services/authentication/index.ls.map


/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = require("feathers-authentication");

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = require("passport-facebook");

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = require("passport-facebook-token");

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = require("passport-google-oauth20");

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = require("passport-google-token");

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var service, user, hooks;
	service = __webpack_require__(35);
	user = __webpack_require__(36);
	hooks = __webpack_require__(38);
	module.exports = function(){
	  var app, options, userService;
	  app = this;
	  options = {
	    Model: user,
	    paginate: {
	      'default': 5,
	      max: 25
	    }
	  };
	  app.use('/users', service(options));
	  userService = app.service('/users');
	  userService.before(hooks.before);
	  userService.after(hooks.after);
	};
	//# sourceMappingURL=/Users/adrianjager/dev/github/feathers-livescript-starter/app/server/node_modules/livescript-loader/index.js!/Users/adrianjager/dev/github/feathers-livescript-starter/app/server/src/services/user/index.ls.map


/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = require("feathers-mongoose");

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var mongoose, Schema, userSchema, userModel;
	mongoose = __webpack_require__(37);
	Schema = mongoose.Schema;
	userSchema = new Schema({
	  facebookId: {
	    type: String
	  },
	  facebook: {
	    type: Schema.Types.Mixed
	  },
	  googleId: {
	    type: String
	  },
	  google: {
	    type: Schema.Types.Mixed
	  },
	  email: {
	    type: String,
	    required: true,
	    unique: true
	  },
	  password: {
	    type: String,
	    required: true
	  },
	  createdAt: {
	    type: Date,
	    'default': Date.now
	  },
	  updatedAt: {
	    type: Date,
	    'default': Date.now
	  }
	});
	userModel = mongoose.model('user', userSchema);
	module.exports = userModel;
	//# sourceMappingURL=/Users/adrianjager/dev/github/feathers-livescript-starter/app/server/node_modules/livescript-loader/index.js!/Users/adrianjager/dev/github/feathers-livescript-starter/app/server/src/services/user/user-model.ls.map


/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = require("mongoose");

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var globalHooks, hooks, auth;
	globalHooks = __webpack_require__(39);
	hooks = __webpack_require__(8);
	auth = __webpack_require__(29).hooks;
	exports.before = {
	  all: [],
	  find: [auth.verifyToken(), auth.populateUser(), auth.restrictToAuthenticated()],
	  get: [
	    auth.verifyToken(), auth.populateUser(), auth.restrictToAuthenticated(), auth.restrictToOwner({
	      ownerField: '_id'
	    })
	  ],
	  create: [auth.hashPassword()],
	  update: [
	    auth.verifyToken(), auth.populateUser(), auth.restrictToAuthenticated(), auth.restrictToOwner({
	      ownerField: '_id'
	    })
	  ],
	  patch: [
	    auth.verifyToken(), auth.populateUser(), auth.restrictToAuthenticated(), auth.restrictToOwner({
	      ownerField: '_id'
	    })
	  ],
	  remove: [
	    auth.verifyToken(), auth.populateUser(), auth.restrictToAuthenticated(), auth.restrictToOwner({
	      ownerField: '_id'
	    })
	  ]
	};
	exports.after = {
	  all: [hooks.remove('password')],
	  find: [],
	  get: [],
	  create: [],
	  update: [],
	  patch: [],
	  remove: []
	};
	//# sourceMappingURL=/Users/adrianjager/dev/github/feathers-livescript-starter/app/server/node_modules/livescript-loader/index.js!/Users/adrianjager/dev/github/feathers-livescript-starter/app/server/src/services/user/hooks/index.ls.map


/***/ },
/* 39 */
/***/ function(module, exports) {

	exports.myHook = function(options){
	  return function(hook){
	    console.log('My custom global hook ran. Feathers is awesome!');
	  };
	};
	//# sourceMappingURL=/Users/adrianjager/dev/github/feathers-livescript-starter/app/server/node_modules/livescript-loader/index.js!/Users/adrianjager/dev/github/feathers-livescript-starter/app/server/src/hooks/index.ls.map


/***/ }
/******/ ]);