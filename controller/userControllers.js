import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import User from '../models/User.js';
import validateEmail from '../utils/validateEmail.js';
import validatePassword from '../utils/validatePassword.js';
import matchPasswords from '../utils/matchPasswords.js';
import hashingPassword from '../utils/hashingPassword.js';

const userControllers = {
  register: (req, res) => {
    const { email, password, rePassword } = req.body;
    const emailExist = User.getUserByEmail(email);
    if (!emailExist) {
      const isValidEmail = validateEmail(email);
      const isValidPassword = validatePassword(password);
      const isMatchPasswords = matchPasswords(password, rePassword);
      if (isValidEmail && isValidPassword && isMatchPasswords) {
        const hashPassword = hashingPassword(password);
        const newUser = new User(email, hashPassword);
        newUser.addUser();
        res.status(201).json({
          ok: true,
          message: `A new user with ${email} was successfully create`
        });
      } else {
        res
          .status(400)
          .json({ ok: false, message: `Incorrect email or password entry` });
      }
    } else {
      res
        .status(400)
        .json({ ok: false, message: `This ${email} already exist` });
    }
  },
  logIn: (req, res) => {
    const { email, password } = req.body;
    const emailExist = User.getUserByEmail(email);
    if (emailExist) {
      bcrypt.compare(password, emailExist.password, (err, isValid) => {
        if (isValid) {
          const token = jwt.sign(
            { user: emailExist },
            process.env.SECRET_TOKEN_KEY
          );
          res.cookie('id', emailExist.id);
          res.cookie('token', token, { httpOnly: true });
          res.status(200).json({ ok: true, token: token, id: emailExist.id });
        }
      });
    } else {
      res.status(409).json({
        ok: false,
        message: 'The email or password incorrect. Try again'
      });
    }
  },
  logOut: (req, res) => {
    res.clearCookie('id');
    res.clearCookie('token');
    res.status(200).json({
      ok: true,
      message: `User ${emailExist.email} has terminated the session`
    });
  }
};

export default userControllers;
