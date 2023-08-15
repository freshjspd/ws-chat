const http = require('http');
// 1
const { Server } = require('socket.io');

const PORT = process.env.PORT || 5000;

const httpServer = http.createServer(() => {});

// 2
const io = new Server(httpServer, {});

// io.on('event' ()=>{}) ~ btn.addEventListener('click',()=>{}) - подписка на событие
// io.emit('event', payload) ~ dispatch(createUserThunk(newUser)) - генерация события - для всех

io.on('connection', socket => {
  io.emit('EVENT_FOR_ALL', 'Hello for everyone from server)');
});

httpServer.listen(PORT, () =>
  console.log(`Server is listening http://localhost:${PORT}`)
);
