const { Sequelize, DataTypes } = require("sequelize");

// Instancia conexion ala base de datos
const sequelize = new Sequelize(
  process.env.NAME_DB,
  process.env.USER_DB,
  process.env.PASS_DB,
  {
    host: process.env.HOST_DB,
    dialect:process.env.DIALECT_DB,
  }
);

module.exports = {
  sequelize,
  Sequelize,
  DataTypes,
};
