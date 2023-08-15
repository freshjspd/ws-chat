const http = require('http');

const { Server } = require('socket.io');

const PORT = process.env.PORT || 5000;

const httpServer = http.createServer(() => {});

const io = new Server(httpServer, {
  cors: { origin: 'http://localhost:3000' },
});

io.on('connection', socket => {
  console.log('Connection with socket are established');
  io.emit('EVENT_FOR_ALL', 'Hello for everyone from server)');
  socket.emit('EVENT_FOR_SELF', 'Hello, you connection is established');
  socket.broadcast.emit('EVENT_FOR_OTHER', 'New socket is connected');

  socket.on('EVENT_FROM_SOCKET', payload => {
    console.log('payload :>> ', payload);
    socket.broadcast.emit('SOME_EVENT_ON_SOME_SOCKET', 'Event on some socket');
  });
});

httpServer.listen(PORT, () =>
  console.log(`Server is listening http://localhost:${PORT}`)
);
