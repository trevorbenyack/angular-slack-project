const app = require('express')();
const socketio = require('socketio-server');

const expressServer = app.listen(9000);
const io = socketio(expressServer, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

io.on('connect', (socket) => {
    console.log(`${socket.id} has connected!`);
})


