const { sign, verify } = require('jsonwebtoken');
const { compare } = require('bcryptjs');
const { NotAuthError } = require('./errors');
require('dotenv').config();

const KEY = process.env.JWT_KEY;

function createJSONToken(email) {
  return sign({ email }, KEY, { expiresIn: '1h' });
}

function validateJSONToken(token) {
  return verify(token, KEY);
}

function isValidPassword(password, storedPassword) {
  return compare(password, storedPassword);
}

function checkAuthMiddleware(req, res, next) {
  if (req.method === 'OPTIONS')
    return next();

  if (!req.headers.authorization)
    return next(new NotAuthError('Not authenticated.'));

  const authFragments = req.headers.authorization.split(' ');

  if (authFragments.length !== 2)
    return next(new NotAuthError('Not authenticated.'));

  const authToken = authFragments[1];
  try {
    req.token = validateJSONToken(authToken);
  } catch (error) {
    return next(new NotAuthError('Not authenticated.'));
  }

  next();
}

exports.createJSONToken = createJSONToken;
exports.validateJSONToken = validateJSONToken;
exports.isValidPassword = isValidPassword;
exports.checkAuth = checkAuthMiddleware;
