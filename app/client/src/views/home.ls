m = require \mithril
const Card = require 'client/mdl/card'
const Header = require 'client/components/header'
const Home = {}

Home.view = ->
	m '.demo-layout-transparent.mdl-layout.mdl-js-layout.mdl-layout--fixed-header', [
		Header
		m.component Card
	]

module.exports = Home
