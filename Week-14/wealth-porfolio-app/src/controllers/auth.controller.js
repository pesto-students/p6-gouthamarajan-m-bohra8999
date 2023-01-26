const bcrypt = require('bcryptjs');
const User = require('../models/user.schema');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

const register = async (name, username, plainTextPassword) => {
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
      name,
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

const login = async (username, password) => {
  try {
    const user = await User.findOne({ username }).lean();

    if (!user) {
      throw Error('Invalid username/password');
    }

    if (await bcrypt.compare(password, user.password)) {
      // the username, password combination is successful

      const token = jwt.sign(
        {
          id: user._id,
          username: user.username,
        },
        JWT_SECRET
      );

      return token;
    }
    throw Error('Invalid username/password');
  } catch (error) {
    throw Error(error);
  }
};

module.exports = {
  register,
  login,
};
