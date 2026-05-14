import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';
export interface AuthRequest extends Request { user?: { userId: string; role: string }; }
export const requireAuth = (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ message: 'Unauthorized' });
  try { req.user = jwt.verify(token, env.jwtSecret) as any; next(); } catch { return res.status(401).json({ message: 'Invalid token' }); }
};
export const requireAdmin = (req: AuthRequest, res: Response, next: NextFunction) => req.user?.role === 'ADMIN' ? next() : res.status(403).json({ message: 'Forbidden' });
