import bcrypt from 'bcryptjs';

const hashingPassword = (passwords) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(passwords, salt);
};

export default hashingPassword;
