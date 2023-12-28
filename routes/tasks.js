const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // Importe o controlador de autenticação

// Rota para login (autenticação)
router.post(('/login', (req, res) => {
  // Implemente a lógica de autenticação
  // Se a autenticação for bem-sucedida, gere um token
  const token = authController.generateToken({ id: 1}); // Substitua com a lógica de autenticação real

  res.json({ token });
}));

// Demais rotas


// Defina suas rotas aqui
router.get('/', (req, res) => {
  // Implemente a lógica para obter e enviar tarefas
  res.send('Lista de Tarefas');
});

// Rota para adicionar tarefas
router.post('/', (req, res) => {
  // Implemente a lógica para adicionar tarefas
  res.send('Tarefa adicionada com sucesso');
})

// Rota para atualizar tarefas
router.put('/:id', (req,res) => {
  // Implemente a lógica para atualizar tarefas
  res.send('Tarefa com ID ${req.params.id} atualziada');
});

// Rota para excluir tarefas
router.delete('/:id', (req, res) => {
  // Implemente a lógica para excluir tarefas
  res.send('Tarefa com ID ${req.params.id} excluída');
});



// Este module.exports deve ficar por último no arquivo
module.exports = router;