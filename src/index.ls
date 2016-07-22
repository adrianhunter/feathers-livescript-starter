app = require('./app')
port = app.get('port')
server = app.listen(port)




server.on 'listening', -> console.log 'server started'
