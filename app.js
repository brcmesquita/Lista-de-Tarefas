const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./sequelize');
const tasksRouter = require('./routes/tasks');
const authMiddleware = require('./middlewares/authMiddleware'); // middleware de autenticação
const User = require('./models/User'); // Importe o modelo User
const Task = require('./models/Tasks'); // Importe o modelo Task

const app = express();
const PORT = process.env.PORT || 8008;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: true }));

app.use(express.static('public'));

// Use as rotas relacionadas às tarefas
// Use o middleware de autenticação para proteger as rotas
app.use('/tasks', authMiddleware, tasksRouter);

// Sincronize os modelos com o banco de dados
sequelize.sync({ force: false })
  .then(() => {
    console.log('Banco de dados sincronizado.');
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Erro ao sincronizar banco de dados:', error);
  });


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})

