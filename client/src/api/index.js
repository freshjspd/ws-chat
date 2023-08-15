import { io } from 'socket.io-client';

// генерируем событие 'connection' на сервере
const socket = io('http://localhost:5000');

// socket.on('event', (payload) => {}); - подписка на событие
// socket.emit('event', payload) - генерация события (на сервер)

socket.on('EVENT_FOR_ALL', payload => {
  console.log('payload :>> ', payload);
});

socket.on('EVENT_FOR_SELF', payload => {
  console.log('payload for self:>> ', payload);
});

socket.on('EVENT_FOR_OTHER', payload => {
  console.log('payload for other:>> ', payload);
});
