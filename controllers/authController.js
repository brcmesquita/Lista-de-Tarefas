const jwt = require('jsonwebtoken');

// Função para gerar token JWT
function generateToken(user) {
  return jwt.sign({ userId: user.id}, 'secreto', { expiresIn: '1h'});
}

module.exports = {
  generateToken,
}