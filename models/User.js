import { v4 as newId } from 'uuid';

import users from '../data/users.js';

class User {
  constructor(email, password) {
    this.id = newId();
    this.name = email;
    this.password = password;
  }

  static getUserByEmail = (email) => {
    return users.filter((user) => user.email === email);
  };

  addUser() {
    return users.push(this);
  }
}

export default User;
