const http = require('http');
// 1
const { Server } = require('socket.io');

const PORT = process.env.PORT || 5000;

const httpServer = http.createServer(() => {});

// 2
const io = new Server(httpServer, {
  cors: { origin: 'http://localhost:3000' },
});

// io.on('event' (payload)=>{}) ~ btn.addEventListener('click',()=>{})
//      - подписка на событие
// io.emit('event', payload) ~ dispatch(createUserThunk(newUser))
//      - генерация события - для всех клиентов
// socket.emit('event', payload)
//      - генерация события для себя
// socket.broadcast.emit('event', payload)
//      - генерация события всех кроме для себя

io.on('connection', socket => {
  console.log('Connection with socket are established');
  io.emit('EVENT_FOR_ALL', 'Hello for everyone from server)');
  socket.emit('EVENT_FOR_SELF', 'Hello, you connection is established');
  socket.broadcast.emit('EVENT_FOR_OTHER', 'New socket is connected');
});

httpServer.listen(PORT, () =>
  console.log(`Server is listening http://localhost:${PORT}`)
);
