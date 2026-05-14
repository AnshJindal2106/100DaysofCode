import { Request, Response } from 'express';
import { prisma } from '../config/db.js';
import { io } from '../sockets/index.js';
export const addBallEvent = async (req: Request, res: Response) => {
  const event = await prisma.ballEvent.create({ data: req.body });
  io.to(`match:${req.body.matchId}`).emit('ball:event', event);
  res.status(201).json(event);
};
