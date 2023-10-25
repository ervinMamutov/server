import express, { json } from 'express';
import dotenv from 'dotenv';

import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';

// env configuring
dotenv.config();
const PORT = process.env.PORT;

// express initialization
const app = express();

// body parser
app.use(json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// use.router

// handle 404
app.use('*', (req, res) => {
  res.status(404).json({ ok: false, massage: 'Page not found' });
});

// listener
app.listen(PORT, () => {
  console.log(`Server is already running to port ${PORT}`);
});
