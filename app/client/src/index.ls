m = require \mithril
Home = require \client/views/home

m.route.mode = 'pathname'


m.route document.body, "/",
    "/": Home
