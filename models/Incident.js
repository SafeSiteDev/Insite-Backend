const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

const Incident = sequelize.define('Incident', {
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'open',
  },
}, { timestamps: true });

module.exports = Incident;
