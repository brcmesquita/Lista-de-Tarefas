// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');
const Task = require('./Tasks');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Associação com o modelo Task
User.hasMany(Task);
Task.belongsTo(User);

module.exports = User;
