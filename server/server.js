const path = require('path')
const express = require('express')
const socketIO = require('socket.io')
const http = require('http')

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {

    console.log('new user connected');

    socket.emit('newMessage', {
        text:' Welcome to the chat app'
    })

    socket.broadcast.emit('newMessage', {
        text: 'New user joined'
    })

    socket.on('createMessage', (message) => {

        io.emit('newMessage',{

            from:message.from,
            text:message.text,
            createdAt: new Date().getTime()

        })

      /* socket.broadcast.emit('newMessage',{

           from:message.from,
           text:message.text,
           createdAt: new Date().getTime()

       })*/

    })

    socket.on('disconnect',() => {
        console.log('client disconnected');
    })
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})