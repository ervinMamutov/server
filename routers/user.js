import express from 'express';
import jwt from 'jsonwebtoken';

import userControllers from '../controller/userControllers.js';

const router = express.Router();

router.post('/register', userControllers.register);
router.post('/log-in', userControllers.logIn);
router.post('/log-out', userControllers.logOut);

export default router;
