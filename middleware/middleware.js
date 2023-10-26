import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  const token = res.cookies.token;
  if (token) {
    jwt.verify('token', process.env.SECRET_TOKEN_KEY, (err, data) => {
      if (err) {
        res.status(498).json({ ok: false, message: 'token is not valid' });
      } else {
        next();
      }
    });
  } else {
    res.status(498).json({ ok: false, message: 'token is not valid' });
  }
};

export default verifyToken;
