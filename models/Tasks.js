const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Task = sequelize.define('Task', {
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  done: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
});

module.exports = Task;