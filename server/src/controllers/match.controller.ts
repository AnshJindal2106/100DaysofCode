import { Request, Response } from 'express';
import { prisma } from '../config/db.js';
import { redis } from '../config/redis.js';
export const listMatches = async (_: Request, res: Response) => {
  const cacheKey = 'matches:list';
  const cached = await redis.get(cacheKey);
  if (cached) return res.json(JSON.parse(cached));
  const matches = await prisma.match.findMany({ include: { homeTeam: true, awayTeam: true }, orderBy: { startTime: 'desc' } });
  await redis.set(cacheKey, JSON.stringify(matches), 'EX', 30);
  res.json(matches);
};
export const getLiveMatch = async (req: Request, res: Response) => {
  const match = await prisma.match.findUnique({ where: { id: req.params.id }, include: { commentary: { orderBy: { createdAt: 'desc' } }, innings: { include: { balls: true } }, homeTeam: true, awayTeam: true } });
  if (!match) return res.status(404).json({ message: 'Not found' });
  res.json(match);
};
