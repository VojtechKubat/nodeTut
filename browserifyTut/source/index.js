var WebSocketServer = require('ws').Server; 
wss = new WebSocketServer({port: 8080});

wss.on('connection', function(ws) {

    console.log('Client connected.\n'+wss.clients);

    ws.on('message', function(message) {
        console.log('received: %s', message);

        wss.clients.forEach(function (conn) {
            conn.send(message);
        });

        // ws.send('something... '+message);
    });
    
});
