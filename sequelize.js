const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql', // Altere para o banco de dados que você está usando (mysql, postgres, sqlite, etc.)
  host: 'localhost', // Altere para o seu host
  username: 'root',
  password: '',
  database: 'lista_de_tarefas',
});

module.exports = sequelize;