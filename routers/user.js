import express from 'express';
import jwt from 'jsonwebtoken';

import userControllers from '../controller/userControllers.js';

const router = express.Router();

router.get('/register', userControllers.register);
router.get('/log-in', userControllers.logIn);
router.get('/log-out', userControllers.logOut);

export default router;
