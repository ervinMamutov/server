const validatePassword = (password) => {
  const pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  return pattern.test(password) ? true : false;
};

export default validatePassword;
