const { sequelize } = require("../../database");
const { DataTypes } = require("sequelize");

const PostsModel = sequelize.define("posts", {
  // Titulo:DataTypes.STRING,
  // Contenido: DataTypes.TEXT,

  Titulo: {
    type: DataTypes.STRING,
    validate: { notEmpty: true },
  },
  Contenido: {
    type: DataTypes.TEXT,
    validate: { notEmpty: true },
  },
  Autor: {
    type: DataTypes.STRING,
    validate: { notEmpty: true },
  },
  img: DataTypes.STRING,
});

module.exports = { PostsModel };
