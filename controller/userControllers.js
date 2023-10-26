import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import User from '../models/User.js';

const userControllers = {
  register: (req, res) => {
    const { email, password } = req.body;
  },
  logIn: (req, res) => {},
  logOut: (req, res) => {}
};

export default userControllers;
