import { Request, Response } from 'express';
import { prisma } from '../config/db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';
export const signup = async (req: Request, res: Response) => {
  const hash = await bcrypt.hash(req.body.password, 10);
  const user = await prisma.user.create({ data: { email: req.body.email, name: req.body.name, passwordHash: hash } });
  res.status(201).json(user);
};
export const login = async (req: Request, res: Response) => {
  const user = await prisma.user.findUnique({ where: { email: req.body.email } });
  if (!user || !user.passwordHash || !(await bcrypt.compare(req.body.password, user.passwordHash))) return res.status(401).json({ message: 'Invalid credentials' });
  const token = jwt.sign({ userId: user.id, role: user.role }, env.jwtSecret, { expiresIn: '7d' });
  res.json({ token, user });
};
