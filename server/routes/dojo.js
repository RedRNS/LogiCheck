import express from 'express';
import { getSparringChallenge, verifySparringAnswer } from '../controllers/dojoController.js';

const router = express.Router();

// GET /api/dojo/sparring-challenge - Get a new fallacy identification challenge
router.get('/sparring-challenge', getSparringChallenge);

// POST /api/dojo/verify-answer - Verify user's answer
router.post('/verify-answer', verifySparringAnswer);

export default router;
