function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidText(text, minLength) {
  return text.trim().length >= minLength;
}

exports.isValidEmail = isValidEmail;
exports.isValidText = isValidText;