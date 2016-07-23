app = require('server/app')
port = app.get('port')
global.window = {}
server = app.listen(port)
server.on 'listening', -> console.log 'server started'
