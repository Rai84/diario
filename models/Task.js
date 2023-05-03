const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Task = db.define('Task', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data_inicio: {
    type: DataTypes.DATE,
  },
  data_fim: {
    type: DataTypes.DATE,
  },
  descricao: {
    type: DataTypes.STRING,
  },
  done: {
    type: DataTypes.BOOLEAN,
  },
})

module.exports = Task
