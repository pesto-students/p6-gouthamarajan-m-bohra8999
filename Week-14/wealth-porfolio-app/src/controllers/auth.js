const bcrypt = require('bcryptjs');
const User = require('../models/user.schema');

const register = async (username, plainTextPassword) => {
  if (!username || typeof username !== 'string') {
    throw Error('Invalid username');
  }

  if (!plainTextPassword || typeof plainTextPassword !== 'string') {
    throw Error('Invalid password');
  }

  if (plainTextPassword.length < 5) {
    throw Error('Password too small. Should be atleast 6 characters');
  }

  const password = await bcrypt.hash(plainTextPassword, 10);

  try {
    const response = await User.create({
      username,
      password,
    });

    console.log(username, password);

    console.log('User created successfully: ', response);
    return response;
  } catch (error) {
    if (error.code === 11000) {
      // duplicate key
      throw Error('Username already in use');
    }
    throw error;
  }
};

module.exports = {
  register,
};
