import express from 'express';
import handleAI from '../controllers/ai.controller.js';
import { handleAISummary } from '../controllers/ai.controller.js';

const airoute = express.Router();
airoute.post('/title', handleAI)
airoute.post('/summary', handleAISummary)
export default airoute