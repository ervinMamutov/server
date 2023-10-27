import express, { json } from 'express';
import dotenv from 'dotenv';

import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import cors from 'cors';

import userRouter from './routers/user.js';
import productRouter from './routers/product.js';

import verifyToken from './middleware/verifyToken.js';
import logger from './middleware/logger.js';

// env configuring
dotenv.config();
const PORT = process.env.PORT;

// express initialization
const app = express();

// cors
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

// body parser
app.use(json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// middleware
app.use(logger);

// use.router
app.use(userRouter);
app.use(productRouter);

// verify token
app.use(verifyToken);

// handle 404
app.use('*', (req, res) => {
  res.status(404).json({ ok: false, massage: 'Page not found' });
});

// listener
app.listen(PORT, () => {
  console.log(`Server is already running to port ${PORT}`);
});
