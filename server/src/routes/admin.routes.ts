import { Router } from 'express';
import { addBallEvent } from '../controllers/admin.controller.js';
import { requireAdmin, requireAuth } from '../middleware/auth.js';
export const adminRouter = Router();
adminRouter.post('/ball-event', requireAuth, requireAdmin, addBallEvent);
