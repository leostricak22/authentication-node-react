const { hash } = require('bcryptjs');
const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');
const dbFunctions = require('../util/database/util');

async function add(data) {
  const hashedPw = await hash(data.password, 12);
  const user = await dbFunctions.query('INSERT INTO users (email, password) VALUES (?, ?)', [data.email, hashedPw]);

  return {
    id: user.insertId,
    email: data.email
  };
}

async function get(email) {
  const user = await dbFunctions.query('SELECT * FROM users WHERE email = ?', [email]);

  if (!user || user.length === 0)
    throw new NotFoundError('Could not find user for email ' + email);

  return user[0];
}

exports.add = add;
exports.get = get;
