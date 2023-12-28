const jwt = require('jsonwebtoken');

// Middleware para verificar o token JWT
function authMiddleware(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }

  try {
    const decoded = jwt.verify(token, 'secreto');
    req.user = decoded; // adicione o usuário decodificado ao objeto de solicitação
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido' });
  }
}

module.exports = authMiddleware;