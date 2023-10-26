import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  console.log(token);
  if (token) {
    jwt.verify('token', process.env.SECRET_TOKEN_KEY, (err, data) => {
      if (err) {
        res.status(498).json({ ok: false, message: 'token is not valid 1' });
      } else {
        next();
      }
    });
  } else {
    res.status(498).json({ ok: false, message: 'token is not valid 2' });
  }
};

export default verifyToken;
