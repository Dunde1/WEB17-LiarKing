import { Server } from 'socket.io';
import lobbyRoom from './socket/lobbyRoom';
import gameRoomChat from './socket/gameRoomChat';
import gameRoom from './socket/gameRoom';
import gameRoomTalk from './socket/gameRoomTalk';

const socketUtil = (io: Server) => {
  io.on('connection', (socket) => {
    console.log('connect id:', socket.id);

    lobbyRoom(socket, io);
    gameRoomChat(socket, io);
    gameRoom(socket, io);
    gameRoomTalk(socket, io);
  });
};

export default socketUtil;
