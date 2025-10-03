import express from 'express';
import { analyzeEssay } from '../controllers/clinicController.js';

const router = express.Router();

// POST /api/clinic/analyze-essay - Analyze essay for argumentative quality
router.post('/analyze-essay', analyzeEssay);

export default router;
