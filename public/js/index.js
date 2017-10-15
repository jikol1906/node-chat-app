var socket = io();

socket.on('connect', function()  {
   console.log('Connected to server')
})

socket.on('disconnect', function()  {
   console.log('disonnected from server')
})

socket.on('newMessage', function (message) {
    console.log(message)
})