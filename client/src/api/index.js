import { io } from 'socket.io-client';

// генерируем событие 'connection' на сервере
const socket = io('http://localhost:5000');
