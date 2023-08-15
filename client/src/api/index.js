import { io } from 'socket.io-client';

// генерируем событие 'connection' на сервере
const socket = io('http://localhost:5000');

socket.on('EVENT_FOR_ALL', payload => {
  console.log('payload :>> ', payload);
});

socket.on('EVENT_FOR_SELF', payload => {
  console.log('payload for self:>> ', payload);
});

socket.on('EVENT_FOR_OTHER', payload => {
  console.log('payload for other:>> ', payload);
});

socket.emit('EVENT_FROM_SOCKET', 'Hello from client');

socket.on('SOME_EVENT_ON_SOME_SOCKET', payload => {
  console.log('payload :>> ', payload);
});
