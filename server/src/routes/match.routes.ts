import { Router } from 'express';
import { getLiveMatch, listMatches } from '../controllers/match.controller.js';
export const matchRouter = Router();
matchRouter.get('/', listMatches);
matchRouter.get('/:id/live', getLiveMatch);
