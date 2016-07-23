m = require 'mithril'

const Card = {}

Card.controller = (args)->


Card.view = (ctrl, args)->
	m("div.demo-card-square.mdl-card.mdl-shadow--2dp", [
		m("div.mdl-card__title.mdl-card--expand", [
			m("h2.mdl-card__title-text", 'update')
		])
		m("div.mdl-card__supporting-text", 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.'),
			m("div.mdl-card__actions.mdl-card--border", [
				m("a.mdl-button.mdl-button--colored.mdl-js-button.mdl-js-ripple-effect", 'view updates')
			])
	])

module.exports = Card
