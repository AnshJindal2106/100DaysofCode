import { Server } from 'socket.io';
export let io: Server;
export const initSocket = (httpServer: any) => {
  io = new Server(httpServer, { cors: { origin: '*' } });
  io.on('connection', (socket) => {
    socket.on('join:match', (matchId: string) => socket.join(`match:${matchId}`));
  });
  return io;
};
